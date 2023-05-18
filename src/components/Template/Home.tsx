import React from "react";
import Image from "next/image";
import oficeImg from "../../../public/images/office-932926_640.jpg";
import { ServicesCard } from "../servicesCard/ServicesCard";
export const Home = () => {
  return (
    <>
      <section
        id="services"
        className="flex flex-col  lg:flex-row   lg:px-10 mt-6"
      >
        <div className="p-10 mx-auto">
          <h2 className="text-4xl font-bold text-[#C19957] ">Our approach</h2>
          <div>
            <p className="my-4 font-bold text-2xl ">
              We create a beautiful, strategic website meant to accelerate your
              brand's growth.
            </p>
            <div className="text-lg">
              <p className="my-4">
                At SteinSeinSite, we're all about building a relationship with
                you. We work collaboratively alongside you to make your business
                and brand vision come alive.
              </p>
              <p className="my-4">
                Your goals, coupled with our strategic expertise, results in a
                strong foundation that helps you become a digital
                lead-generating machine that delights audiences and converts
                customers every step of the way.
              </p>
              <p className="my-4">
                To start a conversation, call us or send us an email. You'll
                quickly sense that something is different at SteinSeinSite.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-4/5 h-4/5 overflow-hidden lg:mt-10 p-4 mx-auto">
          <Image className="" src={oficeImg} alt="" />
        </div>
      </section>
      <section>
        <div>
          <h2>Services</h2>
          <p>
            With our innovative design, development, and digital marketing
            solutions, you'll be poised for growth and asking, "What's next?"
          </p>
          <p>
            Your business doesn't exist in a silo and neither do our services.
            Designed to integrate seamlessly for a holistic website experience,
            our solutions fit your larger growth goals.
          </p>
        </div>
        <div>
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>
      </section>
    </>
  );
};
