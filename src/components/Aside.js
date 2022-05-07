import User from "./User";
import ForYou from "./ForYou";
import { user, users } from "../data/indexdata";

export default function Aside(){
    return (
        <aside class="sidebar">
            <User name={user.name} username={user.username} img={user.img}/>
            <section class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {users.map((FY) => <ForYou name={FY.name} img={FY.img}/>)}
            </section>
            <summary class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </summary>
            <summary class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </summary>
        </aside>
    );
};