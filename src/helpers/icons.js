import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    
    faCheckSquare, faCoffee, faSearch, faUser, faList, faEdit, faEllipsisV, faShare, faChartBar, faEye, faCopy, faBan, faTrash
  } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(faCheckSquare, faCoffee, faSearch, faUser, faList, faEdit, faEllipsisV, faShare, faChartBar, faEye, faCopy, faBan, faTrash)
}

export default Icons;