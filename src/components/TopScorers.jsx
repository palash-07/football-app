import { useEffect, useState } from "react";

// Dummy data imports
import { topScorersData } from "../data/dummy/TopScorersData";

function TopScorers({ leagueId, seasonYear }) {
  const [topScorers, setTopScorers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopScorers = async () => {
      // const res = await fetch(
      //   `https://${process.env.REACT_APP_RAPIDAPI_HOST}/players/topscorers?league=${leagueId}&season=${seasonYear}`,
      //   {
      //     method: "GET",
      //     headers: {
      //       "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
      //       "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
      //     },
      //   }
      // );
      // const data = await res.json();

      // const topScorersCopy = [...data.response];
      // setTopScorers(topScorersCopy);
      // setLoading(false);

      // To comment
      const data = topScorersData;
      setTimeout(() => {
        const topScorersCopy = [...data.response];
        setTopScorers(topScorersCopy);
        setLoading(false);
      }, 2000);
    };

    fetchTopScorers();
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
            <th>Goals</th>
          </tr>
        </thead>
        <tbody>
          {topScorers.map((val, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{val.player.name}</td>
              <td>{val.statistics[0].team.name}</td>
              <td>
                {val.statistics[0].goals.total}(
                {val.statistics[0].penalty.scored})
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopScorers;
