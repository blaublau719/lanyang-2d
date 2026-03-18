import { useState, useEffect } from "react";

// Always call the Cloudflare Worker API so the counter works from both
// GitHub Pages and Cloudflare Workers deployments.
const API_URL = "https://portfolio.lan980719.workers.dev/api/visitors";

export default function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  if (count === null) return null;

  return (
    <p className="visitor-counter">
      👀 Visitors: <span>{count}</span>
    </p>
  );
}
