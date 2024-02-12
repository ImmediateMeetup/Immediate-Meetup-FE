import React, {useState, useEffect} from 'react'
import {DatePicker} from 'antd'
import TimeRange from './TimeRange'

const {RangePicker} = DatePicker

export default function DatePick({dateRange, setDateRange}) {
  const [value, setValue] = useState(null)

  const disabledDate = (current, {from}) => {
    if (from) {
      return Math.abs(current.diff(from, 'days')) >= 7
    }
    return false
  }

  useEffect(() => {
    if (value) {
      const firstDate = value[0].$d
      const secondDate = value[1].$d

      const firstMonth = firstDate.getMonth() + 1
      const firstDay = firstDate.getDate()
      const secondMonth = secondDate.getMonth() + 1
      const secondDay = secondDate.getDate()

      const timeDifference = secondDate.getTime() - firstDate.getTime()
      const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)) + 1

      setDateRange({
        startDate: `${firstMonth}/${firstDay}`, //  month/day
        endDate: `${secondMonth}/${secondDay}`, //  month/day
        dateLength: dayDifference
      })
    }
  }, [value])
  console.log(dateRange)

  return <RangePicker value={value} disabledDate={disabledDate} onChange={setValue} />
}
