import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '.'

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="mx-auto w-full text-center ">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    color: {
      control: 'select',
      options: ['failure', 'gray', 'info', 'pink', 'purple', 'success', 'warning'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'gray' },
      },
      description: 'Available Toast color',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'lg' },
      },
      description: 'Available Toast size',
    },
  },
  parameters: {
    componentSubtitle:
      'A Spinner component is a visual indicator used to show that a system is working or processing a request. It usually consists of a circular graphic that spins continuously, indicating that the system is still active and the user should wait for the process to complete.',
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const DefaultSpinner: Story = {
  args: {
    color: 'info',
    size: 'lg',
  },
}
