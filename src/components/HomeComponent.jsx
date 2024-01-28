import BannerComponent from './BannerComponent.jsx';
import ProjetsComponent from './ProjetsComponent.jsx';
import CompetenceComponent from './CompetenceComponent.jsx';
import Contact from './Contact.jsx';

export default function HomeComponent () {
  return (
    <div>
      <BannerComponent />
      <CompetenceComponent />
      <ProjetsComponent />
      <Contact />
    </div>
  );
}

