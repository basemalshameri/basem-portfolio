
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
    "issuer": "جوجل",
    "date": "2022",
    "category": "التسويق الرقمي"
  },
  {
    "name": "تصميم مستقبل العمل",
    "issuer": "جامعة نيو ساوث ويلز سيدني / كورسيرا",
    "date": "2022",
    "category": "الإدارة والعمل"
  },
  {
    "name": "الاستعداد لإدارة الموارد البشرية",
    "issuer": "جامعة مينيسوتا / كورسيرا",
    "date": "2022",
    "category": "الموارد البشرية"
  },
  {
    "name": "إنشاء استبيان ملاحظات الموظفين باستخدام تايب فورم",
    "issuer": "شبكة مشاريع كورسيرا",
    "date": "2022",
    "category": "الموارد البشرية"
  },
  {
    "name": "تطوير موقع شركة باستخدام ويكس",
    "issuer": "شبكة مشاريع كورسيرا",
    "date": "2022",
    "category": "المواقع الرقمية"
  },
  {
    "name": "مقدمة إلى مايكروسوفت إكسل",
    "issuer": "شبكة مشاريع كورسيرا",
    "date": "2022",
    "category": "تحليل البيانات"
  },
  {
    "name": "إنشاء لوحة تحليلات تسويقية مخصصة في داتا ستوديو",
    "issuer": "شبكة مشاريع كورسيرا",
    "date": "2022",
    "category": "تحليل البيانات"
  },
  {
    "name": "إنشاء ميثاق مشروع باستخدام مستندات جوجل",
    "issuer": "شبكة مشاريع كورسيرا",
    "date": "2022",
    "category": "إدارة المشاريع"
  },
  {
    "name": "مقدمة في تحليل الأعمال باستخدام الجداول الإلكترونية: الأساسيات",
    "issuer": "شبكة مشاريع كورسيرا",
    "date": "2022",
    "category": "تحليل الأعمال"
  },
  {
    "name": "إنشاء مؤشرات سوق الأسهم",
    "issuer": "شبكة مشاريع كورسيرا",
    "date": "2022",
    "category": "الأعمال والمالية"
  },
  {
    "name": "المراسلات التجارية الدولية",
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
    "name": "البرمجة باستخدام إكسل في بي إيه",
    "issuer": "إدراك",
    "date": "2022",
    "category": "إكسل والبرمجة"
  },
  {
    "name": "إدارة العمليات",
    "issuer": "إدراك",
    "date": "2023",
    "category": "إدارة العمليات"
  },
  {
    "name": "إدارة المشاريع",
    "issuer": "إدراك",
    "date": "2023",
    "category": "إدارة المشاريع"
  },
  {
    "name": "أساسيات إدارة المشاريع",
    "issuer": "إدراك",
    "date": "2023",
    "category": "إدارة المشاريع"
  },
  {
    "name": "تخطيط المشروع",
    "issuer": "إدراك",
    "date": "2023",
    "category": "إدارة المشاريع"
  },
  {
    "name": "المشروع: من التنفيذ إلى الإغلاق",
    "issuer": "إدراك",
    "date": "2023",
    "category": "إدارة المشاريع"
  },
  {
    "name": "مقدمة إلى البرمجة باستخدام لغة بايثون",
    "issuer": "إدراك",
    "date": "2022",
    "category": "البرمجة"
  },
  {
    "name": "الاستثمار الآمن في الأزمات الاقتصادية",
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
    "name": "البرمجة باستخدام إكسل في بي إيه",
    "issuer": "إدراك",
    "date": "2022",
    "category": "إكسل والبرمجة"
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
    "name": "البيع بذكاء",
    "issuer": "إدراك",
    "date": "2024",
    "category": "المبيعات"
  },
  {
    "name": "مقدمة إلى الذكاء الاصطناعي",
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
    "issuer": "ديساستر ريدي",
    "date": "2024",
    "category": "المشتريات واللوجستيات"
  },
  {
    "name": "أساسيات المهارات القيادية",
    "issuer": "ديساستر ريدي",
    "date": "2025",
    "category": "القيادة"
  },
  {
    "name": "أساسيات البحث عن منح",
    "issuer": "ديساستر ريدي",
    "date": "2025",
    "category": "التطوير المهني"
  },
  {
    "name": "التواصل الفعال في بيئة العمل",
    "issuer": "أوبن ليرن",
    "date": "2025",
    "category": "الاتصال"
  },
  {
    "name": "أساسيات حوكمة الشركات: من النظرية إلى التطبيق",
    "issuer": "أوبن ليرن كرييت",
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


const certificateTranslations = {
  "إنشاء استبيان ملاحظات الموظفين باستخدام تايب فورم": "Create an Employee Feedback Survey with TypeForm",
  "تطوير موقع شركة باستخدام ويكس": "Develop a Company Website with Wix",
  "إنشاء لوحة تحليلات تسويقية مخصصة في داتا ستوديو": "Create a Custom Marketing Analytics Dashboard in Data Studio",
  "إنشاء ميثاق مشروع باستخدام مستندات جوجل": "Create a Project Charter with Google Docs",
  "البرمجة باستخدام إكسل في بي إيه": "Excel VBA Programming",
  "إكسل والبرمجة": "Excel and Programming",
  "جوجل": "Google",
  "شبكة مشاريع كورسيرا": "Coursera Project Network",
  "جامعة نيو ساوث ويلز سيدني / كورسيرا": "UNSW Sydney / Coursera",
  "جامعة مينيسوتا / كورسيرا": "University of Minnesota / Coursera",
  "ديساستر ريدي": "DisasterReady",
  "أوبن ليرن": "OpenLearn",
  "أوبن ليرن كرييت": "OpenLearn Create",
  "تصميم مستقبل العمل": "Designing the Future of Work",
  "الاستعداد لإدارة الموارد البشرية": "Preparing to Manage Human Resources",
  "إنشاء استبيان ملاحظات الموظفين باستخدام تايب فورم": "Create an Employee Feedback Survey with TypeForm",
  "تطوير موقع شركة باستخدام ويكس": "Develop a Company Website with Wix",
  "مقدمة إلى مايكروسوفت إكسل": "Introduction to Microsoft Excel",
  "إنشاء لوحة تحليلات تسويقية مخصصة في داتا ستوديو": "Create a Custom Marketing Analytics Dashboard in Data Studio",
  "إنشاء ميثاق مشروع باستخدام مستندات جوجل": "Create a Project Charter with جوجل Docs",
  "مقدمة في تحليل الأعمال باستخدام الجداول الإلكترونية: الأساسيات": "Introduction to Business Analysis Using Spreadsheets: Basics",
  "إنشاء مؤشرات سوق الأسهم": "Construct Stock Market Indices",
  "المراسلات التجارية الدولية": "International Commercial Correspondence",
  "أساسيات إدارة المشاريع": "Project Management Foundation",
  "التواصل الفعال في بيئة العمل": "Effective Communication in the Workplace",
  "أساسيات حوكمة الشركات: من النظرية إلى التطبيق": "Corporate Governance Essentials: From Theory to Practice",
  "بكالوريوس لغة إنجليزية": "Bachelor's Degree in English Language",
  "دبلوم التنمية البشرية": "Diploma in Human Resources Development",
  "أساسيات التسويق الرقمي": "Fundamentals of Digital Marketing",
  "التوزيع والتحصيل": "Distribution and Collection",
  "إدارة المشاريع": "Project Management",
  "أساسيات المشروع": "Project Management Fundamentals",
  "إدارة العمليات": "Operations Management",
  "الاستثمار الآمن في الأزمات الاقتصادية": "Safe Investments During Economic Crises",
  "المشروع: من التنفيذ إلى الإغلاق": "Project: From Execution to Closure",
  "البرمجة باستخدام إكسل في بي إيه": "Excel VBA Programming",
  "تخطيط المشروع": "Project Planning",
  "المحاسبة لغير المحاسبين": "Accounting for Non-Accountants",
  "كيفية عمل دراسة الجدوى المالية للمشروع": "How to Do a Financial Feasibility Study for a Business",
  "مقدمة إلى البرمجة باستخدام لغة بايثون": "Introduction to Python Programming",
  "مقدمة إلى الذكاء الاصطناعي": "Introduction to Artificial Intelligence",
  "البيع بذكاء": "Selling Smarter",
  "مهارات النجاح": "Success Skills",
  "استخدام لينكدإن للوصول للفرص المهنية": "Using LinkedIn to Access Career Opportunities",
  "فهم سوق العمل": "Understanding the Labor Market",
  "المقابلة الشخصية": "Job Interview Skills",
  "السيرة الذاتية": "Professional CV Writing",
  "التخطيط لبناء مسار مهني ناجح": "Planning a Successful Career Path",
  "البحث واكتشاف الفرص": "Searching and Discovering Opportunities",
  "الإعداد المهني": "Professional Preparation",
  "إدارة المشتريات": "Purchasing Management",
  "برنامج المشتريات واللوجستيات": "Purchasing and Logistics Program",
  "أساسيات المهارات القيادية": "Leadership Skills Fundamentals",
  "أساسيات البحث عن منح": "Fundamentals of Grant Searching",
  "المهارات الضرورية في سوق العمل": "Essential Skills for the Labor Market",
  "التخطيط الإستراتيجي": "Strategic Planning",
  "إدارة الوقت": "Time Management",
  "فنون التعامل": "Interpersonal Skills",
  "إدارة الاجتماعات": "Meeting Management",
  "طرق التدريس": "Teaching Methods",
  "القيادة وصناعة القائد": "Leadership and Leader Development",
  "فن الإلقاء والخطابة": "Public Speaking and Presentation Skills",
  "مهارات التواصل والتأثير": "Communication and Influence Skills",
  "جامعة ذمار": "Thamar University",
  "أكاديمية العلوم": "Academy of Sciences",
  "إدراك": "Edraak",
  "عالم الدواء للتجارة والاستثمار": "Alam Al-Dawa Trading & Investment",
  "شركة تلد للتجارة العامة": "Tild General Trading Company",
  "منصة تدريبية": "Training Platform",
  "منصة معارف": "M3aarf Platform",
  "المؤهلات الأكاديمية": "Academic Qualifications",
  "الإدارة والتطوير": "Management and Development",
  "التسويق الرقمي": "Digital Marketing",
  "الإدارة والعمل": "Management and Work",
  "الموارد البشرية": "Human Resources",
  "المواقع الرقمية": "Digital Websites",
  "تحليل البيانات": "Data Analysis",
  "إدارة المشاريع": "Project Management",
  "تحليل الأعمال": "Business Analysis",
  "الأعمال والمالية": "Business and Finance",
  "الخبرة العملية": "Work Experience",
  "المالية": "Finance",
  "إكسل والبرمجة": "Excel and Programming",
  "إدارة العمليات": "Operations Management",
  "البرمجة": "Programming",
  "المبيعات": "Sales",
  "الذكاء الاصطناعي": "Artificial Intelligence",
  "التطوير المهني": "Professional Development",
  "المشتريات": "Purchasing",
  "المشتريات واللوجستيات": "Purchasing and Logistics",
  "القيادة": "Leadership",
  "الاتصال": "Communication",
  "الحوكمة": "Governance",
  "التعليم والتدريب": "Education and Training",
  "أكاديمية": "Academic",
  "مهنية": "Professional",
  "خبرات": "Experience"
};

const certificateArabicTranslations = {
  "Create an Employee Feedback Survey with TypeForm": "إنشاء استبيان ملاحظات الموظفين باستخدام تايب فورم",
  "Develop a Company Website with Wix": "تطوير موقع شركة باستخدام ويكس",
  "Create a Custom Marketing Analytics Dashboard in Data Studio": "إنشاء لوحة تحليلات تسويقية مخصصة في داتا ستوديو",
  "Create a Project Charter with Google Docs": "إنشاء ميثاق مشروع باستخدام مستندات جوجل",
  "Excel VBA Programming": "البرمجة باستخدام إكسل في بي إيه",
  "Excel and Programming": "إكسل والبرمجة",
  "Google": "جوجل",
  "Coursera Project Network": "شبكة مشاريع كورسيرا",
  "UNSW Sydney / Coursera": "جامعة نيو ساوث ويلز سيدني / كورسيرا",
  "University of Minnesota / Coursera": "جامعة مينيسوتا / كورسيرا",
  "DisasterReady": "ديساستر ريدي",
  "OpenLearn": "أوبن ليرن",
  "OpenLearn Create": "أوبن ليرن كرييت",
  "Designing the Future of Work": "تصميم مستقبل العمل",
  "Preparing to Manage Human Resources": "الاستعداد لإدارة الموارد البشرية",
  "Create an Employee Feedback Survey with TypeForm": "إنشاء استبيان ملاحظات الموظفين باستخدام تايب فورم",
  "Develop a Company Website with Wix": "تطوير موقع شركة باستخدام ويكس",
  "Introduction to Microsoft Excel": "مقدمة إلى مايكروسوفت إكسل",
  "Create a Custom Marketing Analytics Dashboard in Data Studio": "إنشاء لوحة تحليلات تسويقية مخصصة في داتا ستوديو",
  "Create a Project Charter with جوجل Docs": "إنشاء ميثاق مشروع باستخدام مستندات جوجل",
  "Introduction to Business Analysis Using Spreadsheets: Basics": "مقدمة في تحليل الأعمال باستخدام الجداول الإلكترونية: الأساسيات",
  "Construct Stock Market Indices": "إنشاء مؤشرات سوق الأسهم",
  "International Commercial Correspondence": "المراسلات التجارية الدولية",
  "Accounting for Non-Accountants": "المحاسبة لغير المحاسبين",
  "How to Do a Financial Feasibility Study for a Business": "كيفية عمل دراسة الجدوى المالية للمشروع",
  "Programming VBA using Excel": "البرمجة باستخدام إكسل في بي إيه",
  "Operations Management": "إدارة العمليات",
  "Project Management": "إدارة المشاريع",
  "Project Management Foundation": "أساسيات إدارة المشاريع",
  "Project Planning": "تخطيط المشروع",
  "The Project: From Execution to Closure": "المشروع: من التنفيذ إلى الإغلاق",
  "Introduction to Python Programming": "مقدمة إلى البرمجة باستخدام لغة بايثون",
  "Safe Investments During An Economic Crisis": "الاستثمار الآمن في الأزمات الاقتصادية",
  "Selling Smarter": "البيع بذكاء",
  "Introduction in Artificial Intelligence": "مقدمة إلى الذكاء الاصطناعي",
  "Effective Communication in the Workplace": "التواصل الفعال في بيئة العمل",
  "Corporate Governance Essentials: From Theory to Practice": "أساسيات حوكمة الشركات: من النظرية إلى التطبيق",
};

function translateCertificateValueToArabic(value, fallback){
  const text = String(value || '').trim();
  if (!text) return fallback || '';
  return certificateArabicTranslations[text] || text;
}

function translateCertificateValue(value, fallback){
  const text = String(value || '').trim();
  if (!text) return fallback || '';
  if (currentLang !== 'en') return text;
  return certificateTranslations[text] || text;
}

function getCertificateDisplay(c){
  if (currentLang !== 'en') {
    return {
      name: translateCertificateValueToArabic(c.name, ''),
      issuer: translateCertificateValueToArabic(c.issuer, ''),
      category: translateCertificateValueToArabic(c.category, '')
    };
  }
  return {
    name: c.nameEn || c.englishName || translateCertificateValue(c.name, ''),
    issuer: c.issuerEn || c.englishIssuer || translateCertificateValue(c.issuer, ''),
    category: c.categoryEn || c.englishCategory || translateCertificateValue(c.category, '')
  };
}

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn) menuBtn.onclick = () => nav.classList.toggle('open');

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('themeToggle').onclick = () => document.body.classList.toggle('light');

