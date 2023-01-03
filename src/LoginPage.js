import React from "react";

function LoginPage(){

    const [username, setUsername] = React.useState("");

    const login = (event) => {
        event.preventDefault();
        console.log(username);
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