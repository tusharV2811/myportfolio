import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <>
      {showModal ? (
        <div className="">
          <div className="m-4 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between items-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Information</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Please view this website in desktop for better experience
                    and effects.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center  border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent border-gray-400 hover:border-black rounded-md border-2 font-bold uppercase px-9 py-2 text-sm outline-none focus:outline-none m-8 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </>
  );
}
