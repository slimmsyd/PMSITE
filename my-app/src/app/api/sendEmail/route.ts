import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { to, subject, content, isClientEmail, option , name, company, email, phone, message} = await request.json();
    
    console.log("Received email request:", { to, subject, contentLength: content?.length, isClientEmail });

    // Validate required fields
    if (!to || !subject || (!content && !isClientEmail)) {
      console.log("Validation failed:", {
        hasTo: !!to,
        hasSubject: !!subject,
        hasContent: !!content
      });
      return NextResponse.json(
        { error: 'Missing required fields: to, subject, and content are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(to)) {
      console.log("Invalid email format:", to);
      return NextResponse.json(
        { error: 'Invalid email address format' },
        { status: 400 }
      );
    }

    // .
  

    // Configure email transporter (update with your email service details)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    if (isClientEmail) {
      let emailContent = '';
      
      // Determine email content based on option
      switch (option) {
        case 'vendorSignUps':
          emailContent = `Greetings ${name || company},

Thank you for your interest in working with Preeminent Professional Services as a vendor. Please allow 24-48 hours for us to review and respond with next steps.

Please keep in mind there is no guarantee we have an opportunity for you at this time. But we will keep your information confidential & in our database for future opportunities.

Best Regards,
Preeminent Professional Services`;
          break;

        case 'workWithUs':
          emailContent = `Greetings ${name || company },

Thank you for your interest in working with Preeminent Professional Services as a partner. Please allow 24-48 hours for us to review and respond with next steps.

Please keep in mind there is no guarantee we have an opportunity for you at this time. But we will keep your information confidential & in our database for future opportunities.

Best Regards,
Preeminent Professional Services`;
          break;

        case 'careers':
          emailContent = `Greetings ${name || company },

Thank you for your interest in working with Preeminent Professional Services as a potential team member. Please allow 24-48 hours for us to review and respond with next steps.

Please keep in mind there is no guarantee we have an opportunity for you at this time. But we will keep your information confidential & in our database for future opportunities.

Best Regards,
Preeminent Professional Services`;
          break;

        default:
          emailContent = `Thank you for contacting Preeminent Professional Services. We will get back to you shortly.`;
      }

      // Send welcome email to client
      await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL || '',
        to: to,
        subject: `Thank you for your interest in ${
          option === 'vendorSignUps' ? 'becoming a vendor' :
          option === 'workWithUs' ? 'working with us' :
          option === 'careers' ? 'career opportunities' :
          'contacting us'
        }`,
        text: emailContent,
      });
    } else {
      // Send notification email to admin
      await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL || '',
        to: to,
        subject: subject,
        text: content,
      });
    }

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}