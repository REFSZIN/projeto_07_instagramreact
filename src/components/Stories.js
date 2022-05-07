import React from "react";
import { stories } from "../data/indexdata";
import Story from "./Story";

export default function Stories(){
    return(
        <section class="stories">
            {stories.map((item) => <Story name={item.name} img={item.img} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </section>
    );
};
