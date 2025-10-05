import type { LucideProps } from "lucide-react";
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

export function NavLink(props: NavLinkProps) {
  return (
    <li className="w-full">
      <Link
        href={props.href}
        className={`flex items-center gap-4 px-5 py-2 rounded transition-all 
            ${props.isSelected ? "bg-slate-300" : "hover:bg-blue-400/20"}`}
      >
        <props.Icon
          className={`${props.isSelected ? "text-slate-900" : "text-slate-300"}`}
          size={24}
        />
        <p
          className={`text-lg font-medium ${props.isSelected ? "text-slate-900" : "text-slate-300"}`}
        >
          {props.text}
        </p>
      </Link>
    </li>
  );
}
