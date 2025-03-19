import React, {Component} from 'react';

const TagPanelContext = React.createContext();

class TagPanelContextProvider extends Component {
    state = {
        tagContainerVisible: false
    }
    openTagContainer = () => {
        this.setState({ tagContainerVisible: true })
    }
    closeTagContainer = () => {
        this.setState({ tagContainerVisible: false })
    }
    render() {
        return (
            <TagPanelContext.Provider
            value = {{
                tagContainerVisible: this.state.tagContainerVisible,
                openTagContainer: this.openTagContainer,
                closeTagContainer: this.closeTagContainer
            }}>
                {this.props.children}
            </TagPanelContext.Provider>
        )
    }
}

export const TagPanelContextConsumer = TagPanelContext.Consumer
export default TagPanelContextProvider;