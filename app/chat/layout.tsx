import "@/app/globals.css";

import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/Header";
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
          <SideBarWrapper>
            <Sidebar className="max-w-[250px]" />
          </SideBarWrapper>
          <SidebarButton />
          <div className="basis-full">
            <div className="h-full flex flex-col">
              <Header />
              <div className="basis-full">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
