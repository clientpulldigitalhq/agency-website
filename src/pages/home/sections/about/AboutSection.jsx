import { ABOUT_AGENCY_INFO } from "./constants";

export function AboutSection() {
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
        {ABOUT_AGENCY_INFO.map(({ icon: Icon, ...about }) => (
          <div
            className="text-brand-primary rounded-lg bg-white p-4 transition-transform duration-300 hover:scale-102"
            key={about.title}
          >
            <div className="flex-center flex-col">
              <div className="flex-center my-2 gap-2">
                <div>{<Icon className="text-3xl" />}</div>
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
