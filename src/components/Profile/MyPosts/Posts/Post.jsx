import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div>
      <div className={s.PostsStyles}>
        <div className={s.Post}>
          <img alt='PersonaPostProfile' src='https://i.pinimg.com/originals/bc/1d/33/bc1d333b5722d9517e4ec66a4e0d9ccc.png'></img>
          {props.message}

          <div>
            <span>
              {props.likesCount}
            </span>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Post;