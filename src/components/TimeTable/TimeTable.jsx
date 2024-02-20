import React, {useState} from 'react'

export default function TimeTable({timeRange, dateRange}) {
  const [pickedCells, setPickedCells] = useState([])

  const generateTable = () => {
    const table = []

    const allDates = dateRange.allDatesInRange

    const timeLength = timeRange.timeLength
    const startTime = timeRange.startTime

    const rows = Array(timeLength + 1)
      .fill(null)
      .map(() => Array(allDates.length + 1).fill(null))

    rows[0][0] = 'ㅤㅤ'
    for (let i = 1; i < allDates.length + 1; i++) {
      rows[0][i] = (
        <td key={`0-${i}`}>
          <span className="w-20 ">{formatDate(allDates[i - 1])}</span>
        </td>
      )
    }

    for (let i = 1; i < timeLength + 1; i++) {
      const value = startTime + (i - 1) / 2
      const value2 = value % 1 == 0 ? value : 'ㅤㅤ'
      rows[i][0] = (
        <td key={`${i}-0`}>
          <span className="">{value2}</span>
        </td>
      )
    }

    for (let i = 1; i < timeLength + 1; i++) {
      for (let j = 1; j < allDates.length + 1; j++) {
        rows[i][j] = (
          <td
            key={`${i}-${j}`}
            className={`text-black text-center border-2 border-[#cb9fa6] h-8 w-20 ${
              pickedCells.includes(`${i}-${j}`) ? 'bg-[#ffd5d9]' : ''
            }`}
            onClick={() => handleCellClick(`${i}-${j}`)}
          ></td>
        )
      }
    }

    // 표로 변환
    for (let i = 0; i < rows.length; i++) {
      const row = []
      for (let j = 0; j < rows[i].length; j++) {
        row.push(rows[i][j])
      }
      table.push(<tr key={`row-${i}`}>{row}</tr>)
    }
    return table
  }

  const formatDate = (date) => {
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${month}/${day}`
  }

  const handleCellClick = (cellKey) => {
    if (pickedCells.includes(cellKey)) {
      setPickedCells(pickedCells.filter((key) => key !== cellKey))
    } else {
      setPickedCells([...pickedCells, cellKey])
    }
  }

  return (
    <table id="time_table" className="table table-hover table-bordered table-striped">
      <tbody>{generateTable()}</tbody>
    </table>
  )
}
