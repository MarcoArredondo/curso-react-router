import React from "react";
import { useAuth } from "./auth";

function LoginPage(){

    const auth = useAuth();
    const [username, setUsername] = React.useState("");

    const login = (event) => {
        event.preventDefault();
        auth.login({username});
    };

    return (
        <>
            <h1>Login</h1>

            <form onSubmit={login}>
                <label>Username:</label>
                <input 
                    value={username} 
                    onChange={(event) => {setUsername(event.target.value)}}
                />
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export {LoginPage};