import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogPiece = (props) =>
{
    let path ="/dialogs/" + props.pathid;
    return (

        <div className={s.Dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name} </NavLink>
        </div>
    )
}
const MessagePiece = (props) => {
    return(
        <div className={s.Message}>{props.text}</div>
    )
}
const Dialogs = (props) => {
    return (
        <div className={s.Dialogs}>

            <div className={s.Dialog_Items }>
                <DialogPiece name="Vova" pathid="1"/>
                <DialogPiece name="Ostap" pathid="2"/>
                <DialogPiece name="Vitalik" pathid="3"/>
                <DialogPiece name="Viktoria" pathid="4"/>
                <DialogPiece name="Igor" pathid="5"/>
            </div>
            
            <div className={s.Messages}>
                <MessagePiece text="Hey, bro how are you doing?"/>
                <MessagePiece text="Cheers mate"/>
                <MessagePiece text="Let's kill him!!!"/>
            </div>
        </div>

    )
}

export default Dialogs;
