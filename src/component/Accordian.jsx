import { useState } from 'react';
import faqData from '../API/faq.json'
import { useEffect } from 'react';
import FaqLi from './FaqLi';

const Accordian = () => {
   const [data, setData] = useState([]);
   const [activeId, setActiveId] = useState(null);

   const handleButton = (id) => {
      setActiveId((prev) => prev === id ? null : id)
   }

   useEffect(() => {
      setData(faqData)
   }, [])

   return (
      <>
         <ul className='section-accordian'>
            {
               data.map((item) => {
                  console.log(`activeId === item.id, ${activeId} === ${item.id} = ${activeId === item.id}`);

                  return <FaqLi
                     key={item.id}
                     faqData={item}
                     isActive={activeId === item.id}
                     onToggle={() => handleButton(item.id)}
                  />
               })
            }
         </ul>
         I'm currently looking for a UI Developer role, but I’ve noticed that job requirements vary a lot. Some positions ask for just HTML, CSS, jQuery, JavaScript, and Bootstrap, while others expect a broader tech stack.

         I saw that you’ve worked with frontend technologies before, which is what I’m currently focusing on. Could you share some insights about your experience—what skills are most important, and how can I better prepare for these roles?
      </>
   );
}

export default Accordian;