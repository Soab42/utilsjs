'use client'
import { FC, createElement, forwardRef, useState } from 'react'
import SingleDate from 'react-datepicker'
import { CustomInput } from './CustomInput'
import { useDatePickerContext } from './DatePickerContext'

export const SingleDatePicker: FC = () => {
  const { showTwoMonth, singleDate, placeholder } = useDatePickerContext()
  const [date, setDate] = useState<Date | null>(new Date())
  const handleChange = (date: Date | null) => {
    setDate(date)
    singleDate && singleDate(date)
  }

  return (
    <SingleDate
      placeholderText={placeholder}
      monthsShown={showTwoMonth ? 2 : 1}
      selected={date}
      onChange={handleChange}
      customInput={createElement(forwardRef(CustomInput))}
      className="rounded-md border border-metal-300 placeholder:text-body-5"
      showPopperArrow={false}
      dateFormat="dd/MM/yyyy"
    />
  )
}
