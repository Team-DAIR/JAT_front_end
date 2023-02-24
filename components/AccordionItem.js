import React from "react";
import { HiArrowCircleDown, HiX } from 'react-icons/hi';

export default function AccordionItem ({ title, date_applied, notes, method_of_applications, referrals, first, second, third, rejected, offer, Id, Index, setIndex, deleteJob, job }) {

  const handleSetIndex = (Id) => Index !== Id && setIndex(Id);

  function handleDelete() {
    deleteJob=(job.id);
    console.log('handleDelete has been called')
    console.log(job.id)
  }

  return (
    <>
      <div onClick={() => handleSetIndex(Id)} className='flex group cursor-pointer w-3/4 mx-auto h-16 justify-between items-center p-2 mt-2 rounded bg-slate-400 hover:bg-slate-800 hover:shadow-lg focus:bg-slate-800'>
        <div className="flex group cursor-pointer">
          <div className="text-slate-800 font-semibold pl-10 group-hover:text-white hover:bg-slate-800">
            {title}
          </div>
        </div>
        <div className="flex items-center justify-center pr-10">
          {
            Index != Id ? (<HiArrowCircleDown className="w-6 h-6 group-hover:text-white text-slate-800" />) : (<HiX className="w-6 h-6 group-hover:text-white text-slate-800" />)
          }
        </div>
      </div>
      {Index === Id && (
        <div>
          <div className="bg-slate-100 px-10 font-semibold text-slate-800 w-3/4 h-auto rounded-md border-1 border-blue-300 mb-2 py-4">
            Date Applied: {date_applied}
          </div>
          <div className="bg-slate-100 px-10 font-semibold text-slate-800 w-3/4 h-auto rounded-md border-1 border-blue-300 mb-2 py-4">
            Notes: {notes}
          </div>
          <div className="bg-slate-100 px-10 font-semibold text-slate-800 w-3/4 h-auto rounded-md border-1 border-blue-300 mb-2 py-4">
            Method of Application: {method_of_applications}
          </div>
          <div className="bg-slate-100 px-10 font-semibold text-slate-800 w-3/4 h-auto rounded-md border-1 border-blue-300 mb-2 py-4">
            Referral? {referrals}
          </div>
          {
            first
            ? 
            <div className="bg-slate-100 px-10 font-semibold text-slate-800 w-3/4 h-auto rounded-md border-1 border-blue-300 mb-2 py-4">
            First Interview: &#x2713;
            </div>
            :
            ''
          }
          {
            second
            ? 
            <div className="bg-slate-100 px-10 font-semibold text-slate-800 w-3/4 h-auto rounded-md border-1 border-blue-300 mb-2 py-4">
            Second Interview: &#x2713;
            </div>
            :
            ''
          }
          {
            third
            ? 
            <div className="bg-slate-100 px-10 font-semibold text-slate-800 w-3/4 h-auto rounded-md border-1 border-blue-300 mb-2 py-4">
            Third Interview: &#x2713;
            </div>
            :
            ''
          }
          {
            rejected
            ? 
            <div className="bg-slate-100 px-10 font-semibold text-slate-800 w-3/4 h-auto rounded-md border-1 border-blue-300 mb-2 py-4">
            Rejected: &#128546;
            </div>
            :
            ''
          }
          {
            offer
            ? 
            <div className="bg-slate-100 px-10 font-semibold text-slate-800 w-3/4 h-auto rounded-md border-1 border-blue-300 mb-2 py-4">
            Offer Received! &#129321;
            </div>
            :
            ''
          }
          <button onClick={handleDelete}>Delete</button>
          
        </div>
      )}
    </>
  )
}

// export default AccordionItem;