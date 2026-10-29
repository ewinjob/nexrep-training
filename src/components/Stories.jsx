import { stories } from "../data/stories";

export default function Stories() {

  const loop = [...stories, ...stories];

  //   const [stories, setStories] = useState([]);

  //   useEffect(() => {
  // client
  //   .fetch(`*[_type == "testimonial"]{name, location, quote}`)
  //   .then(setStories);
  //       }, []);

  return (
     
     <section id="stories" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-sm uppercase tracking-widest opacity-60">
          04 / Member stories
        </p>
        <h2 className="font-serif text-4xl md:text-6xl">
          Real people. <em className="text-accent">Real results.</em>
        </h2>
      </div>

      <div
        className="marquee mt-14 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max">
          {loop.map((s, i) => (
             
                      
             <blockquote
  key={i}
  className="mr-6 w-96 shrink-0 rounded-2xl bg-white/5 p-8 md:w-32rem"
>
  <p className="font-serif text-lg leading-relaxed">{s.dis}</p>
  <p className="font-serif text-lg leading-relaxed">{s.quote}</p>
  <footer className="mt-6 text-sm">
    <span className="font-medium">{s.name}</span>
    <span className="block opacity-60">{s.location}</span>
  </footer>
</blockquote>
               
          ))}
        </div>
      </div>
    </section> 

  );
}