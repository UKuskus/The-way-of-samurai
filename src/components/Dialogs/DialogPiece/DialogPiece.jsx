import React from 'react';
import s from './../Dialogs.module.css'
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

export default DialogPiece;
