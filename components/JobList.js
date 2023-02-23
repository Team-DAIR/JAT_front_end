import React, { useState } from 'react';
import AccordionUI from './AccordionUI';

export default function JobList() {

  const [Index, setIndex] = useState(false);

  const info = [
    {
      id: 1,
      title: 'Job Title 1 at Company A',
      details: 'Job 1 Details',
    },
    {
      id: 2,
      title: 'Job Title 2 at Company B',
      details: 'Job 2 Details',
    },
    {
      id: 3,
      title: 'Job Title 3 at Company C',
      details: 'Job 3 Details',
    },
  ];
  
  return (
    <div className='flex flex-col justify-center items-center md:mt-32 md:mx-60 p-10 rounded-xl h-auto py-20 bg-gray-50'>
      {
        info.map((info) => {
          return (
            <AccordionUI 
              title={info.title}
              Id={info.id}
              details={info.details}
              Index={Index}
              setIndex={setIndex}
              >
              
            </AccordionUI>
          )
        })
      }
      

    </div>
  )
}