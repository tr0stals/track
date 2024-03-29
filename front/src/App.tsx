import React, { useState, useEffect, ReactNode, MouseEventHandler } from 'react';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import { ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, Tabbar, TabbarItem, View, Panel, PanelHeader, CardGrid, Card, Spacing, PanelHeaderBack, PanelHeaderButton} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {Icon28NewsfeedOutline, Icon28UserCircleOutline, Icon28MessageOutline, Icon24MessageOutline, Icon28BillheadOutline, Icon28Square4Outline} from '@vkontakte/icons';

import Home from './panels/Home';


const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState<UserInfo | undefined>();
	const [popout, setPopout] = useState<ReactNode | null>(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go: MouseEventHandler<HTMLElement> = e => {
		setActivePanel(e.currentTarget.dataset.to ?? 'home');
	};

	const [simple, setSimple] = useState('one');
	const [text, setText] = useState('one');


	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
				<View activePanel="card">
				<Panel id="card">
				<PanelHeader></PanelHeader>
					<CardGrid size="l" spaced>
						<Card>
							<div style={{ paddingBottom: '30%', backgroundColor: 'white', borderRadius: 20}} />
						</Card>
					</CardGrid>
					<CardGrid size="s" spaced>
						<Card>
							<div style={{ paddingBottom: '50%', backgroundColor: 'white', borderRadius: 20, width: '100%'}} />
						</Card>
						<Card>
							<div style={{ paddingBottom: '50%', backgroundColor: 'white', borderRadius: 20, width: '100%'}} />
						</Card>
					</CardGrid>
					<CardGrid size="l" spaced>
						<Card>
							<div style={{ paddingBottom: '30%', backgroundColor: 'white', borderRadius: 20}} />
						</Card>
					</CardGrid>
					<Spacing size={16} />
				</Panel>
				</View>
				<div style={{ maxWidth: 768, margin: 'auto' }}>
					<Tabbar style={{ position: 'static', margin: '10px 0' }}>
					<TabbarItem selected={text === 'one'} onClick={() => setText('one')} text="Сервисы">
							<Icon28Square4Outline />
						</TabbarItem>
						<TabbarItem selected={text === 'two'} onClick={() => setText('two')} text="Новости">
							<Icon28NewsfeedOutline />
						</TabbarItem>
						<TabbarItem selected={text === 'three'} onClick={() => setText('three')} text="Профиль">
							<Icon28UserCircleOutline />
						</TabbarItem>
						<TabbarItem selected={text === 'four'} onClick={() => setText('four')} text="Мессенджер">
							<Icon28MessageOutline />
						</TabbarItem>
					</Tabbar>
  				</div>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
