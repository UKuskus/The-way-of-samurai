import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.Dialogs}>

            <div className={s.Dialog_Items }>
                <div className={s.Dialog + ' ' + s.active}>
                   <NavLink to="/dialogs/1">Vova </NavLink>
                </div>
                <div className={s.Dialog}>
                    <NavLink to="/dialogs/2"> Ostap </NavLink>
                </div>
                <div className={s.Dialog}>
                    <NavLink to="/dialogs/3"> Vitalik </NavLink>
                </div>
                <div className={s.Dialog}>
                    <NavLink to="/dialogs/4"> Viktoria </NavLink>
                </div>
                <div className={s.Dialog}>
                    <NavLink to="/dialogs/5"> Igor </NavLink>
                </div>
            </div>
            
            <div className={s.Messages}>
                <div className={s.Message}>Hey, bro how are you doing?</div>
                <div className={s.Message}>Cheers mate</div>
                <div className={s.Message}>Let's kill him!!!</div>
            </div>
        </div>

    )
}

export default Dialogs;
