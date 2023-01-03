import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogData } from "./blogdata";

function BlogPost(){

    const { slug } = useParams();
    const navigate = useNavigate();
    const blogPost = blogData.find(post => post.slug === slug);
    
    const returnToBlog = () => {
        navigate("/blog");
    };

    return (
       <>
            <h2>{blogPost.title}</h2>
            <button onClick={returnToBlog}>Volver al blog</button>
            <p>{blogPost.title}</p>
            <p>{blogPost.author}</p>
       </>
    );
}

export {BlogPost};