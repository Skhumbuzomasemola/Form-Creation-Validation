async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const dataContainer = document.getElementById('api-data');
   try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const users = await response.json();

    dataContainer.innerHTML = "<ul>" +
      users.map(user => `<li>${user.name}</li>`).join('') +
      "</ul>";

  } catch (error) {
    // Handle any errors
    dataContainer.textContent = "Error fetching user data.";
    console.error("Fetch error:", error);
  }
}
document.addEventListener('DOMContentLoaded', fetchUserData);
