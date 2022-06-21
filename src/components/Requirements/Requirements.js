import React from 'react';
import PropTypes from 'prop-types';
const img = "https://img.icons8.com/ios/50/undefined/ok--v1.png";
import './style.css'




/**
 * function modal
 * @param {string} title - The title of the modal.
 * @param {string} text - The text of the modal.
 * @param {function} boolean - false to close the modal
  
 }} text - The text of the modal.
 */

export const Requirements = ({text, title, setShow}) => {
    return (  <>
        <div className= 'displayBlock'>
             <div className='modal-box'>
             <div className='text'>
             <img src={img} alt="success"/>
             <p className='title'>{title}</p>
             {text}
             </div>
             <button className='closeOne'  onClick={() => setShow(false)}>
                 X
             </button>
           </div>
       </div>
        </>
        )
}

Requirements.propTypes = {
    text: PropTypes.string,
    title: PropTypes.string.isRequired,
    setshow: PropTypes.func,
  };

  Requirements.defaultProps = {
    title: 'Congratulations !',
    text: "Operation run with success !",
    setshow: false,
  };

