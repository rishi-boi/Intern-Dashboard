"use client";
import {
  SidebarInset,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Copy } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";
import TotalDonation from "@/components/Dashboard/TotalDonation";
import Rewards from "@/components/Dashboard/Rewards";
import DonationTrendChart from "@/components/Dashboard/DonationTrendChart";
import LeaderBoard from "@/components/Dashboard/LeaderBoard";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";
import NavSideBar from "@/components/NavSideBar";

export default function RootLayout({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile();
  const pathName = usePathname();
  return (
    <html lang="en">
      <TooltipProvider>
        <body>
          <SidebarProvider>
            <NavSideBar pathName={pathName} />
            <SidebarInset className="py-4 px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {isMobile && (
                    <SidebarTrigger className="mw-4"></SidebarTrigger>
                  )}
                  <h2 className="capitalize">{pathName.split("/")[1]}</h2>
                </div>
                <Image
                  src={"/assets/logo.jpg"}
                  className="size-10 rounded-full"
                  width={50}
                  height={50}
                  alt="logo"
                />
              </div>
              <SidebarSeparator className="my-4" />
              <div className="mt-4 space-y-2">
                <h1 className="text-3xl">
                  Welcome, <span className="font-bold">Rishi</span>
                </h1>
                <Tooltip>
                  <TooltipTrigger>
                    <p
                      className="flex items-center text-gray-400 hover:underline underline-offset-4 transition-all gap-2 cursor-pointer"
                      onClick={() => {
                        navigator.clipboard.writeText("rishipardeshi20");
                      }}
                    >
                      rishipardeshi20 <Copy size={15} />
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>Referal Code</TooltipContent>
                </Tooltip>
              </div>
              {children}
            </SidebarInset>
          </SidebarProvider>
        </body>
      </TooltipProvider>
    </html>
  );
}
