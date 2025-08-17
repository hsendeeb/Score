const btn = document.getElementById("btn");
const container = document.getElementById("container");
const card = document.createElement("div");
card.classList.add("card", "bg-white", "bg-opacity-50");
const input = document.getElementById("input");
btn.addEventListener("click", async (event) => {
  event.preventDefault();
  const team = input.value;

    try {
      const response = await fetch(
        ` https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=${team}`
      );
      const data=await response.json();
      console.log(data);
      if(!response.ok){
        displayError("team not valid");
      } else {
        displayData(data);
      }
    } catch (error) {
        displayError(error);
    }

    

 
});
function displayError(error){
    const errorText=document.createElement("p");
     errorText.innerHTML=error;
     errorText.classList.add("alert","alert-danger");
     card.appendChild(errorText);
}
async function displayData(data){
        const card = document.createElement("div");
card.classList.add("card", "bg-white", "bg-opacity-50");
}
