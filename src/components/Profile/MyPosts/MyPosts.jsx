import React from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post'


const MyPosts = () => {
    return (<div>
            <div className={s.PostsBlock}>
                <h2>My posts</h2>
                <div>
                    <textarea></textarea>
                    <div>
                        <button>New post</button>
                    </div>

                </div>
                <div className={s.Posts}>
                    <Post message='Hello, my name is Nancy Dyer' likesCount='23'/>
                    <Post message='I came here to defead Vecna' likesCount='13'/>
                </div>

            </div>
        </div>

    );
}

export default MyPosts;