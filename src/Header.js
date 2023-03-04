import React from "react";
import { ReactDOM } from "react";
import picture from './picture.jpg'
import Buttons from './Buttons'

export default function Header(){
    return(
        <div className="headerclass">
            <img src={picture} width="200px" alt="profile"/>
            <p className="p1">HAMMAZ Massinissa</p>
            <p className="p2">React developper</p>
            <p className="p3">massinissahammaz@gmail.com</p>
            <Buttons/>
        </div>
    )
}