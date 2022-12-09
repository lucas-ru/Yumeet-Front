import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonImg,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Toolbar from './components/Toolbar';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './App.css'

import { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';
import Login from './pages/auth/Login';
import Publier from './pages/cuisinier/publier/Publier';
import Accueil from './pages/commun/accueil/Accueil';
import Profil from './pages/commun/profil/Profil';
import Carte from './pages/consommateur/carte/Carte';
import Panier from './pages/consommateur/panier/Panier';


setupIonicReact();

const App: React.FC = () => {
  const { authValue }: any = useContext(AuthContext);

  const privateRoute = (
    <IonReactRouter>
      <Toolbar />
      <IonTabs>
        <IonRouterOutlet>
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
          <Route exact path="/profil">
            <Profil />
          </Route>
          <Route exact path="/">
            <Redirect to="/accueil" />
          </Route>
        </IonRouterOutlet>
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
      </IonTabs>
    </IonReactRouter>
  )

  const publicRoute = (
    <IonReactRouter>
      <IonRouterOutlet> 
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  )

  return (
    <IonApp>
      { authValue.authenticated ? privateRoute : publicRoute }
    </IonApp>
  );
}

export default App;
