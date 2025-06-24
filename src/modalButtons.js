import { faUser, faCheckSquare, faClock } from '@fortawesome/free-regular-svg-icons';
import { faTag, faPaperclip } from '@fortawesome/free-solid-svg-icons';

const modalButtons = [
    {
        name: 'Members',
        icon: faUser
    },
    {
        name: 'Labels',
        icon: faTag
    },
    {
        name: 'Checklist',
        icon: faCheckSquare
    },
    {
        name: 'Due Date',
        icon: faClock
    },
    {
        name: 'Attachment',
        icon: faPaperclip
    }
]

export default modalButtons;