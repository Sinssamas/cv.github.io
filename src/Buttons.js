import React from "react";
import Icon from "./icons8-linkedin-48.png"

export default function Buttons(){
    return(
        <div>
            <button>
                <img></img>
                email
            </button>
            <button>
                <img src={Icon} width="20px"></img>
                LinkedIn
            </button>
        </div>
    )


}