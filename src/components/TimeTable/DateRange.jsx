import React, {useState, useEffect} from 'react'
import {DatePicker} from 'antd'

const {RangePicker} = DatePicker

export default function DatePick({dateRange, setDateRange}) {
  const [value, setValue] = useState(null)

  const disabledDate = (current, {from}) => {
    if (from) {
      return Math.abs(current.diff(from, 'days')) >= 7
    }
    return false
  }

  const getAllDatesInRange = (startDate, endDate) => {
    const dates = []
    const currentDate = new Date(startDate)
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate))
      currentDate.setDate(currentDate.getDate() + 1)
    }
    return dates
  }
  console.log('zz', dateRange)
  useEffect(() => {
    if (value) {
      const firstDate = value[0].$d
      const secondDate = value[1].$d

      const allDates = getAllDatesInRange(firstDate, secondDate)

      setDateRange({
        allDatesInRange: allDates
      })
    }
  }, [value])

  return <RangePicker value={value} disabledDate={disabledDate} onChange={setValue} />
}
