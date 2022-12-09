import {
    IonIcon,
    IonImg,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Toolbar from '../Toolbar';

import { Redirect, Route } from 'react-router';

import Login from '../../pages/auth/Login';

import Publier from '../../pages/cuisinier/publier/Publier';
import Accueil from '../../pages/commun/accueil/Accueil';
import Profil from '../../pages/commun/profil/Profil';
import Carte from '../../pages/consommateur/carte/Carte';
import Panier from '../../pages/consommateur/panier/Panier';

import { ellipse, square, triangle, personCircle } from 'ionicons/icons';
import { useContext } from 'react';
import { RouteContext } from '../../context/RouteProvider';
import { AuthContext } from '../../context/AuthProvider';
import PrivateRoute from './PrivateRoute';

const Routing = () => {
    const { showTabs } = useContext(RouteContext)
    const { authValue } = useContext(AuthContext)

    const tabs = (
        <IonTabBar slot="bottom">
          <IonTabButton tab="accueil" href="/accueil">
            <IonImg src='assets/icon/accueil.png' class='icon' />
            <IonLabel>Accueil</IonLabel>
          </IonTabButton>
          <IonTabButton tab="publier" href="/publier">
            <IonImg src='assets/icon/plus.png' class='icon' />
            <IonLabel>Publier</IonLabel>
          </IonTabButton>
          <IonTabButton tab="carte" href="/carte">
            <IonImg src='assets/icon/carte.png' class='icon' />
            <IonLabel>Carte</IonLabel>
          </IonTabButton>
          <IonTabButton tab="panier" href="/panier">
            <IonImg src='assets/icon/panier.png' class='icon' />
            <IonLabel>Panier</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profil" href="/profil">
          <IonImg src='assets/icon/profil.png' class='icon' />
            <IonLabel>Profil</IonLabel>
          </IonTabButton>
        </IonTabBar>
    )

    const routing = (
        <>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/accueil">
                <Accueil />
            </Route>
            <Route exact path="/publier">
                <Publier />
            </Route>
            <Route exact path="/carte">
                <Carte />
            </Route>
            <Route exact path="/panier">
                <Panier />
            </Route>
            <PrivateRoute exact path="/profil" authenticated={authValue.authenticated}>
                <Profil />
            </PrivateRoute>
            <Route exact path="/">
                <Redirect to="/accueil" />
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
