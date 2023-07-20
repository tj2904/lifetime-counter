import React, { useEffect, useState } from "react"
import moment, { Moment } from "moment"

interface TotalsProps {
  givenDate: Moment
}

interface TotalsState {
  totalYears: string
  totalMonths: string
  totalDays: string
  totalHours: string
  totalMinutes: string
  totalSeconds: string
}

const Totals: React.FC<TotalsProps> = ({ givenDate }) => {
  const [Totals, setTotals] = useState<TotalsState>({
    totalYears: "0",
    totalMonths: "0",
    totalDays: "0",
    totalHours: "0",
    totalMinutes: "0",
    totalSeconds: "0",
  })

  useEffect(() => {
    const updateTotals = (): void => {
      const currentDate = moment()
      const duration = moment.duration(currentDate.diff(givenDate))
      setTotals({
        totalYears: Math.round(duration.asYears()).toLocaleString(),
        totalMonths: Math.round(duration.asMonths()).toLocaleString(),
        totalDays: Math.round(duration.asDays()).toLocaleString(),
        totalHours: Math.round(duration.asHours()).toLocaleString(),
        totalMinutes: Math.round(duration.asMinutes()).toLocaleString(),
        totalSeconds: Math.round(duration.asSeconds()).toLocaleString(),
      })
      console.log("duration: ", duration)
    }

    updateTotals()

    const interval = setInterval(updateTotals, 1000)

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
  } = Totals

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
          Life in numbers...
        </h2>
        <p className="text-gray-500 ">
          Each value is an individual total from when you were born.
        </p>
        <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-3 xl:mt-16">
          {stats.map((stat: any) => (
            <div
              key={stat.id}
              className="flex flex-col gap-y-3 border-l border-white/20 pl-6"
            >
              <dt className="text-sm leading-6 text-gray-300">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default Totals
