
const defaultCertificates = [
  {
    "name": "بكالوريوس لغة إنجليزية",
    "issuer": "جامعة ذمار",
    "date": "2009",
    "category": "المؤهلات الأكاديمية"
  },
  {
    "name": "دبلوم التنمية البشرية",
    "issuer": "أكاديمية العلوم",
    "date": "2013",
    "category": "الإدارة والتطوير"
  },
  {
    "name": "أساسيات التسويق الرقمي",
    "issuer": "Google",
    "date": "2022",
    "category": "التسويق الرقمي"
  },
  {
    "name": "Designing the Future of Work",
    "issuer": "UNSW Sydney / Coursera",
    "date": "2022",
    "category": "الإدارة والعمل"
  },
  {
    "name": "Preparing to Manage Human Resources",
    "issuer": "University of Minnesota / Coursera",
    "date": "2022",
    "category": "الموارد البشرية"
  },
  {
    "name": "Create an Employee Feedback Survey with TypeForm",
    "issuer": "Coursera Project Network",
    "date": "2022",
    "category": "الموارد البشرية"
  },
  {
    "name": "Develop a Company Website with Wix",
    "issuer": "Coursera Project Network",
    "date": "2022",
    "category": "المواقع الرقمية"
  },
  {
    "name": "Introduction to Microsoft Excel",
    "issuer": "Coursera Project Network",
    "date": "2022",
    "category": "تحليل البيانات"
  },
  {
    "name": "Create a Custom Marketing Analytics Dashboard in Data Studio",
    "issuer": "Coursera Project Network",
    "date": "2022",
    "category": "تحليل البيانات"
  },
  {
    "name": "Create a Project Charter with Google Docs",
    "issuer": "Coursera Project Network",
    "date": "2022",
    "category": "إدارة المشاريع"
  },
  {
    "name": "Introduction to Business Analysis Using Spreadsheets: Basics",
    "issuer": "Coursera Project Network",
    "date": "2022",
    "category": "تحليل الأعمال"
  },
  {
    "name": "Construct Stock Market Indices",
    "issuer": "Coursera Project Network",
    "date": "2022",
    "category": "الأعمال والمالية"
  },
  {
    "name": "International Commercial Correspondence",
    "issuer": "عالم الدواء للتجارة والاستثمار",
    "date": "2009",
    "category": "الخبرة العملية"
  },
  {
    "name": "التوزيع والتحصيل",
    "issuer": "شركة تلد للتجارة العامة",
    "date": "2012",
    "category": "الخبرة العملية"
  },
  {
    "name": "Accounting for Non-Accountants",
    "issuer": "إدراك",
    "date": "2022",
    "category": "المالية"
  },
  {
    "name": "How to Do a Financial Feasibility Study for a Business",
    "issuer": "إدراك",
    "date": "2022",
    "category": "المالية"
  },
  {
    "name": "Programming VBA using Excel",
    "issuer": "إدراك",
    "date": "2022",
    "category": "Excel والبرمجة"
  },
  {
    "name": "Operations Management",
    "issuer": "إدراك",
    "date": "2023",
    "category": "إدارة العمليات"
  },
  {
    "name": "Project Management",
    "issuer": "إدراك",
    "date": "2023",
    "category": "إدارة المشاريع"
  },
  {
    "name": "Project Management Foundation",
    "issuer": "إدراك",
    "date": "2023",
    "category": "إدارة المشاريع"
  },
  {
    "name": "Project Planning",
    "issuer": "إدراك",
    "date": "2023",
    "category": "إدارة المشاريع"
  },
  {
    "name": "The Project: From Execution to Closure",
    "issuer": "إدراك",
    "date": "2023",
    "category": "إدارة المشاريع"
  },
  {
    "name": "Introduction to Python Programming",
    "issuer": "إدراك",
    "date": "2022",
    "category": "البرمجة"
  },
  {
    "name": "Safe Investments During An Economic Crisis",
    "issuer": "إدراك",
    "date": "2023",
    "category": "الأعمال والمالية"
  },
  {
    "name": "إدارة المشاريع",
    "issuer": "إدراك",
    "date": "2023",
    "category": "إدارة المشاريع"
  },
  {
    "name": "أساسيات المشروع",
    "issuer": "إدراك",
    "date": "2023",
    "category": "إدارة المشاريع"
  },
  {
    "name": "إدارة العمليات",
    "issuer": "إدراك",
    "date": "2023",
    "category": "إدارة العمليات"
  },
  {
    "name": "الاستثمار الآمن في الأزمات الاقتصادية",
    "issuer": "إدراك",
    "date": "2023",
    "category": "الأعمال والمالية"
  },
  {
    "name": "المشروع: من التنفيذ إلى الإغلاق",
    "issuer": "إدراك",
    "date": "2023",
    "category": "إدارة المشاريع"
  },
  {
    "name": "البرمجة باستخدام Excel VBA",
    "issuer": "إدراك",
    "date": "2022",
    "category": "Excel والبرمجة"
  },
  {
    "name": "تخطيط المشروع",
    "issuer": "إدراك",
    "date": "2023",
    "category": "إدارة المشاريع"
  },
  {
    "name": "المحاسبة لغير المحاسبين",
    "issuer": "إدراك",
    "date": "2022",
    "category": "المالية"
  },
  {
    "name": "كيفية عمل دراسة الجدوى المالية للمشروع",
    "issuer": "إدراك",
    "date": "2022",
    "category": "المالية"
  },
  {
    "name": "مقدمة إلى البرمجة باستخدام لغة بايثون",
    "issuer": "إدراك",
    "date": "2022",
    "category": "البرمجة"
  },
  {
    "name": "Selling Smarter",
    "issuer": "إدراك",
    "date": "2024",
    "category": "المبيعات"
  },
  {
    "name": "Introduction in Artificial Intelligence",
    "issuer": "إدراك",
    "date": "2026",
    "category": "الذكاء الاصطناعي"
  },
  {
    "name": "مقدمة إلى الذكاء الاصطناعي",
    "issuer": "إدراك",
    "date": "2026",
    "category": "الذكاء الاصطناعي"
  },
  {
    "name": "البيع بذكاء",
    "issuer": "إدراك",
    "date": "2024",
    "category": "المبيعات"
  },
  {
    "name": "مهارات النجاح",
    "issuer": "منصة تدريبية",
    "date": "2025",
    "category": "التطوير المهني"
  },
  {
    "name": "استخدام لينكدإن للوصول للفرص المهنية",
    "issuer": "منصة تدريبية",
    "date": "2025",
    "category": "التطوير المهني"
  },
  {
    "name": "فهم سوق العمل",
    "issuer": "منصة تدريبية",
    "date": "2025",
    "category": "التطوير المهني"
  },
  {
    "name": "المقابلة الشخصية",
    "issuer": "منصة تدريبية",
    "date": "2025",
    "category": "التطوير المهني"
  },
  {
    "name": "السيرة الذاتية",
    "issuer": "منصة تدريبية",
    "date": "2025",
    "category": "التطوير المهني"
  },
  {
    "name": "التخطيط لبناء مسار مهني ناجح",
    "issuer": "منصة تدريبية",
    "date": "2025",
    "category": "التطوير المهني"
  },
  {
    "name": "البحث واكتشاف الفرص",
    "issuer": "منصة تدريبية",
    "date": "2025",
    "category": "التطوير المهني"
  },
  {
    "name": "الإعداد المهني",
    "issuer": "منصة تدريبية",
    "date": "2025",
    "category": "التطوير المهني"
  },
  {
    "name": "إدارة المشتريات",
    "issuer": "منصة معارف",
    "date": "2024",
    "category": "المشتريات"
  },
  {
    "name": "برنامج المشتريات واللوجستيات",
    "issuer": "DisasterReady",
    "date": "2024",
    "category": "المشتريات واللوجستيات"
  },
  {
    "name": "أساسيات المهارات القيادية",
    "issuer": "DisasterReady",
    "date": "2025",
    "category": "القيادة"
  },
  {
    "name": "أساسيات البحث عن منح",
    "issuer": "DisasterReady",
    "date": "2025",
    "category": "التطوير المهني"
  },
  {
    "name": "Effective Communication in the Workplace",
    "issuer": "OpenLearn",
    "date": "2025",
    "category": "الاتصال"
  },
  {
    "name": "Corporate Governance Essentials: From Theory to Practice",
    "issuer": "OpenLearn Create",
    "date": "2025",
    "category": "الحوكمة"
  },
  {
    "name": "المهارات الضرورية في سوق العمل",
    "issuer": "منصة تدريبية",
    "date": "2025",
    "category": "التطوير المهني"
  },
  {
    "name": "التخطيط الإستراتيجي",
    "issuer": "أكاديمية العلوم",
    "date": "2013",
    "category": "الإدارة والتطوير"
  },
  {
    "name": "إدارة الوقت",
    "issuer": "أكاديمية العلوم",
    "date": "2013",
    "category": "الإدارة والتطوير"
  },
  {
    "name": "فنون التعامل",
    "issuer": "أكاديمية العلوم",
    "date": "2013",
    "category": "الإدارة والتطوير"
  },
  {
    "name": "إدارة الاجتماعات",
    "issuer": "أكاديمية العلوم",
    "date": "2013",
    "category": "الإدارة والتطوير"
  },
  {
    "name": "طرق التدريس",
    "issuer": "أكاديمية العلوم",
    "date": "2013",
    "category": "التعليم والتدريب"
  },
  {
    "name": "القيادة وصناعة القائد",
    "issuer": "أكاديمية العلوم",
    "date": "2013",
    "category": "القيادة"
  },
  {
    "name": "فن الإلقاء والخطابة",
    "issuer": "أكاديمية العلوم",
    "date": "2013",
    "category": "الاتصال"
  },
  {
    "name": "مهارات التواصل والتأثير",
    "issuer": "أكاديمية العلوم",
    "date": "2013",
    "category": "الاتصال"
  }
];
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn) menuBtn.onclick = () => nav.classList.toggle('open');

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('themeToggle').onclick = () => document.body.classList.toggle('light');

