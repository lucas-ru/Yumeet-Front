import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Accueil.css';

const Accueil: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <h5 className="title">Accueil</h5>
      </IonContent>
    </IonPage>
  );
};

export default Accueil;
