import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Viplata from './panels/Viplata';
import Referals from './panels/Referals';
import PromoBanner from '@vkontakte/vkui/dist/components/PromoBanner/PromoBanner';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';

const promoBannerProps = {
  title: 'CallPrank с самыми дешёвыми пранками!',
  domain: 'vk.com/callpranktop',
  trackingLink: 'https://vk.com/callpranktop',
  ctaText: 'Перейти',
  advertisingLabel: 'Реклама',
  iconLink: 'https://memotkill.github.io/app/img/CallPrank.jpg',
  description: 'Описание рекламы',
  ageRestrictions: "18+",
  statistics: [
    { url: '', type: 'playbackStarted' },
    { url: '', type: 'click' }
  ]
};



const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);

    	
			}
		});
		async function fetchData() {
			await bridge.send('VKWebAppJoinGroup', { 'group_id': 202626976 });

			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);

			setPopout(null);
			
			
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};
	const goo = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};
	const gooo = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Persik id='persik' go={go} />
			<Viplata id='viplata' go={go} />
			<Referals id='referals' go={go} />

			
    
		</View>
	);
}

export default App;

