import { FaArrowRight } from "react-icons/fa6";
import MessageForm from "./MessageForm";
import ContactInfo from "./ContactInfo";
import LetsConnect from "./LetsConnect";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-10">
      <h2 className="text-2xl font-bold mb-4">
        <span className="text-blue-800">#</span>tarek.dev
      </h2>
      <h1 className="text-xl md:text-4xl lg:text-4xl font-bold mb-2">
        From Concept to Creation
      </h1>
      <h1 className="text-xl md:text-4xl lg:text-4xl font-bold mb-6">
        Let's Build Something Amazing
      </h1>
      <button className="flex flex-row justify-between items-center border-1 border-gray-500 rounded-2xl gap-5 px-2 py-1 my-5 cursor-pointer">
        Get In Touch{" "}
        <span className="text-sm p-1 rounded-full bg-blue-800 text-white">
          <FaArrowRight />
        </span>
      </button>
      <p className="text-2xl font-bold text-center">
        Ready to bring your ideas to life?
      </p>
      <p className="text-2xl font-bold text-center">
        Let's connect and start building
        something amazing together.
      </p>
      <div className="max-w-4xl flex flex-col justify-between md:flex-row lg:flex-row gap-5 mt-10 mb-10">
        <MessageForm />
        <div>
          <ContactInfo />
          <LetsConnect />
        </div>
      </div>
    </div>
  );
};

export default Contact;
