import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import './Accueil.css';

const Accueil: React.FC = () => {
  const { authValue }: any = useContext(AuthContext);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonTitle className="title">Bienvenue  !</IonTitle>
      </IonContent>
    </IonPage>
  );
};

export default Accueil;
