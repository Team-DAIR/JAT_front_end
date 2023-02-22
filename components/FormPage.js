import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';

export default function ApplicationForm() {

    const { user } = useAuth();
    const { createResource } = useResource();

    function handleSubmit(event) {
        event.preventDefault();
        const info = {
            location: event.target.location.value,
            minimum_customers_per_hour: parseInt(event.target.minimum.value),
            maximum_customers_per_hour: parseInt(event.target.maximum.value),
            average_cookies_per_sale: parseFloat(event.target.average.value),
            owner: user.id,
        };
        createResource(info);

    }

    return (
        <form className="flex w-3/4 p-6 mx-auto my-6 bg-blue-900/50 border border-blue-900 justify-center" onSubmit={handleSubmit}>
            <fieldset className='w-11/12'>
                <legend className='inline-grid content-center text-white mx-4 my-2'>Position</legend>
                <input className='content-center mx-2 my-2 w-6/12' placeholder='ex: Software Developer' name='location' />
                <button className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-mono rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 m-4'>Add New Application</button>
                <legend className=' text-white inline-block p-3 '>Minimun Customers Per Hour</legend>
                <input className='relative left-0.5 mx-2 my-2 w-3/12' placeholder='minimum' name='minimum' defaultValue={0} />
                <legend className='inline-grid  text-white content-center p-3'>Maximum Customers Per Hour</legend>
                <input className='content-center inline-block mx-2 my-2 w-3/12' placeholder='maximum' name='maximum' defaultValue={0} />
                <legend className='inline-grid  text-white content-center p-3'>Average Cookies Per Sale</legend>
                <input className='relative right-0.5 mx-2 my-2 w-3/12' placeholder='average' name='average' defaultValue={0} />
            </fieldset>
        </form>
    );
}