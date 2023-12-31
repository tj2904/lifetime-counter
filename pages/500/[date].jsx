import dynamic from "next/dynamic"
import Head from "next/head"
import moment from "moment"

export const getServerSideProps = async ({ query }) => {
  const { date } = query

  return {
    props: {
      date,
    },
  }
}
const XDaysFromY = dynamic(() => import("../../components/moment/XDaysFromY"), {
  ssr: false,
})
const GenericTotals = dynamic(
  () => import("../../components/moment/GenericTotals"),
  {
    ssr: false,
  },
)

function AnyDate(date) {
  // Create a Moment.js object for the date in url
  const urlDate = date.date
  const birthday = moment(`${urlDate}`, "DD-MM-YYYY")
  return (
    <>
      <Head>
        <title>500 Days from...</title>
      </Head>
      <h1 className="p-4 text-center font-serif text-6xl font-semibold text-white ">
        500 Days
      </h1>
      <XDaysFromY givenDate={birthday} xDays={500} daysFrom={urlDate} />
      <hr className=" lg:mx-26 mx-6 h-0.5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 md:mx-10" />
      <GenericTotals givenDate={birthday} />
    </>
  )
}

export default AnyDate
