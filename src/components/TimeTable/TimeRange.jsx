import React, {useState, useEffect} from 'react'
import {Radio, Space} from 'antd'

const TimeRange = ({timeRange, setTimeRange}) => {
  const [value, setValue] = useState(1)

  useEffect(() => {
    TimeRangeChange(value)
  }, [value])

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const TimeRangeChange = (value) => {
    switch (value) {
      case 1:
        setTimeRange({startTime: '07:00', endTime: '12:00', timeLength: 10})
        break
      case 2:
        setTimeRange({startTime: '12:00', endTime: '18:00', timeLength: 12})
        break
      case 3:
        setTimeRange({startTime: '18:00', endTime: '24:00', timeLength: 12})
        break
      default:
        setTimeRange({startTime: 7, endTime: 24, timeLength: 34})
    }
  }
  console.log(timeRange)

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>아침 ( 7: 00 ~ 12: 00 )</Radio>
        <Radio value={2}>오후 ( 12: 00 ~ 18: 00)</Radio>
        <Radio value={3}>저녁 (18: 00 ~ 24: 00)</Radio>
      </Space>
    </Radio.Group>
  )
}

export default TimeRange
