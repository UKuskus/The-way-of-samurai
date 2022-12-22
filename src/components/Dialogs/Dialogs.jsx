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
    let DialogsArray = [
        {name:'Vova', id: 1 },
        {name:'Ostap', id: 2 },
        {name:'Vitalik', id: 3 },
        {name:'Viktoria', id: 4 },
        {name:'Igor', id: 5 }
    ]
    let DialogsElements = DialogsArray
        .map( (d) =>  (<DialogPiece name={d.name} pathid={d.id}/>));
    let MessagesArray = [
        {message:'Hey, bro how are you doing?', id:'1' },
        {message:'Cheers mate', id:'2' },
        {message:'Let\'s kill him!!!', id:'3' }
    ]
    let MessageElements = MessagesArray
        .map( (m)=>(<MessagePiece text={m.message} messageid={m.id}/>));
    return (
        <div className={s.Dialogs}>

            <div className={s.Dialog_Items }>
                {DialogsElements}
            </div>
            
            <div className={s.Messages}>
                {MessageElements}
            </div>
        </div>

    )
}

export default Dialogs;
