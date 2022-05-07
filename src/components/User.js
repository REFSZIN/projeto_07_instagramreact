export default function User (props){
    return(
        <section class="usuario">
        <img src={props.img}alt="img"/>
        <div class="texto">
            <strong>{props.username}</strong>{props.name}
        </div>
    </section>
    )
}