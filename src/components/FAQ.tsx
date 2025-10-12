import accordionData from "../utils/content";
import Accordion from "./Accordion";

interface AccordionItem {
  title: string;
  content: string;
}

const FAQ = () => {
  return (
    <>
      <div className="faq max-w-6xl mx-auto pt-10 px-4">
        <h1 className="text-xl font-bold md:text-5xl lg:text-5xl text-center">
          Frequently Asked Questions
        </h1>
        <p className="font-bold mt-5 text-center">
          Find answers to common inquiries about my services and processes.
        </p>
        <div className="py-10 text-left font-bold">
          {accordionData.map((item: AccordionItem) => (
            <Accordion
              title={item.title}
              key={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
