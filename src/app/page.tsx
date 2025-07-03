'use client';
import {ShowcaseClient,} from "@reviewsup/embed-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <ShowcaseClient
        showcaseId={'92620b6dda4'}
      />
    </div>
  );
}
