import React, { MouseEventHandler } from 'react';
import PropTypes from 'prop-types';

import { Panel, Epic } from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';

interface Props {
	id: string;
	go: MouseEventHandler<HTMLElement>;
	fetchedUser?: UserInfo;
}

const Home: React.FC<Props> = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		
	</Panel>
);

export default Home;
