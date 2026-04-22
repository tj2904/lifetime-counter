import React from "react"
import { render, screen } from "@testing-library/react"
import moment from "moment"
import CountUp from "../../components/moment/CountUp"

jest.useFakeTimers()

describe("CountUp", () => {
  const givenDate = moment("1980-04-29", "YYYY-MM-DD")

  it("renders the 'Life so far...' heading", () => {
    render(<CountUp givenDate={givenDate} />)
    expect(screen.getByText("Life so far...")).toBeInTheDocument()
  })

  it("renders all stat labels", () => {
    render(<CountUp givenDate={givenDate} />)
    expect(screen.getByText("Years")).toBeInTheDocument()
    expect(screen.getByText("Months")).toBeInTheDocument()
    expect(screen.getByText("Days")).toBeInTheDocument()
    expect(screen.getByText("Hours")).toBeInTheDocument()
    expect(screen.getByText("Minutes")).toBeInTheDocument()
  })

  it("shows a non-negative year count for a past date", () => {
    render(<CountUp givenDate={givenDate} />)
    const yearLabel = screen.getByText("Years")
    const yearValue = parseInt(
      yearLabel.previousElementSibling?.textContent ?? "0",
      10,
    )
    expect(yearValue).toBeGreaterThanOrEqual(0)
  })
})
