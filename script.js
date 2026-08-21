const menuBtn=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));document.getElementById('year').textContent=new Date().getFullYear();const dialog=document.getElementById('lightbox');const dialogImg=document.getElementById('lightboxImg');document.querySelectorAll('.gallery-item').forEach(btn=>btn.addEventListener('click',()=>{dialogImg.src=btn.dataset.full;dialog.showModal()}));document.getElementById('closeLightbox').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});document.getElementById('enquiryForm').addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim();const training=document.getElementById('training').value;const time=document.getElementById('time').value.trim();const message=document.getElementById('message').value.trim();const subject=encodeURIComponent(`Fighting Fit enquiry - ${training||'Training'}`);const body=encodeURIComponent(`Hi,

My name is ${name}.
I'm interested in: ${training}
Preferred day/time: ${time||'Flexible'}

Message:
${message||'I would like more information about booking a session.'}

Thanks`);window.location.href=`mailto:crossansp33@gmail.com?subject=${subject}&body=${body}`});