import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';


import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import { Icon24Coins } from '@vkontakte/icons';// коины
import { Icon24Link } from '@vkontakte/icons'; // выплаты 
import { Icon24Users } from '@vkontakte/icons'; //рефералы





const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>AdEarn 💰</PanelHeader>



		<Group header={<Header mode="secondary">Зарабатывай на просмотре рекламы 🚀</Header>}>

			<Div>
				<Button stretched size="l" mode="commerce" onClick={go} data-to="persik">
					 Смотреть рекламу 
				</Button>
			</Div>
		</Group>


<Tabbar>

      <TabbarItem 
      onClick={go}
      data-to="referals"
      text="Рефералы">
      <Icon24Users/>
      </TabbarItem>

      <TabbarItem 
      onClick={go}
      data-to="persik"
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

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
