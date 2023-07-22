"use client"
import dynamic from "next/dynamic"
import moment from "moment"

export const getServerSideProps = async ({ query }) => {
  const { date } = query

  return {
    props: {
      date,
    },
  }
}
const CountUp = dynamic(() => import("../components/moment/CountUp"), {
  ssr: false,
})

const Totals = dynamic(() => import("../components/moment/Totals"), {
  ssr: false,
})

function AnyDate(date) {
  // Create a Moment.js object for the date in url
  const urlDate = date.date
  console.log("urlDate", urlDate)
  const birthday = moment(`${urlDate}`, "DD-MM-YYYY")
  return (
    <>
      <h1 className="p-4 text-center font-serif text-6xl font-semibold text-white ">
        If born on {urlDate}
      </h1>
      <CountUp givenDate={birthday} />
      <hr className=" lg:mx-26 mx-6 h-0.5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 md:mx-10" />
      <Totals givenDate={birthday} />
    </>
  )
}

export default AnyDate
