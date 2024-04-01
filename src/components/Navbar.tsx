"use client"; //enables to use hooks clientSide

import Link from "next/link";
import Clouds from "./Clouds";
import React from "react";
import { useState, useEffect } from "react";

export default function Navbar() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const [isMobile, setIsMobile] = useState(true)

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 820) {
            setIsMobile(true)

        } else {
            setIsMobile(false)
        }

    }

    //CHANGING BETWEEN MOBILE AND DESKTOP
    useEffect(() => { //is it bad that this thing gets rerendered constantly? isn't it normal? should I do something about it?
        window.addEventListener("resize", handleResize)
        if (!isMobile) setHamburgerOpen(false);

        /*document.querySelectorAll(".menuItem").forEach((value2) => {
            value2.classList.remove('active');
        })

        const currentUrl = window.location.href;
        const regExp = RegExp(/Kontakt/i);

        if (regExp.test(currentUrl))
            console.log("yep");*/

    }, [isMobile]);

    useEffect(() => {

        //menuItems auswählen und dann die Children durch forEach mit evenListener ausstatten, wobei eine RegExp die id des jeweiligen menuItems nimmt und in der URL auf Übereinstimmung vergleicht. 
        //Kann ich die Funktion auslagen, sodass Footer genauso funktioniert?
        document.querySelectorAll(".menuItem").forEach((value) => {
            value.addEventListener('click', () => {


                document.querySelectorAll(".menuItem").forEach((value2) => {
                    value2.classList.remove('active');
                })

                value.classList.add('active');

            })
        })
    }, [])

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
                        <li><Link className="menuItem active" href="/">Home</Link></li>
                        <li><Link className="menuItem" href="/Tagesmutter">Tagesmutter</Link></li>
                        <li><Link className="menuItem" href="/Raeumlichkeiten">Räumlichkeiten</Link></li>
                        <li><Link className="menuItem" href="/Betreuung">Betreuung</Link></li>
                        <li><Link className="menuItem" href="/Kontakt">Kontakt</Link></li>
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