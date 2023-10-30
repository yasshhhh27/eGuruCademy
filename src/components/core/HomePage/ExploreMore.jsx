// import React from 'react'
// import  {HomePageExplore} from "../../../data/homepage-explore"
// import HighlightText from './HighlightText';
// import { useState } from 'react';
// import CourseCard from "./CourseCard";


// const tabsName = [
//     "Free",
//     "New to coding",
//     "Most popular",
//     "Skill paths",
//     "Career paths",
// ];

// const ExploreMore = () => {

//     const [currentTab, setCurrentTab] = useState(tabsName[0]);
//     const [courses, setCourses] = useState(HomePageExplore[0].courses);
//     const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading)

//     const setMyCards = (value) => {
//         setCurrentTab(value);
//         const result = HomePageExplore.filter((course) => course.tag === value);
//         setCourses(result[0].courses);
//         setCurrentCard(result[0].courses[0].heading);
//     }


//   return (
//     <div>

//       <div className='text-4xl font-semibold text-center'>
//       Harness the  
//         <HighlightText text={"Code's Potential"} />
//       </div>

//       <p className='text-center text-richblack-300 text-sm text-[16px] mt-3'>
//       Discover the Art of Creating Your Imagination
//       </p>  

//       <div className='mt-5 flex flex-row rounded-full bg-richblack-800 mb-5 border-richblack-100
//       px-1 py-1'>
//       {
//         tabsName.map( (element, index) => {
//             return (
//                 <div
//                 className={`text-[16px] flex flex-row items-center gap-2 
//                 ${currentTab === element 
//                 ? "bg-richblack-900 text-richblack-5 font-medium"
//                 : "text-richblack-200" } rounded-full transition-all duration-200 cursor-pointer
//                 hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2`}
//                 key={index}
//                 onClick={() => setMyCards(element)}
//                 >
//                     {element}
//                 </div>
//             )
//         })
//       }

//       </div>

//       {/* <div className='lg:h-[150px]'></div> */}


//       <div className='hidden lg:block lg:h-[180px]'></div>
           
//            <div class="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
              
//                <div class="w-[360px] lg:w-[30%] bg-white shadow-[12px_12px_0_0] shadow-yellow-50  text-richblack-25 h-[300px] box-border cursor-pointer">
//                <div class = "border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
//                <div class=" text-center text-richblack-800 font-semibold text-[20px]">
//                <HighlightText text={" AI & ML"}/>
//                     </div>
//                <div class =" text-center text-richblack-400">"This course introduces AI and ML fundamentals, covering data analysis, modeling, algorithms, and their real-world applications"</div>
//                     </div>   
//                </div>

//                 {/* <div class="flex justify-between text-blue-300 px-6 py-3 font-medium">
//                     <div class="flex items-center gap-2 text-[16px]">
//                         <p>Beginner</p>
//                     </div>
//                     <div class="flex items-center gap-2 text-[16px]">
//                       <p> "6"" Lessons"</p>
//                     </div>
//                 </div> */}

//                <div class="w-[360px] lg:w-[30%] bg-white shadow-[12px_12px_0_0] shadow-yellow-50  text-richblack-25 h-[300px] box-border cursor-pointer">
//                <div class = "border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
//                <div class=" text-center text-richblack-800 font-semibold text-[20px]">
//                <HighlightText text={" Blockchain"}/>
//                     </div>
//                <div class =" text-center text-richblack-400">"This course explores blockchain fundamentals, covering decentralized ledgers, smart contracts, cryptocurrencies, and their real-world applications"</div>
//                     </div>   
//                </div>
 
//                <div class="w-[360px] lg:w-[30%] bg-white shadow-[12px_12px_0_0] shadow-yellow-50  text-richblack-25 h-[300px] box-border cursor-pointer">
//                <div class = "border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
//                <div class=" text-center text-richblack-800 font-semibold text-[20px]">
//                <HighlightText text={" DevOps"}/>
//                     </div>
//                <div class =" text-center text-richblack-400">"This course explores DevOps fundamentals, including automation, collaboration, and tools for efficient software development and deployment"</div>
//                     </div>   
//                </div>    

//            </div>
      

//     </div>
//   )
// }

// export default ExploreMore

import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import CourseCard from "./CourseCard";
import HighlightText from "./HighlightText";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div>
      {/* Explore more section */}
      <div>
        <div className="text-4xl font-semibold text-center my-10">
        Harness the
          <HighlightText text={"Code's Potential"} />
          <p className="text-center text-richblack-300 text-lg font-semibold mt-1">
          Discover the Art of Creating Your Imagination
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="hidden lg:flex gap-5 -mt-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
        {tabsName.map((ele, index) => {
          return (
            <div
              className={` text-[16px] flex flex-row items-center gap-2 ${
                currentTab === ele
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-richblack-200"
              } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
              key={index}
              onClick={() => setMyCards(ele)}
            >
              {ele}
            </div>
          );
        })}
      </div>
      <div className="hidden lg:block lg:h-[200px]"></div>

      {/* Cards Group */}
      <div className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
        {courses.map((ele, index) => {
          return (
            <CourseCard
              key={index}
              cardData={ele}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;