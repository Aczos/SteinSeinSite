import React from "react";
import Image from "next/image";
import oficeImg from "../../../public/images/office-932926_640.jpg";
import { ServicesCard } from "../servicesCard/ServicesCard";
import photo1 from "../../../public/images/photo1.jpg"
import photo2 from "../../../public/images/photo2.jpg"
import photo3 from "../../../public/images/photo3.jpg"
import { EnvelopeIcon } from "@heroicons/react/24/solid"


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
        <div className=" w-4/5 h-4/5 overflow-hidden lg:mt-10 p-4 mx-auto ">
          <Image className="" src={oficeImg} alt="" />
        </div>
      </section>
      <section className=" lg:flex-row   lg:px-10 mt-6 bg-[#1C1F1F]">
        <div className="p-10 mx-auto ">
          <h2 className=" text-4xl font-bold  text-[#C19957]  ">Services</h2>
          <p className="sm:text-1xl sm:w-full lg:w-3/5   font-bold my-6 text-2xl ">
            With our innovative design, development, and digital marketing
            solutions, you'll be poised for growth and asking, "What's next?"
          </p>
          <p className="sm:w-full lg:w-3/5  " >
            Your business doesn't exist in a silo and neither do our services.
            Designed to integrate seamlessly for a holistic website experience,
            our solutions fit your larger growth goals.
          </p>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row p-10 max-w-[600px]  mx-auto lg:max-w-full ">

          <ServicesCard title={'Web design'} img={photo1} />
          <ServicesCard title={'Web development'} img={photo2}/>
          <ServicesCard title={'Graphic design'} img={photo3} />
        </div>
      </section>


      <section className="lg:flex lg:w-full  ">

        <div className="lg:flex lg:w-4/6 p-6 ">

        <div className="flex  flex-col w-4/5 mx-auto lg:m-0 lg:w-4/5 ">
        <h2 className="text-3xl font-bold ">Contact us</h2>
        <p className="text-1xl font-bold lg:w-2/3" >We want to help you grow your business online. Start the conversation by calling us or sending an email.</p>
        

       

       <div>
       <label className="text-1xl font-bold  flex  uppercase py-2">name <span className="text-red-600  ml-2">*</span></label>
       <input className="bg-black border-b-2  w-full  mx-auto lg:w-2/3"   type="text"/>
       </div>

       <div>
       <label className="text-1xl font-bold  flex  uppercase py-2">Email addres <span className="text-red-600  ml-2">*</span></label>
       <input className="bg-black border-b-2  w-full  mx-auto lg:w-2/3" type="text"/>
       </div>

       <div>
       <label className="text-1xl font-bold  flex  uppercase py-2">Phone number <span className="text-red-600  ml-2" >*</span></label>
       <input className="bg-black border-b-2  w-full  mx-auto lg:w-2/3 " type="number" />
       </div>

        <div>
       <label className="text-1xl font-bold  flex  uppercase py-2">Message </label>
       <textarea className="bg-black border-b-2 w-full h-2/3 lg:w-2/3"   ></textarea>
       </div>

       <div className="flex ">
        <input type="checkbox" />
        <label className="text-1xl font-bold lg:w-2/3  uppercase py-2"> I allow this website to store my submission so they can respond to my inquiry <span className="text-red-600  ml-2">*</span></label> 
        </div>

       <button className="w-4/5 bg-[#C19957] m-auto py-2 text-xl font-bold lg:w-2/3 lg:m-0">Submit</button>
       </div>
        </div>
        

        <section className="lg:flex lg:flex-column  bg-[#1C1F1F]">
          <div className="lg:p-6">
        <div className="flex flex-col w-4/5 px-2 py-4 m-auto   ">
        <p>If you’re passionate about web design and think SteinSeinSite sounds like somewhere you could see yourself working, we’d love to hear from you.</p>
        <a className="flex flex-row gap-4 py-2  " href="tojadave28@gmail.com"> <EnvelopeIcon className=" w-5 h5 " />tojadave28@gmail.com</a>
        </div>
        
        <div className="flex flex-col px-2 w-4/5 m-auto lg:py-10">
          <h2 className="text-2xl font-bold ">Hours</h2>
          <span>Mon	9:00am	–	10:00pm</span>
          <span> Tue	9:00am	–	10:00pm</span>
          <span> Wed	9:00am	–	10:00pm</span>
          <span>Thu	9:00am	–	10:00pm</span>
          <span> Fri	9:00am	–	10:00pm</span>
          <span>Sat	9:00am	–	6:00pm</span>
          <span>Sun	9:00am	–	12:00pm</span>
        </div>
        </div>
        </section>
      </section>
      
    </>
  );
};