let currentLang = 'ar';
document.getElementById('langToggle').onclick = () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('langToggle').textContent = currentLang === 'ar' ? 'EN' : 'AR';
  document.querySelectorAll('[data-ar][data-en]').forEach(el => el.textContent = el.dataset[currentLang]);
};

const reveal = () => {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 60) el.classList.add('visible');
  });
};
window.addEventListener('scroll', reveal);
reveal();

function getPortfolioData(){
  try { return JSON.parse(localStorage.getItem('basemPortfolioData') || '{}'); }
  catch(e){ return {}; }
}

function escapeHtml(str){
  return String(str).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
}

function renderCustomSections(sections){
  const wrap = document.getElementById('customSections');
  if (!wrap) return;
  wrap.innerHTML = (sections || []).filter(s => s && s.title).map((s, i) => `
    <section class="section custom-section reveal visible" id="custom-${i+1}">
      <div class="section-title"><p class="eyebrow">${escapeHtml(s.label || 'Custom Section')}</p><h2>${escapeHtml(s.title)}</h2></div>
      <div class="panel"><p>${escapeHtml(s.content || '').replace(/\n/g, '<br>')}</p></div>
    </section>
  `).join('');
}

function renderExperiences(experiences){
  const wrap = document.querySelector('#experience .timeline');
  if (!wrap || !Array.isArray(experiences) || experiences.length === 0) return;
  wrap.innerHTML = experiences.map(x => `
    <article><span>${escapeHtml(x.period || '')}</span><h3>${escapeHtml(x.title || '')}</h3><p>${escapeHtml(x.description || '').replace(/\n/g,'<br>')}</p></article>
  `).join('');
}

