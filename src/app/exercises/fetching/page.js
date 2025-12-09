export default function FetchingPage() {
  // TODO: Implement data fetching here
  // Requirement: 
  // 1. Fetch posts from https://jsonplaceholder.typicode.com/posts
  // 2. Render them in a list
  // 3. Use Server Component for initial fetch
  
  return (
    <div className="p-4">
      <h1 className="page-title">Data Fetching Exercise</h1>
      <p className="mb-4">Implement the data fetching logic in this file.</p>
      
      <div className="grid gap-4">
        {/* Render posts here */}
        <div className="card">
          Placeholder for posts...
        </div>
      </div>
    </div>
  );
}

