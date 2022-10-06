import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Project = () => {
  return (
    <div className={s.Profile}>
      <div>
        <img className={s.Background} alt="background" src='https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg' />
      </div>

      <div>Profile photo + description</div>
      <div>
        <MyPosts />
      </div>

    </div>
  );
}

export default Project;