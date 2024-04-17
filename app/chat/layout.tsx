import "@/app/globals.css";

import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";
import { SidebarButton } from "@/components/sidebar/SidebarButton";
import { SideBarWrapper } from "@/components/sidebar/SidebarWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen max-w-[1600px] flex flex-row mx-auto">
          <div className="hidden md:flex">
            <SideBarWrapper>
              <Sidebar className="max-w-[250px]" />
            </SideBarWrapper>
            <SidebarButton />
          </div>
          <div className="basis-full">
            <div className="h-full flex flex-col">
              <Header />
              <div className="basis-full px-4">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
