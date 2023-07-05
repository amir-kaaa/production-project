import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import 'app/styles/index.scss';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
        size: { control: 'select', options: ['small', 'medium', 'large'] },
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary = {
    args: {
        children: 'this is primary button',
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '30px' }}>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </div>
        ),
    ],
} satisfies Story;

export const Clear = {
    args: {
        children: 'this is clear button',
        theme: ThemeButton.CLEAR,
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '10px' }}>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </div>
        ),
    ],
} satisfies Story;

export const Outline = {
    args: {
        children: 'this is outline button',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '10px', border: '1px solid' }}>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </div>
        ),
    ],
} satisfies Story;

export const Small = {
    args: {
        children: 'this is small button',
        size: 'small',
    },
} satisfies Story;
