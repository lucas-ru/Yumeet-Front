import { IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
import './Toolbar.css';

import { heart, chatbox } from 'ionicons/icons';

import YumeetWhite from '../files/YUMEET_WHITE.svg';

const Toolbar: React.FC = () => {
  return (
    <IonHeader>
        <IonToolbar className='ion-text-center' color="secondary">
            <IonTitle>
                <img src={YumeetWhite} className="yu-toolbar-logo"/>
            </IonTitle>
            <IonButtons slot="end">
                <IonButton>
                    <IonIcon icon={heart} />
                </IonButton>
                <IonButton>
                    <IonIcon icon={chatbox} />
                </IonButton>
            </IonButtons>
        </IonToolbar>
    </IonHeader>
  );
};

export default Toolbar;