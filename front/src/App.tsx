import React, { useState, useEffect } from 'react';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import { ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, Tabbar, TabbarItem, View, Panel, PanelHeader, Card, CardGrid } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { Icon28NewsfeedOutline, Icon28UserCircleOutline, Icon28MessageOutline, Icon28Square4Outline } from '@vkontakte/icons';
import MyCalendar from "./panels/Calendar";

const App = () => {
    const [fetchedUser, setUser] = useState<UserInfo | undefined>();
    const [popout, setPopout] = useState<React.ReactNode | null>(<ScreenSpinner size='large' />);
    const [text, setText] = useState('one');

    useEffect(() => {
        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
            setPopout(null);
        }
        fetchData();
    }, []);

    return (
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <View activePanel="card">
                        <Panel id="card" style={{ padding: 0 }}> {/* Устанавливаем padding: 0 */}
                            <PanelHeader>Моя страница</PanelHeader>
                            <CardGrid size="l" spaced>
                                <Card style={{ margin: 0 }}> {/* Устанавливаем margin: 0 */}
                                    <MyCalendar />
                                </Card>
                            </CardGrid>
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
									<div style={{ paddingBottom: '50%', backgroundColor: 'white', borderRadius: 20}} />
                                </Card>
                            </CardGrid>
                            <CardGrid size="l" spaced>
                                <Card>
									<div style={{ paddingBottom: '50%', backgroundColor: 'white', borderRadius: 20, width: '100%'}} />
                                </Card>
                            </CardGrid>
                        </Panel>
                    </View>
                    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
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
