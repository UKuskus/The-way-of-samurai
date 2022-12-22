import React from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post'


const MyPosts = () => {
    let PostsArray = [
        {message: 'Hello, my name is Nancy Dyer', id: '1', likesCount:23},
        {message: 'I came here to defead Vecna', id: '2', likesCount:13}
    ]
    let PostElements = PostsArray
        .map((p)=>( <Post message={p.message} postid={p.id} likesCount={p.likesCount}/>));
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
                    {PostElements}
                </div>

            </div>
        </div>

    );
}

export default MyPosts;