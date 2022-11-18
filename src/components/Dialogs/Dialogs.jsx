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
    let MessagesArray = [
        {message:'Hey, bro how are you doing?', id:'1' },
        {message:'Cheers mate', id:'2' },
        {message:'Let\'s kill him!!!', id:'3' }
    ]
    return (
        <div className={s.Dialogs}>

            <div className={s.Dialog_Items }>
                <DialogPiece name={DialogsArray[0].name} pathid={DialogsArray[0].id}/>
                <DialogPiece name={DialogsArray[1].name} pathid={DialogsArray[1].id}/>
                <DialogPiece name={DialogsArray[2].name} pathid={DialogsArray[2].id}/>
                <DialogPiece name={DialogsArray[3].name} pathid={DialogsArray[3].id}/>
                <DialogPiece name={DialogsArray[4].name} pathid={DialogsArray[4].id}/>
            </div>
            
            <div className={s.Messages}>
                <MessagePiece text={MessagesArray[0].message} messageid={MessagesArray[0].id}/>
                <MessagePiece text={MessagesArray[1].message} messageid={MessagesArray[1].id}/>
                <MessagePiece text={MessagesArray[2].message} messageid={MessagesArray[2].id}/>
            </div>
        </div>

    )
}

export default Dialogs;
