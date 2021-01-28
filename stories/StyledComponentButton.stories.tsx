import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Button from '../components/button/button';

export default {
	title: 'Example/StyledButton',
	component: Button,
	decorators: [withKnobs]
} as Meta;

export const StyledButton = () => <Button>Test</Button>;
