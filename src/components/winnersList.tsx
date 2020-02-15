import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
    flag: {
        width: '20px',
        marginLeft: '7px',
        verticalAlign: 'middle',
    },
  }));

export const WinnersList: React.FunctionComponent<{
    races: any;
}> = (({races}) => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow style={{ background: '#ebebeb' }}>
                <TableCell align="left">Driver</TableCell>
                <TableCell align="center">Constructor</TableCell>
                <TableCell align="center">Laps</TableCell>
                <TableCell align="center">Grid</TableCell>
                <TableCell align="center">Time</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {races.map((race: any) => {
                return(
                    <TableRow>
                    <TableCell align="left">
                    {race.Results[0].Driver.givenName} {race.Results[0].Driver.familyName}
                    <img className={classes.flag} src={`/images/flags/${race.Results[0].Constructor.nationality}.png`} alt={race.Results[0].Constructor.nationality} />
                    </TableCell>
                    <TableCell align="center">
                    {race.Results[0].Constructor.name}
                    <img className={classes.flag} src={`/images/flags/${race.Results[0].Constructor.nationality}.png`} alt={race.Results[0].Constructor.nationality} />
                    </TableCell>
                    <TableCell align="center">{race.Results[0].laps}</TableCell>
                    <TableCell align="center">{race.Results[0].laps}</TableCell>
                    <TableCell align="center">{race.Results[0].laps}</TableCell>
                    <TableCell align="center">{race.Results[0].status}</TableCell>
                    </TableRow>
                );
              })};
            </TableBody>
          </Table>
        </Paper>
    );
});