"use client";
import Created from "@/components/Created";
import { useState } from "react";

export default function Dashboard() {
  const [librarySearchTerms, setLibrarySearchTerms] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-wrap items-start justify-center p-10">
          {/* Page content here */}
          <Created title="Title 1" tag="Tag 1" description="Description 1" />
          <Created title="Title 2" tag="Tag 2" description="Description 2" />
          <Created />
          <Created />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search in library"
                className="input input-bordered w-full max-w-xs mb-5"
                value={librarySearchTerms}
                onChange={(e) => setLibrarySearchTerms(e.target.value)}
              />
            </form>
            <li>
              <a>Your Quiz Library</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
