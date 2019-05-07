import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import App from './src/App';
import Calculate from './src/pages/Calculate';

const Root = () => {
    return (
        <Router>
            <Scene key="kimlik">
                <Scene key="main" title="ANASAYFA" hideNavBar initial component={App} />
                <Scene key="calc" hideNavBar title="HESAPLAMA SAYFASI" component={Calculate} />
            </Scene>

        </Router>
    );
};

export default Root; 