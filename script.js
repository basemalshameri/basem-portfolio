const defaultContent = {
  brandNameAr:'باسم عبدالغفور', brandNameEn:'Basem Alshameri',
  eyebrowAr:'مدير عمليات | مشتريات ولوجستيات | تجارة إلكترونية', eyebrowEn:'Operations Manager | Purchasing & Logistics | E-commerce',
  heroNameAr:'باسم عبدالغفور عبدالقوي أحمد', heroNameEn:'Basem Abdulghafoor Abdulqawi Ahmed',
  heroTextAr:'مدير عمليات بخبرة تتجاوز 15 عاماً في إدارة العمليات التشغيلية، المشتريات الدولية، الخدمات اللوجستية، سلاسل الإمداد، إدارة البيانات، والتجارة الإلكترونية.',
  heroTextEn:'Operations Manager with 15+ years of experience across operational management, international purchasing, logistics, supply chain, data management, and e-commerce.',
  locationAr:'الدمام، المملكة العربية السعودية', locationEn:'Dammam, Saudi Arabia',
  profileTextAr:'جاهز للتعاون في تطوير العمليات، التجارة الإلكترونية، المشتريات، واللوجستيات.',
  profileTextEn:'Available for collaboration in operations, e-commerce, purchasing, and logistics.',
  aboutAr:'أمتلك خبرة قوية في تحسين العمليات التشغيلية، إدارة الموردين، تنسيق الشحن والاستيراد، تطوير الاستراتيجيات الرقمية، وتحليل مؤشرات الأداء. أركز على تحويل الأهداف التشغيلية إلى إجراءات عملية قابلة للقياس والتحسين.',
  aboutEn:'I specialize in optimizing operational processes, vendor management, shipping and import coordination, digital strategy development, and performance indicator analysis. My focus is converting operational goals into measurable and improvable execution plans.',
  email:'basemalshameri6@gmail.com', linkedin:'https://linkedin.com/in/basem-al-shameri-b1a848395', cvAr:'assets/docs/cv-ar.pdf', cvEn:'assets/docs/cv-en.pdf'
};
const defaultCertificates = [
  ['cert-01.jpg','academic','شهادة التخرج - جامعة ذمار','Graduation Certificate - Thamar University'],
  ['cert-02.jpg','academic','Graduation Certificate - Thamar University','Graduation Certificate - Thamar University'],
  ['cert-04.jpg','academic','دبلوم التنمية البشرية - أكاديمية العلوم','Human Resources Development Diploma - Sciences Academy'],
  ['cert-05.jpg','professional','أساسيات التسويق الرقمي - Google','Digital Marketing Fundamentals - Google'],
  ['cert-06.jpg','professional','Designing the Future of Work - UNSW Sydney','Designing the Future of Work - UNSW Sydney'],
  ['cert-07.jpg','professional','Preparing to Manage Human Resources','Preparing to Manage Human Resources'],
  ['cert-08.jpg','professional','Employee Feedback Survey with TypeForm','Employee Feedback Survey with TypeForm'],
  ['cert-09.jpg','professional','Develop a Company Website with Wix','Develop a Company Website with Wix'],
  ['cert-10.jpg','professional','Introduction to Microsoft Excel','Introduction to Microsoft Excel'],
  ['cert-11.jpg','professional','Marketing Analytics Dashboard in Data Studio','Marketing Analytics Dashboard in Data Studio'],
  ['cert-12.jpg','professional','Project Charter with Google Docs','Project Charter with Google Docs'],
  ['cert-13.jpg','professional','Business Analysis Using Spreadsheets','Business Analysis Using Spreadsheets'],
  ['cert-14.jpg','professional','Construct Stock Market Indices','Construct Stock Market Indices'],
  ['cert-15.jpg','experience','شهادة خبرة - علم الدواء','Experience Certificate - Alam Al-Dawa'],
  ['cert-16.jpg','experience','شهادة خبرة - تلد للتجارة','Experience Certificate - TELD Trading'],
  ['cert-17.jpg','professional','Accounting for Non-Accountants','Accounting for Non-Accountants'],
  ['cert-18.jpg','professional','Financial Feasibility Study for Business','Financial Feasibility Study for Business'],
  ['cert-19.jpg','professional','Programming VBA using Excel','Programming VBA using Excel'],
  ['cert-20.jpg','professional','Operations Management','Operations Management'],
  ['cert-21.jpg','professional','Project Management Specialization','Project Management Specialization'],
  ['cert-22.jpg','professional','Project Management Foundation','Project Management Foundation'],
  ['cert-23.jpg','professional','Project Planning','Project Planning'],
  ['cert-24.jpg','professional','Introduction to Python Programming','Introduction to Python Programming'],
  ['cert-26.jpg','professional','The Project: From Execution to Closure','The Project: From Execution to Closure'],
  ['cert-37.jpg','professional','Selling Smarter','Selling Smarter'],
  ['cert-38.jpg','professional','Introduction in Artificial Intelligence','Introduction in Artificial Intelligence'],
  ['cert-49.jpg','professional','إدارة المشتريات - منصة معارف','Purchasing Management - M3aarf'],
  ['cert-51.jpg','professional','برنامج المشتريات واللوجستيات - DisasterReady','Purchasing & Logistics Program - DisasterReady'],
  ['cert-52.jpg','professional','أساسيات المهارات القيادية','Leadership Skills Essentials'],
  ['cert-54.jpg','professional','Effective Communication in the Workplace','Effective Communication in the Workplace']
];
for(let i=1;i<=60;i++){const name=`cert-${String(i).padStart(2,'0')}.jpg`;if(!defaultCertificates.some(c=>c[0]===name)){defaultCertificates.push([name,'professional',`شهادة مهنية رقم ${i}`,`Professional Certificate ${i}`]);}}
function readJSON(key,fallback){try{return JSON.parse(localStorage.getItem(key))||fallback}catch{return fallback}}
const savedContent=readJSON('portfolioContent',{});
if(Object.values(savedContent).some(v=>String(v).includes(['موقع','شخصي','احترافي'].join(' '))||String(v).includes(['Professional','Personal','Website'].join(' ')))){localStorage.removeItem('portfolioContent');}
const siteContent={...defaultContent,...readJSON('portfolioContent',{})};
const sectionVisibility={about:true,experience:true,education:true,certificates:true,contact:true,...readJSON('portfolioVisibility',{})};
const customSections=readJSON('portfolioSections',[]);
let certificates=readJSON('portfolioCertificates',defaultCertificates);
let currentLang='ar', activeFilter='all', currentIndex=0;
const grid=document.getElementById('certGrid'), search=document.getElementById('certSearch');
function t(ar,en){return currentLang==='ar'?ar:en}