function renderSkills(skills){
  const wrap = document.querySelector('#skills .skills-grid');
  if (!wrap || !Array.isArray(skills) || skills.length === 0) return;
  wrap.innerHTML = skills.map(skill => `<span>${escapeHtml(skill)}</span>`).join('');
}

function renderCards(selector, items){
  const wrap = document.querySelector(selector);
  if (!wrap || !Array.isArray(items) || items.length === 0) return;
  wrap.innerHTML = items.map(item => `
    <article><h3>${escapeHtml(item.title || '')}</h3><p>${escapeHtml(item.description || '').replace(/\n/g,'<br>')}</p></article>
  `).join('');
}



function renderCertificates(data){
  const wrap = document.getElementById('certificatesGrid');
  if (!wrap) return;
  const certificates = Array.isArray(data.certificates) && data.certificates.length ? data.certificates : defaultCertificates;
  const title = document.getElementById('certificatesTitle');
  if (title) title.textContent = (data.certificatesTitle || certificates.length + ' شهادة احترافية');
  const intro = document.getElementById('certificatesIntro');
  if (intro && data.certificatesIntro) intro.textContent = data.certificatesIntro;
  const btn = document.getElementById('certDownloadBtn');
  if (btn) {
    btn.href = data.certificatesFile || 'assets/certificates/Basem_Certificates_61.pdf';
    btn.textContent = data.certificatesButton || 'تحميل الشهادات';
  }
  renderCertificateFilters(certificates);
  displayCertificates(certificates, 'all');
}


