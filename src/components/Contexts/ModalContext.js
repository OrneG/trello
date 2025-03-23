import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const ModalContext = React.createContext();

export default function ModalContextProvider({ children }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [description, setDescription] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [cards, setCards] = useState([]);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }

    const addNewDescription = event => {
        setDescription(event.target.value);
    }

    const addNewComment = event => {
        setComment(event.target.value);
    }

    const addComment = () => {
        const newComment = {
            id: uuid(),
            text: comment,
        }
        setComments([...comments, newComment]);
        setComment('');
    }

    const addCardDescription = () => {
        const newDescription = {
            id: uuid(),
            text: description,
        }
        setCards([...cards, newDescription]);
        setDescription('');
    }

    return (
        <ModalContext.Provider
            value={{
                modalVisible,
                description,
                comment,
                comments,
                toggleModal,
                addCardDescription,
                addNewDescription,
                addNewComment,
                addComment
            }}>
            {children}
        </ModalContext.Provider>
    );
}

export const ModalContextConsumer = ModalContext.Consumer;