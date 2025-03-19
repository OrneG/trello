import React, {Component} from 'react';
import uuid from 'uuid/v4';

const ModalContext = React.createContext();

class ModalContextProvider extends Component {
    state = {
        modalVisible: false,
        description: '',
        comment: '',
        comments: [],
        cards: []
    }
    toggleModal = () => {
        this.setState({ modalVisible: !this.state.modalVisible })
    }
    addNewDescription = event => {
        this.setState({ description: event.target.value })
    }
    addNewComment = event => {
        this.setState({ comment: event.target.value })
    }
    addComment = () => {
        const newComment = {
            id: uuid(),
            text: this.state.comment,
        }
        const comments = this.state.comments.slice();
        comments.push(newComment)
        this.setState({ comment: '', comments: comments})
    }
    addCardDescription = () => {
        const newDescription = {
            id: uuid(),
            text: this.state.description,
        }
        const cards = this.state.cards.slice();
        cards.push(newDescription)
        this.setState({ description: '', cards: cards})
    }
    render() {
        return (
            <ModalContext.Provider
            value = {{
                modalVisible: this.state.modalVisible,
                description: this.description,
                comment: this.state.comment,
                comments: this.state.comments,
                toggleModal: this.toggleModal,
                addCardDescription: this.addCardDescription,
                addNewDescription: this.addNewDescription,
                addNewComment: this.addNewComment,
                addComment: this.addComment
            }}>
                {this.props.children}
            </ModalContext.Provider>
        )
    }
}

export const ModalContextConsumer = ModalContext.Consumer
export default ModalContextProvider;