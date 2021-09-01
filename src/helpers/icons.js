import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    
    faExclamationTriangle, faFileDownload, faPaperPlane, faInfoCircle, faPlayCircle, faCheckSquare, faUserCheck, faCoffee, faSearch, faUser, faList, faEdit, faEllipsisV, faShare, faChartBar, faEye, faCopy, faBan, faTrash, faKey, faTags, faEnvelopeOpenText
  } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(faExclamationTriangle, faFileDownload, faPaperPlane, faInfoCircle, faPlayCircle, faUserCheck, faEnvelopeOpenText, faTags, faCheckSquare, faCoffee, faSearch, faUser, faList, faEdit, faEllipsisV, faShare, faChartBar, faEye, faCopy, faBan, faTrash, faKey)
}

export default Icons;
