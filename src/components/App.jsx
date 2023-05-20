import {  useState } from 'react';
import React from 'react';


import FeedbackOptions from "components/Feedback/Feedback"
import Statistics from 'components/Statistics/Statistics'
import Section from './Sections/Sections';
import Notification from './Notification/Notification';


export default function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, SetBad] = useState(0);
 
  const option = {good, neutral, bad}

const  handleIncrement = e=>{
  const option = e.currentTarget.innerHTML;
       switch(option){
    case 'good':
        setGood(state => state + 1)
        break;
    case 'neutral':
        setNeutral(state => state + 1)
        break;
    case 'bad':
        SetBad(state => state + 1)
        break;
    default: return
       } }
   
   
   const countTotalFeedback = () => {
    const totalFeed = Object.values(option).reduce((acc, value) => acc + value, 0);
    return totalFeed;
   };

    const countPositiveFeedbackPercentage =()=> {
    const allFeedback = countTotalFeedback()
    return  Math.round((good/allFeedback)*100)}
  
 
   const total = countTotalFeedback();
   const positivePercentage = countPositiveFeedbackPercentage();
    
    return (
      <div
      style={{
        margin: "20px",
        height: '100vh',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101'
      }}
    >
    
     <Section title = 'Please leave feedback' >
     <FeedbackOptions 
      options = {['good', 'neutral', 'bad']}
      onLeaveFeedback = {handleIncrement}/>
     </Section>
    
    <Section title='Statistics'>
      {total >0? (<Statistics 
      good={good} 
      neutral={neutral} 
      bad={bad}
      total={total} 
      positivePercentage={positivePercentage}/>):
     ( <Notification message="There is no feedback"/>)
       }
    </Section>
    </div>
    );
  
}



