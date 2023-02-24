import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import useResource from '../hooks/useResource';

export default function JobList() {

  const { resources } = useResource();
  const [Index, setIndex] = useState(false);

  return (
    <div className='flex m-auto flex-col justify-center items-center p-10 rounded-xl h-auto py-20 bg-slate-200 w-5/6' >
      {
        resources.map((job) => {
          return (
            <AccordionItem
              title={`${job.job_title} at ${job.company}`}
              Id={job.id}
              details={job.company}
              Index={Index}
              setIndex={setIndex}
            >
            </AccordionItem>
          )
        })
      }
    </div>
  )
}
