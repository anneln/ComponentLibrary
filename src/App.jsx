import Header from "./Components/Header";
import BadgeGallery from "./Components/Badges/BadgeGallery";
import BannersGallery from "./Components/Banners/BannersGallery";
import Card from "./Components/Cards/Card";
import Cloudupload from "./assets/Cloudupload.svg?react";
import CardContent from "./Components/Cards/CardContent";
import TestimonialsGallery from "./Components/Testimonials/TestimonialsGallery";

function App() {
  return (
    <div className="container">
      <Header />
      <BadgeGallery>Badge</BadgeGallery>
      <BannersGallery />
      <Card icon={Cloudupload} iconBgColor="#3f75fe">
        <CardContent>
          <Card.Title>Easy Deployment</Card.Title>
          <Card.Text>
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
            magna sit morbi lobortis.
          </Card.Text>
        </CardContent>
      </Card>
      <TestimonialsGallery />
    </div>
  );
}

export default App;
