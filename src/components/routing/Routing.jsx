import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Toolbar from '../Toolbar';

import { Redirect, Route } from 'react-router';

import Tab1 from '../../pages/Tab1';
import Tab2 from '../../pages/Tab2';
import Tab3 from '../../pages/Tab3';
import Login from '../../pages/auth/Login';

import { ellipse, square, triangle, personCircle } from 'ionicons/icons';
import Profile from '../../pages/Profile';
import { useContext } from 'react';
import { RouteContext } from '../../context/RouteProvider';
import { AuthContext } from '../../context/AuthProvider';
import PrivateRoute from './PrivateRoute';

const Routing = () => {
    const { showTabs } = useContext(RouteContext)
    const { authValue } = useContext(AuthContext)

    const tabs = (
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={personCircle} />
            <IonLabel>Profil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    )

    const routing = (
        <>
            <Route exact path="/tab1">
                <Tab1 />
            </Route>
            <Route exact path="/tab2">
                <Tab2 />
            </Route>
            <Route path="/tab3">
                <Tab3 />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <PrivateRoute exact path="/profile" authenticated={authValue.authenticated}>
                <Profile />
            </PrivateRoute>
            <Route exact path="/">
                <Redirect to="/tab1" />
            </Route>
        </>
    )
  
    return (
        <IonReactRouter>
            {showTabs ? (
                <>
                    <Toolbar />
                    <IonTabs>
                        <IonRouterOutlet>
                            {routing}
                        </IonRouterOutlet>
                        {tabs}
                    </IonTabs>
                </>
            ) : (
                <IonRouterOutlet>
                    {routing}
                </IonRouterOutlet> 
            )}
        </IonReactRouter>
    );
}

export default Routing;
