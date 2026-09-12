const reveals=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.12});
reveals.forEach(el=>observer.observe(el));

document.querySelectorAll('.work-card').forEach(card=>{
  const video=card.querySelector('video');
  const button=card.querySelector('.play');
  button.addEventListener('click',()=>{
    if(video.paused){ video.play(); button.textContent='Ⅱ'; }
    else { video.pause(); button.textContent='▶'; }
  });
  video.addEventListener('ended',()=>button.textContent='▶');
});

const videos=document.querySelectorAll('video');
const videoObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    const video=entry.target;
    if(video.closest('.work-card')){
      if(entry.isIntersecting) video.play().catch(()=>{});
      else video.pause();
    }
  });
},{threshold:.45});
videos.forEach(video=>videoObserver.observe(video));
