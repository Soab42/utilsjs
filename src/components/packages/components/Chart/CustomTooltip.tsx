'use client'
import { ReactElement } from 'react'
import { TooltipProps } from 'recharts'
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'
import { Button } from '../Button/Button'
import { Tooltip as TooltipCom } from '../Tooltip'
import { useChartContext } from './ChartContext'

export const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>): ReactElement | null => {
  const { tooltipBtnColor, tooltipBtnStyle } = useChartContext()
  if (active && payload?.length) {
    return (
      <>
        {payload.length > 1 ? (
          <TooltipCom content={``} trigger="hover" placement="top" animation="duration-300" style="dark">
            <Button size="xs" color={tooltipBtnColor} className={tooltipBtnStyle}>
              <span className="mr-2">
                {payload[0].name}: {payload[0].value}
              </span>
              <span>
                {payload[1].name}: {payload[1].value}
              </span>
            </Button>
          </TooltipCom>
        ) : (
          <TooltipCom content={``} trigger="hover" placement="top" animation="duration-300" style="dark">
            <Button size="xs" color={tooltipBtnColor} className={tooltipBtnStyle}>
              {payload[0].value}
            </Button>
          </TooltipCom>
        )}
      </>
    )
  }

  return null
}
