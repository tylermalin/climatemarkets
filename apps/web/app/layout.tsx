import React from 'react';
import '../styles.css';
import { Nav } from '@helpful/ui';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
