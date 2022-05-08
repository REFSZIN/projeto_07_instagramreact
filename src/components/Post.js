
import React , {useState} from "react";

export default function Post(props){
    const [like, setLike] = useState(0);
    return(
        <article class="post">
            <section class="topo">
                <figure class="usuario">
                <img src={props.userimg} alt="img"/>{props.username}</figure>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            </section>
            <div class="conteudo">
                <img onClick={() => setLike(1)} src={props.conteudo} alt="img"/>
            </div>
            <section class="fundo">
                <section class="acoes">
                    <div>
                        {like ? (<ion-icon class="liked md hydrated" onClick={() => setLike(!like)} name="heart" aria-label="heart" ></ion-icon>):(<ion-icon onClick={() => setLike(!like)} name="heart-outline"></ion-icon>)}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </section>
                <section class="curtidas">
                    <img src={props.userlike} alt="img" />
                <div class="texto">
                    Curtido por <strong>{props.texto}</strong> e <strong>{props.texto1}</strong>
                </div>
                </section>
                <section class="coments-post">
                    <img  class="userimg" src={props.usercomment} alt="User comment in thats post"/> 
                    <h3 class="username">{props.namecomment}</h3> 
                    <p class="usercoment">{props.comment}</p>  
                </section>
                <section class="input-coments">
                    <ion-icon class="emotions" name="happy-outline"></ion-icon>
                    <input  class="input" type="text" inputmode="latin" placeholder="Adicione um Comentário...."/>
                    <button class="button">Publicar</button>
                </section>
            </section>
        </article>
    )
}