let currentLang = localStorage.getItem('basemLang') || 'ar';

const langContent = {
  ar: {
    pageTitle: 'باسم عبدالغفور عبدالقوي أحمد | موقع شخصي',
    metaDescription: 'الموقع الشخصي لباسم عبدالغفور عبدالقوي أحمد - مدير عمليات، التجارة الإلكترونية، سلاسل الإمداد، المشتريات واللوجستيات.',
    nav: ['نبذة','الخبرات','المهارات','الإنجازات','المشاريع','الشهادات','تواصل'],
    cvAr: 'تحميل السيرة العربية', cvEn: 'Download English CV',
    cardTitle: 'العمليات • التجارة الإلكترونية • سلاسل الإمداد', cardSubtitle: 'تحويل العمليات إلى نمو مستدام',
    statLabels: ['سنة خبرة','شهادة احترافية','مناصب وخبرات متنوعة'],
    aboutEye: 'About Me', aboutTitle: 'نبذة احترافية',
    aboutText: 'مدير عمليات محترف بخبرة واسعة في تحسين العمليات التشغيلية، إدارة الموردين، تنسيق الشحن والاستيراد، إدارة منصات التجارة الإلكترونية، وتطوير استراتيجيات الأعمال الرقمية. أمتلك خلفية قوية في إدارة البيانات، الأنظمة، التقارير التشغيلية، وقيادة فرق العمل لتحقيق كفاءة أعلى ونتائج قابلة للقياس.',
    expEye: 'Experience', expTitle: 'الخبرات العملية',
    skillEye: 'المهارات', skillTitle: 'المهارات الأساسية',
    certEye: 'Certificates', certTitle: 'الشهادات المهنية', certMain: '61 شهادة احترافية',
    certIntro: 'يمكنك استعراض أسماء الشهادات كاملة، وتحميل ملف الشهادات PDF، كما يمكن تعديل أسماء الشهادات أو إضافة شهادات جديدة من لوحة التحكم.',
    certBtn: 'تحميل الشهادات',
    achEye: 'Achievements', achTitle: 'الإنجازات',
    projEye: 'Projects', projTitle: 'المشاريع',
    contactEye: 'Contact', contactTitle: 'بيانات التواصل',
    contactLabels: ['الموقع','الجوال','البريد','لينكدإن'],
    footer: 'جميع الحقوق محفوظة.',
    filterAll: 'الكل', filterAcademic: 'أكاديمية', filterProfessional: 'مهنية', filterExperience: 'خبرات', emptyCert: 'لا توجد شهادات في هذا التصنيف حالياً.',
    groupAcademic: 'أكاديمية', groupProfessional: 'مهنية', groupExperience: 'خبرات',
    experiences: [
      ['2024 - الآن','مدير العمليات - شركة شاطئ الوصل التجارية NMA','إدارة عمليات التجارة الإلكترونية، متابعة مؤشرات الأداء، تطوير النمو الرقمي، والتنسيق بين الإدارات.'],
      ['2018 - 2024','إدخال بيانات وتقنية معلومات - شركة التسويق السعودية','إدارة قواعد البيانات، إعداد التقارير، دعم الأنظمة التقنية، وتحسين جودة البيانات.'],
      ['2012 - 2014','مندوب مبيعات ولوجستيات - MBE للشحن','إدارة عمليات الشحن الجوي والبحري، متابعة العملاء، وتنسيق عمليات الشحن.'],
      ['2009 - 2012','مشتريات خارجية، مبيعات، توزيع وتحصيل','إدارة المشتريات الدولية، الاعتمادات المستندية، التوزيع، المبيعات والتحصيل.']
    ],
    achievements: [
      ['تحسين العمليات','تحليل سير العمل وتحسين الكفاءة التشغيلية بين الفرق والمنصات الرقمية.'],
      ['تطوير الأداء الرقمي','تحسين متابعة الطلبات، التنسيق التشغيلي، ورفع جودة الأداء في التجارة الإلكترونية.'],
      ['تحليل البيانات','إعداد تقارير تشغيلية وتحليل مؤشرات الأداء باستخدام Excel والأنظمة الداخلية.']
    ],
    projects: [
      ['إدارة موقع التجارة الإلكترونية','متابعة العمليات اليومية وتحسين تجربة الطلبات وربط الأعمال الرقمية بالعمليات التشغيلية.'],
      ['تقارير Excel تشغيلية','تنظيم بيانات المبيعات والمخزون وإعداد تقارير تساعد في اتخاذ القرار.'],
      ['أدوات Python مساعدة','استخدام Python في معالجة البيانات والأتمتة وتحسين كفاءة الأعمال المتكررة.']
    ]
  },
  en: {
    pageTitle: 'Basem Abdulghafor Abdulqawi Ahmed | Personal Portfolio',
    metaDescription: 'The personal portfolio of Basem Abdulghafor Abdulqawi Ahmed - Operations Manager, E-Commerce, Supply Chain, Purchasing and Logistics.',
    nav: ['About','Experience','Skills','Achievements','Projects','Certificates','Contact'],
    cvAr: 'Download Arabic CV', cvEn: 'Download English CV',
    cardTitle: 'Operations • E-Commerce • Supply Chain', cardSubtitle: 'Transforming operations into sustainable growth',
    statLabels: ['Years of Experience','Professional Certificates','Roles & Experiences'],
    aboutEye: 'About Me', aboutTitle: 'Professional Summary',
    aboutText: 'Professional Operations Manager with extensive experience in improving operational processes, vendor management, shipping and import coordination, e-commerce platform operations, and digital business strategy development. Strong background in data management, systems, operational reporting, and team leadership to achieve higher efficiency and measurable results.',
    expEye: 'Experience', expTitle: 'Professional Experience',
    skillEye: 'Core Skills', skillTitle: 'Core Skills',
    certEye: 'Certificates', certTitle: 'Professional Certificates', certMain: '61 Professional Certificates',
    certIntro: 'Browse all certificate names, download the certificates PDF file, and manage certificate names or add new certificates from the admin dashboard.',
    certBtn: 'Download Certificates',
    achEye: 'Achievements', achTitle: 'Achievements',
    projEye: 'Projects', projTitle: 'Projects',
    contactEye: 'Contact', contactTitle: 'Contact Information',
    contactLabels: ['Location','Mobile','Email','LinkedIn'],
    footer: 'All rights reserved.',
    filterAll: 'All', filterAcademic: 'Academic', filterProfessional: 'Professional', filterExperience: 'Experience', emptyCert: 'No certificates in this category yet.',
    groupAcademic: 'Academic', groupProfessional: 'Professional', groupExperience: 'Experience',
    experiences: [
      ['2024 - Present','Operations Manager - NMA Trading Company','Managing e-commerce operations, monitoring KPIs, developing digital growth, and coordinating between departments.'],
      ['2018 - 2024','Data Entry & IT Employee - Saudi Marketing Company','Managing databases, preparing reports, supporting technical systems, and improving data quality.'],
      ['2012 - 2014','Sales & Logistics Representative - MBE Shipping','Managing air and sea freight operations, following up with clients, and coordinating shipments.'],
      ['2009 - 2012','International Purchasing, Sales, Distribution & Collection','Managing international purchasing, letters of credit, distribution, sales, and collection.']
    ],
    achievements: [
      ['Operational Improvement','Analyzed workflows and improved operational efficiency across teams and digital platforms.'],
      ['Digital Performance Development','Improved order follow-up, operational coordination, and e-commerce performance quality.'],
      ['Data Analysis','Prepared operational reports and analyzed KPIs using Excel and internal systems.']
    ],
    projects: [
      ['E-Commerce Website Operations','Managed daily operations and improved order experience by connecting digital business with operational workflows.'],
      ['Operational Excel Reports','Organized sales and inventory data and prepared reports that support decision-making.'],
      ['Python Support Tools','Used Python for data processing, automation, and improving repetitive business tasks.']
    ]
  }
};



