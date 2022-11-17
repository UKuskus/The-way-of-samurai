import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Project = () => {
    return (
        <div className={s.Profile}>
            <ProfileInfo/>


            <div>
                <MyPosts/>
            </div>

        </div>
    );
}

export default Project;