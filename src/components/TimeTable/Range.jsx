import React, {useState} from 'react'
import DateRange from './DateRange'
import TimeRange from './TimeRange'
import TimeTable from './TimeTable'

export default function Range({showTable, setShowTable}) {
  const [dateRange, setDateRange] = useState({allDatesInRange: null})
  const [timeRange, setTimeRange] = useState({startTime: null, endTime: null, timeLength: null})

  return (
    <>
      <DateRange dateRange={dateRange} setDateRange={setDateRange} />
      <div className="h-[20px]"></div>
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