const englishToArabicTranslations = {
  'Core Skills': 'المهارات الأساسية',
  'Skills': 'المهارات',
  'Operations Management': 'إدارة العمليات',
  'E-Commerce Operations': 'عمليات التجارة الإلكترونية',
  'Supply Chain': 'سلاسل الإمداد',
  'International Purchasing': 'المشتريات الدولية',
  'Logistics': 'اللوجستيات',
  'Inventory Management': 'إدارة المخزون',
  'ERP / Odoo': 'نظام ERP / Odoo',
  'Microsoft Excel': 'مايكروسوفت إكسل',
  'Data Analysis': 'تحليل البيانات',
  'Project Management': 'إدارة المشاريع',
  'Digital Marketing': 'التسويق الرقمي',
  'Python Basics': 'أساسيات Python',
  'Operations Manager': 'مدير العمليات التشغيلية',
  'Professional Experience': 'الخبرات العملية',
  'Professional Summary': 'نبذة احترافية',
  'Achievements': 'الإنجازات',
  'Projects': 'المشاريع',
  'Professional Certificates': 'الشهادات المهنية',
  'Contact Information': 'بيانات التواصل',
  'Operations • E-Commerce • Supply Chain': 'العمليات • التجارة الإلكترونية • سلاسل الإمداد',
  'Transforming operations into sustainable growth': 'تحويل العمليات إلى نمو مستدام',
  'LinkedIn': 'لينكدإن'
};

