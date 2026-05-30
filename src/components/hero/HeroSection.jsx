import ContactButton from "../ui/ContactButton";

function HeroSection() {
  return (
    <section className="bg-[linear-gradient(to bottom,#0d2d2a,#134e4a)] px-4 text-center text-white sm:px-10">
      <div>
        <h1 className="font-growland-black mt-10 text-4xl font-black sm:text-5xl">
          YOUR BUSINESS <br />
          IS GROWING
        </h1>
        <h3 className="font-growland-bold mt-2 font-semibold text-yellow-400">
          CAN YOUR CURRENT SYSTEM KEEP UP?
        </h3>
        <p className="my-4 text-xl font-medium sm:px-55">
          We help businesses grow through websites, workflow systems, and
          delivery coordination platforms that improve visibility, streamline
          operations, and create better customer experiences.
        </p>
      </div>
      <ContactButton />
    </section>
  );
}

export default HeroSection;
