import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </nav>
      </header>
      <main>
        {/* 2️⃣ Render the app routes via the Layout Outlet */}
        <Outlet />
      </main>
      <footer>Footer Content ©️ me 2023</footer>
    </>
  );
}
