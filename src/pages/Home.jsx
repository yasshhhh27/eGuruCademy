import React from 'react'
import {FaArrowRight} from "react-icons/fa"
// import {Link} from "react-router-dom"
import HighlightText from '../components/core/HomePage/HighlightText'

import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/vid2.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import img from "../assets/Logo/xyz-removebg-preview.png"

const Home = () => {
  return (

    

    <div>
 
       
      {/*Section1  */}

      <div className="flex justify-center items-center mt-0 ">

         <img  src={img}
           alt="img"/>

            </div>

        
      
      <div className='relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white'>

        {/* <Link to={"/signup"}>
            <div className='group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 
                            drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95
                            hover:drop-shadow-none'>
                <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200
                                group-hover:bg-richblack-900'>
                    <p>Become an Instructor</p>
                    <FaArrowRight />
                </div>
            </div>
           
        </Link> */}

        <div className='text-center text-4xl font-semibold mt-1'>
            Empower Your Future with
            <HighlightText text={"Coding Skills"} />
        </div>

        <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
        Embark on Your Coding Journey with Flexibility and Excellence! Unlock coding potential with flexible online courses. Learn worldwide, explore projects, quizzes, and get expert feedback at your pace. 
        </div>
        
        <div className='flex flex-row gap-7 mt-8'> 
            <CTAButton active={true} linkto={"/signup"}> 
            Explore
            </CTAButton>

            <CTAButton active={false} linkto={"/login"}> 
            Try Before You Buy
            </CTAButton>
        </div>

        <div className='  flex w-11/12 max-w-maxContent  items-center mx-10 my-10 shadow-[5px_-5px_80px_1px] shadow-blue-200'>
            <video class = "shadow-[12px_12px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
            >
            <source  src={Banner} type="video/mp4" />
            </video>
        </div>
        
        {/* Code Section 1 */}
        <div>
            <CodeBlocks 
                position={"lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unleash Your
                        <HighlightText text={"Coding Skills "}/>
                        with Our Cutting-Edge Online Courses!
                    </div>
                }
                subheading = {
                    "Our courses, led by industry veterans with extensive coding experience, ignite your path to excellence through expert instruction and passion."
                }
                
                ctabtn1={
                    {
                        btnText: "Launch Your Learning",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "Take a Tour",
                        linkto: "/login",
                        active: false,
                    }
                }
               
                codeblock={`<!DOCTYPE html>\n<html>\n<head>\n<title>SamplePage</title>\n<style>\n<body>\n<h1>Welcome to My Page</h1>\nh1 { \n color: #333; } }\n</body>\n</html>`}
                codeColor={"text-yellow-25"}
            />
        </div>

                {/* Code Section 2 */}
        {/* <div>
            <CodeBlocks 
                position={"flex lg:flex-row-reverse my-20 justify-between flex-col lg:gap-10 gap-10"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Begin Your 
                        <HighlightText text={" Learning  Journey "}/>
                       
                    </div>
                }
                subheading = {
                    "Empower yourself with knowledge, and let's shape tomorrow together. oin us in mastering the future of technology and innovation."
                }
                ctabtn1={
                    {
                        btnText: "Launch Your Learning",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "Take a Tour",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<!DOCTYPE html>\n<html>\n<head>\n<title>SamplePage</title>\n<style>\n<body>\n<h1>Welcome to My Page</h1>\nh1 { \n color: #333; } }\n</body>\n</html>`}
                codeColor={"text-yellow-25"}
            />
        </div> */}

        <ExploreMore />

      </div>

    {/* {Section 2 }   */}

    <div className='bg-pure-greys-5 text-richblack-700'>
            <div className='homepage_bg h-[320px]'>

                <div className='mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 '>
                    <div className='lg:h-[150px]'></div>
                    <div className='flex flex-row gap-7 text-white lg:mt-8'>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex items-center gap-3' >
                                Explore Full Catalog
                                <FaArrowRight />
                            </div>
                            
                        </CTAButton>
                        <CTAButton active={false} linkto={"/login"}>
                            <div>
                                Learn more
                            </div>
                        </CTAButton>
                    </div>

                </div>


            </div>

            <div className='mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 '>

                <div className='mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0'>
                    <div className='text-4xl font-semibold lg:w-[45%] '>
                    Acquire the Essential Skillset for a
                        <HighlightText text={"High-Demand Career"} />
                    </div>

                    <div className='flex flex-col items-start gap-10 lg:w-[40%]'>
                    <div className='text-[16px]'>
                    Today, being a competitive specialist demands more than professional skills; it requires the art of continuous evolution. Stay ahead with our unparalleled expertise.
                    </div>
                    <CTAButton active={true} linkto={"/signup"}>
                        <div>
                            Learn more
                        </div>
                    </CTAButton>
                    </div>
                    
                </div>
                <TimelineSection />
                <LearningLanguageSection />

            </div>        

      </div>
  

      {/*Section 3 */}

      <div className='relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>

             <InstructorSection />

                   <h1 className='text-center text-4xl font-semibold mt-8'>Reviews from fellow learners</h1>
            
            {/* <div class = "text-white"> 
                <div clas = "my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent">
                    
                </div>
            </div> */}

      </div>


     
       
      <Footer />

    </div>
  )
}

export default Home
