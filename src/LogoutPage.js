import React from "react";

function LogoutPage(){

    const logout = (event) => {
        event.preventDefault();
        console.log("Salir");
    };

    return (
        <>
            <h1>Logout</h1>

            <form onSubmit={logout}>
                <label>¿Estás seguro de salir?</label>
                <button type="submit">Salir</button>
            </form>
        </>
    );
}

export {LogoutPage};