import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./auth";

function Menu(){

    const auth = useAuth();

    return (
        <nav>
            <ul>
               {/*<li>
                <Link to="/">Home</Link>
               </li>
               <li>
                <Link to="/blog">Blog</Link>
               </li>
               <li>
                <Link to="/profile">Profile</Link>
                </li>*/}

                {
                routes.map((route) => {
                    if(route.private && !auth.user) return null; 
                    if(route.to === "/login" && auth.user) return null;

                    return (
                        <li>
                            <NavLink 
                                key={route.to}
                                to={route.to}
                                style={({isActive}) => ({
                                    color: isActive ? 'red' : 'blue',
                                })}
                            >
                                {route.text}
                            </NavLink>
                        </li>   
                    );
                })
                }
            </ul>
        </nav>
    );
}

const routes = [];
routes.push({
  to: "/",
  text: "Home",
  private: false
});
routes.push({
  to: "/blog",
  text: "Blog",
  private: false
});
routes.push({
  to: "/profile",
  text: "Profile",
  private: true
});
routes.push({
    to: "/login",
    text: "Login",
    private: false
});
routes.push({
    to: "/logout",
    text: "Logout",
    private: true
});

export {Menu};