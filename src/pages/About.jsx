import React from "react"

// import FoundingStory from "../assets/Images/1.png"
import BannerImage1 from "../assets/Images/iki.png"
import BannerImage2 from "../assets/Images/Instructor.png"
import BannerImage3 from "../assets/Images/iki1.png"
import Footer from "../components/common/Footer"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
// import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"

const About = () => {
  return (
    <div>
      <section className="bg-richblack-800">
        <div className="relative py-1 mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[60%]">
          Advancing Digital Education for a
            <HighlightText text={" Promising Tomorrow"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
            eGuruCademy stands as a pioneering force in the realm of online education. Our unwavering commitment 
            lies in sculpting a more illuminated future through the delivery of state-of-the-art courses, 
            harnessing the potential of emerging technologies, and cultivating a thriving and harmonious 
            learning community.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-51.5%] translate-y-[35%] grid-cols-3 gap-3 lg:gap-16">
            <div className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[100px] md:h-fit">
            <img src={BannerImage1} alt="" />
            </div>
            <div className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[100px] md:h-fit">
            <img src={BannerImage2} alt="" />
            </div>
            <div className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[100px] md:h-fit">
            <img src={BannerImage3} alt="" />
            </div>
            
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-12 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        {/* <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between  text-richblack-500">
          <div className="flex flex-col items-center gap-1 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[400%] flex-col gap-14">
              <h1 className="bg-clip-text text-2xl font-semibold text-transparent lg:w-[70%] ">
              <HighlightText text={"The Genesis of Our Journey"} /> 
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
               Inspired by a passion for digital education, eGuruCademy was born.
               Its founders envisioned a platform where knowledge knows no bounds. 
               Users learn through diverse online content, while instructors enrich it with their expertise, 
               shaping a boundless learning community
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              EguruCademy's story began as a shared vision, and it continues to evolve, 
              making education a limitless realm for all. This journey exemplifies the power of human ingenuity
              and the boundless potential of collaborative learning, reminding us that the pursuit of knowledge
              knows no boundaries.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[100px] md:h-fit"
                
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between"> */}
          
          <div 
            className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-12 text-3xl font-semibold lg:w-[60%]">
          The Genesis of Our 
            <HighlightText text={" Journey"} />
            <p className="mx-auto mt-6 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
            Inspired by a passion for digital education, eGuruCademy was born. Its founders envisioned a platform where knowledge knows
             no bounds. Users learn through diverse online content, while instructors enrich it with their expertise, shaping a boundless
              learning community
            </p>
            <p className="mx-auto mt-4 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
            EguruCademy's story began as a shared vision, and it continues to evolve, making education a limitless realm for all. 
            This journey exemplifies the power of human ingenuity and the boundless potential of collaborative learning, reminding
             us that the pursuit of knowledge knows no boundaries.
            </p>
          </header>
            </div>

            <div 
            className="relative py-8 mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-2 text-3xl font-semibold lg:w-[60%]">
          Our
            <HighlightText text={" Vision"} />
            <p className="mx-auto mt-6 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
            EguruCademy envisions a world where knowledge is universally accessible, fostering a global community of lifelong
             learners and educators empowered to shape a limitless future through collaborative, digital education.
            </p>
          </header>
            </div>
            <div 
            className="relative py-0 mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-14 text-3xl font-semibold lg:w-[60%]">
          Our
            <HighlightText text={" Mission"} />
            <p className="mx-auto mt-6 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
            Our mission at eGuruCademy is to empower individuals worldwide with limitless learning opportunities.
             We believe in fostering knowledge sharing through an inclusive, innovative, and collaborative educational
              ecosystem.
            </p>
          </header>
            </div>
    
       
       
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        {/* <LearningGrid /> */}
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        {/* <ReviewSlider /> */}
      </div>
      <Footer />
    </div>
  )
}

export default About