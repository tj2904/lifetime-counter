import React, { useEffect, useState } from "react"
import moment, { Moment } from "moment"

interface CountdownProps {
  givenDate: Moment
  xDays: number
  daysFrom: string
}

interface CountdownState {
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

const XDaysFromY: React.FC<CountdownProps> = ({
  givenDate,
  xDays,
  daysFrom,
}) => {
  const [countdown, setCountdown] = useState<CountdownState>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Declare futureDate as a state variable using useState
  const [futureDate, setFutureDate] = useState<Moment>(() =>
    givenDate.clone().add(xDays, "days"),
  )

  useEffect(() => {
    const updateCountdown = (): void => {
      const duration = moment.duration(futureDate.diff(moment()))

      setCountdown({
        years: duration.years(),
        months: duration.months(),
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      })
    }
    console.log("daysFrom", daysFrom)
    updateCountdown()

    const interval = setInterval(updateCountdown, 1000)

    return (): void => {
      clearInterval(interval)
    }
  }, [givenDate])

  const { years, months, days, hours, minutes, seconds } = countdown

  const stats: any = [
    { id: 1, name: "Years", value: years },
    { id: 2, name: "Months", value: months },
    { id: 3, name: "Days", value: days },
    { id: 4, name: "Hours", value: hours },
    { id: 5, name: "Minutes", value: minutes },
    { id: 6, name: "Seconds", value: seconds },
  ]

  const formattedFutureDate = futureDate.format("dddd Do MMMM YYYY")

  return (
    <div className="mx-auto grid max-w-7xl lg:grid-cols-1">
      <div className="mx-auto px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:px-8 lg:pt-32">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {formattedFutureDate}
        </h2>
        <p className="text-gray-500 ">is 500 days from {daysFrom} </p>
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

export default XDaysFromY
