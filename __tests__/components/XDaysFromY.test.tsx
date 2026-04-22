import React from "react"
import { render, screen } from "@testing-library/react"
import moment from "moment"
import XDaysFromY from "../../components/moment/XDaysFromY"

jest.useFakeTimers()

describe("XDaysFromY", () => {
  const givenDate = moment("2020-01-01", "YYYY-MM-DD")

  it("renders all six stat labels", () => {
    render(
      <XDaysFromY givenDate={givenDate} xDays={500} daysFrom="01-01-2020" />,
    )
    const labels = ["Years", "Months", "Days", "Hours", "Minutes", "Seconds"]
    labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument()
    })
  })

  it("renders the 'is 500 days from' text", () => {
    render(
      <XDaysFromY givenDate={givenDate} xDays={500} daysFrom="01-01-2020" />,
    )
    expect(screen.getByText(/is 500 days from/)).toBeInTheDocument()
  })

  it("renders the computed future date heading", () => {
    render(
      <XDaysFromY givenDate={givenDate} xDays={500} daysFrom="01-01-2020" />,
    )
    const expectedDate = givenDate.clone().add(500, "days").format("dddd Do MMMM YYYY")
    expect(screen.getByText(expectedDate)).toBeInTheDocument()
  })
})
