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
      <section className="mt-28 w-full flex-col-reverse md:flex-row px-5 sm:px-0  flex items-center justify-between">
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
          <div className="flex justify-start items-start flex-col w-full gap-y-3 ">
            <input
              className="contactInput"
              placeholder="Enter your Name"
              type="text"
              name="from_name"
            />
            <input
              className="contactInput"
              placeholder="Enter your Email Address"
              type="email"
              name="form_email"
            />
            <textarea
              placeholder="Enter your Message"
              className="contactInput resize-none overflow-x-hidden scrollbar-hide "
              name="message"
              rows={6}
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-600 py-2 px-4 max-w-[150px] rounded-lg text-white font-bold"
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
    </div>
  );
};

export default ContactSection;
