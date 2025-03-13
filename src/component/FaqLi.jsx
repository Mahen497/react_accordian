import { useState } from "react";

const FaqLi = ({ faqData, onToggle, isActive }) => {
   const { question, answer } = faqData;
   
   return (<>
      <li>
         <div className='accordin-grid'>
            <h3>
               {question}
            </h3>
            <button
               onClick={onToggle}
               className={isActive ? "active-btn" : ''}>
               {isActive ? "Hide" : "Show"}
            </button>
         </div>
         {
            isActive && <p>{answer}</p>
         }
         
      </li>
   </>);
}

export default FaqLi;