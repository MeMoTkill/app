import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';


import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import { Icon24Coins } from '@vkontakte/icons';// коины
import { Icon24Link } from '@vkontakte/icons'; // выплаты 
import { Icon24Users } from '@vkontakte/icons'; //рефералы





const viplata = props => (
	<Panel id={props.id}>

		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Выплаты
		</PanelHeader>
		

		
		<Tabbar>

      <TabbarItem 
      onClick={go}
      data-to="referals"
      text="Рефералы">
      <Icon24Users/>
      </TabbarItem>

      <TabbarItem 
      onClick={go}
      data-to="home"
      text="Заработать">
      <Icon24Coins/>
      </TabbarItem>

      <TabbarItem 
      onClick={go}
      data-to="viplata"
      text="Выплаты">
      <Icon24Link/>
      </TabbarItem>

    </Tabbar>

	</Panel>
);

viplata.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default viplata;
