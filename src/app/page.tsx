'use client'
import {ShowcaseClient} from "@reviewsup/embed-react";

const showcaseId = [
  '2c337712ccd',
  '92620b6dda4',
  'b68f3f0a0a2'
]

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-16 p-4 bg-white">
      {showcaseId.map((id) => (
        <ShowcaseClient
          key={id}
          showcaseId={id}
        />
      ))}
    </div>
  );
}
