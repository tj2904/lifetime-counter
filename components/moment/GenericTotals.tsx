import React, { useEffect, useState } from "react"
import moment, { Moment } from "moment"

interface GenericTotalsProps {
  givenDate: Moment
}

interface GenericTotalsState {
  totalYears: string
  totalMonths: string
  totalDays: string
  totalHours: string
  totalMinutes: string
  totalSeconds: string
}

const GenericTotals: React.FC<GenericTotalsProps> = ({ givenDate }) => {
  const [GenericTotals, setGenericTotals] = useState<GenericTotalsState>({
    totalYears: "0",
    totalMonths: "0",
    totalDays: "0",
    totalHours: "0",
    totalMinutes: "0",
    totalSeconds: "0",
  })

  useEffect(() => {
    const updateGenericTotals = (): void => {
      const currentDate = moment()
      const duration = moment.duration(currentDate.diff(givenDate))
      setGenericTotals({
        totalYears: Math.round(duration.asYears()).toLocaleString(),
        totalMonths: Math.round(duration.asMonths()).toLocaleString(),
        totalDays: Math.round(duration.asDays()).toLocaleString(),
        totalHours: Math.round(duration.asHours()).toLocaleString(),
        totalMinutes: Math.round(duration.asMinutes()).toLocaleString(),
        totalSeconds: Math.round(duration.asSeconds()).toLocaleString(),
      })
    }

    updateGenericTotals()

    const interval = setInterval(updateGenericTotals, 1000)

    return (): void => {
      clearInterval(interval)
    }
  }, [givenDate])

  const {
    totalYears,
    totalMonths,
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds,
  } = GenericTotals

  const stats: any = [
    { id: 1, name: "Years", value: totalYears },
    { id: 2, name: "Months", value: totalMonths },
    { id: 3, name: "Days", value: totalDays },
    { id: 4, name: "Hours", value: totalHours },
    { id: 5, name: "Minutes", value: totalMinutes },
    { id: 6, name: "Seconds", value: totalSeconds },
  ]

  return (
    <div className="mx-auto grid max-w-7xl lg:grid-cols-1">
      <div className="mx-auto px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:px-8 lg:pt-32">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Passage of time so far...
        </h2>
        <p className="text-gray-500 ">
          Each value is an individual total from the supplied date.
        </p>
        <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-3 xl:mt-16">
          {stats.map((stat: any) => (
            <div
              key={stat.id}
              className="flex flex-col gap-y-3 border-l border-white/20 pl-6"
            >
              <dt className="text-sm leading-6 text-gray-300">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                {stat.value}&nbsp;&nbsp;&nbsp;
                {/* &nbsp; nasty hack to stop layoutshift with smaller values in the Seconds box */}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default GenericTotals
