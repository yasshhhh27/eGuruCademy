import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <h1 className="text-5xl leading-10 font-semibold text-richblack-5">
      Have a concept in mind? Our expertise is at your service. Let's collaborate.
      </h1>
      <p className="">
      Share more about yourself and your thoughts.
      </p>

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;