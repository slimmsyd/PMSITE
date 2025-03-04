import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// System prompt to give context about Preeminent Professional Services
const SYSTEM_PROMPT = `You are an AI assistant for Preeminent Professional Services, a company specializing in:

1. Professional/Technical Services:
- Property management
- Real estate development
- Industrial/commercial properties
- Hot-spot discovery and evaluation

2. Commercial Cleaning/Environmental Services:
- Comprehensive cleaning solutions for commercial properties
- Environmental services

3. Professional Events and Staffing:
- Temporary staffing for commercial events
- Personnel for private/public functions
- Quick response staffing solutions

4. EV Services:
- Turn-key services for commercial fleet electrification
- Individual/company vehicle electrification
- Charging infrastructure solutions

Your role is to:
- Provide detailed information about our services
- Answer questions professionally and accurately
- Maintain context throughout conversations
- Guide users to appropriate services
- Suggest booking consultations when relevant
- Be helpful and friendly while maintaining professionalism

Always format responses in a clear, organized manner using bullet points when listing information.`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // Ensure messages array starts with system prompt
    const conversationMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages
    ];

    // Get response from OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: conversationMessages,
      temperature: 0.7,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    // Extract the response
    const response = completion.choices[0].message.content;

    // Check if response suggests scheduling a consultation
    const suggestsConsultation = response?.toLowerCase().includes('consultation') || 
                                response?.toLowerCase().includes('schedule') ||
                                response?.toLowerCase().includes('contact') ||
                                response?.toLowerCase().includes('book');

    return NextResponse.json({
      message: response,
      suggestsConsultation
    });

  } catch (error) {
    console.error('Error in chatBot API:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
} 