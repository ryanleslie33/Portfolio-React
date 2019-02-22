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
    gridArea: "6 / col4-start / last-line / 3"

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
