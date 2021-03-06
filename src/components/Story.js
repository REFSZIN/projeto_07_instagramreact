import React from "react";

export default function Story (props) {
    return (
        <article class="story">
            <figure class="imagem">
                <img src={props.img} alt="img"/>
            </figure>
            <figcaption class="usuario">{props.name}</figcaption>
        </article>
    )
}
