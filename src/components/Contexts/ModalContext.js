import React, { useState } from 'react';
import initialColumns from 'columns';

export const ModalContext = React.createContext();

export default function ModalContextProvider({ children }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [description, setDescription] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [columns, setColumns] = useState(initialColumns);
    const [selectedCard, setSelectedCard] = useState(null); // Will hold { columnIndex, cardIndex }

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

    const updateCardDescription = (desc) => {
        if (!selectedCard) return;
        const { columnIndex, cardIndex } = selectedCard;
        setColumns(prevColumns => prevColumns.map((col, ci) => {
            if (ci !== columnIndex) return col;
            return {
                ...col,
                cards: col.cards.map((card, caIdx) =>
                    caIdx === cardIndex ? { ...card, text: desc } : card
                )
            };
        }));
    };

    return (
        <ModalContext.Provider
            value={{
                modalVisible,
                description,
                comment,
                comments,
                columns,
                setColumns,
                toggleModal,
                addNewDescription,
                addNewComment,
                addComment,
                selectedCard,
                setSelectedCard,
                updateCardDescription
            }}>
            {children}
        </ModalContext.Provider>
    );
}

export const ModalContextConsumer = ModalContext.Consumer;