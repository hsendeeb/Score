
document.addEventListener("DOMContentLoaded", function () {
  const formEvent=document.getElementById("formEvent");
  const btnEvent = document.getElementById("btnEvent");
  const containerEvent=document.getElementById("containerEvent");
  const awayBadgeEl=document.getElementById("awaybadge");
  const homeBadgeEl=document.getElementById("homebadge");
    const homeTeamEl=document.getElementById("awayTeam");
    const timeEl=document.getElementById("time");
    const dateEl=document.getElementById("date");
    
  const awayTeamEl=document.getElementById("homeTeam");
  function displayError(error) {
  const errorText = document.createElement("p");
  errorText.innerHTML = `${error}!`;
  errorText.classList.add("text-danger", "text-center", "mt-2");
  formEvent.appendChild(errorText);
}
  if (btnEvent) {
    btnEvent.addEventListener("click", async function (e) {
      e.preventDefault();
      const inputEvent = document.getElementById("inputEvent").value;
      if (inputEvent) {
        try {
          const response = await fetch(
            `https://www.thesportsdb.com/api/v1/json/123/searchevents.php?e=${inputEvent}`
          );
          const data = await response.json();
          console.log(data);
          displayEvent(data);
        } catch (error) {
          displayError(error);
        }
      } else {
        displayError("please enter an event");
      }
    });
  }
  function displayEvent(data){
    const homeTeam=data.event[0].strHomeTeam;
    const awayTeam=data.event[0].strAwayTeam;
    const homeBadge=data.event[0].strAwayTeamBadge;
    const awayBadge=data.event[0].strHomeTeamBadge;
    const time=data.event[0].strTime;
    const date=data.event[0].dateEvent;

    homeBadgeEl.src=homeBadge;
    awayBadgeEl.src=awayBadge;
    homeTeamEl.innerHTML=homeTeam;
    awayTeamEl.innerHTML=awayTeam;
    timeEl.innerHTML=time;
    dateEl.innerHTML=date;
    containerEvent.style.display="block";

    
    
}

});

