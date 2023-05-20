import React from 'react';
import PropTypes from 'prop-types';

const Statistics =({good, neutral, bad, total, positivePercentage}) => {   

     
return(
< >   
    
   <p>Good: <span>{good}</span></p>
   <p>Neutral: <span>{neutral}</span></p>
   <p>Bad: <span>{bad}</span></p>
   <p>Total: <span>{total}</span></p>
   <p>Positive feedback: <span>{positivePercentage? positivePercentage: 0}%</span></p>
     </> )
    
}

Statistics.propTypes ={
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}


export default Statistics