import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    
    faExclamationTriangle, faFileDownload, faPaperPlane, faInfoCircle, faPlayCircle, faCheckSquare, 
    faUserCheck, faCoffee, faSearch, faUser, faList, faEdit, faEllipsisV, faShare, faFileVideo,
    faChartBar, faEye, faCopy, faBan, faTrash, faKey, faTags, faEnvelopeOpenText, faGripLines, faVideo,
    faHeading, faAlignCenter, faImage, faLink, faShoppingCart, faComments, faFileCsv, faColumns, faUserTag,
    faEyeSlash
  } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(faExclamationTriangle, faFileDownload, faPaperPlane, faInfoCircle, faGripLines,
      faPlayCircle, faUserCheck, faEnvelopeOpenText, faTags, faCheckSquare, faCoffee, faFileVideo,
      faSearch, faUser, faList, faEdit, faEllipsisV, faShare, faChartBar, faEye, faCopy, faBan, faTrash, faKey, 
      faVideo, faHeading, faAlignCenter, faImage, faLink, faShoppingCart, faComments, faFileCsv, faColumns, faUserTag,
      faEyeSlash)
}

export default Icons;
