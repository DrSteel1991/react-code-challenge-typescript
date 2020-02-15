import React, {useEffect, useState} from 'react';
import { useParams } from '../utils/useHistory';
import axios from 'axios';
import { WinnersList } from '../components/winnersList';

const Winners: React.FunctionComponent = () => {
    const { year, champion } = useParams();
    const [winners, setWinners] = useState([]);

    useEffect(() => {
        const fetchWinners = async () => {
          const result = await axios(
            `https://ergast.com/api/f1/${year}/results/1.json`,
          );
          setWinners(result.data.MRData.RaceTable.Races);
        };
        fetchWinners();
      }, []);
    return (
        <WinnersList races={winners}/>
    );
};

export default Winners;