import './App.css';
import { Box } from '@material-ui/core'
import ContactForm from './components/contactForm'
import VerticalTabs from './components/side bar/VerticalTabs';


import Hero from './components/Hero'
import Membership from './components/Membership'

function App() {
  return (
    <div className="App">
      <Box mb={10}>
        <Hero/>
      </Box>
      <Box mb={10}>
        <Membership/>
      </Box>
      {/* <VerticalTabs></VerticalTabs> */}
      <ContactForm/>
    </div>
  );
}

export default App;
