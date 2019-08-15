import React, { Component } from 'react';
import tags from 'tags';
import Tag, { TAG_TYPES } from 'components/Tag/Tag';
import CloseButton from 'components/CloseButton/CloseButton';
import { TagPanelContextConsumer } from 'components/Contexts/TagPanelContext';
import './TagContainer.scss';

class TagContainer extends Component {
    render() {
        return (
            <TagPanelContextConsumer>
                {
                    ({tagContainerVisible, closeTagContainer}) => (
                        tagContainerVisible &&
                        <div className='tag-container'>
                            <h2 className='h2'>Labels</h2>
                            <div onClick={closeTagContainer}>
                                <CloseButton></CloseButton>
                            </div>
                            <input className='input' type='text' placeholder='Search labels...'></input>
                            {
                                tags.map(tag => <Tag
                                    type={TAG_TYPES.BIG}
                                    key={tag.id}
                                    name={tag.name}
                                    color={tag.color} />)
                            }
                        </div>
                    )
                }
            </TagPanelContextConsumer>
        )
    }
}

export default TagContainer;