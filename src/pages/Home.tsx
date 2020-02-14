import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { ChampionsGrid } from '../components/championsGrid';

const Home: React.FunctionComponent = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
          const result = await axios(
            'https://ergast.com/api/f1/driverStandings/1.json?limit=11&offset=55',
          );
          setItems(result.data.MRData.StandingsTable.StandingsLists);
        };
        fetchItems();
      }, []);
    return (
        <ChampionsGrid champions={items}/>
    );
};

export default Home;