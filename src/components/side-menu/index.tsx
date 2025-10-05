"use client";
import { usePathname } from "next/navigation";
import { NavLink } from "./nav-link";
import { LayoutGrid, Globe, BookText, Cable } from "lucide-react";

export function SideMenu() {
  const pathname = usePathname(); // pega a URL atual

  const links = [
    { href: "/dashboard", text: "Dashboard", Icon: LayoutGrid },
    { href: "/dashboard/sessoes", text: "Sessões", Icon: Globe },
    { href: "/dashboard/relatorios", text: "Relatórios", Icon: BookText },
    { href: "/dashboard/integracoes", text: "Integrações", Icon: Cable },
  ];

  return (
    <nav className="min-h-dvh min-w-[300px] flex flex-col bg-slate-900 border-r border-white/5 py-5 gap-10">
      <h1 className="text-4xl font-bold text-slate-200 px-4">SASSY</h1>
      <div className="flex flex-col flex-1 gap-2">
        <p className="text-xs text-slate-400 px-2">Navegação</p>
        <ul className="flex flex-1 flex-col px-2 gap-2">
          {links.map((link, index) => {
            console.log(pathname);
            return (
              <NavLink
                // biome-ignore lint/suspicious/noArrayIndexKey: <no need>
                key={index}
                href={link.href}
                isSelected={pathname === link.href}
                text={link.text}
                Icon={link.Icon}
              />
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
