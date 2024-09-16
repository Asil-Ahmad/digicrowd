import React from "react";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";

const App = () => {
  return (
    <main className="relative bg-black w-full h-screen">
      <Nav />
      <section className="xl:padding-z bg-black wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding bg-black">
        <About />
      </section>
    </main>
  )
};

export default App;
