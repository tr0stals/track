import React, { useState, useEffect, ReactNode, MouseEventHandler } from 'react';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import { ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, Tabbar, TabbarItem, View, Panel, PanelHeader, CardGrid, Card, Spacing, PanelHeaderBack, PanelHeaderButton} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {Icon28NewsfeedOutline, Icon28UserCircleOutline, Icon28MessageOutline, Icon24MessageOutline, Icon28BillheadOutline, Icon28Square4Outline} from '@vkontakte/icons';
//import './styles/saveButton.css';
//import './panels/saveButton';

import Home from './panels/Home';
import IndicatorPressure from './panels/indicatorPressure';
import IndicatorSugar from './panels/indicatorSugar';
import IndicatorPulse from './panels/IndicatorPulse';

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
				<Panel id='card'>
					<PanelHeader/>
				<Panel id="card">
				<PanelHeader></PanelHeader>
				<CardGrid size="l" spaced>
				<Card>
  <div style={{ paddingBottom: '30%', backgroundColor: 'white', borderRadius: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ marginBottom: '22px' }} >
      <svg width="361" height="175" viewBox="0 0 361 175" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_dd_278_7308)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M327.365 36.1901C329 39.3988 329 43.5992 329 52V91C329 99.4008 329 103.601 327.365 106.81C325.927 109.632 323.632 111.927 320.81 113.365C317.601 115 313.401 115 305 115H306.276C299.929 115 294.393 121.872 289.247 128.262C284.776 133.813 280.598 139 276.436 139C272.282 139 268.127 133.831 263.674 128.29C258.533 121.893 252.993 115 246.597 115H56C47.5992 115 43.3988 115 40.1902 113.365C37.3677 111.927 35.073 109.632 33.6349 106.81C32 103.601 32 99.4008 32 91V52C32 43.5992 32 39.3988 33.6349 36.1901C35.073 33.3677 37.3677 31.073 40.1902 29.6349C43.3988 28 47.5992 28 56 28H305C313.401 28 317.601 28 320.81 29.6349C323.632 31.073 325.927 33.3677 327.365 36.1901Z" fill="#A393F5" fill-opacity="0.55"/>
        </g>
        <text x="50" y="60" fill="white" fontSize="20" fontWeight="none">Какой уровень является <tspan x="50" dy="25">для</tspan><br />  вас нормальным?
</text>
        <defs>
          <filter id="filter0_dd_278_7308" x="0" y="0" width="361" height="175" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="16"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_278_7308"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_278_7308" result="effect2_dropShadow_278_7308"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_278_7308" result="shape"/>
          </filter>
        </defs>
      </svg>
    </div>
    <div style={{ marginBottom: '22px', backgroundColor: '#F2F3F5', borderRadius: 20, padding: '10px', border: '1px solid', width: '330px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10px' }}>
        <p style={{ color: 'black', fontSize: '20px', marginBottom: '5px' }}>Сахар</p> 
        <p style={{ color: 'black', fontSize: '14px', marginTop: '0px' }}>Ммоль/л</p> 
      </div>
      <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', overflow: 'hidden' }}>
        <div style={{ position: 'relative', width: '100%' }}>
          <IndicatorSugar />
        </div>
      </div>
    </div>
    <div style={{ marginBottom: '22px', backgroundColor: '#F2F3F5', borderRadius: 20, padding: '10px', border: '1px solid', width: '330px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10px' }}>
        <p style={{ color: 'black', fontSize: '20px', marginBottom: '5px' }}>Давление</p> 
        <p style={{ color: 'black', fontSize: '14px', marginTop: '0px' }}>Мм.рт.ст.</p> 
      </div>
      <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', overflow: 'hidden' }}>
        <div style={{ position: 'relative', width: '100%' }}>
          <IndicatorPressure />
        </div>
      </div>
    </div>
    <div style={{ backgroundColor: '#F2F3F5', borderRadius: 20, padding: '10px', border: '1px solid', width: '330px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10px' }}>
        <p style={{ color: 'black', fontSize: '20px', marginBottom: '5px' }}>Пульс</p> 
        <p style={{ color: 'black', fontSize: '14px', marginTop: '0px' }}>Ударов в минуту</p> 
      </div>
      <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', overflow: 'hidden' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <IndicatorPulse />
          </div>
      </div>
    </div>
    <div style={{ marginTop: '22px' }}>
      <button className='saveButton' style={{ width: '330px', height: '44px', backgroundColor: '#A393F5', border: '2px solid transparent', borderRadius: '30px', fontSize: '24px', transition: 'border-color 0.3s ease' }}>
        Сохранить
      </button>
    </div>
  </div>
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
