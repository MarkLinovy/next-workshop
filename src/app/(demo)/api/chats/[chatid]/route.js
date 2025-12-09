import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { chatid } = params;

  // Simulate slow network delay
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  return NextResponse.json({
    id: chatid,
    title: `Chat Room ${chatid}`,
    messages: [
      { id: 1, user: 'Bot', text: `Welcome to chat room ${chatid}!` },
      { id: 2, user: 'User', text: 'Hello there!' },
      { id: 3, user: 'Bot', text: 'This data was fetched with a delay.' }
    ]
  });
}

