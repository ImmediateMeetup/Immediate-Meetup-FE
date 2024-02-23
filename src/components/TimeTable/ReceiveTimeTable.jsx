import React, {useState, useEffect} from 'react'

export default function ReceiveTimeTable() {
  const [pickedCells, setPickedCells] = useState([])
  const [sendPickedCells, setSendPickedCells] = useState([])

  const time_table = {
    timeTable: {
      '2023-02-13T00:00': 0,
      '2023-02-13T00:30': 0,
      '2023-02-13T01:00': 0,
      '2023-02-13T01:30': 0,
      '2023-02-13T02:00': 0,
      '2023-02-13T02:30': 0,
      '2023-02-13T03:00': 0,
      '2023-02-13T03:30': 0,
      '2023-02-13T04:00': 0,
      '2023-02-13T04:30': 0,
      '2023-02-13T05:00': 0,
      '2023-02-13T05:30': 0,

      '2023-02-14T00:00': 0,
      '2023-02-14T00:30': 0,
      '2023-02-14T01:00': 0,
      '2023-02-14T01:30': 0,
      '2023-02-14T02:00': 0,
      '2023-02-14T02:30': 0,
      '2023-02-14T03:00': 0,
      '2023-02-14T03:30': 0,
      '2023-02-14T04:00': 0,
      '2023-02-14T04:30': 0,
      '2023-02-14T05:00': 0,
      '2023-02-14T05:30': 0,

      '2023-02-15T00:00': 0,
      '2023-02-15T00:30': 0,
      '2023-02-15T01:00': 0,
      '2023-02-15T01:30': 0,
      '2023-02-15T02:00': 0,
      '2023-02-15T02:30': 0,
      '2023-02-15T03:00': 0,
      '2023-02-15T03:30': 0,
      '2023-02-15T04:00': 0,
      '2023-02-15T04:30': 0,
      '2023-02-15T05:00': 0,
      '2023-02-15T05:30': 0
    }
  }

  const handleCellClick = (cellKey) => {
    if (pickedCells.includes(cellKey)) {
      setPickedCells(pickedCells.filter((key) => key !== cellKey))
    } else {
      setPickedCells([...pickedCells, cellKey])
    }
  }

  useEffect(() => {
    const timeKeys = Object.keys(time_table.timeTable)
    const dateKeys = Array.from(new Set(timeKeys.map((key) => key.slice(5, 10))))
    const timeLength = timeKeys.length / dateKeys.length
    const newSendPickedCells = []
    for (let i = 0; i < pickedCells.length; i++) {
      const [num1, num2] = pickedCells[i].split('-').map(Number)
      const index = num1 - 1 + (num2 - 1) * timeLength
      newSendPickedCells.push(timeKeys[index])
    }
    setSendPickedCells(newSendPickedCells)
    console.log(newSendPickedCells, 'send')
  }, [pickedCells])

  const generateTable = () => {
    const timeTable = time_table.timeTable
    const table = []

    const timeKeys = Object.keys(timeTable)
    const dateKeys = Array.from(new Set(timeKeys.map((key) => key.slice(5, 10))))
    const timeLength = timeKeys.length / dateKeys.length
    const allDates = dateKeys
    const colorNum = Object.values(time_table.timeTable)

    const rows = Array(timeLength + 1)
      .fill(null)
      .map(() => Array(allDates.length + 1).fill(null))

    rows[0][0] = 'ㅤㅤ'

    // 날짜
    for (let i = 1; i < allDates.length + 1; i++) {
      rows[0][i] = (
        <td key={`0-${i}`} className="text-center">
          <span className="w-20">{allDates[i - 1]}</span>
        </td>
      )
    }

    // 시간
    for (let i = 1; i < timeLength + 1; i++) {
      const time = timeKeys[i - 1].slice(11)
      rows[i][0] = (
        <td key={`${i}-0`} className="pr-3">
          <span className="">{time}</span>
        </td>
      )
    }

    for (let i = 1; i < timeLength + 1; i++) {
      for (let j = 1; j < allDates.length + 1; j++) {
        const cellKey = `${i}-${j}`
        const colorIndex = colorNum[i * j - 1]
        const backgroundColor = `bg-rose-${100 * colorIndex}`
        const pikedbackgroundColor = `bg-rose-${100 * colorIndex + 100}`

        rows[i][j] = (
          <td
            key={`${i}-${j}`}
            className={`text-black text-center border-2 border-[#cb9fa6] h-8 w-20 ${
              pickedCells.includes(cellKey) ? pikedbackgroundColor : backgroundColor
            }`}
            onClick={() => handleCellClick(cellKey)}
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

  return (
    <>
      <table id="time_table" className="table table-hover table-bordered table-striped">
        <tbody>{generateTable()}</tbody>
      </table>
    </>
  )
}
