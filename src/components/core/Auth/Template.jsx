// import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"

// import frameImg from "../../../assets/Images/ii.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)]  place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className=" mx-auto flex w-11/12 max-w-maxContent ">
          <div className="mx-auto w-11/12 max-w-[460px]  place-items-center">
            <h1 className="  text-[1.875rem] text-center font-semibold leading-[2.475rem] text-richblack-5">
              {title}
            </h1>
            <p className=" mt-4 text-center text-[1.125rem]  leading-[1.625rem]">
              <span className=" text-richblack-100">{description1}</span>{""}
              <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold"> 
                { description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          {/* <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
            <img
              src={frameImg}
              alt="Pattern"
              width={100}
              height={604}
              loading="lazy"
            />
            <img
              src={image}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute top-5 right-4 z-10"
            />
          </div> */}
        </div>
      )}
    </div>
  )
}

export default Template