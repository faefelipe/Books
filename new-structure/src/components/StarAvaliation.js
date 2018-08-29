import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../styles/StarAvaliation.css';

  const StarAvaliation = (props) => {    
    
    return (
      <li>
        <FontAwesomeIcon className="star" icon={faStar} />
      </li>
    )
  }    
  
export default StarAvaliation;
