import React from 'react';
import { Star, BadgeCheck } from 'lucide-react';

type Review = {
  id: string;
  name: string;
  initial: string;
  date: string;
  text: string;
};

const reviews: Review[] = [
  {
    id: '1',
    name: 'Sammi Vee',
    initial: 'S',
    date: '24 hours ago',
    text: "Geypey Web Studio delivered exceptional results for our digital project. Their attention to detail in front-end architecture, clean UI/UX implementation, and professional execution exceeded our expectations. If you are looking for an elite software engineering studio to bring your web platform to life, I strongly recommend working with them!"
  },
  {
    id: '2',
    name: 'Georgina David-West',
    initial: 'G',
    date: '3 weeks ago',
    text: "Working with this team was an excellent experience. They are professional, creative, and highly skilled at turning ideas into clean, functional, and modern websites. Their attention to detail, communication, and commitment to delivering quality really stood out."
  },
  {
    id: '3',
    name: 'Paul Olaniyan',
    initial: 'P',
    date: '3 weeks ago',
    text: "Impressed by the ability to understand the problems, suggest practical solutions, and execute them efficiently. Communication was clear throughout the project delivery, and the focus remained on building something reliable and genuinely useful."
  },
  {
    id: '4',
    name: 'Makata Faith',
    initial: 'M',
    date: '2 weeks ago',
    text: "I'm impressed with the work from Geypey Web Studio! The design is clean, modern, and professional, and you can tell there's real thought behind the user experience. If you're looking for a team to bring your website ideas to life, I'd definitely recommend giving them a try."
  }
];

export default function Testimonials() {
  return (
    <section className="bg-[#090D16] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="section-heading text-3xl md:text-4xl font-semibold tracking-tight">
            Trusted by modern brands.
          </h2>
          <p className="text-gray-400 mt-3 text-lg">
            Verified client outcomes and engineering excellence.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                {/* SVG Stars replacing Emojis */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  "{review.text}"
                </p>
              </div>
              
              {/* Client Profile */}
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-semibold text-lg">
                  {review.initial}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-white font-medium">{review.name}</h4>
                    <BadgeCheck className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">Verified Google Review • {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
