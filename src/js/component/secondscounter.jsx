// import { propTypes } from "prop-types";
import React from "react";


const Counter = (props) => {

const digitStyle = {
    maxWidth: '110px', 
    fontSize: '45px',
    textAlign: 'center',
    border: '1px solid #666',
    borderRadius: '10px',
    backgroundColor: 'black',
    color: 'white',
 
  };

    
    return (
        <div className='bigCounter d-flex justify-content-center pt-5 pb-5 bg-black'>
            <div style={digitStyle} className='icon p-5 me-2 d-flex align-items-center justify-content-center'><i className="far fa-clock"></i></div>
            <div style={digitStyle} className='six p-5 me-2 d-flex align-items-center justify-content-center' >{props.digitSix}</div>
            <div style={digitStyle} className='five p-5 me-2 d-flex align-items-center justify-content-center'>{props.digitFive}</div>
            <div style={digitStyle} className='four p-5 me-2 d-flex align-items-center justify-content-center'>{props.digitFour}</div>
            <div style={digitStyle} className='three p-5 me-2 d-flex align-items-center justify-content-center'>{props.digitThree}</div>
            <div style={digitStyle} className='two p-5 me-2 d-flex align-items-center justify-content-center'>{props.digitTwo}</div>
            <div style={digitStyle} className='one p-5 d-flex align-items-center justify-content-center'>{props.digitOne}</div>
        </div>

    )};

    


export default Counter;