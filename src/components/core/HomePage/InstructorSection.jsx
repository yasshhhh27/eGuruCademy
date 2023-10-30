import React from 'react'
import Instructor from "../../../assets/Images/intructorfinal.png"
import HighlightText from './HighlightText'
import CTAButton from "../HomePage/Button"
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
  return (
    <div className='mt-16'>
      <div className='flex flex-row gap-20 items-centeflex flex-col lg:flex-row gap-20 items-center'>
       
        <div className='lg:w-[50%]'>
            <img
                src={Instructor}
                alt=""
                className='shadow-white shadow-[-20px_-20px_0_0]'
                
            />
        </div>
        

        <div className='lg:w-[50%] flex gap-10 flex-col'>
            <div className='lg:w-[50%] text-8xl font-semibold '>
                Become an
                <HighlightText text={"Instructor"} />
            </div>

            <p className='font-medium text-[16px] text-justify w-[90%] text-richblack-300'>
            Educators Worldwide, Empowering Countless Learners on eGuruCademy. Equip Yourself with the Resources and Expertise to Share Your Passion.
            </p>

            <div className='w-fit'>
                <CTAButton active={true} linkto={"/signup"}>
                    <div className='flex items-center gap-3'>
                    Begin Your Journey
                        <FaArrowRight />
                    </div>
                </CTAButton>
            </div>

           </div>
        </div>

      </div>
    
  )
}

export default InstructorSection