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
        <div className="min-w-[350px] flex-1 grid grid-cols-1 grid-rows-11 md:grid-cols-10">
          <Sidebar className="hidden row-span-11 md:block md:col-span-2" />
          <Header className="col-span-1 row-span-1 md:col-span-8" />
          <div className="col-span-1 row-span-11 px-4 md:col-span-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
