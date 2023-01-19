document.getElementById("language-suggester-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Collect user's answers
  var experienceLevel = document.getElementById("experience-level").value;
  var interests = document.getElementById("interests").value;
  var goals = document.getElementById("goals").value;
  var platforms = document.getElementById("platforms").value;
  var preference = document.getElementById("preference").value;

  // Determine language suggestion
  var language = "";
  if (experienceLevel === "beginner" && interests.includes("web-development")) {
    language = "JavaScript";
  } else if (experienceLevel === "intermediate" && interests.includes("mobile-app-development")) {
    language = "C#";
  } else if (experienceLevel === "advanced" && interests.includes("machine-learning")) {
    language = "Python";
  } else if (preference === "yes") {
    language = "English" }   }
)
