import React from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post'


const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>New post</button>
                </div>
                <Post message='Hello, my name is Nancy Dyer' likesCount='23' />
                <Post message='I came here to defead Vecna' likesCount='13' />
            </div>
        </div>

    );
}

export default MyPosts;