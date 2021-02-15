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

import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';//Кнопочки внизу экрана

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Пример теструю</PanelHeader>
		

		<Group header={<Header mode="secondary">Кнопачкилар</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Покажи мне персика
				</Button>
			</Div>
		</Group>

		<Tabbar>
      <TabbarItem text="Новости">
        <Icon28NewsfeedOutline />
      </TabbarItem>
      <TabbarItem indicator={<Counter size="s" mode="prominent">12</Counter>} text="Сообщения">
        <Icon28MessageOutline />
      </TabbarItem>
      <TabbarItem indicator={<Badge mode="prominent" />} text="Клипы">
        <Icon28ClipOutline />
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