const defaultSkills = ['إدارة العمليات','عمليات التجارة الإلكترونية','سلاسل الإمداد','المشتريات الدولية','اللوجستيات','إدارة المخزون','نظام ERP / Odoo','مايكروسوفت إكسل','تحليل البيانات','إدارة المشاريع','التسويق الرقمي','أساسيات Python'];

const generalTranslations = {
  'باسم عبدالغفور عبدالقوي أحمد': 'Basem Abdulghafor Abdulqawi Ahmed',
  'مدير عمليات | التجارة الإلكترونية | سلاسل الإمداد': 'Operations Manager | E-Commerce Operations | Supply Chain',
  'أكثر من 15 عامًا من الخبرة في إدارة العمليات، المشتريات، اللوجستيات، سلاسل الإمداد، التجارة الإلكترونية، تحليل البيانات والتحول الرقمي.': 'Over 15 years of experience in operations management, purchasing, logistics, supply chain, e-commerce, data analysis, and digital transformation.',
  'سنة خبرة': 'Years of Experience',
  'شهادة احترافية': 'Professional Certificates',
  'مناصب وخبرات متنوعة': 'Roles & Experiences',
  'نبذة احترافية': 'Professional Summary',
  'مدير عمليات محترف بخبرة واسعة في تحسين العمليات التشغيلية، إدارة الموردين، تنسيق الشحن والاستيراد، إدارة منصات التجارة الإلكترونية، وتطوير استراتيجيات الأعمال الرقمية. أمتلك خلفية قوية في إدارة البيانات، الأنظمة، التقارير التشغيلية، وقيادة فرق العمل لتحقيق كفاءة أعلى ونتائج قابلة للقياس.': 'Professional Operations Manager with extensive experience in improving operational processes, vendor management, shipping and import coordination, e-commerce platform operations, and digital business strategy development. Strong background in data management, systems, operational reporting, and team leadership to achieve higher efficiency and measurable results.',
  'الخبرات العملية': 'Professional Experience',
  'المهارات الأساسية': 'Core Skills',
  'عمليات التجارة الإلكترونية': 'E-Commerce Operations',
  'المشتريات الدولية': 'International Purchasing',
  'إدارة المخزون': 'Inventory Management',
  'نظام ERP / Odoo': 'ERP / Odoo',
  'مايكروسوفت إكسل': 'Microsoft Excel',
  'أساسيات Python': 'Python Basics',
  'الشهادات المهنية': 'Professional Certificates',
  'الإنجازات': 'Achievements',
  'المشاريع': 'Projects',
  'بيانات التواصل': 'Contact Information',
  'تحميل السيرة العربية': 'Download Arabic CV',
  'تحميل الشهادات': 'Download Certificates',
  '61 شهادة احترافية': '61 Professional Certificates',
  'يمكنك استعراض أسماء الشهادات كاملة، وتحميل ملف الشهادات PDF، كما يمكن تعديل أسماء الشهادات أو إضافة شهادات جديدة من لوحة التحكم.': 'Browse all certificate names, download the certificates PDF file, and manage certificate names or add new certificates from the admin dashboard.',
  '2024 - الآن': '2024 - Present',
  'مدير العمليات التشغيلية': 'Operations Manager',
  'مدير العمليات التشغيلية - شركة شاطئ الوصل التجارية NMA': 'Operations Manager - NMA Trading Company',
  'مدير العمليات - شركة شاطئ الوصل التجارية NMA': 'Operations Manager - NMA Trading Company',
  'إدارة عمليات التجارة الإلكترونية، متابعة مؤشرات الأداء، تطوير النمو الرقمي، والتنسيق بين الإدارات.': 'Managing e-commerce operations, monitoring KPIs, developing digital growth, and coordinating between departments.',
  'إدخال بيانات وتقنية معلومات - شركة التسويق السعودية': 'Data Entry & IT Employee - Saudi Marketing Company',
  'إدارة قواعد البيانات، إعداد التقارير، دعم الأنظمة التقنية، وتحسين جودة البيانات.': 'Managing databases, preparing reports, supporting technical systems, and improving data quality.',
  'مندوب مبيعات ولوجستيات - MBE للشحن': 'Sales & Logistics Representative - MBE Shipping',
  'إدارة عمليات الشحن الجوي والبحري، متابعة العملاء، وتنسيق عمليات الشحن.': 'Managing air and sea freight operations, following up with clients, and coordinating shipments.',
  'مشتريات خارجية، مبيعات، توزيع وتحصيل': 'International Purchasing, Sales, Distribution & Collection',
  'إدارة المشتريات الدولية، الاعتمادات المستندية، التوزيع، المبيعات والتحصيل.': 'Managing international purchasing, letters of credit, distribution, sales, and collection.',
  'تحسين العمليات': 'Operational Improvement',
  'تحليل سير العمل وتحسين الكفاءة التشغيلية بين الفرق والمنصات الرقمية.': 'Analyzed workflows and improved operational efficiency across teams and digital platforms.',
  'تطوير الأداء الرقمي': 'Digital Performance Development',
  'تحسين متابعة الطلبات، التنسيق التشغيلي، ورفع جودة الأداء في التجارة الإلكترونية.': 'Improved order follow-up, operational coordination, and e-commerce performance quality.',
  'تحليل البيانات': 'Data Analysis',
  'إعداد تقارير تشغيلية وتحليل مؤشرات الأداء باستخدام Excel والأنظمة الداخلية.': 'Prepared operational reports and analyzed KPIs using Excel and internal systems.',
  'إدارة موقع التجارة الإلكترونية': 'E-Commerce Website Operations',
  'متابعة العمليات اليومية وتحسين تجربة الطلبات وربط الأعمال الرقمية بالعمليات التشغيلية.': 'Managed daily operations and improved order experience by connecting digital business with operational workflows.',
  'تقارير Excel تشغيلية': 'Operational Excel Reports',
  'تنظيم بيانات المبيعات والمخزون وإعداد تقارير تساعد في اتخاذ القرار.': 'Organized sales and inventory data and prepared reports that support decision-making.',
  'أدوات Python مساعدة': 'Python Support Tools',
  'استخدام Python في معالجة البيانات والأتمتة وتحسين كفاءة الأعمال المتكررة.': 'Used Python for data processing, automation, and improving repetitive business tasks.',
  'قسم مخصص': 'Custom Section',
  'حقل جديد': 'New Field',
  'خبرة عملية جديدة': 'New Professional Experience',
  'اكتب وصف الخبرة هنا': 'Write the experience description here'
};

