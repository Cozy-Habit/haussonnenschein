"use client"; //enables to use hooks clientSide

import Link from "next/link";
import Clouds from "./Clouds";
import React from "react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useIsMobile, useWindowSize } from "@/hooks"

function MenuItem({ href, label }: { href: string, label: string }) {
    const pathname = usePathname();
    // remove trailing slash
    /*if (href.endsWith("/") && href !== "/") {
        href = href.slice(0, -1);
    }*/
    const isActive = pathname == href;
    const activeClassName = isActive ? "active" : "";
    return (
        <li>
            <Link className={`menuItem ${activeClassName}`} href={href}>
                {label}
            </Link>
        </li>
    )
}

export default function Navbar() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const isMobile = useIsMobile();

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    //CHANGING BETWEEN MOBILE AND DESKTOP
    useEffect(() => { //is it bad that this thing gets rerendered constantly? isn't it normal? should I do something about it?
        if (!isMobile) setHamburgerOpen(false);
    }, [isMobile]);

    // close on click
    const pathname = usePathname();
    useEffect(() => {
        // always executed when route changes
        setHamburgerOpen(false);
        scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <Clouds />
                    <div className={`hamburger_container ${hamburgerOpen ? "open" : ""}`} onClick={toggleHamburger}>
                        <div className="burger burger1"></div>
                        <div className="burger burger2"></div>
                        <div className="burger burger3"></div>
                    </div>
                    <ul id="menuItems" className={hamburgerOpen ? "open" : ""}>
                        <MenuItem href="/" label="Home" />
                        <MenuItem href="/Tagesmutter" label="Tagesmutter" />
                        <MenuItem href="/Raeumlichkeiten" label="Räumlichkeiten" />
                        <MenuItem href="/Betreuung" label="Betreuung" />
                        <MenuItem href="/Kontakt" label="Kontakt" />
                    </ul>
                </nav>
            </header>
        </>
    );
}