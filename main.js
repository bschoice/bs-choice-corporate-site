const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('#global-nav');
function setMenu(open){menuButton.setAttribute('aria-expanded',String(open));menuButton.querySelector('.sr-only').textContent=open?'メニューを閉じる':'メニューを開く';nav.classList.toggle('open',open)}
menuButton.addEventListener('click',()=>setMenu(menuButton.getAttribute('aria-expanded')!=='true'));
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){setMenu(false);menuButton.focus()}});
document.addEventListener('click',event=>{if(!event.target.closest('.header'))setMenu(false)});
matchMedia('(min-width:1181px)').addEventListener('change',()=>setMenu(false));
