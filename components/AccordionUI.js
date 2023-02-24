import React from "react";
import {HiArrowCircleDown,HiX} from 'react-icons/hi';

const AccordionUI = ({title, details, Id, Index, setIndex}) => {

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
            Index != Id ? (<HiArrowCircleDown className="w-6 h-6 group-hover:text-white text-slate-800"/>) : (<HiX className="w-6 h-6 group-hover:text-white text-slate-800"/>)
          }
        </div>
      </div>
      {Index === Id && (
        <div className="bg-slate-100 px-10 font-semibold text-slate-800 w-3/4 h-auto rounded-md border-1 border-blue-300 mb-2 py-4">
          {details}
        </div>
      )}
    </>
  )
}

export default AccordionUI;