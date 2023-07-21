'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation'
import Icon from "@mdi/react";

const useActiveLink = (href) => {
  const pathname = usePathname();

  return pathname === href ? "active" : "";
}

export default function asyncLeftSideLink({ href, iconPath, title, children }) {

  const activeLink = useActiveLink(href);

  const hasArrow = !!children ? "has-arrow" : "";
  console.log(hasArrow);
  return <li className={activeLink}>
    <Link href={href}

      className={`waves-effect waves-dark ${activeLink} ${hasArrow}`}
    // aria-expanded="false"
    >
      {!!iconPath && <Icon path={iconPath} size={1} />}
      <span className="hide-menu">{title}</span>
    </Link>

    {!!children ? children : null}
  </li>;
}
