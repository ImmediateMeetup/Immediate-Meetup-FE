import React from 'react'

export default function TimeTable({showTable, timeRange, setTimeRange, dateRange, setDateRange}) {
  const generateTable = () => {
    const table = []

    const startDate = dateRange.startDate
    const endDate = dateRange.endDate
    const dateLength = dateRange.dateLength

    const startTime = timeRange.startTime
    const endTime = timeRange.endTime
    const timeLength = timeRange.timeLength

    for (let i = 0; i <= timeLength; i++) {
      const row = []
      for (let j = 0; j <= dateLength; j++) {
        let cellContent
        if (i === 0) {
          if (j === 1) {
            cellContent = startDate
          } else if (j === dateLength) {
            cellContent = endDate
          }
        } else if (i % 2 === 0) {
          if (j === 0) {
            cellContent = startTime + i / 2
          }
        }
        row.push(
          <td key={`${i}-${j}`} className="text-black border-2 h-8 w-8" style={{textAlign: 'center'}}>
            {cellContent}
          </td>
        )
      }
      table.push(<tr key={i}>{row}</tr>)
    }
    return table
  }

  return (
    <table id="time_table" className="table table-hover table-bordered table-striped">
      <thead>
        <tr>
          <th>만날</th>
          <th>시간</th>
        </tr>
      </thead>
      <tbody>{generateTable()}</tbody>
    </table>
  )
}
