import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.Dialogs}>

            <div className={s.Dialog_Items }>
                <div className={s.Dialog + ' ' + s.active}>
                    Vova
                </div>
                <div className={s.Dialog}>
                    Ostap
                </div>
                <div className={s.Dialog}>
                    Vitalik
                </div>
                <div className={s.Dialog}>
                    Viktoria
                </div>
                <div className={s.Dialog}>
                    Igor
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
