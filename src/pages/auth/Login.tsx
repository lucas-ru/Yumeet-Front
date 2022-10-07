import { IonButton, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRadio, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useContext, useRef } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../../context/AuthProvider';
import { Toast } from '@capacitor/toast';

import YumeetWhite from '../../files/YUMEET_WHITE.svg';

import './Login.css'

const Login: React.FC = () => {
  const { login }: any = useContext(AuthContext);
  const loginRef = useRef<HTMLIonInputElement>(null);
  const pwdRef = useRef<HTMLIonInputElement>(null);
  const history = useHistory();

  const submitLogin = async () => {
    try {
      const res = await login(loginRef.current?.value, pwdRef.current?.value)
      if (res.success) {
        history.push("/")
      } else {
        await Toast.show({
          text: res.error
        })
      }
    } catch (e) {
      console.log("error", e)
    }
  }
  
  return (
    <IonPage>
      <IonContent color="secondary" fullscreen>
        <IonGrid className="login-content ion-padding">
          <IonRow >
              <IonCol>
                  <img src={YumeetWhite}/>
                  <h5>Connectez-vous !</h5>
              </IonCol>
          </IonRow>

          <IonRow className="ion-margin-top ion-padding-top">
              <IonCol size="12">
                
                <IonItem color="secondary">
                  <IonLabel position="floating">Utilisateur</IonLabel>
                  <IonInput placeholder="Votre login" ref={loginRef}/>
                </IonItem>
                
                <IonItem color="secondary">
                  <IonLabel position="floating">Mot de passe</IonLabel>
                  <IonInput type="password" placeholder='Mot de passe' ref={pwdRef}/>
                </IonItem>
                <IonButton className="custom-button" expand="block" onClick={ submitLogin }>Se connecter</IonButton>
              </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
