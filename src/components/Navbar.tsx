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
    if (href.endsWith("/") && href !== "/") {
        href = href.slice(0, -1);
    }
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

    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <Clouds />
                    <div className="hamburger_container" onClick={toggleHamburger}>
                        <div className="burger burger1"></div>
                        <div className="burger burger2"></div>
                        <div className="burger burger3"></div>
                    </div>
                    <ul id="menuItems">
                        {/*<li><Link className="menuItem active" href="/">Home</Link></li>
                        <li><Link className="menuItem" href="/Tagesmutter">Tagesmutter</Link></li>
                        <li><Link className="menuItem" href="/Raeumlichkeiten">Räumlichkeiten</Link></li>
                        <li><Link className="menuItem" href="/Betreuung">Betreuung</Link></li>
    <li><Link className="menuItem" href="/Kontakt">Kontakt</Link></li>*/}
                        <MenuItem href="/" label="Home" />
                        <MenuItem href="/Tagesmutter" label="Tagesmutter" />
                        <MenuItem href="/Raeumlichkeiten" label="Räumlichkeiten" />
                        <MenuItem href="/Betreuung" label="Betreuung" />
                        <MenuItem href="/Kontakt" label="Kontakt" />
                    </ul>
                </nav>

                <style jsx={true}>
                    {`
        .header{

            .navbar ul{
                right: ${hamburgerOpen && isMobile ? '0' : '-100%'};
                transition: all 0.4s linear;
            }
            .hamburger_container{
                .burger1{
                    transform: ${hamburgerOpen ? 'rotate(40deg) translateX(4px) translateY(-4px)' : 'rotate(0)'};
                }
                .burger2{
                    opacity: ${hamburgerOpen ? '0' : '1'};
                }
                .burger3{
                    transform: ${hamburgerOpen ? 'rotate(-40deg) translateX(4px) translateY(4px)' : 'rotate(0)'};
                }
            }
        }
        `}</style>
            </header>
        </>
    );
}