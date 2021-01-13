import logo from './logo.svg';
import './App.css';
import ContactForm from './components/contactForm'
import VerticalTabs from './components/side bar/VerticalTabs';


import Hero from './components/Hero'
import Membership from './components/Membership'

function App() {
  return (
    <div className="App">
      <Hero/>
      <Membership/>
      {/* <VerticalTabs></VerticalTabs> */}
      <ContactForm/>
    </div>
  );
}

export default App;
