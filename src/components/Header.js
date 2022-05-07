import React from "react";
import Logo from "./Logo"
import { logo } from "../data/indexdata";

export default function Header () {
    return (
        <header className="navbar">
            <section className="container">
                <nav className="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                <hr className="separador"/>
                    <Logo logo={logo.img}/>
                </nav>
                <nav className="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </nav>
                <nav className="instagram-mobile">
                    <Logo logo={logo.img}/>
                </nav>
                <nav className="pesquisa">
                    <input type="text" placeholder="Pesquisar"/>
                </nav>
                <nav className="icones">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </nav>
                <nav className="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </nav>
            </section>
        </header>
    );
};