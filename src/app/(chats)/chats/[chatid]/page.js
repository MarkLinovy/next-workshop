import Link from 'next/link';

async function getChat(chatid) {
  const res = await fetch(`http://localhost:3000/api/chats/${chatid}`, {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch chat');
  }
  
  return res.json();
}

export default async function ChatPage({ params }) {
  const { chatid } = await params;
  const chat = await getChat(chatid);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <Link href="/chats" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
          &larr; Back
        </Link>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>{chat.title}</h1>
      </div>

      <div className="chat-messages">
        {chat.messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.user === 'User' ? 'user' : 'bot'}`}>
            <p style={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '4px' }}>{msg.user}</p>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Type a message..."
          className="input"
        />
        <button className="btn">
          Send
        </button>
      </div>
    </div>
  );
}
