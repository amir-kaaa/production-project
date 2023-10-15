import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import 'app/styles/index.scss';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const ModalLight = {
    args: {
        isOpen: false,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odit repudiandae facere non sed necessitatibus inventore totam ducimus, eaque cum quo ratione magni voluptatum velit deserunt, iure obcaecati illum. Ea ratione quasi voluptates eaque error corporis magni explicabo, blanditiis ipsam quae soluta, aliquam, voluptatum inventore quis consequuntur odit suscipit assumenda nisi harum repellat tempore debitis deleniti voluptatem beatae? At labore asperiores natus obcaecati nostrum facere officiis cum pariatur porro soluta error voluptas similique suscipit repudiandae recusandae fugit modi harum mollitia, temporibus ab. Temporibus eum quasi error necessitatibus, voluptas rerum numquam ex rem vitae, blanditiis sequi consectetur vero libero facilis porro.',
    },
    decorators: [
        (Story) => (
            <div>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story theme={Theme.LIGHT} />
            </div>
        ),
        ThemeDecorator(Theme.LIGHT),
    ],
} satisfies Story;

export const ModalDark = {
    args: {
        isOpen: false,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odit repudiandae facere non sed necessitatibus inventore totam ducimus, eaque cum quo ratione magni voluptatum velit deserunt, iure obcaecati illum. Ea ratione quasi voluptates eaque error corporis magni explicabo, blanditiis ipsam quae soluta, aliquam, voluptatum inventore quis consequuntur odit suscipit assumenda nisi harum repellat tempore debitis deleniti voluptatem beatae? At labore asperiores natus obcaecati nostrum facere officiis cum pariatur porro soluta error voluptas similique suscipit repudiandae recusandae fugit modi harum mollitia, temporibus ab. Temporibus eum quasi error necessitatibus, voluptas rerum numquam ex rem vitae, blanditiis sequi consectetur vero libero facilis porro.',
    },
    decorators: [
        (Story) => (
            <div>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story theme={Theme.DARK} />
            </div>
        ),
        ThemeDecorator(Theme.DARK),
    ],
} satisfies Story;
