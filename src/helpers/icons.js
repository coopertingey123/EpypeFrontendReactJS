import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    
    faCheckSquare, faCoffee, faSearch
  } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(faCheckSquare, faCoffee, faSearch)
}

export default Icons;
