// Example: Progress Bar for User Engagement
const progressBar = document.createElement('div');
progressBar.style.width = '0%';
progressBar.style.height = '5px';
progressBar.style.backgroundColor = '#00C9A7';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = `${scrollPercentage}%`;
});