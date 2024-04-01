import React, { useState, useEffect, ReactNode, MouseEventHandler } from 'react';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import { ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, Tabbar, TabbarItem, View, Panel, PanelHeader, CardGrid, Card, Spacing, PanelHeaderBack, PanelHeaderButton, Button, Div, ButtonGroup} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {Icon28NewsfeedOutline, Icon28UserCircleOutline, Icon28MessageOutline, Icon24MessageOutline, Icon28BillheadOutline, Icon28Square4Outline, Icon28ArrowLeftOutline} from '@vkontakte/icons';
import MyCalendar from './panels/Calendar';

import Home from './panels/Home';
import IndicatorPressure from './panels/indicatorPressure';
import IndicatorSugar from './panels/indicatorSugar';
import IndicatorPulse from './panels/IndicatorPulse';
import './styles/saveButton.css'
import './styles/goOverButton.css'
import './styles/indicatorButtons.css'

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
	
	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
				<View activePanel={activePanel}>
				<Panel id='card'>
                    <PanelHeader/>
				<Panel id="card">
				<CardGrid size="l" spaced>
                    <div style={{backgroundColor: "white", borderRadius: 20}}>
                        <MyCalendar/>
                    </div>
			
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
						<CardGrid size="l" spaced>
							<Card>
								<div style={{ paddingBottom: '30%', backgroundColor: 'white', borderRadius: 20}} />
							</Card>
						</CardGrid>
						<Spacing size={16} />
					</Panel>
				</Panel>
				<Panel id='calendar'>
					<PanelHeader
						before={
							<PanelHeaderButton onClick={() => setActivePanel("card")}>
							<Icon28ArrowLeftOutline/>
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
							<div>Показатели сахара за день</div>
						</div>
						</div>
						<div style={{ position: 'relative', color: 'black', backgroundColor: 'white', paddingBottom: '50%', borderRadius: 20, width: '100%' }}>
						<div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '100%' }}>
							<div>Показатели сахара за год</div>
						</div>
						</div>
					</CardGrid>
				</Panel>
				<Panel id='calendar1'>
					<PanelHeader
						before={
							<PanelHeaderButton>
							<Icon28ArrowLeftOutline/>
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
							<div>Показатели давления за день</div>
						</div>
						</div>
						<div style={{ position: 'relative', color: 'black', backgroundColor: 'white', paddingBottom: '50%', borderRadius: 20, width: '100%' }}>
						<div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '100%' }}>
							<div>Показатели давления за год</div>
						</div>
						</div>
					</CardGrid>
				</Panel>
				<Panel id='calendar2'>
				<PanelHeader
						before={
							<PanelHeaderButton>
							<Icon28ArrowLeftOutline/>
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
							<div>Показатели пульса за день</div>
						</div>
						</div>
						<div style={{ position: 'relative', color: 'black', backgroundColor: 'white', paddingBottom: '50%', borderRadius: 20, width: '100%' }}>
						<div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '100%' }}>
							<div>Показатели пульса за год</div>
						</div>
						</div>
					</CardGrid>	
				</Panel>
        <Panel id='medicine'>
          <div style={{backgroundColor: 'blue'}}></div>
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