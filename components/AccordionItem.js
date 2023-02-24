import React from "react";
import { HiArrowCircleDown, HiX, HiTrash } from 'react-icons/hi';

export default function AccordionItem({ title, date_applied, notes, method_of_applications, referrals, first, second, third, rejected, offer, Id, Index, setIndex, onDelete }) {

  const handleSetIndex = (Id) => Index !== Id && setIndex(Id);

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
            Index != Id
              ?
              (<HiArrowCircleDown className="w-6 h-6 group-hover:text-white text-slate-800" />)
              :
              (
                <div className="flex items-center">
                  <HiX className="w-6 h-6 group-hover:text-white text-slate-800" />
                  <HiTrash
                    className="w-6 h-6 group-hover:text-white text-slate-800"
                    onClick={() => onDelete(Id)}
                  />
                </div>
              )
          }
        </div>
      </div>
      {Index === Id && (
        <div className=" w-2/3 bg-slate-100 rounded-md border-solid border-2 border-slate-500 mt-2">
          <div className="flex justify-evenly text-center">
            <div>
              <div className="bg-slate-100 px-10 font-semibold text-slate-800  h-auto py-4 rounded-md">
                Date Applied: {date_applied}
              </div>
              <div className="bg-slate-100 px-10 font-semibold text-slate-800  h-auto py-4 rounded-md">
                Notes: {notes}
              </div>
            </div>
            <div>
              <div className="bg-slate-100 px-10 font-semibold text-slate-800 h-auto py-4 rounded-md">
                Method of Application: {method_of_applications}
              </div>
              <div className="bg-slate-100 px-10 font-semibold text-slate-800 h-auto py-4 rounded-md">
                Referral? {referrals}
              </div>
            </div>
          </div>
          <div className="flex flex-row text-center w-auto">
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
          </div>

          {/* <button onClick={handleDelete}>Delete</button> */}

        </div>
      )}
    </>
  )
}

// export default AccordionItem;