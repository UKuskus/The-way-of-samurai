import React from 'react';
import s from './../Dialogs.module.css'


const MessagePiece = (props) => {
    return(
        <div className={s.Message}>{props.text}</div>
    )
}


export default MessagePiece;
