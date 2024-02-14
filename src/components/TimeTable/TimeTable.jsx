import React from 'react'

export default function TimeTable({showTable, timeRange, setTimeRange, dateRange, setDateRange}) {
  const generateTable = () => {
    const table = []

    const allDates = dateRange.allDatesInRange

    const timeLength = timeRange.timeLength
    const startTime = timeRange.startTime
    const endTime = timeRange.endTime

    const rows = Array(timeLength + 1)
      .fill(null)
      .map(() => Array(allDates.length + 1).fill(null))

    rows[0][0] = null
    for (let i = 1; i < allDates.length + 1; i++) {
      rows[0][i] = [formatDate(allDates[i - 1]), null]
    }

    for (let i = 1; i < timeLength + 1; i++) {
      rows[i][0] = [null, `${startTime + (i - 1) / 2}`]
    }

    for (let i = 1; i < timeLength + 1; i++) {
      for (let j = 1; j < allDates.length + 1; j++) {
        rows[i][j] = [null, null]
      }
    }

    // 표로 변환
    for (let i = 0; i < rows.length; i++) {
      const row = []
      for (let j = 0; j < rows[i].length; j++) {
        row.push(
          <td key={`${i}-${j}`} className="text-black border-2 h-8 w-8">
            {rows[i][j] || rows[i][j]}
          </td>
        )
      }
      table.push(<tr key={`row-${i}`}>{row}</tr>)
    }
    console.log(rows)
    return table
  }

  const formatDate = (date) => {
    const month = date.getMonth() + 1
    const day = date.getDate()
    console.log(month, date)
    return `${month}/${day}`
  }

  return (
    <table id="time_table" className="table table-hover table-bordered table-striped">
      <tbody>{generateTable()}</tbody>
    </table>
  )
}
