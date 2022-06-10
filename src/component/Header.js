import React from 'react';
import '../estilo/Header.css'
function Header({foto}){
    return(
        <>
        <header>
            <img
            src={require(`../recursos/${foto}.png`)}></img>
        </header>
        </>
    )
}
export default Header;