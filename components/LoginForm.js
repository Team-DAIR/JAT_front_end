import Header from "./Header";
import Footer from "./Footer";

export default function LoginForm({ onLogin }) {

    async function handleSubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value);
    }

    return (
            <>
            <div className="overscroll-auto">

            <Header/>
            <form onSubmit={handleSubmit}>
                <fieldset className="overscroll-autoplace-content-center border m-16 border-gray-700 bg-stone-400 p-6" autoComplete='off'>
                    {/* <legend className='flex rounded-full p-4 bg-zinc-500 text-gray-800 font-medium text-2xl font-serif m-32'></legend> */}
                    <label className="p-1" htmlFor="username">Username: </label>
                    <input name="username" />
                    <label className="p-1" htmlFor="password">Password: </label>
                    <input type="password" name="password" />
                    <button className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-mono rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 m-4'>Get Started!</button>
                </fieldset>
            </form>

            <h2 className="p-2 font-mono text-center border-black bg-black text-white tracking-wider"> Testimonials</h2>
            <div className="grid grid-rows-4 grid-flow-col gap-4">

            <article className="col-span-3 text-left m-4 p-4 bg-gradient-to-r from-black to-gray-200 w-2/5 rounded-full">Testimony 1</article>
            <article className="col-span-2 text-right m-4 p-4 bg-gradient-to-l from-black to-gray-200 w-2/5 rounded-full">Testimony 2</article>
            <article className="col-span-1 text-left m-4 p-4 bg-gradient-to-r from-black to-gray-200 w-2/5 rounded-full">Testimony 3</article>
            <article className="col-span-4 text-right m-4 p-4 bg-gradient-to-l from-black to-gray-200 w-2/5 rounded-full">"Testimony 4"</article>
            </div>
            </div>
            <Footer />
        </>
    );
}