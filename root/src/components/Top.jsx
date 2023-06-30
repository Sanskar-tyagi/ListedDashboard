import React from "react";
import { FcMoneyTransfer } from "react-icons/fc";
import { BsFillBookmarksFill } from "react-icons/bs";
import { AiFillLike, AiOutlineTeam } from "react-icons/ai";
export default function Top() {
  return (
    <div className="flex flex-wrap w-full mx-3">
      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-gray-900  dark:opacity-60">
                    Today's Money
                  </p>
                  <h5 className=" text-2xl my-2 font-bold text-gray-900">
                    $53,000
                  </h5>
                </div>
              </div>
              <div className="px-3 text-right basis-1/3">
                <div className="inline-flex w-12 h-12 justify-center items-center text-center rounded-full bg-gradient-to-tl from-blue-500 to-violet-500">
                  <FcMoneyTransfer className="ni leading-none ni-money-coins text-lg  text-gray-900 "></FcMoneyTransfer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-gray-900  dark:opacity-60">
                    Total Transactions
                  </p>
                  <h5 className=" text-2xl my-2 font-bold text-gray-900 ">
                    2,300
                  </h5>
                </div>
              </div>
              <div className="px-3 text-right basis-1/3">
                <div className="inline-flex w-12 h-12 text-center rounded-full bg-gradient-to-tl from-red-600 to-orange-600 justify-center items-center">
                  <BsFillBookmarksFill className="ni leading-none ni-world text-lg  text-gray-900 "></BsFillBookmarksFill>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-gray-900  dark:opacity-60">
                    Total Likes
                  </p>
                  <h5 className=" text-2xl my-2 font-bold dark:text-gray-900 ">
                    9,462
                  </h5>
                </div>
              </div>
              <div className="px-3 text-right basis-1/3">
                <div className="inline-flex w-12 h-12 text-center rounded-full bg-gradient-to-tl from-emerald-500 to-teal-400 justify-center items-center">
                  <AiFillLike className="ni leading-none ni-paper-diploma text-lg   text-gray-900 "></AiFillLike>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-gray-900  dark:opacity-60">
                    Total Users
                  </p>
                  <h5 className=" text-2xl my-2 font-bold dark:text-gray-900 ">
                    830
                  </h5>
                </div>
              </div>
              <div className="px-3 text-right basis-1/3">
                <div className="inline-flex w-12 h-12 text-center rounded-full justify-center items-center bg-gradient-to-tl from-orange-500 to-yellow-500">
                  <AiOutlineTeam className="ni leading-none ni-cart text-lg  text-gray-900 "></AiOutlineTeam>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
