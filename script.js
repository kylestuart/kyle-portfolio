function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  async function updateTemperature() {
    try {
      const response = await fetch('https://wttr.in/New+York?format=%t');
      const temp = await response.text();
      document.getElementById('temp').textContent = temp.trim();
    } catch (error) {
      document.getElementById('temp').textContent = 'N/A';
    }
  }
  
  updateTime();
  updateTemperature();
  setInterval(updateTime, 1000);
  setInterval(updateTemperature, 600000); // Update temperature every 10 minutes
  