export default function ForYou (props){
    return(
        <article class="sugestao">
                    <div class="usuario">
                        <img src={props.img}alt="img"/>
                    <div class="texto">
                        <div class="nome">{props.name}</div>
                        <div class="razao">Segue você</div>
                    </div>
                    </div>
                    <div class="seguir">Seguir</div>
                </article>
    )
}