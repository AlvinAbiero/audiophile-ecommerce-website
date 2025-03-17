import { ReactNode } from "react";

export default function CategoryLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>
        <h1>Product Categories</h1>
      </header>
      <main>{children}</main>
      <footer>© 2025 Audiophile Shop</footer>
    </div>
  );
}
