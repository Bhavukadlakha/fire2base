import * as React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {currentYear} Bhavuk Adlakha. All rights reserved.
        </p>
        <p className="text-center text-sm text-muted-foreground">
          Built with Next.js & Shadcn/ui.
        </p>
      </div>
    </footer>
  );
}
