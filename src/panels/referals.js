import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

import Button from '@vkontakte/vkui/dist/components/Button/Button';


import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import { Icon24Coins } from '@vkontakte/icons';// коины
import { Icon24Link } from '@vkontakte/icons'; // выплаты 
import { Icon24Users } from '@vkontakte/icons'; //рефералы





const Referals = props => (
	<Panel id={props.id}>

		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Рефералы
		</PanelHeader>

            <Button mode="destructive">В разработке</Button>
		

		

	</Panel>
);

Referals.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Referals;
