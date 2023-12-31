import React from "react";

export default function Footer() {
  const currentTimestamp = Date.now();

  // Create a new Date object using the current timestamp
  const currentDate = new Date(currentTimestamp);

  // Get the current year from the Date object
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="text-center mt-8">
      <small className="mb-2 block text-xs">
        &copy;{currentYear} Instagramfonts.co, All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> This Tool is
        made by Faruk Sardar, And Built with React & Next.js (App Router &
        Server Actions), TypeScript, Tailwind CSS, Framer Motion, Vercel
        hosting.{" "}
      </p>
    </footer>
  );
}
