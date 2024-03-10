import "@/app/globals.css";

import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="grid grid-cols-10 grid-rows-11">
          <Sidebar className="col-span-2 row-span-11" />
          <Header className="col-span-8 row-span-1" />
          <div className="col-span-8 row-span-10 px-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
