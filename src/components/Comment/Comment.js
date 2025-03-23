import React from 'react';
import './Comment.css';

export default function Comment({username, text}) {
    return (
        <div className='comment'>
            <b className='username'>{username}</b>
            <div className='comment-text'>{text}</div>
            <div className='comment-actions'>
                <a href='#!' className='comment-action'>Editar</a>
                <a href='#!' className='comment-action'>Eliminar</a>
            </div>
        </div>
    );
}