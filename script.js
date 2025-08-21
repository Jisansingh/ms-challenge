// Mandatory: change <h1> on load + log the exact message
window.addEventListener('DOMContentLoaded', () => {
  const teamName = 'Team Name'; // <-- change this before submitting
  document.querySelector('h1').textContent = `Welcome, ${teamName}!`;
  console.log("Congrats, you’re closer to the password! 🚀");
});
