export default function ChatList() {
  const chats = [
    { id: '1', name: 'General Discussion' },
    { id: '2', name: 'Tech Support' },
    { id: '3', name: 'Random' },
  ];

  return (
    <div>
      <h1 className="page-title">Chats</h1>
      <div className="chat-list">
        {chats.map((chat) => (
          <a
            key={chat.id}
            href={`/chats/${chat.id}`}
            className="chat-item"
          >
            <h2 style={{ fontWeight: '600', marginBottom: '5px' }}>{chat.name}</h2>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Last active: Just now</p>
          </a>
        ))}
      </div>
    </div>
  );
}
