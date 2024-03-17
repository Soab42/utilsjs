import { Link } from "react-router-dom";
import Logo from "../nav/Logo";

export default function Home() {
  return (
    <div className="min-h-[88vh] p-5">
      <Header />
    </div>
  );
}

const App = () => {
  return (
    <div>
      <main className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10">
          <Feature
            icon="🚀"
            title="Fast and Efficient"
            description="Built with performance in mind."
          />
          <Feature
            icon="🎨"
            title="Customizable"
            description="Tailwind CSS allows for easy customization."
          />
          <Feature
            icon="🔧"
            title="Easy Integration"
            description="Simple integration with React applications."
          />
          <Feature
            icon="⚙️"
            title="Unique DX"
            description="Minimize the learning curve and provide the best possible developer experience."
          />
          <Feature
            icon={
              <svg
                height={30}
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="InvertColorsRoundedIcon"
              >
                <path d="M12 4.81V19c-3.31 0-6-2.63-6-5.87 0-1.56.62-3.03 1.75-4.14zM6.35 7.56C4.9 8.99 4 10.96 4 13.13 4 17.48 7.58 21 12 21s8-3.52 8-7.87c0-2.17-.9-4.14-2.35-5.57L12.7 2.69c-.39-.38-1.01-.38-1.4 0z"></path>
              </svg>
            }
            title="Themeable"
            description="Provides a plugin to customize default themes, allowing you to change all semantic tokens or create an entirely new theme."
          />
          <Feature
            icon={
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                height={30}
                data-estid="ArticleRoundedIcon"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6 14H8c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1m3-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m0-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"></path>
              </svg>
            }
            title="Unrivaled Documentation"
            description="The answer to your problem can be found in our documentation. How can we be so sure? Because our docs boast over 2,000 contributors."
          />
        </div>
      </main>
    </div>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <div className="p-4 border rounded-lg backdrop-blur-xl shadow-xl bg-green-200/30 hover:scale-105 duration-300 hover:shadow-2xl hover:shadow-pink-300">
      <div className="text-3xl mb-2">{icon}</div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center h-[85vh] bg-slate-50 overflow-hidden relative ">
      <section className="absolute  blur-2xl opacity-90 flex flex-col gap-24 rotate">
        <div className="bg-blue-600 h-5 w-[calc(105)]"></div>
        <div className="bg-green-400 h-5 w-screen"></div>
        <div className="bg-pink-400 h-5 w-screen"></div>
        <div className="bg-yellow-400 h-5 w-screen"></div>
        <div className="bg-rose-400 h-5 w-screen"></div>
        <div className="bg-sky-400 h-10 w-screen"></div>
      </section>
      <div className="header relative backdrop-blur-lg">
        <h1 className="text-[10rem] font-black">
          utils.<span className="text-amber-300">js</span>
        </h1>
        <p className="text-[1.3rem] lowercase flex items-center justify-center absolute top-48 right-36 border-y-2 px-4 w-[22.8rem] animate-pulse duration-1000 bg-gradient-to-r from-pink-400 bg-sky-400 via-amber-300 font-medium  text-white">
          A speed engine for your web dev
        </p>
      </div>
      <p className="text-2xl w-2/3 backdrop-blur-lg ">
        A collection of components, hooks and utility functions to streamline
        your development process. From handling data manipulation to assisting
        with common tasks, utils.js provides a comprehensive set of tools to
        enhance your web development experience.
      </p>
      <App />
      <button className="mt-5 px-20 rounded-full bg-sky-600 py-5 text-xl text-yellow-200 font-bold go ">
        <Link to={"/components"}>Let's explore</Link>
      </button>
    </div>
  );
};
