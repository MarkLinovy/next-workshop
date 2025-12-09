export default function Settings() {
  return (
    <div>
      <h1 className="page-title">Settings</h1>
      
      <div className="card" style={{ maxWidth: '500px' }}>
        <div className="form-group">
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="input"
            defaultValue="johndoe"
          />
        </div>

        <div className="form-group">
          <label className="label">
            Email Notifications
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="checkbox" id="email" defaultChecked />
            <label htmlFor="email">Receive daily updates</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="theme" className="label">
            Theme
          </label>
          <select id="theme" className="select">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>

        <button className="btn">
          Save Changes
        </button>
      </div>
    </div>
  );
}
