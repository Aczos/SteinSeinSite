import { Header } from "@/components/Header/Header";
import Image from "next/image";
import oficeImg from "../../public/images/office-932926_640.jpg";
export default function Home() {
  const text = "SteinSeinSite.";
  const letters = text.split("");
  return (
    <div>
      <div>
        <div className="relative top-0 left-0 z-30 bg-[url('../assets/images/bgeee.jpg')] bg-cover bg-center bg-scroll bg-no-repeat w-screen h-screen   after:bg-black after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-90  ">
          <div className="absolute z-10 top-2/4 -translate-y-2/4 left-1/3 -translate-x-1/3">
            {letters.map((letter, i) => (
              <span
                key={i}
                className="rainbow-text text-4xl lg:text-6xl"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            </p>
            <button className="px-4 py-2 bg-[#AF8946] text-2xl mt-5">
              view services
            </button>
          </div>
        </div>
      </div>
      <section className="flex flex-col">
        <div className="w-4/5 mx-auto">
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
        <div className=" w-4/5 h-4/5 overflow-hidden p-4 mx-auto">
          <Image className="" src={oficeImg} alt="" />
        </div>
      </section>
    </div>
  );
}
