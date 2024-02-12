import React, {useState} from 'react'
import DateRange from '../components/DateRange'
import TimeRange from '../components/TimeRange'
import TimeTable from './TimeTable'

export default function Range({showTable, setShowTable}) {
  // setShowTable을 추가하고 props로 받음
  const [dateRange, setDateRange] = useState({allDatesInRange: null})
  const [timeRange, setTimeRange] = useState({startTime: null, endTime: null, timeLength: null})

  return (
    <>
      <DateRange dateRange={dateRange} setDateRange={setDateRange} />
      <TimeRange timeRange={timeRange} setTimeRange={setTimeRange} />
      {showTable && (
        <TimeTable
          dateRange={dateRange}
          setDateRange={setDateRange}
          timeRange={timeRange}
          setTimeRange={setTimeRange}
          showTable={showTable}
        />
      )}
    </>
  )
}
