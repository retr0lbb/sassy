import { LayoutDashboard, type LucideProps } from "lucide-react";
import Link from "next/link";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

interface NavLinkProps {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  href: string;
  isSelected: boolean;
  text: string;
}
function NavLink(props: NavLinkProps) {
  return (
    <li className="w-full">
      <Link
        href={props.href}
        className="flex items-center gap-4 px-5 py-2 hover:bg-blue-400/20 rounded transition-all"
      >
        <props.Icon className="text-slate-300" size={28} />
        <p className="text-lg font-medium text-slate-300">{props.text}</p>
      </Link>
    </li>
  );
}

export function SideMenu() {
  return (
    <nav className="min-h-dvh min-w-[300px] flex flex-col bg-slate-900 border-r border-white/5 py-5 gap-10">
      <h1 className="text-4xl font-bold text-slate-200 px-4">SASSY</h1>
      <div className="flex flex-col flex-1 gap-2">
        <p className="text-xs text-slate-400 px-2">Navegação</p>
        <ul className="flex flex-1 flex-col px-2">
          <NavLink
            href="/"
            isSelected={false}
            text="Dashboard"
            Icon={LayoutDashboard}
          />
        </ul>
      </div>
    </nav>
  );
}
