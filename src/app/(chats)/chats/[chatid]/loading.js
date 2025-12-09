export default function Loading() {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <div style={{ height: '24px', width: '60px', background: '#eee', borderRadius: '4px' }}></div>
        <div style={{ height: '30px', width: '200px', background: '#eee', borderRadius: '4px' }}></div>
      </div>

      <div className="chat-messages">
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100%',
          color: '#666'
        }}>
          Loading chat messages...
        </div>
      </div>

      <div className="chat-input-area">
        <div className="input" style={{ background: '#eee', height: '40px' }}></div>
        <div className="btn" style={{ background: '#ccc', width: '80px' }}></div>
      </div>
    </div>
  );
}

