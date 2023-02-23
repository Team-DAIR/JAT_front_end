

export default function LoginForm({ onLogin }) {

    async function handleSubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset className="border m-16 border-gray-700 bg-stone-400 p-6" autoComplete='off'>
                    {/* <legend className='flex rounded-full p-4 bg-zinc-500 text-gray-800 font-medium text-2xl font-serif m-32'></legend> */}
                    <label className="p-1 ml-72" htmlFor="username">Username: </label>
                    <input name="username" />
                    <label className="p-1" htmlFor="password">Password: </label>
                    <input type="password" name="password" />
                    <button className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-mono rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 m-4'>Get Started!</button>
                </fieldset>
            </form>
        </>
    );
}