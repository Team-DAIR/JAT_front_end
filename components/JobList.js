import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import useResource from '../hooks/useResource';

export default function JobList() {

  const { resources } = useResource();
  const [Index, setIndex] = useState(false);
  const [resourcesState, setResourcesState] = useState(resources);

  function onDelete(id) {
    const updatedResources = resourcesState.filter(resource => resource.id !== id);
    setResourcesState(updatedResources);
  }

  // console.log(deleteJob)

  return (
    <div className='flex m-auto flex-col justify-center items-center p-10 rounded-xl h-auto py-20 bg-slate-200 w-5/6' >
      {
        resourcesState.map((job) => {
          return (
            <AccordionItem
              title={`${job.job_title} at ${job.company}`}
              key={job.id}
              Id={job.id}
              date_applied={job.date_applied}
              notes={job.notes}
              method_of_applications={job.method_of_applications}
              referrals={job.referrals}
              first={job.first}
              second={job.second}
              third={job.third}
              rejected={job.rejected}
              offer={job.offer}
              Index={Index}
              setIndex={setIndex}
              onDelete={onDelete}
              job={job}
            >
            </AccordionItem>
            
          )
        })
      }
    </div>
  )
}
