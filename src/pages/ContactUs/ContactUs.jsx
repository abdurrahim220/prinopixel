import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Lottie from "lottie-react";
import contact from "../../assets/contactus.json";
const ContactUs = () => {
  return (
    <section className="bg-accent-light-2 h-full">
      <div className="customContainer py-28">
        <div class="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
          <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-action-heading">
            Let's Talk
          </h1>
          <p class="mt-3 text-lg text-action-desc">
            Feature request? Suggestion? or maybe you'd like to be our critic!
            Here's a form just for that.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8">
          <div>
            <Lottie animationData={contact} loop={true} />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
