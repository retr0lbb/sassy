import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-dvh bg-slate-950 flex">
      <Link href="/dashboard" className="cursor-pointer">
        <Button variant={"secondary"}>Acessar a dashboard</Button>
      </Link>
    </div>
  );
}
