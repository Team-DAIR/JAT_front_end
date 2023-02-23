import Header from "./Header";
import Footer from "./Footer";
import App from "./dailyAffirmation/App";

export default function LoginForm({ onLogin }) {

    async function handleSubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value);
    }

    return (
        <>
            <div className="overscroll-auto">

                <Header />
                <App/>
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
            </div>

            <div className="min-h-screen bg-blue-900 py-6 flex flex-col justify-center sm:py-12">
                <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">

                    <div className="relative text-gray-700 antialiased text-sm font-semibold">

                        {/* <!-- Vertical bar running through middle --> */}
                        <div className="hidden sm:block w-1 bg-gray-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

                        {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div className="p-4 bg-white rounded shadow">
                                            Now this is a story all about how,
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-black border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                </div>
                            </div>
                        </div>

                        {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div className="p-4 bg-white rounded shadow">
                                            My life got flipped turned upside down,
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-black border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">

                                </div>
                            </div>
                        </div>

                        {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div className="p-4 bg-white rounded shadow">
                                            And I'd like to take a minute, just sit right there,
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-black border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">

                                </div>
                            </div>
                        </div>

                        {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                        <div className="mt-6 sm:mt-0">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div className="p-4 bg-white rounded shadow">
                                            "I'll tell you how I became the Prince of a town called Bel Air. blah blah blah lkjsdfl;jaoefjalknsdvln lkdfj ;akjn dfj alkdjs fklaj;s; ;lkj klajsdhfkkjh ferihjn aubtrh j"
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-black border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">

                                </div>
                            </div>
                        </div>



                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}