import React from "react";
import { useAuth, AuthRoute} from "./auth";

function ProfilePage(){
    const auth = useAuth();
   
    return (
        <>
            <h1>Bienvenido, {auth.user.username}</h1>
        </>
    );
    
}

export {ProfilePage};