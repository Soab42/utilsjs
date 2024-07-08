'use client'
import { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import { DatePickerContext, rangePicker } from './DatePickerContext'
import { DateRangePicker } from './DateRangePicker'
import { MonthPicker } from './MonthPicker'
import { SingleDatePicker } from './SingleDatePicker'
import { TimePicker } from './TimePicker'
import { YearPicker } from './YearPicker'

/**
 * Props for the DatePicker component.
 * @interface DatePickerProps
 */
export interface DatePickerProps {
  /**
   * Determines whether to show two months in the date picker.
   * @type {boolean}
   * @default false
   */
  showTwoMonth?: boolean

  /**
   * Callback function for handling range date selection.
   * @param value - The selected range date value.
   * @type {(value: rangePicker | ((prevValue: rangePicker | undefined) => rangePicker)) => void}
   * @default undefined
   */
  // eslint-disable-next-line no-unused-vars
  rangeDate?: (value: rangePicker | ((prevValue: rangePicker | undefined) => rangePicker)) => void

  /**
   * The content to be rendered inside the DatePicker component.
   * @type {ReactNode}
   * @default null
   */
  children: ReactNode

  /**
   * State setter for single date selection.
   * @type {Dispatch<SetStateAction<Date | null>>}
   * @default null
   */
  singleDate?: Dispatch<SetStateAction<Date | null>>

  /**
   * State setter for year selection.
   * @type {Dispatch<SetStateAction<number | Date | null | undefined>>}
   * @default null
   */
  year?: Dispatch<SetStateAction<number | Date | null | undefined>>

  /**
   * State setter for month selection.
   * @type {Dispatch<SetStateAction<string | Date | null | undefined>>}
   * @default null
   */
  month?: Dispatch<SetStateAction<string | Date | null | undefined>>

  /**
   * State setter for time selection.
   * @type {Dispatch<SetStateAction<string | Date | null | undefined>>}
   * @default null
   */
  time?: Dispatch<SetStateAction<string | Date | null | undefined>>

  /**
   * The CSS class name for the DatePicker component.
   * @type {string}
   * @default ''
   */
  className?: string

  /**
   * The CSS style for the icon element.
   * @type {string}
   * @default ''
   */
  iconStyle?: string

  /**
   * The placeholder text for the DatePicker component.
   * @type {string}
   * @default ''
   */
  placeholder?: string

  /**
   * The icon element to be rendered inside the DatePicker component.
   * @type {ReactNode}
   * @default null
   */
  icon?: ReactNode
}

const DatePickerComponent: FC<DatePickerProps> = ({
  children,
  showTwoMonth = false,
  rangeDate,
  year,
  month,
  singleDate,
  time,
  className,
  icon,
  iconStyle,
  placeholder,
}) => {
  return (
    <DatePickerContext.Provider
      value={{
        children,
        showTwoMonth,
        rangeDate,
        year,
        month,
        singleDate,
        time,
        className,
        icon,
        iconStyle,
        placeholder,
      }}>
      {children}
    </DatePickerContext.Provider>
  )
}

DateRangePicker.displayName = 'DatePicker.Range'
SingleDatePicker.displayName = 'DatePicker.SingleDate'
MonthPicker.displayName = 'DatePicker.Month'
YearPicker.displayName = 'DatePicker.Year'
TimePicker.displayName = 'DatePicker.Time'

export const DatePicker = Object.assign(DatePickerComponent, {
  Range: DateRangePicker,
  SingleDate: SingleDatePicker,
  Month: MonthPicker,
  Year: YearPicker,
  Time: TimePicker,
})
