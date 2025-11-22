// small helpers: year update & mobile nav toggle
document.addEventListener('DOMContentLoaded', ()=>{
const y = new Date().getFullYear();
['year','year2','year3','year4'].forEach(id=>{const el=document.getElementById(id); if(el) el.textContent = y});


const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if(toggle && navList){
toggle.addEventListener('click', ()=>{
navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});
}
});