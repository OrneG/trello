import { v4 as uuid } from 'uuid';
import { faUser, faCheckSquare, faClock } from '@fortawesome/free-regular-svg-icons';
import { faTag, faPaperclip } from '@fortawesome/free-solid-svg-icons';

const modalButtons = [
    {
        id: uuid(),
        name: 'Members',
        icon: faUser
    },
    {
        id: uuid(),
        name: 'Labels',
        icon: faTag
    },
    {
        id: uuid(),
        name: 'Checklist',
        icon: faCheckSquare
    },
    {
        id: uuid(),
        name: 'Due Date',
        icon: faClock
    },
    {
        id: uuid(),
        name: 'Attachment',
        icon: faPaperclip
    }
]

export default modalButtons;