import React from "react";
import Post from "./Post";
import { posts } from "../data/indexdata";

export default function Posts(){
    return(
        <section class="posts">
            {posts.map((item) => <Post 
                username={item.username}
                userimg={item.userimg}
                conteudo={item.conteudo}
                userlike={item.userlike}
                texto={item.texto}
                texto1={item.texto1}
                usercomment={item.usercomment}
                namecomment={item.namecomment}
                comment={item.comment}
                />
            )}
        </section>
    );
};