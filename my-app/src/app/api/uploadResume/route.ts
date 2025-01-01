import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    console.log("Received form data entries:", Array.from(formData.entries()));
    
    const file = formData.get('resume') as File;
    const jobTitle = formData.get('jobTitle') as string;

    if (!file) {
      console.error("No file in request");
      return NextResponse.json(
        { error: "No file received." },
        { status: 400 }
      );
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64File = buffer.toString('base64');

    // Return the file data and metadata
    return NextResponse.json({
      fileName: file.name,
      fileType: file.type,
      fileSize: file.size,
      fileData: base64File
    });

  } catch (error) {
    console.error('Error processing file:', error);
    return NextResponse.json(
      { error: "Error processing file: " + (error as Error).message },
      { status: 500 }
    );
  }
} 