function getCertificateGroup(category){
  const cat = String(category || '').trim();
  if (!cat) return 'مهنية';
  if (['أكاديمية','اكاديمية','الشهادات الأكاديمية','المؤهلات الأكاديمية'].includes(cat)) return 'أكاديمية';
  if (['خبرات','خبرة','شهادات الخبرة','الخبرة العملية'].includes(cat)) return 'خبرات';
  if (cat.includes('أكاديم') || cat.includes('اكاديم') || cat.includes('مؤهل') || cat.includes('بكالوريوس') || cat.includes('دبلوم')) return 'أكاديمية';
  if (cat.includes('خبرة') || cat.includes('الخبرة')) return 'خبرات';
  return 'مهنية';
}

function displayCertificates(certificates, selectedGroup){
  const wrap = document.getElementById('certificatesGrid');
  if (!wrap) return;
  const filtered = selectedGroup === 'all' ? certificates : certificates.filter(c => getCertificateGroup(c.category) === selectedGroup);
  wrap.innerHTML = filtered.map((c, i) => {
    const group = getCertificateGroup(c.category);
    return `
    <article class="certificate-card" data-group="${escapeHtml(group)}">
      <span class="cert-num">${String(i + 1).padStart(2,'0')}</span>
      <h3>${escapeHtml(c.name || '')}</h3>
      <p>${escapeHtml(c.issuer || '')}</p>
      <small>${escapeHtml(group)}${c.category ? ' • ' + escapeHtml(c.category) : ''}${c.date ? ' • ' + escapeHtml(c.date) : ''}</small>
    </article>
  `}).join('') || '<p class="empty-note">لا توجد شهادات في هذا التصنيف حالياً.</p>';
}

function renderCertificateFilters(certificates){
  const filters = document.getElementById('certificateFilters');
  if (!filters) return;
  const buttons = [
    {key:'all', label:'الكل', count:certificates.length},
    {key:'أكاديمية', label:'أكاديمية', count:certificates.filter(c => getCertificateGroup(c.category) === 'أكاديمية').length},
    {key:'مهنية', label:'مهنية', count:certificates.filter(c => getCertificateGroup(c.category) === 'مهنية').length},
    {key:'خبرات', label:'خبرات', count:certificates.filter(c => getCertificateGroup(c.category) === 'خبرات').length}
  ];
  filters.innerHTML = buttons.map((b, index) => `<button class="filter-btn ${index === 0 ? 'active' : ''}" data-group="${escapeHtml(b.key)}">${escapeHtml(b.label)} <span>${b.count}</span></button>`).join('');
  filters.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      displayCertificates(certificates, btn.dataset.group);
    });
  });
}

function normalizeUrl(value){
  const v = String(value || '').trim();
  if (!v) return '#';
  if (/^(https?:|mailto:|tel:|whatsapp:)/i.test(v)) return v;
  if (/^[+0-9 ()-]+$/.test(v)) return 'tel:' + v.replace(/[^+0-9]/g, '');
  if (v.includes('@') && !v.includes(' ')) return 'mailto:' + v;
  if (v.includes('.')) return 'https://' + v.replace(/^www\./i, 'www.');
  return v;
}

