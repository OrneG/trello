import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import { ModalContext } from 'components/Contexts/ModalContext';
import './ModalDescription.css';

export default function ModalDescription() {
    const {
        columns,
        selectedCard,
        updateCardDescription
    } = useContext(ModalContext);

    const [isEditing, setIsEditing] = useState(true);
    const [localDescription, setLocalDescription] = useState('');

    let description = '';
    if (
        selectedCard &&
        columns[selectedCard.columnIndex] &&
        columns[selectedCard.columnIndex].cards[selectedCard.cardIndex]
    ) {
        description = columns[selectedCard.columnIndex].cards[selectedCard.cardIndex].text || '';
    }

    useEffect(() => {
        setLocalDescription(description);
    }, [selectedCard, description]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            updateCardDescription(localDescription);
            setIsEditing(false);
        }
    };
    const handleSave = () => {
        updateCardDescription(localDescription);
        setIsEditing(false);
    };
    const handleEdit = () => {
        setIsEditing(true);
    };
    return (
        <div className='modal-description'>
            <h2 className='h2'>
                <FontAwesomeIcon className='icon' icon={faAlignLeft}></FontAwesomeIcon>Description
            </h2>
            {isEditing ? (
                <>
                    <textarea
                        className='textarea'
                        placeholder='Add a more detailed description for this task...'
                        value={localDescription}
                        onChange={e => setLocalDescription(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                    <div onClick={handleSave}>
                        <Button classType={BUTTON_TYPES.GREEN} text='Save'></Button>
                    </div>
                </>
            ) : (
                <div
                    className='description-view'
                    onClick={handleEdit}
                    style={{ whiteSpace: 'pre-wrap', cursor: 'pointer' }}
                >
                    {description || <span style={{ color: '#888' }}>No description</span>}
                </div>
            )}
        </div>
    );
}