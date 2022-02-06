import { useEffect, useState } from "react";

// Dummy data imports
import { topAssistsData } from "../data/dummy/TopAssistsData";

function TopAssists({ leagueId, seasonYear }) {
  const [topAssists, setTopAssists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopAssists = async () => {
      // const res = await fetch(
      //   `https://${process.env.REACT_APP_RAPIDAPI_HOST}/players/topassists?league=${leagueId}&season=${seasonYear}`,
      //   {
      //     method: "GET",
      //     headers: {
      //       "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
      //       "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
      //     },
      //   }
      // );
      // const data = await res.json();

      // const topAssistsCopy = [...data.response];
      // setTopAssists(topAssistsCopy);
      // setLoading(false);

      // To comment
      const data = topAssistsData;
      setTimeout(() => {
        const topAssistsCopy = [...data.response];
        setTopAssists(topAssistsCopy);
        setLoading(false);
      }, 2000);
    };

    fetchTopAssists();
  }, [leagueId, seasonYear]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tableDiv">
      <table className="tableElement">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Club</th>
            <th>Assists</th>
          </tr>
        </thead>
        <tbody>
          {topAssists.map((val, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{val.player.name}</td>
              <td>{val.statistics[0].team.name}</td>
              <td>{val.statistics[0].goals.assists}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopAssists;
