import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '.'
import { removeFragment } from '../../helpers/mergeDeep'

const meta: Meta<typeof Typography> = {
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Typography text',
      control: { type: null },
    },
    variant: {
      description: 'Typography Variant',
      control: { type: 'select' },
    },
  },
}
export default meta
type Story = StoryObj<typeof Typography>

export const DefaultTypography: Story = {
  args: {
    className: 'space-y-4',
    variant: 'div',
    children: removeFragment(
      <>
        <Typography variant="body-1">Body Text 1</Typography>
        <Typography variant="body-2">Body Text 2</Typography>
        <Typography variant="body-3">Body Text 3</Typography>
        <Typography variant="body-4">Body Text 4</Typography>
        <Typography variant="body-5">Body Text 5</Typography>
      </>,
    ),
  },
}

export const HeadingTypography: Story = {
  args: {
    className: 'space-y-4',
    variant: 'div',
    children: removeFragment(
      <>
        <Typography variant="heading-1">Heading 1</Typography>
        <Typography variant="heading-2">Heading 2</Typography>
        <Typography variant="heading-3">Heading 3</Typography>
        <Typography variant="heading-4">Heading 4</Typography>
        <Typography variant="heading-5">Heading 5</Typography>
        <Typography variant="heading-6">Heading 6</Typography>
      </>,
    ),
  },
}
export const DisplayTypography: Story = {
  args: {
    className: 'space-y-4',
    variant: 'div',
    children: removeFragment(
      <>
        <Typography variant="display">Display</Typography>
      </>,
    ),
  },
}
