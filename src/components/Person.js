import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  image:{ 
      height:"140px"
    }
})
export default function Person(props) {
    
    const classes = useStyles();

    return (
      <Card className={classes.root}>
       <CardMedia image={props.image} className={classes.image}/>
        <CardContent>
          <Typography variant="h5" component="h2">
          {props.name}
          </Typography> 
          <Typography>{props.role}</Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
  

