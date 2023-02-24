import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from 'next/router';

export default function CreateJobForm() {

    const { user } = useAuth();
    const { createResource } = useResource();
    const [startDate, setStartDate] = useState(new Date());

    const router = useRouter()

    function handleSubmit(event) {
        event.preventDefault();

        const originalDate = event.target.date_applied.value;
        const parsedDateArr = originalDate.split('/');
        const parsedDate = `${parsedDateArr[2]}-${parsedDateArr[0]}-${parsedDateArr[1]}`;

        router.push('/dashboard')

        const info = {
            company: event.target.company.value,
            job_title: event.target.job_title.value,
            date_applied: parsedDate,
            notes: event.target.notes.value,
            method_of_applications: event.target.method_of_applications.value,
            referrals: event.target.referrals.value,
            first: false,
            second: false,
            third: false,
            rejected: false,
            offer: false,
            owner: user.id,
        };
        createResource(info);

    }

    return (
        <>

                <form className="flex w-6/12 p-6 mx-auto my-16 bg-blue-800/50 border border-blue-900 h-3/4 place-contents-center" onSubmit={handleSubmit}>
                    <fieldset className='w-11/12 place-contents-center'>

                        <h3 className='text-white p-1'>Job Title</h3>
                        <input type='text' name='job_title' id='job_title' className='content-center mx-2 my-2 w-6/12 p-0.5' placeholder='ex: Software Developer' />

                        <h3 className='text-white p-1'>Company</h3>
                        <input type='text' name='company' id='company' className='content-center mx-2 my-2 w-6/12 p-0.5' placeholder='ex: Code Fellows' />


                        <h3 className='text-white p-1'>Date Applied</h3>
                        <DatePicker name='date_applied' id='date_applied' showIcon selected={startDate} onChange={(date) => setStartDate(date)} className="pl-2"/>

                        <h3 className='text-white p-1'>Notes</h3>
                        <input type='text' name='notes' id='notes' className='content-center mx-2 my-2 w-6/12 p-0.5' placeholder='Optional' />

                        <h3 className='text-white p-1'>How did you apply?</h3>
                        <select name='method_of_applications' id='method_of_applications' className='content-center mx-2 my-2 w-6/12 p-0.5'>
                            {/* <option selected value='choose'>Choose a method</option> */}
                            <option value="linkedin">LinkedIn</option>
                            <option value="indeed">Indeed</option>
                            <option value="company_website">Company Website</option>
                            <option value="other">Other</option>
                        </select>

                        <h3 className='text-white'>Referral</h3>
                        <input type='text' name='referrals' id='referrals' className='content-center mx-2 my-2 w-6/12 p-0.5' placeholder='ex: Code Fellows' />

                        <button className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-mono rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 m-4'>Add New Application</button>

                    </fieldset>
                </form>
        </>
    );
}