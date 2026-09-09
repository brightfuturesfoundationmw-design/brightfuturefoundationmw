
document.addEventListener('DOMContentLoaded',function(){
  const header=document.querySelector('header'), menu=document.querySelector('.menu');
  if(menu) menu.addEventListener('click',()=>header.classList.toggle('mobile-open'));
  document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>header.classList.remove('mobile-open')));
  document.querySelectorAll('.amount').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('.amount').forEach(b=>b.classList.remove('selected'));
    btn.classList.add('selected');
    const input=document.querySelector('#donationAmount'); if(input) input.value=btn.dataset.amount;
  }));
  const year=document.querySelector('#year'); if(year) year.textContent=new Date().getFullYear();
});
