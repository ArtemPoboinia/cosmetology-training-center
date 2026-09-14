import Header from "../components/Header/Header";
import About from "../sections/About/About";
import ContactForm from "../sections/ContactForm/ContactForm";
import Courses from "../sections/Courses/Courses";
import Hero from "../sections/Hero/Hero";
import MasterClasses from "../sections/MasterClasses/MasterClasses";
import Models from "../sections/Models/Models";
import SpecialOffers from "../sections/SpecialOffers/SpecialOffers";
import TrainingCosmetologists from "../sections/TrainingCosmetologists/TrainingCosmetologists";
import WhyChooseUs from "../sections/WhyChooseUs/WhyChooseUs";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Courses />
        <About />
        <TrainingCosmetologists />
        <Models />
        <MasterClasses />
        <WhyChooseUs />
        <SpecialOffers />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}

export default Home;
