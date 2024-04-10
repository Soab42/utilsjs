import type { Meta, StoryObj } from '@storybook/react'
import { AreaChart } from './AreaChart'

const chartData = [
  {
    name: '1',
    price: 0,
    sell: 0,
  },
  {
    name: '2',
    price: 300,
    sell: 200,
  },
  {
    name: '3',
    price: 170,
    sell: 120,
  },
  {
    name: '4',
    price: 190,
    sell: 130,
  },
  {
    name: '5',
    price: 220,
    sell: 120,
  },
  {
    name: '6',
    price: 400,
    sell: 213,
  },
  {
    name: '7',
    price: 420,
    sell: 325,
  },
  {
    name: '8',
    price: 450,
    sell: 250,
  },
  {
    name: '9',
    price: 400,
    sell: 300,
  },
  {
    name: '10',
    price: 500,
    sell: 400,
  },
]

const meta: Meta<typeof AreaChart> = {
  component: AreaChart,
  tags: ['autodocs'],
  argTypes: {
    chartData: {
      description:
        'Chart data is an array of object. Where every object has three property. name,price and sell. Price and sell is our data key. You can choose your data key from your choosen array of object.',
      table: {
        type: { summary: 'Array' },
      },
      control: { type: null },
    },
    dataKey: {
      description: 'Chart data key',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'price' },
      },
    },
    secondaryDataKey: {
      description:
        'Chart secondary data key, If you want to show two chart,then you need to pass your secondary data key.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sell' },
      },
    },
    chartType: {
      description: 'Available chart type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'linear' },
      },
      control: { type: 'radio' },
      options: ['linear', 'natural'],
    },
    showTooltip: {
      description: 'Chart tooltip show or not?',
      control: { type: 'boolean' },
    },
    showXaxis: {
      description: 'Chart X Axis data show or not?',
      control: { type: 'boolean' },
    },
    showYaxis: {
      description: 'Chart Y Axis data show or not?',
      control: { type: 'boolean' },
    },
    showGridLine: {
      description: 'Chart grid line show or not?',
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof AreaChart>

export const DefaultAreaChart: Story = {
  args: {
    chartData: chartData,
    dataKey: 'price',
    secondaryDataKey: '',
    chartType: 'linear',
    showTooltip: false,
    showXaxis: false,
    showYaxis: false,
    showGridLine: false,
  },
}

export const ChartWithTooltip: Story = {
  args: {
    ...DefaultAreaChart.args,
    showTooltip: true,
  },
}
export const ChartWithGraphLine: Story = {
  args: {
    ...ChartWithTooltip.args,
    showXaxis: true,
    showYaxis: true,
  },
}
export const ChartWithGridAndGraphLine: Story = {
  args: {
    ...ChartWithGraphLine.args,
    showGridLine: true,
  },
}

export const ChartWithDoubleSeries: Story = {
  args: {
    ...ChartWithTooltip.args,
    secondaryDataKey: 'sell',
  },
}
export const ChartWithDoubleSeriesAndGraphLine: Story = {
  args: {
    ...ChartWithDoubleSeries.args,
    showXaxis: true,
    showYaxis: true,
  },
}

export const ChartWithGridLineAndGraphLine: Story = {
  args: {
    ...ChartWithDoubleSeries.args,
    showGridLine: true,
    showXaxis: true,
    showYaxis: true,
  },
}

export const ChartWithSmoothLine: Story = {
  args: {
    ...DefaultAreaChart.args,
    chartType: 'natural',
  },
}
export const ChartWithSmoothLineWithTooltip: Story = {
  args: {
    ...ChartWithSmoothLine.args,
    showTooltip: true,
  },
}
export const ChartWithSmoothLineWithGraphLine: Story = {
  args: {
    ...ChartWithSmoothLineWithTooltip.args,
    showXaxis: true,
    showYaxis: true,
  },
}
export const ChartWithSmoothLineWithGraphLineAndGridLine: Story = {
  args: {
    ...ChartWithSmoothLineWithGraphLine.args,
    showGridLine: true,
  },
}

export const ChartWithSmoothLineDoubleSeries: Story = {
  args: {
    ...ChartWithSmoothLineWithTooltip.args,
    secondaryDataKey: 'sell',
  },
}
export const ChartWithSmoothLineDoubleSeriesAndGraphLine: Story = {
  args: {
    ...ChartWithSmoothLineDoubleSeries.args,
    showXaxis: true,
    showYaxis: true,
  },
}
export const ChartWithSmoothLineDoubleSeriesAndGridLine: Story = {
  args: {
    ...ChartWithSmoothLineDoubleSeriesAndGraphLine.args,
    showGridLine: true,
  },
}
