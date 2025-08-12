import React from 'react';

export function Nav() {
  return (
    <nav className="p-4 border-b flex gap-4">
      <a href="/dashboard">Dashboard</a>
      <a href="/tools">Tools</a>
      <a href="/marketplace">Marketplace</a>
      <a href="/group-buys">Group Buys</a>
      <a href="/orgs/new">New Org</a>
    </nav>
  );
}
