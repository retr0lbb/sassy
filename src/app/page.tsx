import { SideMenu } from "@/components/side-menu";

export default function Home() {
  return (
    <div className="w-full min-h-dvh bg-slate-950 flex">
      <SideMenu />
      <div className="text-amber-50">Hello this is memes</div>
    </div>
  );
}
