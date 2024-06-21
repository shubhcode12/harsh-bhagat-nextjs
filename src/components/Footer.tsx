import React from "react";

function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white ">
      <div className="px-6 pt-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24  lg:px-16">
        <div className="mx-auto px-4 text-center">
          <div className="flex flex-col lg:flex-row lg:justify-between align-center pb-20">
            <div>
              <h4 className="font-bold">Find me on YouTube</h4>
              <ul className="mt-4">
                <li>Channel 1</li>
                <li>Channel 1</li>
                <li>Channel 1</li>
              </ul>
            </div>
            <div className="sm:mt-4 md:mt-4 lg:mt-0 xl:mt-0 mt-4">
              <h4 className="font-bold">Drop me an E-mail</h4>
              <form className="mt-4">
                <input
                  type="email"
                  className="px-4 py-2 rounded-l-lg"
                  placeholder="Your email"
                />
                <button
                  type="submit"
                  className="bg-green-500 px-4 py-2 rounded-r-lg">
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 p-5 text-xl">
            <p>
              By <span className="text-[#0ce290]">Minasa Pvt. Ltd.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
