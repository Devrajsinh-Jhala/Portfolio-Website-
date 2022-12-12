import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

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
    <section className="my-10 flex items-center justify-center">
      <div>
        <Toaster />
      </div>
      <form
        id="contactForm"
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col px-2 space-y-2  w-full sm:w-fit mx-auto "
        action=""
      >
        <div className="flex sm:flex-row flex-col space-y-2 sm:space-y-0 space-x-0 sm:space-x-2 ">
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
        </div>

        <textarea
          placeholder="Enter your Message"
          className="contactInput resize-none overflow-x-hidden scrollbar-hide "
          name="message"
          rows={6}
        />
        <button
          className="bg-blue-500 py-5 px-10 rounded-full text-white font-bold text-lg"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
