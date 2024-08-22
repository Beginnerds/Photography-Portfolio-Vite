import { useState } from "react";
import CarouselPreview from "./components/CarouselPreview";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <main className="min-h-[calc(100vh-96px)] bg-dominant grid grid-cols-1 lg:grid-cols-2 auto-rows-fr">
        <section className="h-full bg-[url('/hero.jpg')] bg-center bg-cover grid py-4 sm:py-8 px-16 sm:px-32 font-montserrat">
          <a
            href="/"
            className="text-3xl backdrop-blur-[1px] rounded-3xl sm:backdrop-blur-0 sm:text-xl leading-9 font-bold text-accent sm:text-muted hover:text-accent transition-all self-end"
          >
            <p>Pro</p>
            <p>photographer</p>
          </a>
          <a
            href="/"
            className="text-xl leading-9 font-bold text-muted hover:text-accent transition-all self-end flex"
          >
            <div className="w-6 h-1 bg-accent mt-4"></div>&nbsp;
            <div>
              <p>Let's take your</p>
              <p>photographs to next level</p>
            </div>
          </a>
        </section>

        <section className="grid h-full">
          <div className="max-w-xl flex flex-col items-center lg:items-start gap-3 mx-auto lg:mx-0 mt-20 lg:mt-40 px-2">
            <p className="font-poppins text-muted">
              Hello there, Nice to meet you. I am
            </p>
            <h1 className="font-montserrat font-bold text-accent text-8xl tracking-wide">
              James
            </h1>
            <p className="text-white/60 text-sm leading-7 font-poppins text-center sm:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              commodi iusto corrupti unde sunt necessitatibus quibusdam
              obcaecati sequi aut, quasi quaerat laboriosam adipisci
              exercitationem blanditiis enim odio illum voluptas laudantium!
              Sit, vitae. Facilis delectus ratione labore dolores autem ex velit
              cum.
            </p>
          </div>

          <div className="px-2 py-8 self-end max-w-[100vw] md:max-w-[50vw]">
            <CarouselPreview />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
