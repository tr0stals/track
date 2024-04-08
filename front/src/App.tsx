import React, { useState, useEffect, ReactNode, MouseEventHandler } from 'react';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import { platform } from '@vkontakte/vkui';
import { ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, Tabbar, TabbarItem, View, Panel, PanelHeader, CardGrid, Card, Spacing, PanelHeaderBack, PanelHeaderButton, Button, Div, ButtonGroup} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {Icon28NewsfeedOutline, Icon28UserCircleOutline, Icon28MessageOutline, Icon24MessageOutline, Icon28BillheadOutline, Icon28Square4Outline, Icon28ArrowLeftOutline, Icon28CancelCircleOutline} from '@vkontakte/icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



import Home from './panels/Home';
import IndicatorPressure from './panels/indicatorPressure';
import IndicatorSugar from './panels/indicatorSugar';
import IndicatorPulse from './panels/IndicatorPulse';
import './styles/saveButton.css'
import './styles/goOverButton.css'
import './styles/indicatorButtons.css'
import './styles/medicineCheckbox.css'

const CalendarSVG = () => (
	<svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6666 18.6666C18.6666 19.7712 17.7712 20.6666 16.6666 20.6666C15.5621 20.6666 14.6666 19.7712 14.6666 18.6666C14.6666 17.5621 15.5621 16.6666 16.6666 16.6666C17.7712 16.6666 18.6666 17.5621 18.6666 18.6666Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.66664 0C7.32938 0 7.86664 0.537258 7.86664 1.2V2.00058C8.10629 1.99999 8.35575 2 8.61546 2H15.3845C15.6442 2 15.8937 1.99999 16.1333 2.00058V1.2C16.1333 0.537258 16.6706 0 17.3333 0C17.996 0 18.5333 0.537258 18.5333 1.2V2.07066C19.3704 2.14154 20.1104 2.28972 20.7967 2.63943C21.9006 3.20189 22.7981 4.09937 23.3606 5.20326C23.7155 5.89974 23.8628 6.65151 23.9324 7.50389C24 8.33112 24 9.35212 24 10.6155V17.3846C24 18.6479 24 19.6689 23.9324 20.4961C23.8628 21.3485 23.7155 22.1003 23.3606 22.7967C22.7981 23.9006 21.9006 24.7981 20.7967 25.3606C20.1003 25.7155 19.3485 25.8628 18.4961 25.9324C17.6689 26 16.6479 26 15.3845 26H8.61545C7.35212 26 6.33112 26 5.50389 25.9324C4.65151 25.8628 3.89975 25.7155 3.20326 25.3606C2.09937 24.7981 1.20189 23.9006 0.63943 22.7967C0.284551 22.1003 0.137209 21.3485 0.0675662 20.4961C-2.09759e-05 19.6689 -1.17584e-05 18.6479 3.21447e-07 17.3845V10.6155C-1.17585e-05 9.35213 -2.09659e-05 8.33112 0.0675662 7.50389C0.137209 6.6515 0.284551 5.89974 0.63943 5.20326C1.20189 4.09937 2.09937 3.20189 3.20326 2.63943C3.88958 2.28973 4.62957 2.14155 5.46663 2.07066V1.2C5.46663 0.537258 6.00389 0 6.66664 0ZM5.46663 4.48156C4.90387 4.54252 4.55965 4.64189 4.29283 4.77784C3.64054 5.11021 3.11021 5.64054 2.77785 6.29283C2.62409 6.5946 2.51711 6.99536 2.4596 7.69933C2.4113 8.2904 2.40213 9.02028 2.4004 10H21.5996C21.5979 9.02028 21.5887 8.2904 21.5404 7.69933C21.4829 6.99536 21.3759 6.5946 21.2222 6.29283C20.8898 5.64054 20.3595 5.11021 19.7072 4.77784C19.4403 4.64189 19.0961 4.54251 18.5333 4.48156V5.46667C18.5333 6.12941 17.996 6.66667 17.3333 6.66667C16.6706 6.66667 16.1333 6.12941 16.1333 5.46667V4.40069C15.8839 4.40004 15.6179 4.4 15.3333 4.4H8.66667C8.38206 4.4 8.11604 4.40004 7.86664 4.40069V5.46667C7.86664 6.12941 7.32938 6.66667 6.66664 6.66667C6.00389 6.66667 5.46663 6.12941 5.46663 5.46667V4.48156ZM21.6 12.4H2.4V17.3333C2.4 18.6599 2.40093 19.5827 2.4596 20.3007C2.51711 21.0046 2.62409 21.4054 2.77785 21.7072C3.11021 22.3595 3.64054 22.8898 4.29283 23.2222C4.5946 23.3759 4.99536 23.4829 5.69933 23.5404C6.4173 23.5991 7.34008 23.6 8.66667 23.6H15.3333C16.6599 23.6 17.5827 23.5991 18.3007 23.5404C19.0046 23.4829 19.4054 23.3759 19.7072 23.2222C20.3595 22.8898 20.8898 22.3595 21.2222 21.7072C21.3759 21.4054 21.4829 21.0046 21.5404 20.3007C21.5991 19.5827 21.6 18.6599 21.6 17.3333V12.4Z" fill="white"/>
</svg>

  );
  const MedicineSVG = () => (
	<svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.925 5.43319C21.6954 5.43319 22.32 6.0587 22.32 6.8303V7.91694H23.405C24.1754 7.91694 24.8 8.54244 24.8 9.31404C24.8 10.0856 24.1754 10.7112 23.405 10.7112H22.32V11.7978C22.32 12.5694 21.6954 13.1949 20.925 13.1949C20.1546 13.1949 19.53 12.5694 19.53 11.7978V10.7112H18.445C17.6746 10.7112 17.05 10.0856 17.05 9.31404C17.05 8.54244 17.6746 7.91694 18.445 7.91694H19.53V6.8303C19.53 6.0587 20.1546 5.43319 20.925 5.43319Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6721 2.63823C17.4203 0.998677 19.4378 0.108362 21.6872 0.00929264L22.1117 0C27.0054 0 31 3.97441 31 8.87509C31 13.4681 29.3952 15.7469 22.3617 21.3888L20.9152 22.5372L17.2508 25.3974C16.2215 26.2009 14.7785 26.2009 13.7492 25.3974L9.58276 22.1411C1.74736 15.9407 0 13.6678 0 8.87509C0 3.97441 3.99459 0 8.88828 0C11.2756 0 13.427 0.894234 15.302 2.63123L15.4907 2.81439L15.6721 2.63823ZM28.21 8.87509C28.21 5.52174 25.4686 2.79421 22.1117 2.79421C20.0085 2.79421 18.1953 3.7499 16.5881 5.75627C16.0333 6.44883 14.9827 6.45419 14.4208 5.76733C12.7732 3.75291 10.9543 2.79421 8.88828 2.79421C5.53137 2.79421 2.79 5.52174 2.79 8.87509C2.79 12.3671 4.025 14.1227 10.4454 19.2593L11.7998 20.3332L15.4643 23.1935C15.4853 23.2099 15.5147 23.2099 15.5357 23.1935L19.6634 19.9679C26.5564 14.5176 28.0847 12.6786 28.2023 9.33085L28.21 8.87509Z" fill="white"/>
</svg>

  );

