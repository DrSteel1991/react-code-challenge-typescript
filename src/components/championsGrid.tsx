import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { List, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    flag: {
        width: '9%',
        marginLeft: '7px',
        verticalAlign: 'top',
    },
}));

export const ChampionsGrid: React.FunctionComponent<{
    champions: any;
}> = (({champions}) => {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
            {champions.map((champion: any) => {
                return <Grid item key={champion.season} xs={12} sm={6} md={4}>
                    <Link to={`/winners/${champion.season}/${champion.DriverStandings[0].Driver.driverId}`}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image="/images/avatar.jpg"
                            title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                            {champion.season} - {`Round ${champion.round}`}
                            </Typography>
                            <Typography>
                            {`${champion.DriverStandings[0].Driver.givenName} ${champion.DriverStandings[0].Driver.familyName}`}
                            <img className={classes.flag} src={`/images/flags/${champion.DriverStandings[0].Constructors[0].nationality}.png`} alt={champion.DriverStandings[0].Constructors[0].nationality} />
                            </Typography>
                            <hr/>
                            <Typography>
                            <List> 
                                <ListItemText primary={`Points: ${champion.DriverStandings[0].points}`} />
                                <ListItemText primary={`Constructor: ${champion.DriverStandings[0].Constructors[0].name} `} /> 
                                <ListItemText primary={`Wins: ${champion.DriverStandings[0].wins}`} />  
                            </List>
                            </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>;
            })}
           </Grid>
        </Container>
    );
});
