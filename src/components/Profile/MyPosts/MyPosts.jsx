import React from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post'


const MyPosts = () => {
    let PostsArray = [
        {message: 'Hello, my name is Nancy Dyer', id: '1', likesCount:23},
        {message: 'I came here to defead Vecna', id: '2', likesCount:13}
    ]
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
                    <Post message={PostsArray[0].message} id={PostsArray[0].id} likesCount={PostsArray[0].likesCount}/>
                    <Post message={PostsArray[1].message} id={PostsArray[1].id} likesCount={PostsArray[1].likesCount}/>
                </div>

            </div>
        </div>

    );
}

export default MyPosts;