import React, { useState } from 'react';

const ModalContext = React.createContext();

export default function ModalContextProvider({ children }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [description, setDescription] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

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
            text: comment,
        }
        setComments([...comments, newComment]);
        setComment('');
    }

    const addCardDescription = () => {
        const newDescription = {
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
                addComment,
                selectedCard,
                setSelectedCard
            }}>
            {children}
        </ModalContext.Provider>
    );
}

export const ModalContextConsumer = ModalContext.Consumer;