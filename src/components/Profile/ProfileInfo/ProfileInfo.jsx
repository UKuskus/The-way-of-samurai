import React from 'react';
import s from './ProfileInfo.module.css'

const ProjectInfo = () => {
    return (
        <div>
            <div>
                <img className={s.Background} alt="background"
                     src='https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg'/>
            </div>
            <div className={s.DescriptionBlock}>Profile photo + description</div>
        </div>
    )

}

export default ProjectInfo;