const App = () => {
	const [activePanel, setActivePanel] = useState('card');
	const [fetchedUser, setUser] = useState<UserInfo | undefined>();
	const [popout, setPopout] = useState<ReactNode | null>(<ScreenSpinner size='large' />);




	const CalendarSVG = () => (
		<svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6666 18.6666C18.6666 19.7712 17.7712 20.6666 16.6666 20.6666C15.5621 20.6666 14.6666 19.7712 14.6666 18.6666C14.6666 17.5621 15.5621 16.6666 16.6666 16.6666C17.7712 16.6666 18.6666 17.5621 18.6666 18.6666Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.66664 0C7.32938 0 7.86664 0.537258 7.86664 1.2V2.00058C8.10629 1.99999 8.35575 2 8.61546 2H15.3845C15.6442 2 15.8937 1.99999 16.1333 2.00058V1.2C16.1333 0.537258 16.6706 0 17.3333 0C17.996 0 18.5333 0.537258 18.5333 1.2V2.07066C19.3704 2.14154 20.1104 2.28972 20.7967 2.63943C21.9006 3.20189 22.7981 4.09937 23.3606 5.20326C23.7155 5.89974 23.8628 6.65151 23.9324 7.50389C24 8.33112 24 9.35212 24 10.6155V17.3846C24 18.6479 24 19.6689 23.9324 20.4961C23.8628 21.3485 23.7155 22.1003 23.3606 22.7967C22.7981 23.9006 21.9006 24.7981 20.7967 25.3606C20.1003 25.7155 19.3485 25.8628 18.4961 25.9324C17.6689 26 16.6479 26 15.3845 26H8.61545C7.35212 26 6.33112 26 5.50389 25.9324C4.65151 25.8628 3.89975 25.7155 3.20326 25.3606C2.09937 24.7981 1.20189 23.9006 0.63943 22.7967C0.284551 22.1003 0.137209 21.3485 0.0675662 20.4961C-2.09759e-05 19.6689 -1.17584e-05 18.6479 3.21447e-07 17.3845V10.6155C-1.17585e-05 9.35213 -2.09659e-05 8.33112 0.0675662 7.50389C0.137209 6.6515 0.284551 5.89974 0.63943 5.20326C1.20189 4.09937 2.09937 3.20189 3.20326 2.63943C3.88958 2.28973 4.62957 2.14155 5.46663 2.07066V1.2C5.46663 0.537258 6.00389 0 6.66664 0ZM5.46663 4.48156C4.90387 4.54252 4.55965 4.64189 4.29283 4.77784C3.64054 5.11021 3.11021 5.64054 2.77785 6.29283C2.62409 6.5946 2.51711 6.99536 2.4596 7.69933C2.4113 8.2904 2.40213 9.02028 2.4004 10H21.5996C21.5979 9.02028 21.5887 8.2904 21.5404 7.69933C21.4829 6.99536 21.3759 6.5946 21.2222 6.29283C20.8898 5.64054 20.3595 5.11021 19.7072 4.77784C19.4403 4.64189 19.0961 4.54251 18.5333 4.48156V5.46667C18.5333 6.12941 17.996 6.66667 17.3333 6.66667C16.6706 6.66667 16.1333 6.12941 16.1333 5.46667V4.40069C15.8839 4.40004 15.6179 4.4 15.3333 4.4H8.66667C8.38206 4.4 8.11604 4.40004 7.86664 4.40069V5.46667C7.86664 6.12941 7.32938 6.66667 6.66664 6.66667C6.00389 6.66667 5.46663 6.12941 5.46663 5.46667V4.48156ZM21.6 12.4H2.4V17.3333C2.4 18.6599 2.40093 19.5827 2.4596 20.3007C2.51711 21.0046 2.62409 21.4054 2.77785 21.7072C3.11021 22.3595 3.64054 22.8898 4.29283 23.2222C4.5946 23.3759 4.99536 23.4829 5.69933 23.5404C6.4173 23.5991 7.34008 23.6 8.66667 23.6H15.3333C16.6599 23.6 17.5827 23.5991 18.3007 23.5404C19.0046 23.4829 19.4054 23.3759 19.7072 23.2222C20.3595 22.8898 20.8898 22.3595 21.2222 21.7072C21.3759 21.4054 21.4829 21.0046 21.5404 20.3007C21.5991 19.5827 21.6 18.6599 21.6 17.3333V12.4Z" fill="white"/>
</svg>

	  );
	  const MedicineSVG = () => (
		<svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.925 5.43319C21.6954 5.43319 22.32 6.0587 22.32 6.8303V7.91694H23.405C24.1754 7.91694 24.8 8.54244 24.8 9.31404C24.8 10.0856 24.1754 10.7112 23.405 10.7112H22.32V11.7978C22.32 12.5694 21.6954 13.1949 20.925 13.1949C20.1546 13.1949 19.53 12.5694 19.53 11.7978V10.7112H18.445C17.6746 10.7112 17.05 10.0856 17.05 9.31404C17.05 8.54244 17.6746 7.91694 18.445 7.91694H19.53V6.8303C19.53 6.0587 20.1546 5.43319 20.925 5.43319Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6721 2.63823C17.4203 0.998677 19.4378 0.108362 21.6872 0.00929264L22.1117 0C27.0054 0 31 3.97441 31 8.87509C31 13.4681 29.3952 15.7469 22.3617 21.3888L20.9152 22.5372L17.2508 25.3974C16.2215 26.2009 14.7785 26.2009 13.7492 25.3974L9.58276 22.1411C1.74736 15.9407 0 13.6678 0 8.87509C0 3.97441 3.99459 0 8.88828 0C11.2756 0 13.427 0.894234 15.302 2.63123L15.4907 2.81439L15.6721 2.63823ZM28.21 8.87509C28.21 5.52174 25.4686 2.79421 22.1117 2.79421C20.0085 2.79421 18.1953 3.7499 16.5881 5.75627C16.0333 6.44883 14.9827 6.45419 14.4208 5.76733C12.7732 3.75291 10.9543 2.79421 8.88828 2.79421C5.53137 2.79421 2.79 5.52174 2.79 8.87509C2.79 12.3671 4.025 14.1227 10.4454 19.2593L11.7998 20.3332L15.4643 23.1935C15.4853 23.2099 15.5147 23.2099 15.5357 23.1935L19.6634 19.9679C26.5564 14.5176 28.0847 12.6786 28.2023 9.33085L28.21 8.87509Z" fill="white"/>
</svg>

	  );
	  

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

	const data = [
		{ name: 'Янв', УровеньСахара: 6.1 },
		{ name: 'Фев', УровеньСахара: 5.5 },
		{ name: 'Мар', УровеньСахара: 2.5 },
		{ name: 'Апр', УровеньСахара: 5.5 },
		{ name: 'Май', УровеньСахара: 6.1 },
		{ name: 'Июн', УровеньСахара: 5.5 },
		{ name: 'Июл', УровеньСахара: 6.1 },
		{ name: 'Авг', УровеньСахара: 6.1 },
		{ name: 'Сен', УровеньСахара: 2.5 },
		{ name: 'Окт', УровеньСахара: 2.5 },
		{ name: 'Ноя', УровеньСахара: 6.1 },
		{ name: 'Дек', УровеньСахара: 5.5 },
	];

	const data1 = [
		{ name: 'Янв', Пульс: 70 },
		{ name: 'Фев', Пульс: 50 },
		{ name: 'Мар', Пульс: 40 },
		{ name: 'Апр', Пульс: 40 },
		{ name: 'Май', Пульс: 50 },
		{ name: 'Июн', Пульс: 70 },
		{ name: 'Июл', Пульс: 50 },
		{ name: 'Авг', Пульс: 70 },
		{ name: 'Сен', Пульс: 50 },
		{ name: 'Окт', Пульс: 50 },
		{ name: 'Ноя', Пульс: 70 },
		{ name: 'Дек', Пульс: 70 },
	];

	const data2 = [
		{ name: 'Янв', Давление: 120 },
		{ name: 'Фев', Давление: 110 },
		{ name: 'Мар', Давление: 100 },
		{ name: 'Апр', Давление: 110 },
		{ name: 'Май', Давление: 110 },
		{ name: 'Июн', Давление: 100 },
		{ name: 'Июл', Давление: 110 },
		{ name: 'Авг', Давление: 110 },
		{ name: 'Сен', Давление: 120 },
		{ name: 'Окт', Давление: 120 },
		{ name: 'Ноя', Давление: 100 },
		{ name: 'Дек', Давление: 100 },
	];

	const data3 = [
		{ УровеньСахара: 6.1 },
	];

	const data4 = [
		{ Давление: 110 },
	];

	const data5 = [
		{ Пульс: 70 },
	];

	return (
		<ConfigProvider appearance="dark">
			<AdaptivityProvider>
				<AppRoot>
				<View activePanel={activePanel}>
				<Panel id='card'>
					<PanelHeader/>
				<Panel id="card">
				<PanelHeader></PanelHeader>
				<CardGrid size="l" spaced>
			
  <div style={{ paddingBottom: '30%', backgroundColor: 'white', borderRadius: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '382px', height: '460px' }}>
    <div style={{ marginBottom: '-27px' }} >
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
	<button className='saveButton'>
  Сохранить
</button>

    </div>
  </div>
			</CardGrid>	
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
      
        <div style={{ position: 'relative', backgroundColor: '#A393F5', borderRadius: 8, width: '186px', height: '145px', margin: '27px 16px 0px 0px', marginLeft: '16px' }}>
			<div style={{margin: '16px 0px 0px 14px'}}>
          <CalendarSVG />
		  </div>
          <div style={{ position: 'absolute', top: -5, left: '55%', transform: 'translateX(-50%)', textAlign: 'center', width: '100%' }}>
            <p style={{fontSize: '20px'}}>Календарь</p>
          </div>
          <button className='goButton' onClick={() => setActivePanel('calendar')}>Перейти</button>
        </div>
      
      
        <div style={{ position: 'relative', backgroundColor: '#c4bcf3', borderRadius: 8, width: '186px', height: '145px', margin: '27px 16px 0px 0px' }}>
		<div style={{margin: '16px 0px 0px 14px'}}>
          <MedicineSVG />
		  </div>
          <div style={{ position: 'absolute', top: -5, left: '55%', transform: 'translateX(-50%)', textAlign: 'center', width: '100%' }}>
            <p style={{fontSize: '20px'}}>Лекарства</p>
          </div>
          <button className='goButton' onClick={() => setActivePanel('medicines')}>Перейти</button>
        </div>
      
    </div> 
					<CardGrid size="l" spaced>
					<div style={{ paddingBottom: '30%', backgroundColor: 'white', borderRadius: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '382px', height: '378px', marginTop: '27px' }}>
    <div style={{ marginBottom: '-8px', marginTop: '-17px' }} >
		<p style={{fontSize: '24px', color: 'black'}}>Показатели за день</p>
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
      <button className='saveButton'>
        Сохранить
      </button>
    </div>
  </div>
					</CardGrid>
					</Panel>
				</Panel>
				<Panel id='calendar'>
					<PanelHeader
						before={
							<PanelHeaderButton>
							<Icon28ArrowLeftOutline onClick={() => setActivePanel('card')}/>
							</PanelHeaderButton>
						}	
					>	
					Календарь	 
					</PanelHeader>	
				
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '26px 21px 8px 21px' }}>
    <Button className='indicatorButtons' onClick={() => setActivePanel('calendar')} size="l" appearance="accent" stretched style={{marginRight: '13px'}}>
      Сахар
    </Button>
    <Button className='indicatorButtons' onClick={() => setActivePanel('calendar1')} size="l" appearance="accent" stretched>
      Давление
    </Button>
  </div>
  <div style={{ textAlign: 'center' }}>
    <Button className='indicatorButtons' onClick={() => setActivePanel('calendar2')} size="l" appearance="accent">
      Пульс
    </Button>
  </div>
					<br />
					<CardGrid size="s" spaced>
						<div style={{ position: 'relative', color: 'black', backgroundColor: 'white', paddingBottom: '50%', borderRadius: 20, width: '100%' }}>
						<div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '100%' }}>
							<div>Показатели сахара за день
							<BarChart width={400} height={300} data={data3}>
								<CartesianGrid strokeDasharray="3 3" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar dataKey="УровеньСахара" fill="#A393F5" radius={15}/>
							</BarChart>
							</div>

						</div>
						<div>
   	 </div>
						</div>
						<div style={{ position: 'relative', color: 'black', backgroundColor: 'white', paddingBottom: '50%', borderRadius: 20, width: '100%' }}>
						<div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '100%' }}>
							<div>Показатели сахара за год
							<BarChart width={400} height={300} data={data}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar dataKey="УровеньСахара" fill="#A393F5" radius={15} />
							</BarChart>
							</div>
						</div>
						</div>
					</CardGrid>
				</Panel>
				<Panel id='calendar1'>
					<PanelHeader
						before={
							<PanelHeaderButton>
							<Icon28ArrowLeftOutline onClick={() => setActivePanel('calendar')}/>
							</PanelHeaderButton>
						}	
					>	
					Календарь	
					</PanelHeader>	
					<div style={{ display: 'flex', justifyContent: 'space-between', margin: '26px 21px 8px 21px' }}>
    <Button className='indicatorButtons' onClick={() => setActivePanel('calendar')} size="l" appearance="accent" stretched style={{marginRight: '13px'}}>
      Сахар
    </Button>
    <Button className='indicatorButtons' onClick={() => setActivePanel('calendar1')} size="l" appearance="accent" stretched>
      Давление
    </Button>
  </div>
  <div style={{ textAlign: 'center' }}>
    <Button className='indicatorButtons' onClick={() => setActivePanel('calendar2')} size="l" appearance="accent">
      Пульс
    </Button>
  </div>
					<br />
					<CardGrid size="s" spaced>
						<div style={{ position: 'relative', color: 'black', backgroundColor: 'white', paddingBottom: '50%', borderRadius: 20, width: '100%' }}>
						<div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '100%' }}>
							<div>Показатели давления за день
							<BarChart width={400} height={300} data={data4}>
								<CartesianGrid strokeDasharray="3 3" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar dataKey="Давление" fill="rgba(163, 147, 245, 0.55)" radius={15}/>
							</BarChart>
							</div>
						</div>
						</div>
						<div style={{ position: 'relative', color: 'black', backgroundColor: 'white', paddingBottom: '50%', borderRadius: 20, width: '100%' }}>
						<div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '100%' }}>
							<div>Показатели давления за год
							<BarChart width={400} height={300} data={data2}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar dataKey="Давление" fill="rgba(163, 147, 245, 0.55)" radius={15}/>
							</BarChart>
							</div>
						</div>
						</div>
					</CardGrid>
				</Panel>
				<Panel id='calendar2'>
				<PanelHeader
						before={
							<PanelHeaderButton>
							<Icon28ArrowLeftOutline onClick={() => setActivePanel('calendar1')}/>
							</PanelHeaderButton>
						}	
					>	
					Календарь	
					</PanelHeader>	
					<div style={{ display: 'flex', justifyContent: 'space-between', margin: '26px 21px 8px 21px' }}>
    <Button className='indicatorButtons' onClick={() => setActivePanel('calendar')} size="l" appearance="accent" stretched style={{marginRight: '13px'}}>
      Сахар
    </Button>
    <Button className='indicatorButtons' onClick={() => setActivePanel('calendar1')} size="l" appearance="accent" stretched>
      Давление
    </Button>
  </div>
  <div style={{ textAlign: 'center' }}>
    <Button className='indicatorButtons' onClick={() => setActivePanel('calendar2')} size="l" appearance="accent">
      Пульс
    </Button>
  </div>
					<br />
					<CardGrid size="s" spaced>
						<div style={{ position: 'relative', color: 'black', backgroundColor: 'white', paddingBottom: '50%', borderRadius: 20, width: '100%' }}>
						<div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '100%' }}>
							<div>Показатели пульса за день
							<BarChart width={400} height={300} data={data5}>
								<CartesianGrid strokeDasharray="3 3" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar dataKey="Пульс" fill="#792EC0" radius={15}/>
							</BarChart>
							</div>
						</div>
						</div>
						<div style={{ position: 'relative', color: 'black', backgroundColor: 'white', paddingBottom: '50%', borderRadius: 20, width: '100%' }}>
						<div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '100%' }}>
							<div>Показатели пульса за год
							<BarChart width={400} height={300} data={data1}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar dataKey="Пульс" fill="#792EC0" radius={15}/>
							</BarChart>
							</div>
						</div>
						</div>
					</CardGrid>	
				</Panel>
				<Panel id='medicines'>
					<PanelHeader
					before={
						<PanelHeaderButton>
						<Icon28CancelCircleOutline onClick={() => setActivePanel('calendar2')}/>
						</PanelHeaderButton>
					}	
					>
						Лекарства	
					</PanelHeader>	
					<CardGrid size="s" spaced>
          <div style={{backgroundColor: 'white', borderRadius: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '384px', height: '525px' }}>
    <div style={{ marginBottom: '-27px' }} >
    <svg width="376" height="175" viewBox="0 0 376 175" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_244_14610)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.6349 36.1901C30 39.3988 30 43.5992 30 52V91C30 99.4008 30 103.601 31.6349 106.81C33.073 109.632 35.3677 111.927 38.1901 113.365C41.3988 115 45.5992 115 54 115H52.7242C59.0711 115 64.6066 121.872 69.7532 128.262C74.2244 133.813 78.4022 139 82.5637 139C86.7183 139 90.8728 133.831 95.3256 128.29C100.467 121.893 106.007 115 112.403 115H320C328.401 115 332.601 115 335.81 113.365C338.632 111.927 340.927 109.632 342.365 106.81C344 103.601 344 99.4008 344 91V52C344 43.5992 344 39.3988 342.365 36.1901C340.927 33.3677 338.632 31.073 335.81 29.6349C332.601 28 328.401 28 320 28H54C45.5992 28 41.3988 28 38.1901 29.6349C35.3677 31.073 33.073 33.3677 31.6349 36.1901Z" fill="#A393F5" fill-opacity="0.55"/>
