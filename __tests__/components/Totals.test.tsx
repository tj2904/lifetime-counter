import React from "react"
import { render, screen } from "@testing-library/react"
import moment from "moment"
import Totals from "../../components/moment/Totals"

jest.useFakeTimers()

describe("Totals", () => {
  const givenDate = moment("1980-04-29", "YYYY-MM-DD")

  it("renders the 'Life in numbers...' heading", () => {
    render(<Totals givenDate={givenDate} />)
    expect(screen.getByText("Life in numbers...")).toBeInTheDocument()
  })

  it("renders the description text", () => {
    render(<Totals givenDate={givenDate} />)
    expect(
      screen.getByText("Each value is an individual total from when you were born."),
    ).toBeInTheDocument()
  })

  it("renders all six stat labels", () => {
    render(<Totals givenDate={givenDate} />)
    const labels = ["Years", "Months", "Days", "Hours", "Minutes", "Seconds"]
    labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument()
    })
  })
})
