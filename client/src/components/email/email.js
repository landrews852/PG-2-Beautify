import React from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import mail from "../../images/mail.png"


export default function Email() {
    return (
<div>
    <CopyToClipboard text= "beauty@email.com">
        <p onClick={(() => alert("correo copiado al portapapeles"))}>{mail}</p> 
    </CopyToClipboard>
</div>
    )
}