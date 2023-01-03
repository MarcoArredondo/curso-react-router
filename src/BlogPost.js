import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogData } from "./blogdata";

function BlogPost(){

    const { slug } = useParams();
    const blogPost = blogData.find(post => post.slug === slug);

    return (
       <>
            <h2>{blogPost.title}</h2>
            <p>{blogPost.title}</p>
            <p>{blogPost.author}</p>
       </>
    );
}

export {BlogPost};