import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Person from './Person' 
import Grid from '@material-ui/core/Grid';
export default function Aboutus() {
        return (
          <Container maxWidth="lg">
            <Box >
              <Typography variant="h3" component="h3" gutterBottom>
                About Us
              </Typography>
              <Grid container spacing={3}>
                <Grid item md={3}><Person name="Jade Marte" description="A hard-working student who is willing to learn new things. And willing to help others along the way." role="Founder" image="/assets/images/JM.jpg"/></Grid>
                <Grid item md={3}><Person name="Jordane Allen" description="Motivated student extraordinaire who likes to engage in enjoyable, meaningful and uplifting activities." role="Founder" image="/assets/images/JA.jpg"/></Grid>
                <Grid item md={3}><Person name="Sean Wilson" description="I'm a full-stack web/software engineer working on FoxFiles software. I love to adventure into the unknown, whether that be some new topic or out and about mountain biking. I also like to play a variety of sports including tennis, soccer, badminton, and swimming. Often times, you'll find holed up in FoxFiles HQ working on new updates to our software." role="Founder" image="/assets/images/SWB.png"/></Grid>
                <Grid item md={3}><Person name="Damian Pascal" description="My name is Damian Pascal. I have had a variety of customer service opportunities, through which I was able to have fewer returns products and increased repeat customers. People find me to be an upbeat, self-motivated team player with excellent communication skills." role="Founder" image="/assets/images/DP.jpeg"/></Grid>
                            </Grid>
            </Box>
          </Container>
        );
      }
      