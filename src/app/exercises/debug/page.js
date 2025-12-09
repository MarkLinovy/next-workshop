'use client';

import { useState, useEffect } from 'react';

// BUG 1: This component expects data to be an array, but the API might return an object or null
// BUG 2: There is no error handling
// BUG 3: The dependency array in useEffect is missing/incorrect causing potential loops or stale data

export default function DebugPage() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1') // Returns a single object, not array
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []); // Missing dependency if we had any props

  if (loading) return <div>Loading users...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List (Debug Me)</h1>
      <div className="grid gap-4">
        {/* crash happens here because users is not an array */}
        {users.map(user => (
          <div key={user.id} className="p-4 border rounded shadow">
            <h3 className="font-bold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

