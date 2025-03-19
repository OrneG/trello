import React from 'react';
import './Comment.css';

const Comment = ({username, text}) => (
    <div className='comment'>
        <b className='username'>{username}</b>
        <div className='comment-text'>{text}</div>
        <div className='comment-actions'>
            <a href='#!' className='comment-action'>Editar</a>
            <a href='#!' className='comment-action'>Eliminar</a>
        </div>
    </div>
)

export default Comment