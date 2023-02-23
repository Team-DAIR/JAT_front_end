import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateApplicationForm() {

    const { user } = useAuth();
    const { createResource } = useResource();
    const [startDate, setStartDate] = useState(new Date());

    function handleSubmit(event) {
        event.preventDefault();
        const info = {
            company: 'Code Fellows',
            job_title: 'Jr. Dev',
            date_applied: '2023-02-22',
            notes: 'n/a',
            method_of_application: 'Other',
            referrals: 'n/a',
            first: false,
            second: false,
            third: false,
            rejected: false,
            offer: false,
            owner: user.id,
        };
        // const info = {
        //     company: event.target.company.value,
        //     job_title: event.target.job_title.value,
        //     date_applied: event.target.date_applied.value,
        //     notes: event.target.notes.value,
        //     method_of_application: event.target.method_of_application.value,
        //     referrals: event.target.referrals.value,
        //     first: event.target.first.checked,
        //     second: event.target.second.checked,
        //     third: event.target.third.checked,
        //     rejected: event.target.rejected.checked,
        //     offer: event.target.offer.checked,
        //     owner: user.id,
        // };
        console.log(info)
        createResource(info);

    }

    return (
        <form className="flex w-3/4 p-6 mx-auto my-6 bg-blue-900/50 border border-blue-900 justify-center" onSubmit={handleSubmit}>
            <fieldset className='w-11/12'>

                <label htmlFor='job_title' className='inline-grid content-center text-white mx-4 my-2'>Job Title</label>
                <input type='text' name='job_title' id='job_title' className='content-center mx-2 my-2 w-6/12' placeholder='ex: Software Developer' />

                <label htmlFor='company' className='inline-grid content-center text-white mx-4 my-2'>Company</label>
                <input type='text' name='company' id='company' className='content-center mx-2 my-2 w-6/12' placeholder='ex: Code Fellows' />

                <label htmlFor='date_applied' className='inline-grid content-center text-white mx-4 my-2'>Date Applied</label>
                {/* <input type='text' name='date_applied' id='date_applied' className='content-center mx-2 my-2 w-6/12' /> */}
                <DatePicker name='date_applied' id='date_applied' showIcon selected={startDate} onChange={(date) => setStartDate(date)} />

                <label htmlFor='method_of_application' className='inline-grid content-center text-white mx-4 my-2'>How Did You Apply?</label>
                <input type='text' name='method_of_application' id='method_of_application' className='content-center mx-2 my-2 w-6/12' placeholder='ex: Code Fellows' />

                <button className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-mono rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 m-4'>Add New Application</button>

            </fieldset>
        </form>
    );
}