function translateGenericText(value){
  const text = String(value || '').trim();
  if (!text) return text;
  if (currentLang !== 'en') {
    if (englishToArabicTranslations[text]) return englishToArabicTranslations[text];
    return text;
  }
  if (generalTranslations[text]) return generalTranslations[text];
  if (certificateTranslations[text]) return certificateTranslations[text];
  if (contactLabelTranslations[text]) return contactLabelTranslations[text];
  if (contactValueTranslations[text]) return contactValueTranslations[text];
  return text
    .replace(/الآن/g, 'Present')
    .replace(/شركة شاطئ الوصل التجارية/g, 'NMA Trading Company')
    .replace(/مدير العمليات التشغيلية/g, 'Operations Manager')
    .replace(/مدير العمليات/g, 'Operations Manager')
    .replace(/التجارة الإلكترونية/g, 'E-Commerce')
    .replace(/سلاسل الإمداد/g, 'Supply Chain')
    .replace(/إدارة العمليات/g, 'Operations Management')
    .replace(/إدارة/g, 'Management')
    .replace(/المشتريات/g, 'Purchasing')
    .replace(/اللوجستيات/g, 'Logistics')
    .replace(/المخزون/g, 'Inventory')
    .replace(/المبيعات/g, 'Sales')
    .replace(/التسويق الرقمي/g, 'Digital Marketing')
    .replace(/تحليل البيانات/g, 'Data Analysis')
    .replace(/إدارة المشاريع/g, 'Project Management')
    .replace(/الموارد البشرية/g, 'Human Resources')
    .replace(/المالية/g, 'Finance')
    .replace(/البرمجة/g, 'Programming')
    .replace(/شهادة/g, 'Certificate')
    .replace(/شهادات/g, 'Certificates')
    .replace(/خبرة/g, 'Experience')
    .replace(/خبرات/g, 'Experiences')
    .replace(/مهارات/g, 'Skills')
    .replace(/مشاريع/g, 'Projects')
    .replace(/إنجازات/g, 'Achievements');
}

