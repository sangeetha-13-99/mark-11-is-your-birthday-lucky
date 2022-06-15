import {useState} from 'react';

export default function Main(){
  let [isLuckyMessage,setIsLuckyMessage]=useState('');
  let [isSuccessMessage,setIsSuccessMessage]=useState('');
  function checkIsBirthdayLucky(dob,luckyNumber){
    let sumOfDate=Array.from(dob.replaceAll('-','')).reduce((sum,item)=>sum+Number(item),0);
    if(sumOfDate%luckyNumber===0){
      return true
    }
    return false;
  }

  function clickHandler(){
      let birthDate=document.querySelector('.birthDate').value;
      let luckyNumber=document.querySelector('.luckyNumber').value;
      let check=checkIsBirthdayLucky(birthDate,luckyNumber);
      if(check){
        setIsSuccessMessage('success');
        setIsLuckyMessage('yay, your BirthDay is Lucky 🥳');
      }
      else{
        setIsSuccessMessage('fail');
        setIsLuckyMessage('Your BirthDate is Not Lucky 😖');
      }
  }

return (
  <div className="mainContainer">
    <div className="formContainer">
      <input className="birthDate" type="date" placeholder="Enter your birthDate" arialabel="birthdate"/>
      <input className="luckyNumber" range="" type="number" placeholder="Enter your luckyNumber" arialabel="luckyNumber"/>
    </div>
    <button onClick={clickHandler} className="checkLucky">Check</button>
    <div className={"outputMessage "+(isSuccessMessage) }>
        {isLuckyMessage==""?'Enter your Details Here 😃':isLuckyMessage}
    </div>
  </div>
  )
}