import { BsPersonFillCheck } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { IoIosFlash } from "react-icons/io";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

function AboutSection() {
  const aboutAgencyInfo = [
    {
      title: "Client focused",
      description: "Your goals drive every decision we make",
      icon: BsPersonFillCheck,
    },
    {
      title: "Growth minded clients",

      description:
        "We work with businesses that are ready to grow — wherever they are",
      icon: TbWorld,
    },
    {
      title: "Fast Delivery",

      description: "We move quickly without cutting corners",
      icon: IoIosFlash,
    },
    {
      title: "Clean modern design",
      description: "Every product we ship looks and feels professional",
      icon: HiOutlineSquares2X2,
    },
  ];

  return (
    <section className="text-center text-white" id="about">
      <h2 className="mt-20 font-semibold text-yellow-400">ABOUT US</h2>

      <h2 className="mt-2 font-medium">
        A small but focused team building digital solutions that helps
        businesses grow.
      </h2>

      <p className="my-4 px-4 sm:px-40">
        We are designers and developers based in Ghana — building websites,
        workflow systems, and delivery coordination platforms for businesses
        that are ready to grow. We do not just build websites. We build systems
        that help businesses run smoother, serve customers better and grow
        faster.
      </p>
      <div className="my-10 grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-10">
        {aboutAgencyInfo.map((about, index) => (
          <div
            className="rounded-lg bg-white p-4 text-[#134e4a] transition-transform duration-300 hover:scale-102"
            key={index}
          >
            <div className="flex-center flex-col">
              <div className="flex-center my-2 gap-2">
                <div>{<about.icon className="text-3xl" />}</div>
                <h3 className="font-medium">{about.title}</h3>
              </div>
              <p>{about.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
