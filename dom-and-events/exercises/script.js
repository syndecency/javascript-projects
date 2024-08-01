function init() {
  const missionAbort = document.getElementById("abortMission");
  const button = document.getElementById("liftoffButton");
  const paragraph = document.getElementById("statusReport");

  button.addEventListener("click", (event) => {
    paragraph.innerHTML = "Houston! We have liftoff!";
  });

  missionAbort.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "red";
  });

  missionAbort.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "";
  });

  missionAbort.addEventListener("click", (event) => {
    let response = window.confirm(
      "Are you sure you want to abort this mission?"
    );
    if (response) {
      paragraph.innerHTML = "Mission aborted! Space Shuttle returning home.";
    }
  });
}

window.addEventListener("load", init);
