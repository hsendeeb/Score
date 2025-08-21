const btn = document.getElementById("btn");
const container = document.getElementById("container");
const btnEvent = document.getElementById("btnEvent");
const input = document.getElementById("input");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card1");
const card3 = document.getElementById("card1");
const card4 = document.getElementById("card1");
const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");
const teamEl = document.getElementById("team");
const keywordEl = document.getElementById("keyword");
const countryEl = document.getElementById("country");
const locationEl = document.getElementById("location");
const badgeEl = document.getElementById("badge");
const descEl = document.getElementById("desc");
const leagueEl = document.getElementById("league");
const form = document.getElementById("form");
const yearEl = document.getElementById("year");
const stadiumEl = document.getElementById("stadium");
const capacityEl = document.getElementById("capacity");
const shirtEl = document.getElementById("shirt");
const youtubeEl=document.getElementById("youtube");
const facebookEl=document.getElementById("facebook");
const twitterEl=document.getElementById("twitter");


btn.addEventListener("click", async (event) => {
  event.preventDefault();
  const team = input.value;
  if (team) {
    try {
      const response = await fetch(
        ` https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=${team}`
      );
      if (!response.ok) {
        displayError("team not valid");
      }
      const data = await response.json();
      console.log(data);
      displayData(data);
    } catch (error) {
      displayError(error);
    }
  } else {
    displayError("please enter a team name")
  }
});




async function displayData(data) {
  const team = data.teams[0].strTeam;
  const badge = data.teams[0].strBadge;
  const desc = data.teams[0].strDescriptionEN;
  const country = data.teams[0].strCountry;
  const shirt = data.teams[0].strEquipment;
  const keyword = data.teams[0].strKeywords;
  const location = data.teams[0].strLocation;
  const stadium = data.teams[0].strStadium;
  const capacity = data.teams[0].intStadiumCapacity;
  const website = data.teams[0].strWebsite;
  const facebook = data.teams[0].strFacebook;
  const twitter = data.teams[0].strTwitter;
  const youtube = data.teams[0].strYoutube;
  const league = data.teams[0].strLeague;
  const year = data.teams[0].intFormedYear;

  teamEl.innerHTML = team;
  badgeEl.src = badge;
  countryEl.innerHTML = `country : ${country}`;
  locationEl.innerHTML = `location: ${location}`;
  keywordEl.innerHTML = `keyword: ${keyword ? keyword : "null"}`;

  leagueEl.innerHTML = `league: ${league}`;
  container.style.display = "block";
  yearEl.innerHTML = `since :${year}`;
  stadiumEl.innerHTML = stadium;
  capacityEl.innerHTML = `Capacity: ${Number(capacity).toLocaleString()}`;
  shirtEl.src = shirt;
  youtubeEl.href=`https://${youtube}`;
  facebookEl.href=`https://${facebook}`;
  twitterEl.href=`https://${twitter}`;
}
 function displayError(error) {
  const errorText = document.createElement("p");
  errorText.innerHTML = `${error}!`;
  errorText.classList.add("text-danger", "text-center", "mt-2");
  form.appendChild(errorText);
}

