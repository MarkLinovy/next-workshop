import { env } from "../../env";

export default function EnvDemo() {
  return (
    <div>
      <h1 className="page-title">Environment Variables Demo</h1>
      
      <div className="card">
        <h2 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Client-Side Variable</h2>
        <p>
          <strong>NEXT_PUBLIC_APP_URL:</strong> {env.NEXT_PUBLIC_APP_URL}
        </p>
        
        <div style={{ marginTop: '20px', padding: '10px', background: '#f5f5f5', borderRadius: '4px' }}>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            Note: Server-side variables like <code>API_SECRET</code> cannot be accessed here directly.
            If you try to access <code>env.API_SECRET</code> in a Client Component (or even Server Component rendering to client), 
            it would be hidden or cause an error if configured to do so.
          </p>
        </div>
      </div>
      
      {/* Demonstrate server-side access via a Server Component wrapper or just render it if this is a Server Component */}
      <ServerEnvInfo />
    </div>
  );
}

function ServerEnvInfo() {
  // This runs on the server
  return (
    <div className="card" style={{ marginTop: '20px', borderColor: 'var(--primary)' }}>
      <h2 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Server-Side Variable</h2>
      <p>
        <strong>API_SECRET:</strong> {env.API_SECRET}
      </p>
      <p style={{ fontSize: '0.8rem', color: 'green' }}>
        (Visible because this part is rendered on the server)
      </p>
    </div>
  );
}

