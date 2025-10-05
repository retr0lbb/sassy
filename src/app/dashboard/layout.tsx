import { SideMenu } from "@/components/side-menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-dvh bg-slate-950 flex">
      <SideMenu />
      <main className="flex-1 p-4 text-amber-50">{children}</main>
    </div>
  );
}
