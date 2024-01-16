import BannerComponent from './BannerComponent.jsx';
import ProjetsComponent from './ProjetsComponent.jsx';
import CompetenceComponent from './CompetenceComponent.jsx';
import ContactComponent from './Contact.jsx';

export default function HomeComponent () {
  return (
    <div>
      <BannerComponent />
      <CompetenceComponent />
      <ProjetsComponent />
      <ContactComponent />
    </div>
  );
}

