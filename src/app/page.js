import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="page-title">Welcome to Workshop App</h1>
      
      <div className="card">
        <p style={{ marginBottom: '20px' }}>
          This is a demo application built with Next.js. Use the sidebar to navigate to different sections.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <Link href="/chats" className="card" style={{ display: 'block', textDecoration: 'none', border: '1px solid var(--primary)', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '10px' }}>Chats</h3>
            <p style={{ fontSize: '0.9rem' }}>Join the conversation</p>
          </Link>

          <Link href="/settings" className="card" style={{ display: 'block', textDecoration: 'none', border: '1px solid var(--primary)', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '10px' }}>Settings</h3>
            <p style={{ fontSize: '0.9rem' }}>Configure your preferences</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

