import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/StarAvaliation.css';

const qtdStar = [1,2,3,4,5];
  const StarAvaliation = (props) => {
    return (
      <ul>
        {qtdStar.map(i => {
          return <FontAwesomeIcon className={styles.star} key={i} icon={faStar} />
        })}
      </ul>
    )
  }    
  
export default StarAvaliation;
