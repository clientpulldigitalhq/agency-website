import { LuMapPin, LuWorkflow, LuTruck } from "react-icons/lu";

function ServicesSection() {
  const services = [
    {
      title: "Get found online",
      description:
        "Most businesses lose customers every day simply because they cannot be found online. We build clean, fast websites that put your business in front of the right people — so customers can find you, contact you, and request your services without walking through your door.",
      icon: LuMapPin,
    },
    {
      title: "Streamline your operations",
      description:
        "Running a business on WhatsApp messages and paper records slows everything down. We build simple internal systems that help you manage orders, track inventory, and log sales — so your team spends less time chasing information and more time serving customers.",
      icon: LuWorkflow,
    },
    {
      title: "Coordinate your deliveries",
      description:
        "Delivery confusion costs you time, money and customer trust. We build structured delivery systems that show you who is delivering what, where it is going, and when it arrives — so nothing gets lost and your team always knows what is happening.",
      icon: LuTruck,
    },
  ];

  return (
    <section id="services" className="mt-20 text-center text-white">
      <h2 className="mb-5 font-semibold text-yellow-400 sm:mb-3">SERVICES</h2>
      {services.map((service, index) => (
        <ul key={index} className="mb-8">
          <li>
            <div className="sm:flex-center flex-col gap-4 sm:flex-row sm:justify-center">
              <div className="flex justify-center">
                {
                  <service.icon className="text-5xl text-teal-300 sm:text-3xl" />
                }
              </div>
              <h3 className="my-2 font-semibold uppercase">{service.title}</h3>
            </div>
            <p className="px-4 sm:px-50">{service.description}</p>
          </li>
        </ul>
      ))}
    </section>
  );
}

export default ServicesSection;
