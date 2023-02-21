// import { Button } from '@paljs/ui/Button';
// import { InputGroup } from '@paljs/ui/Input';
// import { Checkbox } from '@paljs/ui/Checkbox';
// import React from 'react';
// import Link from 'next/link';

// import Auth, { Group } from 'components/Auth';
// import Socials from 'components/Auth/Socials';
// import Layout from 'Layouts';

// export default function Login() {
//   const onCheckbox = () => {
//     // v will be true or false
//   };
//   return (
//     <Layout title="Login">
//       <Auth title="Login" subTitle="Hello! Login with your email">
//         <form>
//           <InputGroup fullWidth>
//             <input type="email" placeholder="Email Address" />
//           </InputGroup>
//           <InputGroup fullWidth>
//             <input type="password" placeholder="Password" />
//           </InputGroup>
//           <Group>
//             <Checkbox checked onChange={onCheckbox}>
//               Remember me
//             </Checkbox>
//             <Link href="/auth/request-password">
//               <a>Forgot Password?</a>
//             </Link>
//           </Group>
//           <Button status="Success" type="button" shape="SemiRound" fullWidth>
//             Login
//           </Button>
//         </form>
//         <Socials />
//         <p>
//           Don&apos;t have account?{' '}
//           <Link href="/auth/register">
//             <a>Register</a>
//           </Link>
//         </p>
//       </Auth>
//     </Layout>
//   );
// } 

import Header from "./Header";
import Footer from "./Footer";

export default function LoginForm({ onLogin }) {

    async function handleSubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value);
    }

    return (
            <>
            <Header/>
            <form onSubmit={handleSubmit}>
                <fieldset className="place-content-center border m-16 border-gray-700 bg-stone-400 p-3" autoComplete='off'>
                    {/* <legend className='flex rounded-full p-4 bg-zinc-500 text-gray-800 font-medium text-2xl font-serif m-32'></legend> */}
                    <label className="p-1" htmlFor="username">Username: </label>
                    <input name="username" />
                    <label className="p-1" htmlFor="password">Password: </label>
                    <input type="password" name="password" />
                    <button className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-mono rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 m-4'>Get Started!</button>
                </fieldset>
            </form>
            <Footer />
        </>
    );
}