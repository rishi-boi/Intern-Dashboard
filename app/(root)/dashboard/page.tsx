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
import NavSideBar from "@/components/NavSideBar";
import TotalDonation from "@/components/Dashboard/TotalDonation";
import Rewards from "@/components/Dashboard/Rewards";
import DonationTrendChart from "@/components/Dashboard/DonationTrendChart";
import LeaderBoard from "@/components/Dashboard/LeaderBoard";
import { usePathname } from "next/navigation";

const Page = () => {
  const isMobile = useIsMobile();
  const pathName = usePathname();
  console.log("Current Path:", pathName);
  return (
    <SidebarProvider>
      <NavSideBar />
      <SidebarInset className="py-4 px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isMobile && <SidebarTrigger className="mw-4"></SidebarTrigger>}
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
          <p className="flex items-center text-gray-400 hover:underline underline-offset-4 transition-all gap-2 cursor-pointer">
            rishipardeshi20 <Copy size={15} />
          </p>
        </div>
        {/* Content */}
        <div>
          {/* Dashboard */}
          <div className="my-4 dashboard grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TotalDonation />
            <Rewards />
            <DonationTrendChart />
            <LeaderBoard />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Page;
