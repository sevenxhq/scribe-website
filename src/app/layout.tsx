import React from "react";

import Providers from "@utils/provider";
import "./globals.css";

export const metadata = {
  title: "Scribe : scripture editing made simple",
  description: "A Bible translation editor that is owned by and developed for the community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
