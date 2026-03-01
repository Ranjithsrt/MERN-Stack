"use client";

import axios from "axios";

export default function Page({ params }) {
  const fetchSinglebook = async () => {
    const { id } = await params;
    const res = await axios.get(`http://localhost:3000/api/book/${id}`);
    console.log(res.data);
  };
  fetchSinglebook();

  return (
    <div>
      {/* render single data */}

      <h1>Single Book Data</h1>
    </div>
  );
}
