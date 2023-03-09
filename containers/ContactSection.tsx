import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import contact from "../public/phone.svg";

type Props = {};

const ContactSection = (props: Props) => {
  const successMessage = (
    <p className="text-center">
      Message sent successfully! Thank you for your time!
    </p>
  );
  const errorMessage = (
    <p className="text-center">Oops! Something went wrong!</p>
  );
  const form = useRef<any>();
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pfl0v4h",
        "template_2ti1zgg",
        form.current,
        "oUOSRakAhXFNd9aiV"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(successMessage);
        },
        (error) => {
          console.log(error.text);
          toast.error(errorMessage);
        }
      );
  };
  return (
    <div className="px-5 sm:px-0">
      <section className="mt-28 flex-col-reverse md:flex-row   flex items-center justify-between">
        <div>
          <Toaster />
        </div>
        <form
          id="contactForm"
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-start space-y-5 w-full md:w-fit mx-auto "
          action=""
        >
          <div className="flex justify-start px-5 sm:px-0 items-start flex-col w-full gap-y-3 ">
            <input
              className="outline-none w-full md:w-[300px] bg-slate-100 rounded-sm border-b px-4 py-4 border-white text-gray-800 placeholder-gray-800"
              placeholder="Enter your Name"
              type="text"
              name="from_name"
            />
            <input
              className="outline-none w-full md:w-[300px] bg-slate-100 rounded-sm border-b px-4 py-4 border-white text-gray-800 placeholder-gray-800"
              placeholder="Enter your Email Address"
              type="email"
              name="form_email"
            />
            <textarea
              placeholder="Enter your Message"
              className="outline-none w-full md:w-[300px] bg-slate-100 rounded-sm border-b px-4 py-4 border-white text-gray-800 placeholder-gray-800 resize-none overflow-x-hidden scrollbar-hide "
              name="message"
              rows={6}
            />
          </div>

          <button
            className="bg-blue-500 ml-5 md:ml-0 hover:bg-blue-600 py-2 px-4 max-w-[150px] rounded-lg text-white font-bold"
            type="submit"
          >
            Send Message
          </button>
        </form>

        <div>
          <img
            className="w-80 h-80 object-contain"
            src={contact.src}
            alt="Contact"
          />
        </div>
      </section>
      {/* <div className="dark:text-white text-black mt-24 sm:pl-14 ">
        <p className="text-xs mb-2">GET IN TOUCH</p>
        <p className="text-5xl font-bold">Contact Us</p>
      </div>
      <div>
        <Toaster />
      </div>
      <section className="flex md:flex-row flex-col-reverse gap-6 items-start md:items-center justify-center">
        <form
          className="sm:pl-14"
          id="contactForm"
          ref={form}
          onSubmit={sendEmail}
          action=""
        >
          <div className="flex flex-col w-full gap-y-3">
            <div className="flex md:flex-row flex-col gap-3 ">
              <input
                type="text"
                placeholder="Enter your name..."
                name="from_name"
                className="bg-slate-100 w-[50%] text-gray-800 placeholder:text-gray-800 px-4 py-2 focus:outline-none border border-white rounded-lg"
              />
              <input
                type="email"
                placeholder="Enter your email..."
                name="from_email"
                className="bg-slate-100 text-gray-800 w-[50%] placeholder:text-gray-800 px-4 py-2 focus:outline-none border border-white rounded-lg"
              />
            </div>
            <textarea
              placeholder="Enter your message..."
              name="message"
              rows={6}
              className="bg-slate-100 text-gray-800 placeholder:text-gray-800 px-4 py-2 focus:outline-none border border-white rounded-lg resize-none scrollbar-hide overflow-x-hidden"
            />
          </div>
          <button
            className="bg-blue-500 mt-5 hover:bg-blue-600 py-2 px-4 max-w-[150px] rounded-lg text-white font-bold"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <img
          className=" w-80 h-80 object-contain"
          src={contact.src}
          alt="Contact"
        />
      </section> */}
    </div>
  );
};

export default ContactSection;
