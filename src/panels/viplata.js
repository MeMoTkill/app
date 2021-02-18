import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';

import Button from '@vkontakte/vkui/dist/components/Button/Button';

import { FormLayout, FormLayoutGroup, FormItem, Input, Radio } from '@vkontakte/vkui';


import { Icon24Coins } from '@vkontakte/icons';// коины
import { Icon24Link } from '@vkontakte/icons'; // выплаты 
import { Icon24Users } from '@vkontakte/icons'; //рефералы





const Viplata = props => (
	<Panel id={props.id}>

		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Выплаты
		</PanelHeader>
		
 <FormLayout>
              <FormLayoutGroup mode="vertical">

              <FormItem top="Кошелёк">
              <Radio name="type">Qiwi</Radio>
              <Radio name="type">ЮMoney(Яндекс деньги)</Radio>
            </FormItem>


                <FormItem top="Номер кошелька">
                  <Input />
                </FormItem>
                <FormItem top="Сумма">
                  <Input />
                </FormItem>
              </FormLayoutGroup>


 </FormLayout>
<br />
<br />

<Button mode="outline">Вывести</Button>


<h1>h1</h1>

	</Panel>
);

Viplata.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Viplata;
