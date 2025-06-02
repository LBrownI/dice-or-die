<!--- src/App.vue --->
<!---
Serves as the foundational layout or "shell" that wraps around all other content and views within the game.
It defines the consistent structure that will be present on every page of the app (common header, navigation links, common footer).
Contains <router-view /> a placeholder where the content of different "/views" will be dynamically rendered based on the current URL in the browser.

Could be a place to include global styles or JavaScript logic that needs to run for the entire application lifecycle (e.g., checking user auth status)

--->
<script setup>
// Import global stores or perform app-wide setup here if needed later on... idk, for now just empty
</script>

<template>
  <div id="app-layout">
    <header class="app-header">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/game">Play Game</router-link>
        <router-link to="/assets">View Assets</router-link>
      </nav>
    </header>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="app-footer">
      <p>&copy; {{ new Date().getFullYear() }} Dice or Die</p>
    </footer>
  </div>
</template>

<style scoped>
#app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f2f5; /* A light, neutral background for the entire app */
}

.app-header {
  background-color: #2c3e50; /* Dark blue-grey */
  padding: 15px 30px;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.app-header nav {
  display: flex;
  justify-content: center; /* Center navigation links */
  gap: 25px;
}

.app-header nav a {
  color: #ecf0f1; /* Light grey for links */
  text-decoration: none;
  font-weight: 500;
  padding: 5px 0;
  border-bottom: 2px solid transparent;
  transition: color 0.3s ease, border-bottom-color 0.3s ease;
}

.app-header nav a:hover {
  color: #ffffff;
}

.app-header nav a.router-link-exact-active {
  color: #ffffff; /* White for active link */
  border-bottom-color: #3498db; /* Blue accent for active link */
}

.main-content {
  flex-grow: 1; /* Allows content to fill available vertical space */
  padding: 20px; /* Add some padding around the views */
  /* The views themselves will handle their internal layout (like centering) */
}

.app-footer {
  text-align: center;
  padding: 12px;
  background-color: #34495e; /* Darker footer */
  color: #bdc3c7; /* Light grey text */
  font-size: 0.85em;
  margin-top: auto; /* Push footer to bottom */
}
</style>