</g>
<text x="50" y="60" fill="white" fontSize="20" fontWeight="none">Какой уровень является <tspan x="50" dy="25">для</tspan><br />  вас нормальным?
</text>
<defs>
<filter id="filter0_dd_244_14610" x="-2" y="0" width="378" height="175" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="16"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_244_14610"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_244_14610" result="effect2_dropShadow_244_14610"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_244_14610" result="shape"/>
</filter>
</defs>
</svg>

    </div>
    <div style={{ marginBottom: '11px', backgroundColor: '#F2F3F5', borderRadius: 20, padding: '10px', border: '1px solid', width: '334px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <svg width="29" height="38" viewBox="0 0 29 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '5px' }}>
        <path d="M27.0417 8.75L25.0197 33.3051C24.8284 35.6285 22.8869 37.4167 20.5556 37.4167H8.44453C6.11329 37.4167 4.1718 35.6285 3.98048 33.3051L1.95841 8.75H27.0417ZM14.5001 12.3333C14.0053 12.3333 13.6042 12.7344 13.6042 13.2292V32.0417C13.6042 32.5364 14.0053 32.9375 14.5001 32.9375C14.9948 32.9375 15.3959 32.5364 15.3959 32.0417V13.2292C15.3959 12.7344 14.9948 12.3333 14.5001 12.3333ZM19.8751 12.3333C19.3742 12.3333 18.9621 12.7279 18.9403 13.2283L18.1223 32.0425L18.1215 32.0798C18.1215 32.5535 18.5055 32.9375 18.9792 32.9375C19.4802 32.9375 19.8922 32.543 19.914 32.0425L20.732 13.2283L20.7328 13.1911C20.7328 12.7174 20.3488 12.3333 19.8751 12.3333ZM9.12508 12.3333L9.08782 12.3341C8.61456 12.3547 8.24758 12.7551 8.26816 13.2283L9.08617 32.0425C9.10793 32.543 9.51999 32.9375 10.0209 32.9375C10.0333 32.9375 10.0458 32.9372 10.0582 32.9367C10.5314 32.9161 10.8984 32.5158 10.8778 32.0425L10.0598 13.2283C10.0381 12.7279 9.62601 12.3333 9.12508 12.3333ZM16.2917 0.6875C18.1286 0.6875 19.7072 1.79319 20.3983 3.37531L27.0417 3.375C28.0313 3.375 28.8334 4.17716 28.8334 5.16667V6.51042C28.8334 6.75779 28.6329 6.95833 28.3855 6.95833H0.614665C0.367287 6.95833 0.166748 6.75779 0.166748 6.51042V5.16667C0.166748 4.17716 0.968904 3.375 1.95841 3.375L8.60182 3.37531C9.29293 1.79319 10.8715 0.6875 12.7084 0.6875H16.2917Z" fill="#A393F5" fill-opacity="0.55"/>
    </svg>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> 
        <p style={{ color: 'black', fontSize: '24px', marginBottom: '0', marginLeft: '5px', marginTop: '0' }}>Парацетомол</p> 
    </div>
    <a style={{cursor: 'pointer', paddingTop: '5px'}} onClick={() => setActivePanel('detailsMedicine')}>
    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 38.625C30.0624 38.625 38.625 30.0624 38.625 19.5C38.625 8.93755 30.0624 0.375 19.5 0.375C8.93755 0.375 0.375 8.93755 0.375 19.5C0.375 30.0624 8.93755 38.625 19.5 38.625ZM35.25 19.5C35.25 28.1985 28.1985 35.25 19.5 35.25C10.8015 35.25 3.75 28.1985 3.75 19.5C3.75 10.8015 10.8015 3.75 19.5 3.75C28.1985 3.75 35.25 10.8015 35.25 19.5ZM18.4432 11.5568C17.7842 10.8977 16.7158 10.8977 16.0568 11.5568C15.3977 12.2158 15.3977 13.2842 16.0568 13.9432L21.6135 19.5L16.0568 25.0568C15.3977 25.7158 15.3977 26.7842 16.0568 27.4432C16.7158 28.1023 17.7842 28.1023 18.4432 27.4432L25.1932 20.6932C25.8523 20.0342 25.8523 18.9658 25.1932 18.3068L18.4432 11.5568Z" fill="#A393F5"/>
    </svg>
    </a>
</div>

<div style={{ marginBottom: '11px', backgroundColor: '#F2F3F5', borderRadius: 20, padding: '10px', border: '1px solid', width: '334px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <svg width="29" height="38" viewBox="0 0 29 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '5px' }}>
        <path d="M27.0417 8.75L25.0197 33.3051C24.8284 35.6285 22.8869 37.4167 20.5556 37.4167H8.44453C6.11329 37.4167 4.1718 35.6285 3.98048 33.3051L1.95841 8.75H27.0417ZM14.5001 12.3333C14.0053 12.3333 13.6042 12.7344 13.6042 13.2292V32.0417C13.6042 32.5364 14.0053 32.9375 14.5001 32.9375C14.9948 32.9375 15.3959 32.5364 15.3959 32.0417V13.2292C15.3959 12.7344 14.9948 12.3333 14.5001 12.3333ZM19.8751 12.3333C19.3742 12.3333 18.9621 12.7279 18.9403 13.2283L18.1223 32.0425L18.1215 32.0798C18.1215 32.5535 18.5055 32.9375 18.9792 32.9375C19.4802 32.9375 19.8922 32.543 19.914 32.0425L20.732 13.2283L20.7328 13.1911C20.7328 12.7174 20.3488 12.3333 19.8751 12.3333ZM9.12508 12.3333L9.08782 12.3341C8.61456 12.3547 8.24758 12.7551 8.26816 13.2283L9.08617 32.0425C9.10793 32.543 9.51999 32.9375 10.0209 32.9375C10.0333 32.9375 10.0458 32.9372 10.0582 32.9367C10.5314 32.9161 10.8984 32.5158 10.8778 32.0425L10.0598 13.2283C10.0381 12.7279 9.62601 12.3333 9.12508 12.3333ZM16.2917 0.6875C18.1286 0.6875 19.7072 1.79319 20.3983 3.37531L27.0417 3.375C28.0313 3.375 28.8334 4.17716 28.8334 5.16667V6.51042C28.8334 6.75779 28.6329 6.95833 28.3855 6.95833H0.614665C0.367287 6.95833 0.166748 6.75779 0.166748 6.51042V5.16667C0.166748 4.17716 0.968904 3.375 1.95841 3.375L8.60182 3.37531C9.29293 1.79319 10.8715 0.6875 12.7084 0.6875H16.2917Z" fill="#A393F5" fill-opacity="0.55"/>
    </svg>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> 
        <p style={{ color: 'black', fontSize: '24px', marginBottom: '0', marginLeft: '5px', marginTop: '0' }}>Глюкофаж Логн</p> 
    </div>
    <a style={{cursor: 'pointer', paddingTop: '5px'}} onClick={() => setActivePanel('detailsMedicine')}>
    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 38.625C30.0624 38.625 38.625 30.0624 38.625 19.5C38.625 8.93755 30.0624 0.375 19.5 0.375C8.93755 0.375 0.375 8.93755 0.375 19.5C0.375 30.0624 8.93755 38.625 19.5 38.625ZM35.25 19.5C35.25 28.1985 28.1985 35.25 19.5 35.25C10.8015 35.25 3.75 28.1985 3.75 19.5C3.75 10.8015 10.8015 3.75 19.5 3.75C28.1985 3.75 35.25 10.8015 35.25 19.5ZM18.4432 11.5568C17.7842 10.8977 16.7158 10.8977 16.0568 11.5568C15.3977 12.2158 15.3977 13.2842 16.0568 13.9432L21.6135 19.5L16.0568 25.0568C15.3977 25.7158 15.3977 26.7842 16.0568 27.4432C16.7158 28.1023 17.7842 28.1023 18.4432 27.4432L25.1932 20.6932C25.8523 20.0342 25.8523 18.9658 25.1932 18.3068L18.4432 11.5568Z" fill="#A393F5"/>
    </svg>
    </a>
</div>
<div style={{ marginBottom: '11px', backgroundColor: '#F2F3F5', borderRadius: 20, padding: '10px', border: '1px solid', width: '334px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    
<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4999 0.458496C25.3595 0.458496 32.5416 7.6406 32.5416 16.5002C32.5416 25.3597 25.3595 32.5418 16.4999 32.5418C7.64035 32.5418 0.458252 25.3597 0.458252 16.5002C0.458252 7.6406 7.64035 0.458496 16.4999 0.458496ZM16.4999 7.75016C15.6945 7.75016 15.0416 8.40308 15.0416 9.2085V15.0418H9.20825C8.46037 15.0418 7.84397 15.6048 7.75973 16.3301L7.74992 16.5002C7.74992 17.3056 8.40284 17.9585 9.20825 17.9585H15.0416V23.7918C15.0416 24.5397 15.6046 25.1561 16.3298 25.2404L16.4999 25.2502C17.3053 25.2502 17.9583 24.5972 17.9583 23.7918V17.9585H23.7916C24.5395 17.9585 25.1559 17.3955 25.2401 16.6702L25.2499 16.5002C25.2499 15.6947 24.597 15.0418 23.7916 15.0418H17.9583V9.2085C17.9583 8.46061 17.3953 7.84422 16.67 7.75997L16.4999 7.75016Z" fill="#A393F5"/>
</svg>
</div>
<div style={{ marginBottom: '11px', backgroundColor: '#F2F3F5', borderRadius: 20, padding: '10px', border: '1px solid', width: '334px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    
<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4999 0.458496C25.3595 0.458496 32.5416 7.6406 32.5416 16.5002C32.5416 25.3597 25.3595 32.5418 16.4999 32.5418C7.64035 32.5418 0.458252 25.3597 0.458252 16.5002C0.458252 7.6406 7.64035 0.458496 16.4999 0.458496ZM16.4999 7.75016C15.6945 7.75016 15.0416 8.40308 15.0416 9.2085V15.0418H9.20825C8.46037 15.0418 7.84397 15.6048 7.75973 16.3301L7.74992 16.5002C7.74992 17.3056 8.40284 17.9585 9.20825 17.9585H15.0416V23.7918C15.0416 24.5397 15.6046 25.1561 16.3298 25.2404L16.4999 25.2502C17.3053 25.2502 17.9583 24.5972 17.9583 23.7918V17.9585H23.7916C24.5395 17.9585 25.1559 17.3955 25.2401 16.6702L25.2499 16.5002C25.2499 15.6947 24.597 15.0418 23.7916 15.0418H17.9583V9.2085C17.9583 8.46061 17.3953 7.84422 16.67 7.75997L16.4999 7.75016Z" fill="#A393F5"/>
</svg>
</div>
<div style={{ marginBottom: '11px', backgroundColor: '#F2F3F5', borderRadius: 20, padding: '10px', border: '1px solid', width: '334px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    
<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4999 0.458496C25.3595 0.458496 32.5416 7.6406 32.5416 16.5002C32.5416 25.3597 25.3595 32.5418 16.4999 32.5418C7.64035 32.5418 0.458252 25.3597 0.458252 16.5002C0.458252 7.6406 7.64035 0.458496 16.4999 0.458496ZM16.4999 7.75016C15.6945 7.75016 15.0416 8.40308 15.0416 9.2085V15.0418H9.20825C8.46037 15.0418 7.84397 15.6048 7.75973 16.3301L7.74992 16.5002C7.74992 17.3056 8.40284 17.9585 9.20825 17.9585H15.0416V23.7918C15.0416 24.5397 15.6046 25.1561 16.3298 25.2404L16.4999 25.2502C17.3053 25.2502 17.9583 24.5972 17.9583 23.7918V17.9585H23.7916C24.5395 17.9585 25.1559 17.3955 25.2401 16.6702L25.2499 16.5002C25.2499 15.6947 24.597 15.0418 23.7916 15.0418H17.9583V9.2085C17.9583 8.46061 17.3953 7.84422 16.67 7.75997L16.4999 7.75016Z" fill="#A393F5"/>
</svg>
</div>
  </div>
					</CardGrid>
				</Panel>
        <Panel id='detailsMedicine'>
        <PanelHeader
					before={
						<PanelHeaderButton>
						<Icon28CancelCircleOutline onClick={() => setActivePanel('card')}/>
						</PanelHeaderButton>
					}	
					>
						Лекарства	
					</PanelHeader>
          <div style={{backgroundColor: 'white', borderRadius: 20, display: 'flex', flexDirection: 'column', width: '380px', height: '222px', padding: '4px 10px 10px 16px', marginLeft: '17px', marginTop: '15px' }}>
    <div>
        <p style={{fontSize: '24px', color: 'black', margin: '4px 0px 0px 4px'}}>Частота приема:</p>
    </div>
    <div style={{ backgroundColor: '#F2F3F5', borderRadius: 20, padding: '10px', border: '1px solid', width: '354px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '9px' }}>    
        <label htmlFor="intervalCheckbox" style={{ width: '100%', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <label style={{ fontSize: '20px', color: 'black' }}>С равными интервалами</label>
                <input className='medicineCheckbox' type="checkbox" id="intervalCheckbox"/>
            </div>
        </label>
    </div>
    <div style={{ backgroundColor: '#F2F3F5', borderRadius: 20, padding: '10px', border: '1px solid', width: '354px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '9px' }}>    
        <label htmlFor="daysCheckbox" style={{ width: '100%', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <label style={{ fontSize: '20px', color: 'black' }}>В определенные дни недели</label>
                <input className='medicineCheckbox' type="checkbox" id="daysCheckbox"/>
            </div>
        </label>
    </div>
    <div style={{ backgroundColor: '#F2F3F5', borderRadius: 20, padding: '10px', border: '1px solid', width: '354px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '9px' }}>    
        <label htmlFor="asNeededCheckbox" style={{ width: '100%', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <span style={{ fontSize: '20px', color: 'black' }}>По мере необходимости</span>
                <input className='medicineCheckbox' type="checkbox" id="asNeededCheckbox"/>
            </div>
        </label>
    </div>
</div>

        </Panel>
				</View>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
