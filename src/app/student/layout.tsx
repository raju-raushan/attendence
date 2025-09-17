"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Bell,
  User,
  LogOut,
  Settings,
} from "lucide-react";
import { studentData } from "@/lib/mock-data";
import { Icons } from "@/components/icons";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menuItems = [
    { href: "/student/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/student/notifications", label: "Notifications", icon: Bell },
    { href: "/student/profile", label: "Profile", icon: User },
    { href: "/student/settings", label: "Settings", icon: Settings },
  ];

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-3">
             <Icons.logo className="w-8 h-8 text-primary" />
             <h2 className="text-xl font-semibold font-headline text-primary group-data-[collapsible=icon]:hidden">
               AttendEase
             </h2>
           </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
               <SidebarMenuItem key={item.href}>
                 <Link href={item.href} legacyBehavior passHref>
                   <SidebarMenuButton
                     isActive={pathname === item.href}
                     tooltip={{ children: item.label }}
                   >
                     <item.icon />
                     <span>{item.label}</span>
                   </SidebarMenuButton>
                 </Link>
               </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
           <SidebarMenu>
             <SidebarMenuItem>
               <Link href="/" legacyBehavior passHref>
                 <SidebarMenuButton tooltip={{ children: "Logout" }}>
                   <LogOut />
                   <span>Logout</span>
                 </SidebarMenuButton>
               </Link>
             </SidebarMenuItem>
           </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between p-4 bg-card md:p-6">
          <SidebarTrigger />
          <div className="flex items-center gap-4">
            <Bell className="text-muted-foreground" />
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt={studentData.name} />
                <AvatarFallback>{studentData.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="hidden sm:block">
                <p className="font-semibold">{studentData.name}</p>
                <p className="text-sm text-muted-foreground">Student</p>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
