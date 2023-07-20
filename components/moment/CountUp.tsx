import React, { useEffect, useState } from "react"
import moment, { Moment } from "moment"

interface CountUpProps {
  givenDate: Moment
}

interface CountUpState {
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
  totalSeconds: string
}

const CountUp: React.FC<CountUpProps> = ({ givenDate }) => {
  const [CountUp, setCountUp] = useState<CountUpState>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSeconds: "0",
  })

  useEffect(() => {
    const updateCountUp = (): void => {
      const currentDate = moment()
      const duration = moment.duration(currentDate.diff(givenDate))
      setCountUp({
        years: duration.years(),
        months: duration.months(),
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
        totalSeconds: Math.round(duration.asSeconds()).toLocaleString(),
      })
      console.log("duration: ", duration)
    }

    updateCountUp()

    const interval = setInterval(updateCountUp, 1000)

    return (): void => {
      clearInterval(interval)
    }
  }, [givenDate])

  const { years, months, days, hours, minutes, seconds, totalSeconds } = CountUp

  const stats: any = [
    { id: 1, name: "Years", value: years },
    { id: 2, name: "Months", value: months },
    { id: 3, name: "Days", value: days },
    { id: 4, name: "Hours", value: hours },
    { id: 5, name: "Minutes", value: minutes },
    // { id: 6, name: "Seconds", value: seconds},
  ]

  return (
    <div className="mx-auto grid max-w-7xl lg:grid-cols-1">
      <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 md:mx-auto lg:px-8 lg:pt-32">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Life so far...
        </h2>
        <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-6 xl:mt-16">
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

export default CountUp
