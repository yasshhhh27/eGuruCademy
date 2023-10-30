import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress  from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from "../HomePage/Button"

const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px] mb-32'>
      <div className='flex flex-col gap-5 items-center'>

            <div className='text-4xl font-semibold text-center'>
            Your Versatile Tool for
                <HighlightText text={" Mastering Any Language"} />
            </div>

            <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[70%]'>
            Effortlessly Master Multiple Languages with Realistic 20+ Language Voice-Overs, Progress Tracking, Custom Scheduling, and Beyond.
            </div>

            <div className='flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0'>
                <img 
                    src = {know_your_progress}
                    alt = "KNowYourProgressImage"
                    className='object-contain -mr-32 '
                />
                <img 
                    src = {compare_with_others}
                    alt = "KNowYourProgressImage"
                    className='object-contain lg:-mb-10 lg:-mt-0 -mt-12'
                />
                <img 
                    src = {plan_your_lesson}
                    alt = "KNowYourProgressImage"
                    className='object-contain  lg:-ml-36 lg:-mt-5 -mt-16'
                />
            </div>

            <div className='w-fit mx-auto lg:mb-20 mb-8 mt-20'>
                <CTAButton active={true} linkto={"/signup"}>
                    <div>
                        Learn more
                    </div>
                </CTAButton>
            </div>

      </div>
    </div>
  )
}

export default LearningLanguageSection
 