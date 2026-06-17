import CollaborationAreas from "../components/contact/CollaborationAreas";
import ContactBoundary from "../components/contact/ContactBoundary";
import ContactHero from "../components/contact/ContactHero";
import ContactMethods from "../components/contact/ContactMethods";
import ContactStatusNote from "../components/contact/ContactStatusNote";
import WhoShouldReachOut from "../components/contact/WhoShouldReachOut";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMethods />
      <WhoShouldReachOut />
      <CollaborationAreas />
      <ContactStatusNote />
      <ContactBoundary />
    </>
  );
}
