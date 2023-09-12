import React, { useEffect } from 'react'
import Header from '../../header-footer/Header'
import { useLocation } from 'react-router-dom'

const SuperiorotyExtension = () => {

  const {pathname} = useLocation()
  useEffect(() => {
     
    window.scrollTo({top:0, behavior:"smooth"});

   }, [pathname])


  return (
    <div>
      
      <div className="bg-gray-500">
        <Header></Header>
        </div>
          <div class="section md:flex gap-20 p-10 md:pb-36 justify-center bg-slate-200 items-center">
      <div class="left md:w-8/12">
        <div class="my-6">
          <h2 class="text-3xl text-orange-500">ELITE SUPERIORITY EXTENSION</h2>
          <div class="w-[12%] mt-2 h-[1px] bg-black"></div>
        </div>
        <p class="md:text-justify">Thailand Elite Visa, Elite Superiority Extension Membership for 20 years to stay and enjoy in Thailand for long term. This Thailand Elite Visa membership package allow it’s subscriber to stay and get elite facilities for 20 years. You will be able to enjoy privileges both for business and pleasure. Apart from unlimited enjoyment and discover Thailand, individuals allowed to get amazing healthcare services. Apply today and we always ready to welcome you in the land of smile.
        </p>
      </div>
      <div class="right md:w-4/12">
        <img src="./images/membership-packages/Elite-Superiority-Extension-Membership.jpg" alt="elite superiority extension membership" />
      </div>
    </div>

    <div class="w-[90%] md:-mt-24 mx-auto md:flex gap-6">
      <div class="item md:w-4/12 text-center p-2 bg-white rounded-md shadow-md">
        <div class="flex justify-center items-center rounded-full mx-auto my-4 w-20 h-20 bg-slate-200">
          <span class="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e9bc9b"
              class="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
        </div>
        <div class="">
          <h2 class="font-bold">Membership validity</h2>
          <h3>20 Years</h3>
          <p>Renewable five-year multiple entry visa with an extendable one-year stay per each entry</p>
        </div>
      </div>
      <div class="item md:w-4/12 text-center p-2 bg-white rounded-md shadow-md">
        <div class="flex justify-center items-center rounded-full mx-auto my-4 w-20 h-20 bg-slate-200">
          <span class="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e9bc9b"
              class="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>

          </span>
        </div>
        <div class="">
          <h2 class="font-bold">Membership fee</h2>
          <h3>THB 1 Million
            (VAT Included)</h3>
        </div>
      </div>
      <div class="item md:w-4/12 text-center p-2 bg-white rounded-md shadow-md">
        <div class="flex justify-center items-center rounded-full mx-auto my-4 w-20 h-20 bg-slate-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </div>
        <div class="">
          <h2 class="font-bold">Conditions</h2>
          <h3>Non-transferable</h3>
          <h3>Non-transferable</h3>
        </div>
      </div>
    </div>

    <div className="mx-10 my-20">
      <div className="md:float-left w-5/12 hidden md:block">
      <img className='px-8' src="./images/membership-packages/Elite-Superiority-Extension-Membership.jpg" alt="elite superiority extension membership" />
      </div>
      <h2 className='text-3xl'>Thailand Elite Superiority Extension Membership</h2>
      <h3 className='text-lg text-gray-700 mt-4'>
There are many reasons why expatriates like you are making the right decision to migrate to Thailand after retirement. Beach, exotic food, friendly people… who are just a few for this reason, and you might be able to think of a few of your own.</h3>
      <p className='text-lg leading-loose mt-10 text-gray-600 md:text-justify md:px-8'>Make your life much more comfortable in Thailand by signing up with Thailand Elite Visa Service Elite Excellence Extension Membership. As a member, you know the Thai law inside and outside and get access to legal aid from experts who understand it. It is a helpful tool for staying close when dealing with the legal system in Thailand.

As a member, you get exclusive access, members only offer from participating organizations in the hospitality industry, and even the medical industry. For inquiries, contact or open live chat for more information.</p>
    </div>

    <div className="md:mx-20">
      <h2 className='text-2xl text-center my-10'>MORE INFORMATION ABOUT THIS THAILAND ELITE VISA PACKAGE</h2>
      <p>Payment Pay upon approval of your application.Payment MethodCash, Credit Card, Bank Transfer.</p>
  <table className='w-full text-gray-500'>
  <tr className='bg-gray-50'>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-4/12 font-bold'>Membership Validity</td>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-8/12'>20 Years Elite Visa</td>
  </tr>
  <tr>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-4/12 font-bold'>Membership Fee</td>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-8/12'>THB 1,000,000 (VAT included)</td>
  </tr>
  <tr className='bg-gray-50'>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-4/12 font-bold'>Condition</td>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-8/12'>Non-transferable/Non-refundable</td>
  </tr>
  <tr>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-4/12 font-bold'>Payment Method</td>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-8/12'>Cash, Credit Card, Bank Transfer,</td>
  </tr>
  <tr className='bg-gray-50'>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-4/12 font-bold'>Approval Period</td>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-8/12'>4 to 6 weeks!</td>
  </tr>
  <tr>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-4/12 font-bold'>Privilege Entry Visa:</td>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-8/12'>20 (Twenty) years multiple entry visa with extendable one-year length of stay per each entry</td>
  </tr>
  <tr className='bg-gray-50'>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-4/12 font-bold'>Arrival and Departure:</td>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-8/12'>VIP greeting and escort on arrival and departure by Elite Personal Assistants, Expedited immigration and passport control processing, Exclusive arrival and departure VIP lounges</td>
  </tr>
  <tr>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-4/12 font-bold'>Government Concierges & Facilitation:</td>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-8/12'>Immigration service, 90 day Report, expedite and assist in the processing of Driver's license, Assist in opening bank accounts and Business Networking</td>
  </tr>
  <tr className='bg-gray-50'>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-4/12 font-bold'>Other Benefits:</td>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-8/12'>Special Discounts at Leading department stores ad shopping mails, Duty-Free, Golf courses, Spas, Hospitals, Hotel, Dining establishments, etc.</td>
  </tr>
  <tr>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-4/12 font-bold'>Member Contact Center:</td>
    <td  className='border-[1px] md:px-10 px-4 py-2 text-left w-8/12'>English (24 hour service) Korean, Mandarin, Japanese (6.00 am - 9.00 pm*) Bangkok standard time (GMP + 7)</td>
  </tr>
</table>
    </div>

    <div class="m-10 md:flex gap-20 bg-white md:float-left">
      <div class="md:w-8/12">
        <h2 class="md:text-3xl text-lg md:mb-0 mb-6 text-orange-500">THAILAND ELITE PRIVILEGES</h2>
        <div class="space-y-4">
          <div class="item pt-6 md:pt-0 md:flex gap-4">
            <div class="left w-20 h-20 flex justify-center items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="#7E6D43" class="w-16 h-16 rounded-full border-[#7E6D43] border-[1px] p-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
              </svg>
            </div>
            <div class="right">
              <h2>PRIVILEGE ENTRY</h2>
              <h6>Membership confers the right to stay in Thailand with a Privilege Entry Visa (PEV) — as well as an
                extendable one-year
                stay without the usual requirement to exit the country.</h6>
            </div>
          </div>

          <div class="item pt-6 md:pt-0 md:flex gap-4">
            <div class="left w-20 h-20 flex justify-center items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="#7E6D43" class="w-16 h-16 rounded-full border-[#7E6D43] border-[1px] p-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
            <div class="right">
              <h2>ARRIVAL & DEPARTURE</h2>
              <h6>Every time you step off an international flight at Suvarnabhumi or Phuket airports, a dedicated Elite
                Personal Assistant
                will greet you at the gate as you disembark, whisk you to the Exclusive Arrival Lounge and expedite you
                through passport
                control counters and baggage claim. Fast Track express immigration service will obviate formalities and
                enable you to be
                processed speedily, without the need to pass through normal — often time-consuming — immigration
                channels. When
                departing, Fast Track will quickly pass you through immigration and to our Lounge, with any duty-free
                shopping
                assistance you need.</h6>
            </div>
          </div>
          <div class="item pt-6 md:pt-0 md:flex gap-4">
            <div class="left w-20 h-20 flex justify-center items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="#7E6D43" class="w-16 h-16 rounded-full border-[#7E6D43] border-[1px] p-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
              </svg>
            </div>
            <div class="right">
              <h2>24H CONTACT CENTER</h2>
              <h6>English, Korean, Mandarin, Japanese service available from 6.00 am–9.00 pm (Bangkok standard time ‐
                UTC +7)</h6>
            </div>
          </div>
          <div class="item pt-6 md:pt-0 md:flex gap-4">
            <div class="left w-20 h-20 flex justify-center items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="#7E6D43" class="w-16 h-16 rounded-full border-[#7E6D43] border-[1px] p-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
            </div>
            <div class="right">
              <h2>DISCOUNT</h2>
              <h6>King Power duty-free benefits and special discounts at hotels, dining establishments, shopping centers
              </h6>
            </div>
          </div>
        </div>
      </div>


      <div class="w-4/12"></div>
    </div>

    <section className="my-10">
                <div className="px-10 py-4 mx-auto flex justify-center">
                    <div className="">
                        <h3 className="text-center md:text-2xl my-4">CHOOSE YOUR MEMBERSHIP</h3>
                        <div className="my-10">
                            <h2 className="md:text-5xl text-lg border-l-[6px] border-gray-500 py-2 px-4 font-thin">We
                                Provide Our
                                Experts
                                To<br />
                                <span className="font-bold">Membership Programs</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="md:grid grid-cols-3 gap-x-10 gap-y-20">
                    <div
                        className="package relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                        <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                            <h3 className="py-2 px-20 text-[#ff0066]">THB 600,000 Net</h3>
                        </div>
                           <img src="./images/membership-packages/Elite-Easy-Access-Membership.jpg" alt="elite easy access membership" />
                        <h2 className="text-gray-800 text-2xl my-4">ELITE EASY ACCESS (5 YEARS)</h2>
                        <p>Easy Access is the entry and most popular Thailand Elite membership. Receive 5 years
                            multi-entry
                            visa,
                            limousine and
                            airport services, 24/7 concierge services and more.</p>
                        <button
                            className="py-2 text-lg font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950">
                          <a href="/elite-easy-access">Read More</a></button> 
                    </div>
                    <div
                        className="package relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                        <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                            <h3 className="py-2 px-20 text-[#ff0066]">THB 800,000 Net</h3>
                        </div>
                <img className="mx-auto w-42" src="./images/membership-packages/Elite-Family-Alternative-Membership.jpg" alt="elite family alternative membership" />
                        <h2 className="text-gray-800 text-2xl my-4">ELITE ALTERNATIVE (10 YEARS)</h2>
                        <p>Elite Alternative is a 10 years membership. it comes with a 5 years multi-entry visa (free
                            renewal 1
                            time, so 10 years),
                            and numerous services.
                            <strong>Save 400 000THB!</strong>

                            100 000THB discount for additional family members.
                        </p>
                        <button
                            className="py-2 text-lg font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950"><a
                                href="/elite-family-alternative">Read More</a></button>
                    </div>
                    <div
                        className="package relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                        <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                            <h3 className="py-2 px-20 text-[#ff0066]">THB 2 Million*</h3>
                        </div>
                <img className="mx-auto w-42"
                            src="./images/membership-packages/Elite-Ultimate-Privilege-Membership.jpg" alt="elite ultimate privilege membership" />
                        <h2 className="text-gray-800 text-2xl my-4">ELITE ULTIMATE PRIVILEGES (20 YEARS)</h2>
                        <p>Elite Ultimate Privileges program is a 20 years membership program with the most of
                            privileges.

                            It includes free golf green fees, spas, unlimited limousine services and more.</p>
                        <button
                            className="py-2 text-lg font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950"><a
                                href="elite-ultimate-privilege">Read More</a></button>
                    </div>

                    <div
                        className="package relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                        <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                            <h3 className="py-2 px-20 text-[#ff0066]">THB 1 million</h3>
                        </div>
                <img className="mx-auto w-42"  src="./images/membership-packages/Elite-Privilege-Access-Membership.jpg" alt="elite privilege access membership" />
                        <h2 className="text-gray-800 text-2xl my-4">ELITE PRIVILEGE ACCESS (10 YEARS)</h2>
                        <p>The Elite Privilege Access membership is a popular extendable membership option.</p>
                        <button
                            className="py-2 text-lg font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950"><a
                                href="/elite-privilege-access">Read More</a></button>
                    </div>
                    <div
                        className="package relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                        <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                            <h3 className="py-2 px-20 text-[#ff0066]">THB 1 million</h3>
                        </div>
                <img className="mx-auto w-42" src="./images/membership-packages/Elite-Family-Premium-Membership.jpg" alt="elite family premium membership" />
                        <h2 className="text-gray-800 text-2xl my-4">ELITE FAMILY PREMIUM (20 YEARS)</h2>
                        <p>The Elite Family Premium option allows the immediate family of an Elite Ultimate Privilege
                            member
                            to
                            apply for a
                            Privilege Entry Visa.</p>
                        <button
                            className="py-2 text-lg font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950"><a
                                href="/elite-family-premium">Read More</a></button>
                    </div>
                    <div
                        className="package relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                        <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                            <h3 className="py-2 px-20 text-[#ff0066]">THB 800,000</h3>
                        </div>
                <img className="mx-auto w-42" src="./images/membership-packages/Elite-Family-Excursion.jpg" alt="elite family excursion" />
                        <h2 className="text-gray-800 text-2xl my-4">ELITE FAMILY EXCURSION (5 YEARS)</h2>
                        <p>The Elite Family Premium option allows the immediate family of an Elite Ultimate Privilege
                            member
                            to
                            apply for a
                            Privilege Entry Visa.</p>
                        <button
                            className="py-2 text-lg font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950"><a
                                href="/elite-family-excersion">Read More</a></button>
                    </div>
                    <div
                        className="package relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                        <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                            <h3 className="py-2 px-20 text-[#ff0066]">THB 1.5 million</h3>
                        </div>
                <img className="mx-auto w-42" src="./images/membership-packages/Elite-Maxima-Health.jpg" alt="elite family maxima health" />
                        <h2 className="text-gray-800 text-2xl my-4">ELITE MAXIMA HEALTH (5 YEARS)</h2>
                        <p>Renewable 5 years multiple entry visa with extendable 1 year length of stay for each entry.
                        </p>
                        <button
                            className="py-2 text-lg font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950">Read
                            More</button>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default SuperiorotyExtension