function getLocalizedValue(data, key, fallback){
  data = data || {};
  const enKey = key + 'En';
  const englishKey = 'english' + key.charAt(0).toUpperCase() + key.slice(1);
  if (currentLang === 'en') {
    if (data[enKey]) return data[enKey];
    if (data[englishKey]) return data[englishKey];
    if (data[key]) return translateGenericText(data[key]);
    if (fallback !== undefined) return translateGenericText(fallback);
    return '';
  }
  const value = data[key] || fallback || '';
  return translateGenericText(value);
}

function localizeItemValue(item, key){
  item = item || {};
  if (currentLang === 'en') return item[key + 'En'] || item['english' + key.charAt(0).toUpperCase() + key.slice(1)] || translateGenericText(item[key] || '');
  return translateGenericText(item[key] || '');
}

function setText(selector, value){
  const el = document.querySelector(selector);
  if (el && value !== undefined) el.textContent = value;
}
function applyStaticCards(selector, items){
  const cards = document.querySelectorAll(selector + ' article');
  cards.forEach((card, i) => {
    if (!items[i]) return;
    const h = card.querySelector('h3');
    const p = card.querySelector('p');
    if (h) h.textContent = items[i][0];
    if (p) p.textContent = items[i][1];
  });
}
function applyStaticExperiences(items){
  const cards = document.querySelectorAll('#experience .timeline article');
  cards.forEach((card, i) => {
    if (!items[i]) return;
    const span = card.querySelector('span');
    const h = card.querySelector('h3');
    const p = card.querySelector('p');
    if (span) span.textContent = items[i][0];
    if (h) h.textContent = items[i][1];
    if (p) p.textContent = items[i][2];
  });
}
function applyLanguage(lang){
  currentLang = lang || 'ar';
  localStorage.setItem('basemLang', currentLang);
  const t = langContent[currentLang];
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.title = t.pageTitle;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', t.metaDescription);
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
  document.querySelectorAll('[data-ar][data-en]').forEach(el => el.textContent = el.dataset[currentLang]);
  document.querySelectorAll('#nav a').forEach((a, i) => { if (t.nav[i]) a.textContent = t.nav[i]; });
  const heroButtons = document.querySelectorAll('.hero-buttons a');
  if (heroButtons[0]) heroButtons[0].textContent = t.cvAr;
  if (heroButtons[1]) heroButtons[1].textContent = t.cvEn;
  setText('#cardTitle', t.cardTitle); setText('#cardSubtitle', t.cardSubtitle);
  document.querySelectorAll('.stats span').forEach((s, i) => { if (t.statLabels[i]) s.textContent = t.statLabels[i]; });
  const sections = [
    ['#about', t.aboutEye, t.aboutTitle], ['#experience', t.expEye, t.expTitle], ['#skills', t.skillEye, t.skillTitle],
    ['#certificates', t.certEye, t.certTitle], ['#achievements', t.achEye, t.achTitle], ['#projects', t.projEye, t.projTitle]
  ];
  sections.forEach(([id, eye, title]) => { setText(id + ' .eyebrow', eye); setText(id + ' .section-title h2', title); });
  setText('#contact .eyebrow', t.contactEye); setText('#contact h2', t.contactTitle);
  setText('#aboutText', t.aboutText);
  setText('#certificatesTitle', t.certMain);
  setText('#certificatesIntro', t.certIntro);
  setText('#certDownloadBtn', t.certBtn);
  applyStaticExperiences(t.experiences);
  applyStaticCards('#achievementsGrid', t.achievements);
  applyStaticCards('#projectsGrid', t.projects);
  renderSkills(defaultSkills);
  renderContactFields(getPortfolioData());
  const footer = document.querySelector('footer');
  if (footer) footer.innerHTML = `© <span id="year">${new Date().getFullYear()}</span> ${currentLang === 'ar' ? 'باسم عبدالغفور عبدالقوي أحمد' : 'Basem Abdulghafor Abdulqawi Ahmed'}. ${t.footer}`;
  renderCertificates(getPortfolioData());
}

