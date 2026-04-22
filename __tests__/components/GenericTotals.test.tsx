import React from "react"
import { render, screen } from "@testing-library/react"
import moment from "moment"
import GenericTotals from "../../components/moment/GenericTotals"

jest.useFakeTimers()

describe("GenericTotals", () => {
  const givenDate = moment("2020-01-01", "YYYY-MM-DD")

  it("renders the 'Passage of time so far...' heading", () => {
    render(<GenericTotals givenDate={givenDate} />)
    expect(screen.getByText("Passage of time so far...")).toBeInTheDocument()
  })

  it("renders the description text", () => {
    render(<GenericTotals givenDate={givenDate} />)
    expect(
      screen.getByText("Each value is an individual total from the supplied date."),
    ).toBeInTheDocument()
  })

  it("renders all six stat labels", () => {
    render(<GenericTotals givenDate={givenDate} />)
    const labels = ["Years", "Months", "Days", "Hours", "Minutes", "Seconds"]
    labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument()
    })
  })
})
