function LeagueItem({ data }) {
  const { leagueId, leagueLogo, leagueName, leagueCountry, logoBg } = data;

  return (
    <div className="leagueCard">
      <div className="leagueCardPhoto" style={{ backgroundColor: logoBg }}>
        <img src={leagueLogo} alt={leagueId} />
      </div>
      <div className="leagueCardContent">
        <div className="leagueCardContentText">
          <h3>{leagueName}</h3>
          <h6>{leagueCountry}</h6>
        </div>
      </div>
    </div>
  );
}

export default LeagueItem;
