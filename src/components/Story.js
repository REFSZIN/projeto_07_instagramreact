import React from "react";
import Background from '../data/story-circle.svg';
const borda = {
backgroundImage: "url(" + { Background } + ")"
};
export default function Story (props) {
    return (
        <article class="story">
            <figure style={ borda } class="imagem">
                <img src={props.img} alt="img"/>
            </figure>
            <figcaption class="usuario">{props.name}</figcaption>
        </article>
    )
}