function applySectionVisibility(){
  Object.entries(sectionVisibility).forEach(([id,visible])=>{
    const section=document.getElementById(id);
    if(section) section.style.display=visible===false?'none':'';
    document.querySelectorAll(`.nav a[href="#${id}"]`).forEach(a=>a.style.display=visible===false?'none':'');
  });
}
function renderCustomSections(){
  document.querySelectorAll('.custom-added-section').forEach(el=>el.remove());
  const contact=document.getElementById('contact');
  if(!contact) return;
  customSections.filter(s=>s && s.visible!==false).forEach((s,i)=>{
    const sec=document.createElement('section');
    sec.className='section reveal custom-added-section visible';
    sec.innerHTML=`<div class="section-heading"><span>${String(i+6).padStart(2,'0')}</span><h2 data-ar="${escapeAttr(s.titleAr||'قسم إضافي')}" data-en="${escapeAttr(s.titleEn||'Extra Section')}">${t(s.titleAr||'قسم إضافي',s.titleEn||'Extra Section')}</h2></div><div class="info-card"><p data-ar="${escapeAttr(s.bodyAr||'')}" data-en="${escapeAttr(s.bodyEn||'')}">${t(s.bodyAr||'',s.bodyEn||'')}</p></div>`;
    contact.parentNode.insertBefore(sec,contact);
  });
}
function escapeAttr(str=''){
  return String(str).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
}
function setText(el, ar, en){if(!el)return;el.dataset.ar=ar;el.dataset.en=en;el.textContent=t(ar,en)}
function applyEditableContent(){
  applySectionVisibility();
  renderCustomSections();
  setText(document.querySelector('.brand strong'),siteContent.brandNameAr,siteContent.brandNameEn);
  setText(document.querySelector('.eyebrow'),siteContent.eyebrowAr,siteContent.eyebrowEn);
  setText(document.querySelector('.hero h1'),siteContent.heroNameAr,siteContent.heroNameEn);
  setText(document.querySelector('.hero-text'),siteContent.heroTextAr,siteContent.heroTextEn);
  setText(document.querySelector('.profile-card h2'),siteContent.locationAr,siteContent.locationEn);
  setText(document.querySelector('.contact-card span'),siteContent.locationAr,siteContent.locationEn);
  setText(document.querySelector('.profile-card p'),siteContent.profileTextAr,siteContent.profileTextEn);
  setText(document.querySelector('#about .about-grid > p'),siteContent.aboutAr,siteContent.aboutEn);
  const email=document.querySelector('.contact-card a[href^="mailto:"]'); if(email){email.textContent=siteContent.email; email.href=`mailto:${siteContent.email}`;}
  const linkedin=[...document.querySelectorAll('.contact-card a')].find(a=>a.textContent.trim()==='LinkedIn'); if(linkedin) linkedin.href=siteContent.linkedin;
  const cvAr=document.querySelector('[data-cv="ar"]'); if(cvAr) cvAr.href=siteContent.cvAr||'assets/docs/cv-ar.pdf';
  const cvEn=document.querySelector('[data-cv="en"]'); if(cvEn) cvEn.href=siteContent.cvEn||'assets/docs/cv-en.pdf';
}
function applyLanguage(){document.documentElement.lang=currentLang;document.documentElement.dir=currentLang==='ar'?'rtl':'ltr';document.getElementById('langToggle').textContent=currentLang==='ar'?'English':'العربية';applyEditableContent();document.querySelectorAll('[data-ar]').forEach(el=>{el.textContent=t(el.dataset.ar,el.dataset.en)});document.querySelectorAll('[data-ar-placeholder]').forEach(el=>{el.placeholder=t(el.dataset.arPlaceholder,el.dataset.enPlaceholder)});renderCertificates()}
function filtered(){const q=(search.value||'').toLowerCase().trim();return certificates.filter(c=>(activeFilter==='all'||c[1]===activeFilter)&&(`${c[2]} ${c[3]}`.toLowerCase().includes(q)))}
function renderCertificates(){const items=filtered();grid.innerHTML='';items.forEach((c)=>{const originalIndex=certificates.indexOf(c);const card=document.createElement('article');card.className='cert-card';card.tabIndex=0;card.innerHTML=`<div class="cert-thumb"><img src="assets/certificates/${c[0]}" alt="${t(c[2],c[3])}" loading="lazy" onerror="this.closest('.cert-card').style.display='none'"></div><div class="cert-meta"><small>${t(categoryAr(c[1]),categoryEn(c[1]))}</small><h3>${t(c[2],c[3])}</h3></div>`;card.addEventListener('click',()=>openLightbox(originalIndex));card.addEventListener('keydown',e=>{if(e.key==='Enter')openLightbox(originalIndex)});grid.appendChild(card);});}
function categoryAr(c){return c==='academic'?'أكاديمية':c==='experience'?'خبرة':'مهنية'}function categoryEn(c){return c==='academic'?'Academic':c==='experience'?'Experience':'Professional'}
function openLightbox(i){currentIndex=i;const c=certificates[i];document.getElementById('lightboxImg').src=`assets/certificates/${c[0]}`;document.getElementById('lightboxCaption').textContent=t(c[2],c[3]);document.getElementById('lightbox').classList.add('open');document.getElementById('lightbox').setAttribute('aria-hidden','false')}
function closeLightbox(){document.getElementById('lightbox').classList.remove('open');document.getElementById('lightbox').setAttribute('aria-hidden','true')}
function move(step){currentIndex=(currentIndex+step+certificates.length)%certificates.length;openLightbox(currentIndex)}
document.getElementById('langToggle').addEventListener('click',()=>{currentLang=currentLang==='ar'?'en':'ar';applyLanguage()});
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');activeFilter=btn.dataset.filter;renderCertificates()}));
search.addEventListener('input',renderCertificates);document.getElementById('closeLightbox').addEventListener('click',closeLightbox);document.getElementById('prevCert').addEventListener('click',()=>move(-1));document.getElementById('nextCert').addEventListener('click',()=>move(1));document.getElementById('lightbox').addEventListener('click',e=>{if(e.target.id==='lightbox')closeLightbox()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();if(document.getElementById('lightbox').classList.contains('open')&&e.key==='ArrowRight')move(document.documentElement.dir==='rtl'?-1:1);if(document.getElementById('lightbox').classList.contains('open')&&e.key==='ArrowLeft')move(document.documentElement.dir==='rtl'?1:-1)});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));applyLanguage();
