import dynamic from "next/dynamic"
import moment from "moment"

const CountUp = dynamic(() => import("../components/moment/CountUp"), {
  ssr: false,
})

const XDaysFromY = dynamic(() => import("../components/moment/XDaysFromY"), {
  ssr: false,
})
const Totals = dynamic(() => import("../components/moment/Totals"), {
  ssr: false,
})

function TimIndex() {
  // Create a Moment.js object for the 20th March 2022
  const givenDate = moment("1980-04-29", "YYYY-MM-DD")
  const birthday = moment("2023-04-29", "YYYY-MM-DD")

  return (
    <>
      <h1 className="p-4 text-center font-serif text-9xl font-semibold text-white ">
        Tim
      </h1>
      <CountUp givenDate={givenDate} />
      <hr className=" mx-6 h-0.5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 lg:mx-24" />
      <Totals givenDate={givenDate} />

      {/* <p className="pt-6">
        {" "}
        500 Days from my 43th Birthday:
        <XDaysFromY givenDate={birthday} />
      </p> */}
    </>
  )
}

export default TimIndex
