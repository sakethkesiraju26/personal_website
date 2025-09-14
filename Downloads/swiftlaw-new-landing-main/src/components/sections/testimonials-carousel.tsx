import Section from "@/components/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MdOutlineFormatQuote } from "react-icons/md";

const testimonials = [
  {
    content: "This is a phenomenal app. Been using it for a few weeks now and I can tell you that its capabilities are very impressive. Well done Saketh and team!",
    author: "Eric Hsu",
    title: "M&A Lawyer @ ClearFocusLaw",
    company: null
  },
  {
    content: "A neat implementation of AI at a good price point - I'm impressed",
    author: "Mark Donovan",
    title: "Barrister | NZ Employment Law | Co-Founder @Lawyers+Robots",
    company: null
  },
  {
    content: "If you use Microsoft Word you must check out this program. Saves a lot of time, AI feature very innovative.",
    author: "George Handelsman",
    title: "Managing Attorney @ Law Offices of S. George Handelsman",
    company: null
  },
  {
    content: "Super interesting law x LLM use case, and awesome team!",
    author: "Roland Vogl",
    title: "Executive Director & Co-founder @ CodeX, The Stanford Center for Legal Informatics",
    company: null
  },
  {
    content: "Phenomenal job with this app/product. Only a couple of days in and can't believe how much value and productivity leverage I'm getting. Reminds me of the ROI of Superhuman. Very impressed. Keep up the great work!!",
    author: "Legal Professional",
    title: "SwiftLaw User",
    company: null
  },
  {
    content: "Can't believe how quickly this tool is evolving!! Thanks for the hard work on your end.",
    author: "Legal Professional",
    title: "SwiftLaw User",
    company: null
  },
  {
    content: "I was trying to pare down my options because I have this and Draftwise, but I am finding your product better and easier.",
    author: "Legal Professional",
    title: "SwiftLaw User",
    company: null
  }
];

export default function Component() {
  return (
    <Section
      title="Loved by lawyers"
      subtitle="What our users are saying"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <div className="max-w-2xl mx-auto relative">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={`testimonial-${index}`}>
                <div className="p-2 pb-5">
                  <div className="text-center">
                    <MdOutlineFormatQuote className="text-4xl text-themeDarkGray my-4 mx-auto" />
                    <h4 className="text-1xl font-semibold max-w-lg mx-auto px-10">
                      {testimonial.content}
                    </h4>
                    <div className="mt-8">
                      <h4 className="text-1xl font-semibold my-2">
                        {testimonial.author}
                      </h4>
                    </div>
                    <div className="mb-3">
                      <span className="text-sm text-themeDarkGray">
                        {testimonial.title}
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-2/12 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-2/12 bg-gradient-to-l from-background"></div>
        </div>
        <div className="md:block hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Section>
  );
}