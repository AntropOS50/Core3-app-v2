import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json();

    const messages = [
      {
        role: 'system' as const,
        content: `Jsi AI kouč pro 4týdenní program "Stát se nenahraditelným v době AI". 
        Pomáháš lidem budovat jejich pracovní operační systém 1.0.
        Jsi motivující, empatický a praktický. Mluvíš česky.
        
        Program má 4 týdny:
        1. Start & diagnostika
        2. AI Kompas týdne
        3. Mikro-kroky
        4. Pracovní OS 1.0`
      },
      ...history.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
      {
        role: 'user' as const,
        content: message
      }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    return NextResponse.json({
      message: completion.choices[0].message.content
    });
  } catch (error: any) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { error: 'Nepodařilo se získat odpověď od AI kouče' },
      { status: 500 }
    );
  }
}
