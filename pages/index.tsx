import dynamic from "next/dynamic"
import moment from "moment"

const CountUp = dynamic(() => import("../components/moment/CountUp"), {
  ssr: false,
})

const Totals = dynamic(() => import("../components/moment/Totals"), {
  ssr: false,
})

function TimIndex() {
  // Create a Moment.js object for the 20th March 2022
  const birthday = moment("1980-04-29", "YYYY-MM-DD")
  const givenDate = moment("2023-04-29", "YYYY-MM-DD")

  return (
    <>
      <h1 className="p-4 text-center font-serif text-9xl font-semibold text-white ">
        Tim
      </h1>
      <CountUp givenDate={birthday} />
      <hr className=" lg:mx-26 mx-6 h-0.5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 md:mx-10" />
      <Totals givenDate={birthday} />
    </>
  )
}

export default TimIndex
