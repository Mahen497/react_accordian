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
      </>
   );
}

export default Accordian;