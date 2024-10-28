"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I provide full-stack web development services, building responsive and high-performance websites tailored to your business needs using modern technologies such as HTML, CSS, JavaScript, and popular frameworks.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I specialize in creating intuitive and visually appealing user interfaces that enhance user experience, focusing on usability, functionality, and aesthetics for websites and mobile apps.",
    href: "",
  },
  {
    num: "03",
    title: "Mobile App Development",
    description:
      "I develop custom mobile applications for both iOS and Android platforms, ensuring smooth functionality, user-friendly interfaces, and integration with the latest features and APIs.",
    href: "",
  },
  {
    num: "04",
    title: "Web Development",
    description:
      "I build modern and scalable web applications, incorporating best practices in development and focusing on delivering high-quality code that meets your business objectives.",
    href: "",
  },
];


const Services = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover: text-outline-hover transition-all duration-500 ">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 "
                  >
                    <BsArrowDownRight className="text-primary text-2xl " />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>

                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