const langToggle = document.getElementById('langToggle');
if (langToggle) langToggle.onclick = () => {
  applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
  applyPortfolioData();
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
  wrap.innerHTML = (sections || []).filter(s => s && (s.title || s.titleEn || s.content || s.contentEn)).map((s, i) => `
    <section class="section custom-section reveal visible" id="custom-${i+1}">
      <div class="section-title"><p class="eyebrow">${escapeHtml(localizeItemValue(s, 'label') || (currentLang === 'en' ? 'Custom Section' : 'قسم مخصص'))}</p><h2>${escapeHtml(localizeItemValue(s, 'title'))}</h2></div>
      <div class="panel"><p>${escapeHtml(localizeItemValue(s, 'content')).replace(/\n/g, '<br>')}</p></div>
    </section>
  `).join('');
}

function renderExperiences(experiences){
  const wrap = document.querySelector('#experience .timeline');
  if (!wrap || !Array.isArray(experiences) || experiences.length === 0) return;
  wrap.innerHTML = experiences.map(x => `
    <article><span>${escapeHtml(localizeItemValue(x, 'period'))}</span><h3>${escapeHtml(localizeItemValue(x, 'title'))}</h3><p>${escapeHtml(localizeItemValue(x, 'description')).replace(/\n/g,'<br>')}</p></article>
  `).join('');
}

function renderSkills(skills){
  const wrap = document.querySelector('#skills .skills-grid');
  if (!wrap || !Array.isArray(skills) || skills.length === 0) return;
  wrap.innerHTML = skills.map(skill => {
    const text = typeof skill === 'object'
      ? (currentLang === 'en'
          ? (skill.nameEn || skill.titleEn || skill.skillEn || skill.englishName || translateGenericText(skill.name || skill.title || skill.skill || ''))
          : (skill.name || skill.title || skill.skill || translateGenericText(skill.nameEn || skill.titleEn || skill.skillEn || '')))
      : translateGenericText(skill);
    return `<span>${escapeHtml(text)}</span>`;
  }).join('');
}

function renderCards(selector, items){
  const wrap = document.querySelector(selector);
  if (!wrap || !Array.isArray(items) || items.length === 0) return;
  wrap.innerHTML = items.map(item => `
    <article><h3>${escapeHtml(localizeItemValue(item, 'title'))}</h3><p>${escapeHtml(localizeItemValue(item, 'description')).replace(/\n/g,'<br>')}</p></article>
  `).join('');
}



