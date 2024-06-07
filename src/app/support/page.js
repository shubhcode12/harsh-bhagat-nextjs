import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function Support() {
  return (
    <main className="bg-white">
      <Header />
      <div className="px-10 pt-32 pb-10">
        <section className="bg-gray-100 p-10 rounded-lg mb-10">
          <h2 className="text-2xl font-semibold text-green-500 mb-5">
            Account related issues
          </h2>
          <ul className="list-decimal list-inside">
            <li>
              <a href="#" className="text-blue-500">
                Click here
              </a>{" "}
              if you are facing an issue while opening your account.
            </li>
            <li>
              <a href="#" className="text-blue-500">
                Click here
              </a>{" "}
              if you are having account verification issues.
            </li>
          </ul>
        </section>

        <section className="bg-gray-100 p-10 rounded-lg">
          <h2 className="text-2xl font-semibold text-green-500 mb-5">
            Private Community related issues
          </h2>
          <p>
            If you haven't received the private community link yet,{" "}
            <a href="#" className="text-blue-500">
              fill out this form
            </a>{" "}
            to get link in the next 72 hours.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
