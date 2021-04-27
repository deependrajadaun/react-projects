import React from "react";

function Header( { name,title } )
{
    return (
        <div style={{background: "yellow" , width:1000, padding:20, textAlign:"center " }}>
            <h1>{title}</h1>
            <h1>{name}</h1>
            
            <h1>Welcome to online course</h1>
        </div>
    );
};
export default Header;