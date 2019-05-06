import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import App from '../App';

const Root = () => {
    return (
        <Router>
            <Scene key="kimlik">
                <Scene key="main" title="ANASAYFA" hideNavBar initial component={App} />
            </Scene>

        </Router>
    );
};

export default Root; 