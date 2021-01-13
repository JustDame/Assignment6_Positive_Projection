import { Box, Container } from '@material-ui/core'
import { Box } from '@material-ui/core'
import ContactForm from './components/contactForm'
import VerticalTabs from './components/side bar/VerticalTabs';


import Hero from './components/Hero'
import Membership from './components/Membership'
import Differences from './components/Differences'

function App() {
  return (
    <div className="App">
      <Box mb={10}>
        <Hero/>
      </Box>
      <Box mb={10}>
        <Differences/>
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
