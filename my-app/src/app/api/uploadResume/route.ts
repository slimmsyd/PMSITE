import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    console.log("Received form data entries:", Array.from(formData.entries()));
    
    const file = formData.get('resume') as File;
    const jobTitle = formData.get('jobTitle') as string;

    console.log("File object:", {
      name: file?.name,
      type: file?.type,
      size: file?.size
    });
    console.log("Job title:", jobTitle);

    if (!file) {
      console.error("No file in request");
      return NextResponse.json(
        { error: "No file received." },
        { status: 400 }
      );
    }

    try {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Create a unique filename
      const timestamp = Date.now();
      const sanitizedJobTitle = jobTitle.replace(/[^a-zA-Z0-9]/g, '_');
      const filename = `${sanitizedJobTitle}_${timestamp}_${file.name}`;
      
      // Ensure uploads directory exists
      const uploadsDir = join(process.cwd(), 'public/uploads');
      if (!existsSync(uploadsDir)) {
        console.log("Creating uploads directory");
        await mkdir(uploadsDir, { recursive: true });
      }
      
      // Save to the public directory so it's accessible via URL
      const path = join(uploadsDir, filename);
      console.log("Writing file to:", path);
      await writeFile(path, buffer);
      
      const returnPath = `/uploads/${filename}`;
      console.log("Returning path:", returnPath);
      
      // Return the URL path that can be used to access the file
      return new Response(returnPath, {
        status: 200,
      });
    } catch (writeError) {
      console.error("Error writing file:", writeError);
      throw writeError;
    }

  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: "Error uploading file: " + (error as Error).message },
      { status: 500 }
    );
  }
} 