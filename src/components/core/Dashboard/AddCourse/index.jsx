import RenderSteps from "./RenderSteps"

export default function AddCourse() {
  return (
    <>
      <div className="flex w-full items-start gap-x-6">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-medium text-richblack-5">
            Add Course
          </h1>
          <div className="flex-1">
            <RenderSteps />
          </div>
        </div>
        {/* Course Upload Tips */}
        <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
          <p className="mb-8 text-lg text-richblack-5">Guidelines for Uploading Your Course</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
            <li>You can choose to set a price for the course.</li>
            <li>The standard size for the course thumbnail is 1024x576 pixels.</li>
            <li>The video section allows you to upload and control the course overview video.</li>
            <li>
              Use the Course Builder section to structure and organize your course content.</li>
            <li>
            In the Course Builder, add topics to create lessons, quizzes, and assignments.
            </li>
            <li>
            In Additional Data, input info for course page; add context and extra details to your course.
            </li>
            <li>
Use Announcements for essential course updates, event notifications, and changes to inform enrolled students.</li>
            <li>Send messages to all enrolled students at once.</li>
          </ul>
        </div>
      </div>
    </>
  )
}