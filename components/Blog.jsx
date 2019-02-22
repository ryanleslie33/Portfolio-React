import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const styles = {
  card: {
    minWidth: 150,
    maxWidth:220,
gridArea: "1 / col4-start / last-line / 6",
    width: '300px',
    border:'25px solid blue',
    padding:'100px',
    margin:'25px',
    float:'right',
    overFlow:'right',
    backgroundColor:'grey',
    borderRadius: "25px"





  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',

  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,

  },
};

function Blog(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (

    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          profile
        </Typography>
        <Typography className={classes.title} variant="h5" component="h2">

           Ryan Leslie
           ryanleslie33@aol.com
           Epicodus





        </Typography>
        <Typography className={classes.pos} color="textSecondary">

        </Typography>
        <Typography component="p">

          <br />

        </Typography>
      </CardContent>

    </Card>
  );
}



export default withStyles(styles)(Blog);
