import React from "react";
import Button from "../components/Button";
import Head from "next/head";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <Head>
        <title>Devraj Jhala | About Me</title>
      </Head>
      <section className="flex flex-col space-y-10">
        <div className="">
          <h1 className="text-xl my-2 font-semibold bg-red-200 dark:bg-dark w-fit">
            Who am I ?
          </h1>
          <p className="mb-2">
            I am a pre-final year undergraduate at{" "}
            <mark className="bg-orange-200">
              Pandit Deendayal Energy University
            </mark>
            , Gujarat, India. I have{" "}
            <mark className="bg-yellow-200 w-fit">2.5 months</mark> of
            professional experience working as a front-end developer at{" "}
            <a
              className="text-blue-500 underline"
              href="https://pdfhost.io/v/8Zqf7okqV_Devrajsinh_Jhala_Certificate"
            >
              Hirable
            </a>{" "}
            using{" "}
            <mark className="bg-green-200">
              Next.js, React.js, TailwindCSS, and Redux
            </mark>{" "}
            as the main stack. I also love to learn about new technologies and
            frameworks so I share my learnings via blogs.
          </p>
        </div>

        <div>
          <h1 className="text-xl font-semibold my-2 bg-red-200 dark:bg-dark w-fit">
            How this journey started ?
          </h1>
          <p>
            During my first year of college, I was introduced to front-end
            development via HTML, CSS, and JS. Then I learned about Designing,
            UI/UX, Optimizing websites, and many more domains. Since then the
            journey started, I then learned React.js, Next.js, TypeScript, and
            TailwindCSS.{" "}
          </p>
          <p>
            This was never easy for me. One year ago, I feared when I saw any
            codebase using React or TypeScript. I dreamt of working on Next.js
            and TypeScript (literally!). Reflecting on this I am grateful that I
            didn't give up and kept learning things. Eventually, the more I
            learned, the less I felt I knew it, and that’s the best part of the
            domain it never extinguishes your learning attitude as there will
            always be a new and optimized stack coming up.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
