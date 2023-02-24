import LoginForm from "./LoginForm";
import { useAuth } from '../contexts/auth'
import Affirmation from "./dailyAffirmation/App";
import LandingHeader from "./LandingHeader";

export default function Landing() {

  const { login } = useAuth();

  return (
    <>
      <LandingHeader />
      <Affirmation />
      <LoginForm onLogin={login} />

      <h2 className="p-2 font-mono text-center border-black bg-black text-white tracking-wider"> Testimonials</h2>

      <div className="min-h-screen bg-blue-900 py-6 flex flex-col justify-center sm:py-12">
        <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">

          <div className="relative text-gray-700 antialiased text-sm font-semibold">

            {/* <!-- Vertical bar running through middle --> */}
            <div className="hidden sm:block w-1 bg-gray-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div className="p-4 bg-white rounded shadow italic font-light">
                      "I love how easy and simple this site makes it to track jobs I have applied to. It has everything I need and more to show my job search progress. Thanks JAT!!!" 
                      -user98753
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
                    <div className="p-4 bg-white rounded shadow italic font-light">
                      "I love coming to this site and getting motivated to find a job. JAT makes it SO easy to stay organized and motivated no matter what!" -anonymous
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
                    <div className="p-4 bg-white rounded shadow italic font-light">
                      "I'm a big fan of keeping things neat and organized, and using this site is just so much easier and more fun than using a plain old spreadsheet. Just JAT It Down!" -JobZaddy1988
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
                    <div className="p-4 bg-white rounded shadow italic font-light">
                      "I love the donut stats that tell you what site you apply most with! It reminds me to visit other sites and look there as well." -bowzer8
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

    </>
  )

}