import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import Aside from "./Aside";

export default function Main (){
    return(
        <main class="corpo">
            <section class="esquerda">
                < Stories />
                < Posts />
            </section>
            < Aside />
        </main>
    );
};