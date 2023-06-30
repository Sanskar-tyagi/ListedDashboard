import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

export default function Tasks() {
  return (
    <div className="w-full max-w-full px-3 mt-6  sm:flex-0 shrink-0 sm:mt-0 md:w-6/12 ">
      <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-solid shadow-xl p-8 dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl border-slate-100 bg-clip-border dark:border-slate-700">
        <div className="p-4 pb-0 rounded-t-2xl">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
              <h6 className="mb-0 text-xl font-bold dark:text-gray-800">
                Today’s schedule
              </h6>
            </div>
            <div className="flex items-center justify-end w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
              <small className="font-light flex items-center gap-2 text-gray-400 cursor-pointer">
                See all
                <AiFillCaretRight />
              </small>
            </div>
          </div>
        </div>
        <div className="flex-auto p-4">
          <ul className="flex flex-col pl-0 mb-0 rounded-lg">
            <li className="relative justify-between block py-2 pb-0 pl-0 pr-4 border-0 rounded-t-inherit rounded-xl text-inherit">
              <div className="flex">
                <div className="flex items-center  ">
                  <div className="flex flex-col gap-1 border-b-2 md:border-l-4 md:border-b-0 md:py-3 dark:border-green-600 px-2 py-1 ">
                    <h6 className="mb-1 text-sm leading-normal text-slate-700 font-medium  dark:text-gray-800">
                      Meeting with suppliers from Kuta Bali
                    </h6>
                    <span className="text-gray-400 text-xs leading-tight">
                      14.00-15.00
                    </span>
                    <span className="text-gray-400 text-xs leading-tight">
                      at Sunset Road, Kuta, Bali{" "}
                    </span>
                  </div>
                </div>
              </div>
              <hr className="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
            </li>
            <li className="relative justify-between block py-2 pb-0 pl-0 pr-4 border-0 rounded-xl text-inherit">
              <div className="flex">
                <div className="flex items-center ">
                  <div className="flex flex-col gap-1  border-b-2 md:border-l-4 md:border-b-0 md:py-3 dark:border-sky-600 px-2 py-1">
                    <h6 className="mb-1 text-sm leading-normal text-slate-700 font-medium  dark:text-gray-800">
                      Check operation at Giga Factory 1
                    </h6>
                    <span className="text-gray-400 text-xs leading-tight">
                      18.00-20.00
                    </span>
                    <span className="text-gray-400 text-xs leading-tight">
                      at Central Jakarta{" "}
                    </span>
                  </div>
                </div>
              </div>
              <hr className="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
