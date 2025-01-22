document.getElementById('language-select').addEventListener('change', function() {
  const selectedLanguage = this.value;
  window.location.href = `/?lang=${selectedLanguage}`;
});

document.addEventListener('DOMContentLoaded', () => {
  const MAX_SNOWFLAKES = 100;
  setInterval(() => createSnowflakes(5, MAX_SNOWFLAKES), 100);
});

function createSnowflakes(numFlakes, maxFlakes) {
  const existingSnowflakes = document.querySelectorAll('.snowflake').length;

  if (existingSnowflakes >= maxFlakes) {
    return;
  }

  for (let i = 0; i < numFlakes; i++) {
    if (existingSnowflakes + i >= maxFlakes) {
      break;
    }

    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const size = Math.random() * 5 + 5 + 'px';
    const position = Math.random() * 100 + 'vw';
    const duration = Math.random() * 5 + 5 + 's';
    const delay = Math.random() * 5 + 's';

    snowflake.style.width = size;
    snowflake.style.height = size;
    snowflake.style.left = position;
    snowflake.style.animationDuration = duration;
    snowflake.style.animationDelay = delay;

    document.body.appendChild(snowflake);

    snowflake.addEventListener('animationend', () => {
      snowflake.remove();
    });
  }
}

function updateProgressBar(progressFill, progressText, targetPercentage) {
  let currentPercentage = 0;
  
  const interval = setInterval(() => {
    if (currentPercentage < targetPercentage) {
      currentPercentage++;
      progressFill.style.width = currentPercentage + '%';
      progressText.textContent = 'Progression: ' + currentPercentage + '%';
      
      if (currentPercentage <= 25) {
        progressFill.style.backgroundColor = '#e74c3c';
      } else if (currentPercentage <= 50) {
        progressFill.style.backgroundColor = '#f39c12';
      } else if (currentPercentage <= 75) {
        progressFill.style.backgroundColor = '#f1c40f';
      } else {
        progressFill.style.backgroundColor = '#2ecc71';
      }
    } else {
      clearInterval(interval);
    }
  }, 20);
}

setTimeout(() => {
  // NEX
  const progressFill1 = document.getElementById('progressFill1');
  const progressText1 = document.getElementById('progressText1');
  updateProgressBar(progressFill1, progressText1, 2);

  // NNAS
  const progressFill2 = document.getElementById('progressFill2');
  const progressText2 = document.getElementById('progressText2');
  updateProgressBar(progressFill2, progressText2, 5);

  // Animal Crossing New Leaf
  const progressFill3 = document.getElementById('progressFill3');
  const progressText3 = document.getElementById('progressText3');
  updateProgressBar(progressFill3, progressText3, 15);

  // Kirby Clash Deluxe
  const progressFill4 = document.getElementById('progressFill4');
  const progressText4 = document.getElementById('progressText4');
  updateProgressBar(progressFill4, progressText4, 0);

  // Angry Birds Star-Wars
  const progressFill5 = document.getElementById('progressFill5');
  const progressText5 = document.getElementById('progressText5');
  updateProgressBar(progressFill5, progressText5, 0);

  // Website
  const progressFill6 = document.getElementById('progressFill6');
  const progressText6 = document.getElementById('progressText6');
  updateProgressBar(progressFill6, progressText6, 25);
}, 1000);