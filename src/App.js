import { Box, Container } from '@material-ui/core'
import ContactForm from './components/contactForm'

import Hero from './components/Hero'
import Membership from './components/Membership'
import Differences from './components/Differences'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Box mb={10}>
        <Hero/>
      </Box>
      <Box mb={10}>
        <Differences/>
      </Box>
      <Box mb={10} textAlign="center">
        <Membership/>
      </Box>
      <Container>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <ContactForm/>
        </Box>
        
      </Container>
      <Footer/>
      
    </div>
  );
}

export default App;
