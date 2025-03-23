import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import Comment from 'components/Comment/Comment';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import './ModalComents.css';
import { ModalContextConsumer } from 'components/Contexts/ModalContext';

export default function ModalComents() {
    return (
        <ModalContextConsumer>
            {({addComment, comments, comment, addNewComment}) => (
                <div className='modal-coments'>
                    <h2 className='h2'>
                        <FontAwesomeIcon className='icon' icon={faComment}></FontAwesomeIcon>Add Comment
                    </h2>
                    <textarea className='textarea'
                        placeholder='Write a comment...'
                        comment={comment}
                        onChange={addNewComment}></textarea>
                    <div onClick={addComment}>
                        <Button classType={BUTTON_TYPES.GREEN} text='Guardar'></Button>
                    </div>
                    {comments.map(comment => <Comment key={comment.id} username='OrneG' text={comment.text} />)}
                </div>
            )}
        </ModalContextConsumer>
    );
}