function renderContactFields(data){
  const wrap = document.getElementById('contactFields');
  if (!wrap) return;
  const fallback = [
    {label:'الموقع', value:'الدمام، المملكة العربية السعودية', link:''},
    {label:'الجوال', value:'+966504319217', link:'tel:+966504319217'},
    {label:'البريد', value:data.email || 'basemalshameri6@gmail.com', link:'mailto:' + (data.email || 'basemalshameri6@gmail.com')},
    {label:'LinkedIn', value:'www.linkedin.com/in/basem-al-shameri-b1a848395', link:data.linkedin || 'https://www.linkedin.com/in/basem-al-shameri-b1a848395'}
  ];
  const fields = Array.isArray(data.contactFields) && data.contactFields.length ? data.contactFields : fallback;
  wrap.innerHTML = fields.filter(f => f && (f.label || f.value)).map(f => {
    const label = escapeHtml(f.label || '');
    const value = escapeHtml(f.value || '');
    const link = String(f.link || '').trim();
    const autoLink = normalizeUrl(link || f.value);
    const content = autoLink && autoLink !== '#' ? `<a href="${escapeHtml(autoLink)}" target="_blank" rel="noopener">${value}</a>` : value;
    return `<p><strong>${label}:</strong> ${content}</p>`;
  }).join('');
}


function hexToRgba(hex, opacity){
  const h=String(hex||'#111827').replace('#','');
  const full=h.length===3?h.split('').map(x=>x+x).join(''):h;
  const n=parseInt(full,16);
  const r=(n>>16)&255, g=(n>>8)&255, b=n&255;
  const a=Math.max(0,Math.min(100,Number(opacity)||80))/100;
  return `rgba(${r},${g},${b},${a})`;
}
function applyDesign(design){
  const d={bg:'#090d18',bg2:'#12345b',panel:'#111827',text:'#f8fafc',muted:'#a8b3c7',gold:'#d6a94a',blue:'#46b4ff',button:'#d6a94a',backgroundImage:'',panelOpacity:80,radius:28,animations:'on',...(design||{})};
  const root=document.documentElement;
  root.style.setProperty('--bg',d.bg);
  root.style.setProperty('--panel',hexToRgba(d.panel,d.panelOpacity));
  root.style.setProperty('--panel2',d.panel);
  root.style.setProperty('--text',d.text);
  root.style.setProperty('--muted',d.muted);
  root.style.setProperty('--gold',d.gold);
  root.style.setProperty('--blue',d.blue);
  root.style.setProperty('--button',d.button);
  root.style.setProperty('--radius',`${Number(d.radius)||28}px`);
  const bgImage=d.backgroundImage?`, url('${String(d.backgroundImage).replace(/'/g,'')}')`:'';
  document.body.style.background=`radial-gradient(circle at top left, ${d.bg2} 0, ${d.bg} 38%, #050812 100%)${bgImage}`;
  document.body.style.backgroundSize=d.backgroundImage?'cover':'auto';
  document.body.style.backgroundAttachment=d.backgroundImage?'fixed':'scroll';
  document.body.classList.toggle('no-motion', d.animations==='off');
}

function applyPortfolioData(){
  const data = getPortfolioData();
  applyDesign(data.design);
  document.querySelectorAll('[data-edit]').forEach(el => {
    const key = el.dataset.edit;
    if (data[key]) el.textContent = data[key];
  });
  if (data.linkedin) {
    document.querySelectorAll('a[href*="linkedin.com/in"]').forEach(a => a.href = data.linkedin);
  }
  if (data.email) {
    document.querySelectorAll('a[href^="mailto:"]').forEach(a => { a.href = 'mailto:' + data.email; a.textContent = data.email; });
  }
  renderExperiences(data.experiences);
  renderSkills(data.skills);
  renderCards('#achievementsGrid', data.achievements);
  renderCards('#projectsGrid', data.projects);
  renderContactFields(data);
  renderCertificates(data);
  renderCustomSections(data.sections);
}

applyPortfolioData();