function renderCertificates(data){
  const wrap = document.getElementById('certificatesGrid');
  if (!wrap) return;
  const certificates = Array.isArray(data.certificates) && data.certificates.length ? data.certificates : defaultCertificates;
  const title = document.getElementById('certificatesTitle');
  if (title) title.textContent = data.certificatesTitle ? getLocalizedValue(data, 'certificatesTitle', langContent[currentLang].certMain) : (currentLang === 'en' ? certificates.length + ' Professional Certificates' : certificates.length + ' شهادة احترافية');
  const intro = document.getElementById('certificatesIntro');
  if (intro) intro.textContent = data.certificatesIntro ? getLocalizedValue(data, 'certificatesIntro', langContent[currentLang].certIntro) : langContent[currentLang].certIntro;
  const btn = document.getElementById('certDownloadBtn');
  if (btn) {
    btn.href = data.certificatesFile || 'assets/certificates/Basem_Certificates_61.pdf';
    btn.textContent = data.certificatesButton ? getLocalizedValue(data, 'certificatesButton', langContent[currentLang].certBtn) : langContent[currentLang].certBtn;
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
    const shown = getCertificateDisplay(c);
    const groupLabel = currentLang === 'en' ? (group === 'أكاديمية' ? langContent.en.groupAcademic : group === 'خبرات' ? langContent.en.groupExperience : langContent.en.groupProfessional) : group;
    const categoryLabel = currentLang === 'en' ? shown.category : (c.category || '');
    return `
    <article class="certificate-card" data-group="${escapeHtml(group)}">
      <span class="cert-num">${String(i + 1).padStart(2,'0')}</span>
      <h3>${escapeHtml(shown.name || '')}</h3>
      <p>${escapeHtml(shown.issuer || '')}</p>
      <small>${escapeHtml(groupLabel)}${categoryLabel ? ' • ' + escapeHtml(categoryLabel) : ''}${c.date ? ' • ' + escapeHtml(c.date) : ''}</small>
    </article>
  `}).join('') || `<p class="empty-note">${langContent[currentLang].emptyCert}</p>`;
}

function renderCertificateFilters(certificates){
  const filters = document.getElementById('certificateFilters');
  if (!filters) return;
  const t = langContent[currentLang] || langContent.ar;
  const buttons = [
    {key:'all', label:t.filterAll, count:certificates.length},
    {key:'أكاديمية', label:t.filterAcademic, count:certificates.filter(c => getCertificateGroup(c.category) === 'أكاديمية').length},
    {key:'مهنية', label:t.filterProfessional, count:certificates.filter(c => getCertificateGroup(c.category) === 'مهنية').length},
    {key:'خبرات', label:t.filterExperience, count:certificates.filter(c => getCertificateGroup(c.category) === 'خبرات').length}
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

const contactLabelTranslations = {
  'الموقع': 'Location',
  'العنوان': 'Address',
  'الجوال': 'Mobile',
  'الهاتف': 'Phone',
  'رقم الجوال': 'Mobile',
  'رقم الهاتف': 'Phone',
  'البريد': 'Email',
  'البريد الإلكتروني': 'Email',
  'الايميل': 'Email',
  'الإيميل': 'Email',
  'لينكدإن': 'LinkedIn',
  'لينكد ان': 'LinkedIn',
  'LinkedIn': 'LinkedIn',
  'واتساب': 'WhatsApp',
  'whatsapp': 'WhatsApp',
  'الموقع الإلكتروني': 'Website',
  'الموقع الالكتروني': 'Website',
  'GitHub': 'GitHub',
  'جيت هب': 'GitHub'
};

const contactValueTranslations = {
  'الدمام، المملكة العربية السعودية': 'Dammam, Saudi Arabia',
  'الدمام، السعودية': 'Dammam, Saudi Arabia',
  'المملكة العربية السعودية': 'Saudi Arabia'
};

function translateContactLabel(label){
  const value = String(label || '').trim();
  if (currentLang !== 'en') return value;
  return contactLabelTranslations[value] || value;
}

function translateContactValue(value){
  const text = String(value || '').trim();
  if (currentLang !== 'en') return text;
  return contactValueTranslations[text] || text;
}

function renderContactFields(data){
  const wrap = document.getElementById('contactFields');
  if (!wrap) return;
  data = data || {};
  const fallback = currentLang === 'en' ? [
    {label:'Location', value:'Dammam, Saudi Arabia', link:''},
    {label:'Mobile', value:'+966504319217', link:'tel:+966504319217'},
    {label:'Email', value:data.email || 'basemalshameri6@gmail.com', link:'mailto:' + (data.email || 'basemalshameri6@gmail.com')},
    {label:'LinkedIn', value:'www.linkedin.com/in/basem-al-shameri-b1a848395', link:data.linkedin || 'https://www.linkedin.com/in/basem-al-shameri-b1a848395'}
  ] : [
    {label:'الموقع', value:'الدمام، المملكة العربية السعودية', link:''},
    {label:'الجوال', value:'+966504319217', link:'tel:+966504319217'},
    {label:'البريد', value:data.email || 'basemalshameri6@gmail.com', link:'mailto:' + (data.email || 'basemalshameri6@gmail.com')},
    {label:'لينكدإن', value:'www.linkedin.com/in/basem-al-shameri-b1a848395', link:data.linkedin || 'https://www.linkedin.com/in/basem-al-shameri-b1a848395'}
  ];
  const fields = Array.isArray(data.contactFields) && data.contactFields.length ? data.contactFields : fallback;
  wrap.innerHTML = fields.filter(f => f && (f.label || f.value)).map(f => {
    const labelText = currentLang === 'en' ? (f.labelEn || f.englishLabel || translateContactLabel(f.label || '')) : translateGenericText(f.labelAr || f.label || '');
    const valueText = currentLang === 'en' ? (f.valueEn || f.englishValue || translateContactValue(f.value || '')) : (f.value || f.valueAr || '');
    const label = escapeHtml(labelText);
    const value = escapeHtml(valueText);
    const link = String(f.link || '').trim();
    const autoLink = normalizeUrl(link || f.value || valueText);
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
    const fallback = el.dataset[currentLang] || el.textContent;
    const value = getLocalizedValue(data, key, fallback);
    if (value) el.textContent = value;
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

applyLanguage(currentLang);
applyPortfolioData();
