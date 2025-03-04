import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    // Simple keyword-based response system
    // In a production environment, you might want to use a more sophisticated NLP solution
    // or integrate with a service like OpenAI's API
    
    const lowerCaseMessage = message.toLowerCase();
    
    // Check for different types of queries and generate appropriate responses
    
    // Services related queries
    if (lowerCaseMessage.includes('services') || 
        lowerCaseMessage.includes('offer') || 
        lowerCaseMessage.includes('provide')) {
      return NextResponse.json({
        message: `Preeminent Professional Services offers a range of professional solutions:

• Professional/Technical Services: Property management, real estate development, industrial/commercial properties, and hot-spot discovery and evaluation.

• Commercial Cleaning/Environmental Services: Comprehensive cleaning solutions for commercial properties.

• Professional Events and Staffing: Temporary staffing for commercial and private/public events with minimal notice.

• EV Services: Turn-key services for the electrification of commercial fleets or individual/company vehicles.

Would you like more information about any specific service?`
      });
    }
    
    // Technical services queries
    if (lowerCaseMessage.includes('technical') || 
        lowerCaseMessage.includes('property management') || 
        lowerCaseMessage.includes('real estate')) {
      return NextResponse.json({
        message: `Our Professional/Technical Services include:

• Property Management solutions for commercial and residential properties
• Real Estate Development consulting and management
• Industrial and Commercial property services
• Hot-Spot Discovery and evaluation for optimal property investments

Our team of experts brings years of experience to ensure your property needs are met with the highest standards of professionalism.

Would you like to discuss your specific requirements with our team?`
      });
    }
    
    // Environmental services queries
    if (lowerCaseMessage.includes('cleaning') || 
        lowerCaseMessage.includes('environmental') || 
        lowerCaseMessage.includes('janitorial')) {
      return NextResponse.json({
        message: `Our Commercial Cleaning/Environmental Services provide comprehensive solutions for:

• Regular commercial cleaning and maintenance
• Deep cleaning and sanitization
• Specialized environmental services
• Customized cleaning programs for your specific facility

We use industry-leading techniques and environmentally friendly products to ensure your spaces are clean, safe, and healthy.

Would you like to schedule a consultation for your cleaning needs?`
      });
    }
    
    // Staffing queries
    if (lowerCaseMessage.includes('staffing') || 
        lowerCaseMessage.includes('events') || 
        lowerCaseMessage.includes('temporary')) {
      return NextResponse.json({
        message: `Our Professional Events and Staffing services provide:

• Temporary staffing for commercial events
• Personnel for private and public functions
• Vetted and background-checked staff
• Flexible scheduling with minimal notice required

Our staffing solutions ensure your events run smoothly with professional, reliable personnel.

Do you have an upcoming event that requires staffing support?`
      });
    }
    
    // EV services queries
    if (lowerCaseMessage.includes('ev') || 
        lowerCaseMessage.includes('electric') || 
        lowerCaseMessage.includes('vehicle') ||
        lowerCaseMessage.includes('fleet')) {
      return NextResponse.json({
        message: `Our EV Services provide turn-key solutions for:

• Electrification of commercial fleets
• Individual or company vehicle conversion
• EV infrastructure planning and implementation
• Charging station installation and maintenance

We help businesses transition to sustainable transportation solutions with comprehensive support throughout the process.

Would you like to learn more about how we can help with your electrification needs?`
      });
    }
    
    // Contact queries
    if (lowerCaseMessage.includes('contact') || 
        lowerCaseMessage.includes('talk to') || 
        lowerCaseMessage.includes('speak with') ||
        lowerCaseMessage.includes('get in touch')) {
      return NextResponse.json({
        message: `I'd be happy to help you get in touch with our team at Preeminent Professional Services.

You can:
• Call us directly at [PHONE NUMBER]
• Email us at [EMAIL ADDRESS]
• Fill out the contact form on our website
• Book a consultation through our scheduling system

Would you like me to help you schedule a consultation with our team?`
      });
    }
    
    // Default response for other queries
    return NextResponse.json({
      message: `Thank you for reaching out to Preeminent Professional Services. We specialize in Professional/Technical Services, Commercial Cleaning/Environmental Services, Professional Events and Staffing, and EV Services.

How can we assist you today? Feel free to ask about any of our services or let me know if you'd like to speak with a member of our team.`
    });
    
  } catch (error) {
    console.error('Error in chatBot API:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
} 