// web variables
const bar = document.getElementById('bar');
const blurb = document.getElementById('blurb');

// photo paths array
const photoPaths = [
      /* ['tafuta_photos/sa_city.jpg', 'South Africa'],
      ['tafuta_photos/ke_lions.jpg', 'Kenya'],
      ['tafuta_photos/ethiopia.jpg', 'Ethiopia'],
      ['tafuta_photos/ke_giraffes.jpg', 'Kenya'],
      ['tafuta_photos/nairobi.jpg', 'Kenya']
      ['tafuta_photos/ug_elephant_edit.png', 'Uganda'] */
];

// loading the dom
document.addEventListener('DOMContentLoaded', () => {

      /* selecting a random image path
      const randomIndex = Math.floor(Math.random() * photoPaths.length);
      document.body.style.backgroundColor = colors[Math.floor(Math.random() * photoPaths.length)];

      blurb.textContent = photoPaths[randomIndex][1].toString(); s*/
});

// clock
function startTimer() {
      setInterval(() => {
          const now = new Date();

          // Get hours and minutes
          let hours = now.getHours();
          let minutes = now.getMinutes();

          // Add leading zeros
          hours = hours < 10 ? '0' + hours : hours;
          minutes = minutes < 10 ? '0' + minutes : minutes;

          // Format time
          const timeString = `${hours}:${minutes}`;
          
          // Get date components
          const month = now.getMonth() + 1; // Months are zero-indexed
          const day = now.getDate();
          const year = now.getFullYear();

          // Format date
          const dateString = `${month < 10 ? '0' + month : month} / ${day < 10 ? '0' + day : day} / ${year}`;

          // Update the time and date displays
          document.getElementById('time').textContent = timeString;
          document.getElementById('date').textContent = dateString;
      }, 1000);
}

startTimer();