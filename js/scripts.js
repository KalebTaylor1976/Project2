document.getElementById("language-suggester-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Collect user's answers
  const experienceLevel = document.getElementById("experience-level").value;
  const interests = document.getElementById("interests").value;
  const goals = document.getElementById("goals").value;
  const platforms = document.getElementById("platforms").value;
  const preference = document.getElementById("preference").value;

  // Determine language suggestion
  let language = "language-suggester-form";
  if (experienceLevel === "beginner" && interests.includes("web-development")) {
    language = "JavaScript";
  } else if (experienceLevel === "intermediate" && interests.includes("mobile-app-development")) {
    language = "C#";
  } else if (experienceLevel === "advanced" && interests.includes("machine-learning")) {
    language = "Python";
  } else if (preference === "yes") {
    language = "English" 
  }   

  // Do something with the suggested language
  console.log(language);

  // Get the element where you want to display the suggested language
const displayElement = document.getElementById("display-suggested-language");

// Set the text content of the element to the suggested language
document.getElementById("display-suggested-language").style.fontSize = "x-large";
displayElement.textContent = language;


});
