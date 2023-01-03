import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu(){
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
});
routes.push({
  to: "/blog",
  text: "Blog",
});
routes.push({
  to: "/profile",
  text: "Profile",
});
routes.push({
    to: "/login",
    text: "Login",
  });
  routes.push({
    to: "/logout",
    text: "Logout",
  });

export {Menu};