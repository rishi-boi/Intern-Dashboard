import { sideBarLinks } from "@/constants";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import Link from "next/link";
import { LogOut, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const NavSideBar = ({ pathName }: { pathName: string }) => {
  return (
    <Sidebar className="rounded-md" variant="sidebar" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl">
            Intern Dashboard
          </SidebarGroupLabel>
          <hr className="my-4" />
          <SidebarGroupContent>
            <SidebarMenu>
              {sideBarLinks.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "hover:bg-primary/20 transition-all",
                      pathName === item.url ? "bg-primary/10 " : ""
                    )}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="">
          <SidebarMenuItem>
            <hr />
            <SidebarMenuButton asChild className="my-2">
              <Link href="/">
                <SlidersHorizontal />
                Settings
              </Link>
            </SidebarMenuButton>
            <hr />
            <SidebarMenuButton
              asChild
              className="text-primary my-2 hover:bg-primary/20 hover:text-primary py-0"
            >
              <Link href="/">
                <LogOut />
                Logout
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default NavSideBar;
