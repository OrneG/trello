import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './NavInput.css';

class NavInput extends Component {
    state = {
        large: false
    }
    enlargeInput = () => {
        this.setState({ large: true })
    }
    render() {
        // const { onFocus } = this.props;
        return (
            <>
            <input type='text' className='nav-input' onFocus={this.enlargeInput}
            // style={{
            //     width: 300,
            //     backgrondColor: white
            // }}
            >
            </input>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </>
        )
    }
}

export default NavInput;