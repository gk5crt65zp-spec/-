/* غراس × نور البيان — تطبيق عملي كامل (حفظ محلي على جهازك) */
"use strict";
const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
const KEY="ghiras-nb-v1";
const SKILLS={spelling:"التهجي",reading:"القراءة",writing:"الكتابة",dictation:"الإملاء",tashkeel:"التشكيل"};
const LETTERS=["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","هـ","و","ي"];
const WORDS=[
 {w:"بَاب",p:["بَا","ب"]},{w:"نُور",p:["نُو","ر"]},{w:"كِتَاب",p:["كِ","تَا","ب"]},
 {w:"مَسْجِد",p:["مَسْ","جِ","د"]},{w:"حَدِيقَة",p:["حَ","دِي","قَ","ة"]},
 {w:"قَمَر",p:["قَ","مَ","ر"]},{w:"شَمْس",p:["شَمْ","س"]},{w:"مُعَلِّمَة",p:["مُ","عَلْ","لِ","مَ","ة"]}];
const BADGES=[["🔤","نجم التهجي"],["📖","قارئ صغير"],["✍️","خطاط المستقبل"],["🌙","الملتزم"],["🤝","المتعاون"],["🏆","بطل الأسبوع"]];
const PRAISE=["أحسنت يا بطل! 🌟","رائع! تهجئتك جميلة 📖","ما شاء الله تبارك الله! 🤲","أنت نجم الحلقة اليوم ⭐","قراءتك تتحسن كل يوم 🌱","ممتاز! استمر يا غالي 💚","فخورون بك يا صغيرنا 🏆","تهجية صحيحة وكتابة أجمل ✍️","أبدعت! هكذا يكون المجتهدون 🎉","خطوة أخرى نحو الإتقان بإذن الله 🤍","صوتك بالقراءة عذب وجميل 🎵","تستحق وسام التميز اليوم 🎖️"];
const EVALUATION=["يميز الحروف نطقاً","يميز الحروف كتابة","يقرأ الحركات الثلاث","يقرأ المدود","يقرأ التنوين","يهجي كلمات من مقطعين","يقرأ جملة قصيرة","يكتب ما يُملى عليه"];
const MISTAKES=[
 ["الخلط بين ب ت ث","التدريب بالتنقيط والتلوين + بطاقات متجاورة يومياً."],
 ["نسيان المد","الإطالة الصوتية مع إشارة اليد + كلمات متقابلة (قال/قل)."],
 ["الخلط بين الحركات","لون لكل حركة + لعبة (أين الفتحة؟) يومياً ٥ دقائق."],
 ["تهجي الحرف لا المقطع","درّبي على المقاطع أولاً (بَا) ثم الكلمة كاملة."],
 ["القراءة السريعة الخاطئة","قاعدة: إصبع على الكلمة + تهجية همساً ثم جهراً."]];
const GUIDES=[
 ["🎯 منهجية نور البيان","التدرج: حرف ← حركة ← مد ← تنوين ← سكون ← شدة ← لام ← قراءة جمل. لا تنتقلي قبل إتقان ٩٠٪."],
 ["⏰ زمن الحصة المثالي","١٠ دقائق مراجعة + ٢٠ دقيقة درس جديد + ١٠ دقائق لعب تعليمي + ٥ دقائق واجب وتشجيع."],
 ["👩‍🏫 إدارة الحلقة","مجموعات صغيرة (٥-٧)، قائدة لكل مجموعة، تناوب على السبورة، وتعزيز فوري."],
 ["🏠 التواصل مع الأهل","بطاقة متابعة أسبوعية + تسجيل صوتي للطفل يُرسل للأهل + واجب لا يتجاوز ١٠ دقائق."]];
const STRATS=[
 ["🧩 التقطيع الصوتي","صفّقي مع كل مقطع: (كِ / تَا / ب) ثم اجمعيها."],
 ["🎨 لون الحركة","الفتحة أحمر، الضمة أخضر، الكسرة أزرق — يرى الفرق قبل أن يحفظه."],
 ["🎲 التعلم باللعب","عجلة الحروف، صيد الكلمات، وبطاقات الذاكرة — كل درس فيه لعبة."],
 ["🗣️ الترديد الجماعي ثم الفردي","الكل معاً ← صف ← فرد — يبني الثقة تدريجياً."],
 ["✋ التعلم بالحركة","ارسمي الحرف في الهواء، وشكّليه بالصلصال — تثبيت عبر الحواس."]];
const EVALLIST=[
 ["اختبار الحروف الشهري","شفوي + تحريري — يطبع ويوزع نهاية كل شهر."],
 ["بطاقة إتقان المهارة","تُلوّن نجمة عند إتقان كل مهارة — دافع بصري قوي."],
 ["التقييم الأسبوعي السريع","٥ كلمات + سطر إملاء — ١٠ دقائق فقط."]];
const TERM=[
 ["١-٢","الحروف ا-ذ","تمييز ونطق وكتابة"],["٣-٤","الحروف ر-غ","مع مراجعة"],
 ["٥-٦","الحروف ف-ي + مراجعة شاملة","اختبار الحروف"],["٧-٨","الفتحة والكسرة والضمة","قراءة مقاطع"],
 ["٩-١٠","المدود الثلاثة","كلمات ممدودة"],["١١-١٢","التنوين والسكون","إملاء مقاطع"],
 ["١٣-١٤","الشدة واللام الشمسية والقمرية","قراءة جمل"],["١٥-١٦","مراجعة + حفل إتقان","شهادات 🎓"]];
/* === 1) إدارة خطط التهجي: أدلة + شجرة + صوتيات === */
const SPELLGUIDES=[
 {t:"📖 ركيزة التهجي — الفكرة الكبرى",d:"التهجي = تحويل الحرف + الحركة إلى مقطع صوتي، ثم جمع المقاطع. القاعدة الذهبية: لا اسم الحرف بل صوته مع حركته (بَ لا باء).",level:"تأسيس"},
 {t:"🔤 مواضع الحروف (أول / وسط / آخر)",d:"درّبي بالبطاقات الثلاثة لكل حرف: بـ ـبـ ـب. لعبة: أين يجلس الحرف في الكلمة؟ مع ورقة تلوين المواضع.",level:"الحروف"},
 {t:"🟥 الحركات الثلاث",d:"فتحة = افتح فمك (بَ)، ضمة = ضم الشفتين (بُ)، كسرة = ابتسامة (بِ). لون ثابت لكل حركة + إشارة يد.",level:"الحركات"},
 {t:"〰️ المدود الثلاثة (ا / و / ي)",d:"المد = إطالة الحركة: بَا (فتحة طويلة)، بُو، بِي. قارني: قَل / قَال — بالتصفيق والمرآة.",level:"المدود"},
 {t:"ّ الشدة — الحرف المكرر",d:"الشدة = حرفان: ساكن + متحرك (بَّ = بْ + بَ). صفقتان: الأولى همس والثانية جهر. كلمات: مُعَلِّمَة، شَمْس.",level:"الشدات"},
 {t:"🌙 اللام الشمسية والقمرية",d:"قاعدة اليد: الشمسية تُخفي اللام وتُشدد ما بعدها (الشَّمس)، القمرية تُظهرها (القَمر). لوحة مقارنة يومية.",level:"اللامات"}];
const METHOD=[
 {icon:"🅰️",t:"فتح الحروف",s:"إتقان أسماء وأصوات الحروف مفردة",acts:"بطاقات خاطفة • بيت الحروف • تلوين • صلصال",need:90},
 {icon:"🔗",t:"مواضع الحروف",s:"أول / وسط / آخر الكلمة",acts:"تركيب مغناطيسي • لعبة الصيد • ورقة المواضع",need:85},
 {icon:"🟥",t:"الحركات الثلاث",s:"فتحة + ضمة + كسرة قراءة وكتابة",acts:"لون الحركة • عجلة المقاطع • إملاء مقطعين",need:85},
 {icon:"〰️",t:"المدود",s:"مد بالألف والواو والياء",acts:"إطالة صوتية • قال/قل • بطاقات متقابلة",need:85},
 {icon:"ً",t:"التنوين والسكون",s:"تنوين فتح/ضم/كسر + مقطع ساكن",acts:"جرس التنوين • تهجية مَسْجِد • إملاء",need:80},
 {icon:"ّ",t:"الشدات",s:"الحرف المشدد قراءة وتهجية",acts:"تصفيق مزدوج • مُعَلِّمَة • تفكيك الشدة",need:80},
 {icon:"🌙",t:"اللامات",s:"شمسية وقمرية + قراءة جمل",acts:"لوحة الشمس والقمر • جمل قصيرة • قصة",need:80},
 {icon:"🚀",t:"التهجي المباشر والسريع",s:"قراءة كلمات وجمل بطلاقة",acts:"مسابقة القراءة • تحدي الدقيقة • خط وإملاء",need:90}];
const SEED_AUDIO=[
 {id:"a1",title:"مخارج الحروف كاملة (عزل صوتي)",text:"ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن هـ و ي",fileData:null,fileName:null},
 {id:"a2",title:"المقاطع المفتوحة: بَ تَ ثَ",text:"بَ تَ ثَ جَ حَ خَ . بُو تُو . بِي تِي",fileData:null,fileName:null},
 {id:"a3",title:"المدود: قَال / يَقُول / كَرِيم",text:"قَال . يَقُول . كَرِيم . كِتَاب . نُور",fileData:null,fileName:null},
 {id:"a4",title:"الشدة: مُعَلِّمَة، شَمْس",text:"مُعَلِّمَة . شَمْس . قَمَر . مَسْجِد",fileData:null,fileName:null}];
const SEED_PICS=[
 {id:"p1",cat:"بيت الحروف",title:"🏠 بيت الحروف — لوحة الصف",desc:"لوحة كبيرة تُعلق في الركن: كل حرف في غرفته مع صورته.",emoji:"🏠",fileData:null,fileName:null},
 {id:"p2",cat:"البطاقات الخاطفة",title:"⚡ البطاقات الخاطفة — الحروف",desc:"مجموعة ٢٨ بطاقة للعرض السريع اليومي (٣ دقائق).",emoji:"⚡",fileData:null,fileName:null},
 {id:"p3",cat:"البطاقات الخاطفة",title:"⚡ البطاقات الخاطفة — المقاطع",desc:"مقاطع الفتح والضم والكسر للقراءة الخاطفة.",emoji:"🧩",fileData:null,fileName:null},
 {id:"p4",cat:"تلوين وخط",title:"🎨 بطاقات التلوين — الحروف",desc:"كل حرف مع رسمة، يلونها الطفل ثم يكتبه.",emoji:"🎨",fileData:null,fileName:null},
 {id:"p5",cat:"تلوين وخط",title:"✍️ بطاقات الخط — تحسين الكتابة",desc:"سطور منقطة للحروف والمقاطع والكلمات.",emoji:"✍️",fileData:null,fileName:null},
 {id:"p6",cat:"بيت الحروف",title:"🧲 لوحة المواضع الثلاثة",desc:"أول / وسط / آخر — يلصق الطفل الحرف في موضعه.",emoji:"🧲",fileData:null,fileName:null}];
const DAILYCARDS=[
 {e:"🌟",t:"نجم التهجي اليوم",d:"أتقنت التهجي بطلاقة — فخورون بك!"},
 {e:"📖",t:"قارئ الحلقة المميز",d:"قراءتك عذبة وصحيحة — استمر!"},
 {e:"✍️",t:"خطاط صغير",d:"خطك جميل ومرتب — أحسنت!"},
 {e:"🚀",t:"الأسرع تهجياً",d:"فزت بتحدي الدقيقة — بطل!"},
 {e:"🤝",t:"المتعاون اللطيف",d:"ساعدت زملاءك — خلق جميل!"},
 {e:"🌱",t:"الأكثر تطوراً",d:"تقدمك واضح هذا الأسبوع — واصل!"}];
const SEED_WS=[
 {id:"w1",title:"كيف تدرّسين نور البيان من الصفر؟",url:"",desc:"٤٥ دقيقة • التدرج + إدارة الحصة + أخطاء شائعة",dur:"45 د"},
 {id:"w2",title:"إدارة الصف وتحفيز الصغار",url:"",desc:"٣٠ دقيقة • مجموعات + تعزيز فوري + روتين الحلقة",dur:"30 د"},
 {id:"w3",title:"الخطط العلاجية عملياً",url:"",desc:"٣٥ دقيقة • تشخيص + خطة فردية + متابعة",dur:"35 د"}];

/* ===== التخزين ===== */
function seed(){return{pin:"1234",logo:null,levelProg:{},trecords:[],
 library:[
  {id:"s1",title:"كتاب نور البيان — المستوى الأول (الحروف)",level:"المستوى الأول — الحروف",desc:"الحروف الهجائية كاملة نطقاً وكتابة مع تدريبات.",fileName:null,fileData:null},
  {id:"s2",title:"كتاب نور البيان — المستوى الثاني (الحركات)",level:"المستوى الثاني — الحركات",desc:"الفتحة والضمة والكسرة مع كلمات تطبيقية.",fileName:null,fileData:null},
  {id:"s3",title:"كراسة الإملاء اليومي",level:"أوراق عمل وأنشطة",desc:"سطور إملاء متدرجة للطباعة والاستخدام اليومي.",fileName:null,fileData:null},
  {id:"s4",title:"بطاقات الحروف والكلمات",level:"أوراق عمل وأنشطة",desc:"بطاقات جاهزة للقص واللعب في الحلقة.",fileName:null,fileData:null},
  {id:"s5",title:"دليل المعلمة المختصر",level:"أدلة وخطط",desc:"منهجية التدريس والتوزيع الفصلي.",fileName:null,fileData:null}],
 children:[],plans:[],
 teachers:[{id:"t1",name:"المعلمة نورة",className:"فصل البراعم",termPct:70,mastery:82,stars:4,eval:{prep:85,manage:80,recite:90}}],
 weekly:[{id:"w1",teacherId:"t1",week:"الأسبوع ٧ — الحركات",goals:"إتقان الفتحة والضمة قراءة وكتابة",status:"منفذة ✅"}],
 workshops:SEED_WS.slice(),audio:SEED_AUDIO.slice(),pics:SEED_PICS.slice(),certs:[],
 methodStage:2,
 challenge:{week:"",text:"أن يهجي كل طفل ١٠ كلمات جديدة هذا الأسبوع",done:[]},praiseIdx:0};}
let DB;
try{DB=JSON.parse(localStorage.getItem(KEY))||seed();}catch(e){DB=seed();}
["teachers","weekly","workshops","audio","pics","certs"].forEach(function(k){if(!DB[k])DB[k]=seed()[k];});
if(!DB.levelProg)DB.levelProg={};
if(!DB.trecords)DB.trecords=[];
if(DB.methodStage==null)DB.methodStage=2;
function save(){try{localStorage.setItem(KEY,JSON.stringify(DB));}catch(e){toast("مساحة التخزين ممتلئة — صدّري نسخة ⚠️");}}
function uid(){return "x"+Date.now().toString(36)+Math.floor(Math.random()*999);}
function unlocked(){return sessionStorage.getItem("ghiras-un")==="1";}

/* ===== مساعدات ===== */
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(t._h);t._h=setTimeout(function(){t.classList.remove("show");},2300);}
function openModal(h){$("#modalBox").innerHTML=h;$("#modalBg").classList.add("show");}
function closeModal(){$("#modalBg").classList.remove("show");}
function speak(t){try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang="ar-SA";u.rate=.8;speechSynthesis.speak(u);}catch(e){toast("النطق غير مدعوم في هذا المتصفح");}}
function doPrint(html){$("#print-area").innerHTML='<div class="sheet">'+html+"</div>";setTimeout(function(){window.print();},200);}
function esc(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function logoSrc(){return DB.logo||"assets/ghiras-logo.svg";}
function refreshLogos(){$("#logoImg").src=logoSrc();$("#heroLogo").src=logoSrc();$("#footLogo").src=logoSrc();}
function fileToData(f){return new Promise(function(res,rej){if(f.size>2.5*1024*1024)return rej("big");const r=new FileReader();r.onload=function(){res(r.result);};r.onerror=rej;r.readAsDataURL(f);});}

/* ===== التنقل ===== */
function go(p){$$("#tabs .tab").forEach(function(x){x.classList.toggle("active",x.dataset.page===p);});$$(".page").forEach(function(x){x.classList.toggle("active",x.id==="page-"+p);});window.scrollTo({top:0,behavior:"smooth"});if(p==="home")renderHome();}
$$("#tabs .tab").forEach(function(b){b.onclick=function(){go(b.dataset.page);};});
$$("[data-go]").forEach(function(b){b.onclick=function(){go(b.dataset.go);};});

/* ===== البحث ===== */
let libLevel="الكل",libQuery="";
$("#globalSearch").addEventListener("input",function(e){libQuery=e.target.value.trim();$$("#tabs .tab").forEach(function(x){x.classList.toggle("active",x.dataset.page==="library");});$$(".page").forEach(function(x){x.classList.toggle("active",x.id==="page-library");});renderLib();});

/* ===== القفل ===== */
function renderLock(){$("#lockBtn").textContent=unlocked()?"🔒 خروج المعلمة":"🔓 دخول المعلمة";}
$("#lockBtn").onclick=function(){
 if(unlocked()){sessionStorage.removeItem("ghiras-un");renderLock();renderTracking();renderAdmin();renderPlans();toast("تم الخروج من وضع المعلمة 🔒");return;}
 openModal('<h3>🔑 دخول المعلمة</h3><p style="font-size:13px;color:var(--muted)">الرقم الافتراضي: 1234 (غيّريه من لوحة الإدارة)</p><label class="fl">الرقم السري</label><input class="in" type="password" id="pinIn" inputmode="numeric"><div style="margin-top:10px;display:flex;gap:8px"><button class="btn primary" id="pinGo">دخول</button><button class="btn" id="pinCancel">إلغاء</button></div>');
 $("#pinCancel").onclick=closeModal;
 $("#pinGo").onclick=function(){if($("#pinIn").value===DB.pin){sessionStorage.setItem("ghiras-un","1");closeModal();renderLock();renderTracking();renderAdmin();renderPlans();renderMotivation();toast("أهلاً بكِ معلمتنا 🌷");}else toast("الرقم غير صحيح ❌");};
};
$("#modalBg").addEventListener("click",function(e){if(e.target.id==="modalBg")closeModal();});

/* ===== الرئيسية ===== */
function childAvg(c){const v=Object.values(c.skills);return Math.round(v.reduce(function(a,b){return a+b;},0)/v.length);}
function renderHome(){const n=DB.children.length,lib=DB.library.length;
 const avg=n?Math.round(DB.children.reduce(function(a,c){return a+childAvg(c);},0)/n):0;
 const pts=DB.children.reduce(function(a,c){return a+(c.points||0);},0);
 $("#homeStats").innerHTML=[["📚",lib,"مورداً في المكتبة"],["👧",n,"طفلاً مسجلاً"],["📈",avg+"٪","متوسط الإتقان"],["⭐",pts,"نقطة تحفيز"]].map(function(s){return '<div class="card" style="text-align:center"><div style="font-size:28px">'+s[0]+'</div><b style="font-size:22px;color:var(--green-dark)">'+s[1]+'</b><br><small style="color:var(--muted)">'+s[2]+'</small></div>';}).join("");}

/* ===== المكتبة ===== */
const LIB_LEVELS=["الكل","المستوى الأول — الحروف","المستوى الثاني — الحركات","المستوى الثالث — المدود","المستوى الرابع — التنوينات","المستوى الخامس — السكون","المستوى السادس — الشدات","المستوى السابع — خاتمة التلاوة","أوراق عمل وأنشطة","أدلة وخطط"];
function renderLib(){
 $("#libFilters").innerHTML=LIB_LEVELS.map(function(l){return '<button class="chip '+(l===libLevel?"active":"")+'" data-l="'+esc(l)+'">'+esc(l)+'</button>';}).join("");
 $$("#libFilters .chip").forEach(function(c){c.onclick=function(){libLevel=c.dataset.l;renderLib();};});
 const list=DB.library.filter(function(it){return (libLevel==="الكل"||it.level===libLevel)&&(!libQuery||(it.title+" "+(it.desc||"")+" "+it.level).includes(libQuery));});
 if(!list.length){$("#libGrid").innerHTML='<div class="card">لا نتائج مطابقة — جرّبي كلمة أخرى أو أضيفي مورداً جديداً 🌱</div>';return;}
 $("#libGrid").innerHTML=list.map(function(it){
  let row='<button class="btn small soft" data-pv="'+it.id+'">👁️ معاينة</button>';
  row+=it.fileData?'<button class="btn small gold" data-dl="'+it.id+'">📥 تحميل</button>':'<button class="btn small" disabled>لا ملف بعد</button>';
  if(unlocked())row+='<button class="btn small danger" data-del="'+it.id+'">🗑️</button>';
  return '<div class="item"><span class="tag">'+esc(it.level)+'</span><h4>'+esc(it.title)+'</h4><p>'+esc(it.desc||"")+(it.fileName?'<br>📎 '+esc(it.fileName):"")+'</p><div class="row">'+row+'</div></div>';}).join("");
 $$("#libGrid [data-pv]").forEach(function(b){b.onclick=function(){previewLib(b.dataset.pv);};});
 $$("#libGrid [data-dl]").forEach(function(b){b.onclick=function(){dlLib(b.dataset.dl);};});
 $$("#libGrid [data-del]").forEach(function(b){b.onclick=function(){if(confirm("حذف هذا المورد؟")){DB.library=DB.library.filter(function(x){return x.id!==b.dataset.del;});save();renderLib();renderAdmin();toast("تم الحذف 🗑️");}};});
}
function previewLib(id){const it=DB.library.find(function(x){return x.id===id;});if(!it)return;
 let body="";
 if(it.fileData&&it.fileName&&it.fileName.toLowerCase().endsWith(".pdf"))body='<iframe src="'+it.fileData+'" style="width:100%;height:320px;border:1px solid var(--line);border-radius:10px"></iframe>';
 else if(it.fileData)body='<img src="'+it.fileData+'" style="max-width:100%;border-radius:10px;border:1px solid var(--line)">';
 else body='<p style="color:var(--muted)">لا ملف مرفق بعد — أرفقي الـ PDF من زر الإضافة أسفل المكتبة أو من لوحة الإدارة.</p>';
 openModal('<h3>📖 '+esc(it.title)+'</h3><p><span class="tag">'+esc(it.level)+'</span></p><p style="margin:8px 0">'+esc(it.desc||"")+'</p>'+body+'<div style="margin-top:10px"><button class="btn" id="pvClose">إغلاق</button></div>');
 $("#pvClose").onclick=closeModal;}
function dlLib(id){const it=DB.library.find(function(x){return x.id===id;});if(!it||!it.fileData)return;const a=document.createElement("a");a.href=it.fileData;a.download=it.fileName||"gheras-file";document.body.appendChild(a);a.click();a.remove();toast("بدأ التحميل 📥");}
$("#libAdd").onclick=function(){
 const t=$("#libTitle").value.trim();if(!t){toast("اكتبي عنوان المورد أولاً ✏️");return;}
 const f=$("#libFile").files[0];
 const push=function(fn,fd){DB.library.unshift({id:uid(),title:t,level:$("#libLevel").value,desc:$("#libDesc").value.trim(),fileName:fn,fileData:fd});save();$("#libTitle").value="";$("#libDesc").value="";$("#libFile").value="";libLevel="الكل";libQuery="";$("#globalSearch").value="";renderLib();renderAdmin();toast("تمت الإضافة للمكتبة 🎉");};
 if(f){fileToData(f).then(function(fd){push(f.name,fd);},function(){toast("الملف أكبر من ٢.٥MB — اختاري ملفاً أصغر ⚠️");});}
 else push(null,null);};

/* ===== حقيبة المعلم ===== */
function renderBag(){
 $("#guideList").innerHTML=GUIDES.map(function(g){return '<div class="item" style="margin-bottom:8px"><h4>'+esc(g[0])+'</h4><p>'+esc(g[1])+'</p></div>';}).join("");
 $("#termPlans").innerHTML='<table class="tbl"><tr><th>الأسابيع</th><th>المحتوى</th><th>ملاحظة</th></tr>'+TERM.map(function(r){return '<tr><td>'+r[0]+'</td><td>'+esc(r[1])+'</td><td>'+esc(r[2])+'</td></tr>';}).join("")+'</table>';
 $("#stratList").innerHTML=STRATS.map(function(g){return '<div class="item" style="margin-bottom:8px"><h4>'+esc(g[0])+'</h4><p>'+esc(g[1])+'</p></div>';}).join("");
 $("#evalList").innerHTML=EVALLIST.map(function(g){return '<div class="item" style="margin-bottom:8px"><h4>'+esc(g[0])+'</h4><p>'+esc(g[1])+'</p><div class="row"><button class="btn small soft" data-ev="'+esc(g[0])+'">🖨️ طباعة النموذج</button></div></div>';}).join("");
 $$("#evalList [data-ev]").forEach(function(b){b.onclick=function(){
  doPrint('<h2 style="text-align:center">🌱 غراس | '+esc(b.dataset.ev)+'</h2><p>اسم الطفل: ............ التاريخ: ..../..../....</p><table><tr><th>م</th><th>البند</th><th>ممتاز</th><th>جيد</th><th>يحتاج دعم</th></tr>'+EVALUATION.map(function(e,i){return '<tr><td>'+(i+1)+'</td><td>'+e+'</td><td></td><td></td><td></td></tr>';}).join("")+'</table><p>ملاحظات المعلمة: .................................................................</p>');};});
}
$("#printTerm").onclick=function(){doPrint('<h2 style="text-align:center">🌱 غراس | الخطة الفصلية لنور البيان</h2><table><tr><th>الأسابيع</th><th>المحتوى</th><th>ملاحظة</th></tr>'+TERM.map(function(r){return '<tr><td>'+r[0]+'</td><td>'+esc(r[1])+'</td><td>'+esc(r[2])+'</td></tr>';}).join("")+'</table>');};
$("#printPrep").onclick=function(){const L=$("#prepLesson").value||"........";
 doPrint('<h2 style="text-align:center">🌱 غراس | تحضير درس نور البيان</h2><p><b>الدرس:</b> '+esc(L)+' &nbsp; <b>التاريخ:</b> '+esc($("#prepDate").value||"..../..../....")+'</p><p><b>الأهداف:</b> '+esc($("#prepGoals").value||"")+'</p><p><b>الأنشطة والوسائل:</b> '+esc($("#prepActs").value||"")+'</p><p><b>التقويم والواجب:</b> '+esc($("#prepEval").value||"")+'</p><p>توقيع المعلمة: ............</p>');};
$("#savePrep").onclick=function(){const L=$("#prepLesson").value.trim();if(!L){toast("اكتبي اسم الدرس أولاً ✏️");return;}
 DB.library.unshift({id:uid(),title:"تحضير: "+L,level:"أدلة وخطط",desc:"أهداف: "+$("#prepGoals").value+" | أنشطة: "+$("#prepActs").value,fileName:null,fileData:null});save();renderLib();toast("حُفظ التحضير في المكتبة 💾");};

/* ===== ركن التهجي ===== */
let quizCur=null,quizOk=0,quizTot=0,wordCur=0;
function renderSpelling(){
 $("#letterCards").innerHTML=LETTERS.map(function(l){return '<button class="letter" data-l="'+l+'">'+l+'</button>';}).join("");
 $$("#letterCards .letter").forEach(function(b){b.onclick=function(){speak(b.dataset.l);};});
 $("#sylLetter").innerHTML=LETTERS.map(function(l){return '<option'+(l==="ب"?" selected":"")+'>'+l+'</option>';}).join("");
 const upd=function(){$("#sylOut").textContent=$("#sylLetter").value+$("#sylHarakah").value;};
 $("#sylLetter").onchange=upd;$("#sylHarakah").onchange=upd;upd();
 $("#evChecks").innerHTML=EVALUATION.map(function(e,i){return '<label style="display:block;font-size:14px"><input type="checkbox"> '+e+'</label>';}).join("");
 $("#mistakes").innerHTML=MISTAKES.map(function(m){return '<div class="item" style="margin-bottom:8px"><h4>'+esc(m[0])+'</h4><p>💊 '+esc(m[1])+'</p></div>';}).join("");
 newWord();
}
$("#speakAbjad").onclick=function(){speak("ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن هـ و ي");};
function newQuiz(){quizCur=LETTERS[Math.floor(Math.random()*LETTERS.length)];
 const opts={};opts[quizCur]=1;while(Object.keys(opts).length<4)opts[LETTERS[Math.floor(Math.random()*LETTERS.length)]]=1;
 $("#quizOpts").innerHTML=Object.keys(opts).sort(function(){return Math.random()-.5;}).map(function(l){return '<button data-l="'+l+'">'+l+'</button>';}).join("");
 $$("#quizOpts button").forEach(function(b){b.onclick=function(){quizTot++;if(b.dataset.l===quizCur){b.classList.add("ok");quizOk++;toast("صحيح! أحسنت 🎉");$("#quizScore").textContent="النتيجة: "+quizOk+" / "+quizTot;setTimeout(newQuiz,900);}else{b.classList.add("no");toast("حاولي مجدداً 💪");$("#quizScore").textContent="النتيجة: "+quizOk+" / "+quizTot;}};});
 speak(quizCur);}
$("#quizNew").onclick=newQuiz;
$("#quizHear").onclick=function(){if(quizCur)speak(quizCur);else newQuiz();};
$("#sylSpeak").onclick=function(){speak($("#sylOut").textContent);};
$("#sylPrint").onclick=function(){doPrint('<h2 style="text-align:center">🔤 ورقة عمل المقاطع — غراس</h2><p>لوني المقطع ثم اقرئيه:</p><table><tr><th>المقطع</th><th>اقرأ ✔</th><th>اكتب ✍️</th></tr>'+["بَ","تُ","ثِ","جَا","حُو","خِي"].map(function(s){return '<tr><td style="font-size:26px">'+s+'</td><td></td><td></td></tr>';}).join("")+'</table>');};
function newWord(){wordCur=Math.floor(Math.random()*WORDS.length);const W=WORDS[wordCur];
 $("#wordSteps").innerHTML='<div style="font-size:44px;text-align:center;color:var(--green-dark)">'+W.w+'</div><div style="text-align:center;font-size:18px;color:var(--gold-dark)">'+W.p.join(" + ")+'</div><div style="text-align:center;margin-top:6px">'+W.p.map(function(p,i){return '<button class="btn small soft" data-p="'+i+'">🔊 '+p+'</button>';}).join(" ")+'</div>';
 $$("#wordSteps [data-p]").forEach(function(b){b.onclick=function(){speak(W.p[+b.dataset.p]);};});}
$("#wordNew").onclick=newWord;
$("#wordSpeak").onclick=function(){speak(WORDS[wordCur].w);};
$("#evSave").onclick=function(){if(!unlocked()){toast("ادخلي وضع المعلمة أولاً 🔒");return;}
 const n=$("#evName").value.trim();if(!n){toast("اكتبي اسم الطفل ✏️");return;}
 const on=$$("#evChecks input:checked").length;let c=DB.children.find(function(x){return x.name===n;});
 if(!c){c={id:uid(),name:n,nick:n,skills:{spelling:0,reading:0,writing:0,dictation:0,tashkeel:0},att:{p:0,a:0},hw:0,strengths:"",needs:"",points:0,badges:[],hist:[]};DB.children.push(c);}
 c.skills.spelling=Math.round(on/EVALUATION.length*100);c.hist.push({d:new Date().toLocaleDateString("ar"),avg:childAvg(c)});save();renderTracking();renderPlans();renderMotivation();toast("حُفظ تقييم "+n+": "+on+"/"+EVALUATION.length+" ✅");};
$("#evPrint").onclick=function(){doPrint('<h2 style="text-align:center">✅ بطاقة تقييم التهجي — غراس</h2><p>الاسم: ............ التاريخ: ..../..../....</p><table><tr><th>م</th><th>المهارة</th><th>متقن ✔</th><th>يحتاج دعم</th></tr>'+EVALUATION.map(function(e,i){return '<tr><td>'+(i+1)+'</td><td>'+e+'</td><td></td><td></td></tr>';}).join("")+'</table>');};

/* ===== الخطط العلاجية ===== */
function childOpts(){if(!DB.children.length)return '<option value="">— لا أطفال بعد —</option>';return DB.children.map(function(c){return '<option value="'+c.id+'">'+esc(c.name)+'</option>';}).join("");}
function renderPlans(){
 $("#planChild").innerHTML=childOpts();$("#motChild").innerHTML=childOpts();
 $("#planSkills").innerHTML=Object.keys(SKILLS).map(function(k){return '<label style="display:inline-block;margin:4px;font-size:14px;border:1px solid var(--line);border-radius:999px;padding:4px 14px"><input type="checkbox" value="'+k+'"> '+SKILLS[k]+'</label>';}).join("");
 if(!DB.plans.length){$("#planList").innerHTML='<div class="card">لا خطط بعد — أنشئي أول خطة من النموذج 🌱</div>';return;}
 $("#planList").innerHTML=DB.plans.map(function(p){const c=DB.children.find(function(x){return x.id===p.childId;});
  let row='<button class="btn small soft" data-pp="'+p.id+'">🖨️ طباعة</button><button class="btn small gold" data-rr="'+p.id+'">📈 تسجيل نتيجة</button>';
  if(unlocked())row+='<button class="btn small danger" data-dp="'+p.id+'">🗑️</button>';
  return '<div class="item"><span class="tag g">'+esc(String(p.weeks))+' أسابيع • '+esc(p.status)+'</span><h4>'+esc(c?c.name:"طفل محذوف")+'</h4><p><b>المهارات:</b> '+p.skills.map(function(s){return SKILLS[s];}).join("، ")+'<br><b>الأهداف:</b> '+esc(p.goals)+'</p><div class="row">'+row+'</div></div>';}).join("");
 $$("#planList [data-pp]").forEach(function(b){b.onclick=function(){printPlan(b.dataset.pp);};});
 $$("#planList [data-dp]").forEach(function(b){b.onclick=function(){if(confirm("حذف الخطة؟")){DB.plans=DB.plans.filter(function(x){return x.id!==b.dataset.dp;});save();renderPlans();}};});
 $$("#planList [data-rr]").forEach(function(b){b.onclick=function(){const p=DB.plans.find(function(x){return x.id===b.dataset.rr;});
  openModal('<h3>📈 نتيجة الخطة</h3><label class="fl">مقدار التحسن</label><select class="in" id="resSel"><option>تحسن بسيط 🌱</option><option>تحسن واضح 🌿</option><option>إتقان كامل 🌳</option><option>لا تحسن بعد — تُمدد الخطة</option></select><label class="fl">ملاحظات</label><textarea class="in" id="resNote"></textarea><div style="margin-top:10px;display:flex;gap:8px"><button class="btn primary" id="resGo">حفظ</button><button class="btn" id="resCancel">إلغاء</button></div>');
  $("#resCancel").onclick=closeModal;
  $("#resGo").onclick=function(){p.status=$("#resSel").value;p.result=$("#resNote").value;save();closeModal();renderPlans();toast("سُجلت النتيجة 📈");};};});
}
function printPlan(id){const p=DB.plans.find(function(x){return x.id===id;});if(!p)return;const c=DB.children.find(function(x){return x.id===p.childId;});
 let rows="";for(let i=0;i<p.weeks;i++)rows+='<tr><td>'+(i+1)+'</td><td></td><td></td></tr>';
 doPrint('<h2 style="text-align:center">📝 الخطة العلاجية الفردية — غراس</h2><p><b>الطفل:</b> '+esc(c?c.name:"")+' &nbsp; <b>المدة:</b> '+p.weeks+' أسابيع &nbsp; <b>الحالة:</b> '+esc(p.status)+'</p><p><b>المهارات المستهدفة:</b> '+p.skills.map(function(s){return SKILLS[s];}).join("، ")+'</p><p><b>الأهداف:</b> '+esc(p.goals)+'</p><p><b>الأنشطة:</b> '+esc(p.acts)+'</p><table><tr><th>الأسبوع</th><th>ما تم تنفيذه</th><th>ملاحظة</th></tr>'+rows+'</table><p><b>النتيجة:</b> '+esc(p.result||"")+'</p>');}
$("#planSave").onclick=function(){if(!unlocked()){toast("ادخلي وضع المعلمة أولاً 🔒");return;}
 const cid=$("#planChild").value;if(!cid){toast("أضيفي طفلاً أولاً من صفحة المتابعة 👧");return;}
 const sk=$$("#planSkills input:checked").map(function(x){return x.value;});if(!sk.length){toast("حددي مهارة واحدة على الأقل 🎯");return;}
 DB.plans.unshift({id:uid(),childId:cid,weeks:+$("#planWeeks").value||4,skills:sk,goals:$("#planGoals").value,acts:$("#planActs").value,status:"جارية 🌱",result:""});save();renderPlans();toast("حُفظت الخطة العلاجية 📝");};
$("#planTemplate1").onclick=function(){$("#planGoals").value="إتقان الحروف المتشابهة (ب ت ث / ج ح خ / د ذ / ر ز / س ش / ص ض / ط ظ / ع غ / ف ق) نطقاً وكتابة وتمييزاً.";$("#planActs").value="بطاقات متجاورة + تلوين الفروق + إملاء يومي ٣ كلمات + لعبة صيد الحرف.";toast("تم تعبئة نموذج الحروف المتشابهة 📄");};
$("#planTemplate2").onclick=function(){$("#planGoals").value="إتقان المدود الثلاثة (ا و ي) قراءة وكتابة وتمييزها عن الحركة القصيرة.";$("#planActs").value="إطالة صوتية + كلمات متقابلة (قال/قل) + ورقة عمل مدود + تسميع.";toast("تم تعبئة نموذج المدود 📄");};

/* ===== المتابعة ===== */
let trackSel=null;
function renderTracking(){
 const z=$("#trackingZone");
 if(!unlocked()){z.innerHTML='<div class="card lockbox"><div class="big">🔒</div><h3>منطقة محمية لخصوصية الأطفال</h3><p style="color:var(--muted)">سجلات الأطفال لا تظهر للعامة. اضغطي «دخول المعلمة» أعلى الصفحة.</p></div>';return;}
 z.innerHTML='<div class="grid2"><div class="card"><h3>➕ سجل طفل جديد</h3><div class="frow"><div><label class="fl">اسم الطفل (خاص)</label><input class="in" id="chName"></div><div><label class="fl">الاسم المستعار (يظهر في لوحة الإنجاز)</label><input class="in" id="chNick" placeholder="مثال: نجم الحلقة ⭐"></div></div><div style="margin-top:10px"><button class="btn primary" id="chAdd">➕ إنشاء السجل</button></div><h3 style="margin-top:14px">👧 الأطفال ('+DB.children.length+')</h3><div id="chList"></div></div><div class="card" id="chDetail"><h3>📋 بطاقة الطفل</h3><p style="color:var(--muted)">اختاري طفلاً من القائمة لعرض مؤشراته وتقريره.</p></div></div>';
 $("#chAdd").onclick=function(){const n=$("#chName").value.trim();if(!n){toast("اكتبي الاسم ✏️");return;}
  DB.children.push({id:uid(),name:n,nick:$("#chNick").value.trim()||"بطل صغير 🌟",skills:{spelling:0,reading:0,writing:0,dictation:0,tashkeel:0},att:{p:0,a:0},hw:0,strengths:"",needs:"",points:0,badges:[],hist:[]});
  save();renderTracking();renderPlans();renderMotivation();toast("تم إنشاء السجل 🎉");};
 renderChList();
 if(trackSel&&DB.children.find(function(x){return x.id===trackSel;}))renderChDetail(trackSel);
 else if(DB.children[0])renderChDetail(DB.children[0].id);
}
function renderChList(){if(!$("#chList"))return;
 $("#chList").innerHTML=DB.children.length?DB.children.map(function(c){const a=childAvg(c);
  return '<div class="item" style="margin-bottom:8px"><h4>'+esc(c.name)+' <small style="color:var(--muted)">('+a+'٪)</small></h4><div class="bar"><i style="width:'+a+'%"></i></div><div class="row"><button class="btn small soft" data-ch="'+c.id+'">فتح البطاقة</button><button class="btn small danger" data-cd="'+c.id+'">🗑️</button></div></div>';}).join(""):"لا أطفال بعد.";
 $$("#chList [data-ch]").forEach(function(b){b.onclick=function(){renderChDetail(b.dataset.ch);};});
 $$("#chList [data-cd]").forEach(function(b){b.onclick=function(){if(confirm("حذف سجل الطفل نهائياً؟")){DB.children=DB.children.filter(function(x){return x.id!==b.dataset.cd;});DB.plans=DB.plans.filter(function(x){return x.childId!==b.dataset.cd;});save();trackSel=null;renderTracking();renderPlans();renderMotivation();}};});}
function renderChDetail(id){trackSel=id;const c=DB.children.find(function(x){return x.id===id;});if(!c||!$("#chDetail"))return;const avg=childAvg(c);
 let trend='<p style="font-size:12px;color:var(--muted)">سيظهر الرسم البياني بعد تقييمين أو أكثر 📈</p>';
 if(c.hist.length>1){const n=c.hist.length;const pts=c.hist.map(function(h,i){return (10+i*(180/Math.max(1,n-1)))+","+(55-h.avg*.5);}).join(" ");
  trend='<svg viewBox="0 0 200 60" style="width:100%;height:70px;background:#FCFAF3;border:1px solid var(--line);border-radius:10px"><polyline points="'+pts+'" fill="none" stroke="#5E8F7B" stroke-width="3"/></svg>';}
 $("#chDetail").innerHTML='<h3>📋 '+esc(c.name)+' — الإتقان العام '+avg+'٪</h3><div class="bar"><i style="width:'+avg+'%"></i></div>'+trend
 +Object.keys(SKILLS).map(function(k){return '<div class="skill-row"><span>'+SKILLS[k]+'</span><input type="range" min="0" max="100" value="'+c.skills[k]+'" data-sk="'+k+'" style="width:100%"><b>'+c.skills[k]+'٪</b></div>';}).join("")
 +'<div class="frow"><div><label class="fl">✅ الحضور</label><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn small soft" id="attP">+ حاضر ('+c.att.p+')</button><button class="btn small" id="attA">+ غائب ('+c.att.a+')</button></div></div><div><label class="fl">📚 الواجبات المنجزة ('+c.hw+')</label><div><button class="btn small soft" id="hwP">+ واجب</button></div></div></div>'
 +'<div class="frow"><div><label class="fl">💪 نقاط القوة</label><textarea class="in" id="chStr">'+esc(c.strengths)+'</textarea></div><div><label class="fl">🌱 يحتاج تطوير</label><textarea class="in" id="chNeed">'+esc(c.needs)+'</textarea></div></div>'
 +'<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap"><button class="btn primary" id="chSave">💾 حفظ + رصد تقدم</button><button class="btn gold" id="chReport">🖨️ طباعة التقرير الدوري</button></div>';
 $$("#chDetail [data-sk]").forEach(function(r){r.oninput=function(){c.skills[r.dataset.sk]=+r.value;r.nextElementSibling.textContent=r.value+"٪";};});
 $("#attP").onclick=function(){c.att.p++;save();renderChDetail(id);};
 $("#attA").onclick=function(){c.att.a++;save();renderChDetail(id);};
 $("#hwP").onclick=function(){c.hw++;save();renderChDetail(id);};
 $("#chSave").onclick=function(){c.strengths=$("#chStr").value;c.needs=$("#chNeed").value;c.hist.push({d:new Date().toLocaleDateString("ar"),avg:childAvg(c)});save();renderChDetail(id);renderChList();renderMotivation();renderAnalytics();renderLeaderboard();toast("حُفظ تقدم الطفل 📊");};
 $("#chReport").onclick=function(){doPrint('<h2 style="text-align:center">🌱 غراس | التقرير الدوري لمتابعة الطفل</h2><p><b>الاسم:</b> '+esc(c.name)+' &nbsp; <b>التاريخ:</b> '+new Date().toLocaleDateString("ar")+'</p><table><tr><th>المهارة</th><th>النسبة</th></tr>'+Object.keys(SKILLS).map(function(k){return '<tr><td>'+SKILLS[k]+'</td><td>'+c.skills[k]+'٪</td></tr>';}).join("")+'<tr><td><b>المتوسط العام</b></td><td><b>'+avg+'٪</b></td></tr></table><p><b>الحضور:</b> '+c.att.p+' حاضر / '+c.att.a+' غائب &nbsp; <b>الواجبات:</b> '+c.hw+'</p><p><b>نقاط القوة:</b> '+esc(c.strengths)+'</p><p><b>يحتاج تطوير:</b> '+esc(c.needs)+'</p><p>توقيع المعلمة: ............ توقيع ولي الأمر: ............</p>');};
}

/* ===== التحفيز ===== */
function weekKey(){const d=new Date();return d.getFullYear()+"-w"+Math.ceil(d.getDate()/7)+"-"+(d.getMonth()+1);}
function renderMotivation(){
 const board=DB.children.slice().sort(function(a,b){return (b.points||0)-(a.points||0);}).slice(0,10);
 $("#achBoard").innerHTML=board.length?board.map(function(c,i){return '<div class="medal"><div class="av">'+(i===0?"🥇":i===1?"🥈":i===2?"🥉":"🌟")+'</div><b>'+esc(c.nick||"بطل")+'</b><small>'+(c.points||0)+' نقطة</small><div>'+(c.badges||[]).join(" ")+'</div></div>';}).join(""):'<p style="color:var(--muted)">أضيفي أطفالاً من صفحة المتابعة لتبدأ اللوحة 🏆</p>';
 if(DB.challenge.week!==weekKey()){DB.challenge={week:weekKey(),text:DB.challenge.text,done:[]};save();}
 $("#challengeBox").innerHTML='<p><b>🎯 تحدي هذا الأسبوع:</b> '+esc(DB.challenge.text)+'</p><div class="frow"><div><input class="in" id="chText" value="'+esc(DB.challenge.text)+'"></div><div><button class="btn small soft" id="chSet">تحديث التحدي</button></div></div><div style="margin-top:8px">'
 +(DB.children.length?DB.children.map(function(c){return '<label style="display:block;font-size:14px"><input type="checkbox" data-done="'+c.id+'"'+(DB.challenge.done.includes(c.id)?" checked":"")+'> '+esc(c.nick||c.name)+' أنجز التحدي 🎉</label>';}).join(""):"لا أطفال بعد.")+'</div>';
 $("#chSet").onclick=function(){DB.challenge.text=$("#chText").value;save();renderMotivation();toast("حُدث التحدي 🎯");};
 $$("#challengeBox [data-done]").forEach(function(ch){ch.onchange=function(){const id=ch.dataset.done;
  if(ch.checked&&DB.challenge.done.indexOf(id)<0){DB.challenge.done.push(id);const c=DB.children.find(function(x){return x.id===id;});if(c)c.points=(c.points||0)+10;}
  else DB.challenge.done=DB.challenge.done.filter(function(x){return x!==id;});
  save();renderMotivation();};});
 $("#badgeBtns").innerHTML=BADGES.map(function(b,i){return '<button class="chip" data-bg="'+i+'">'+b[0]+' '+b[1]+'</button>';}).join("");
 $$("#badgeBtns .chip").forEach(function(x){x.onclick=function(){const c=DB.children.find(function(v){return v.id===$("#motChild").value;});if(!c){toast("اختاري الطفل أولاً 👧");return;}
  const em=BADGES[+x.dataset.bg][0];if(c.badges.indexOf(em)<0)c.badges.push(em);c.points=(c.points||0)+5;save();renderMotivation();renderHome();renderLeaderboard();renderAnalytics();toast("مُنح "+BADGES[+x.dataset.bg][1]+" "+em+" 🎖️");};});
 newPraise();
}
$("#motAdd").onclick=function(){const c=DB.children.find(function(v){return v.id===$("#motChild").value;});if(!c){toast("اختاري الطفل أولاً من صفحة المتابعة 👧");return;}
 c.points=(c.points||0)+(+$("#motPts").value||5);save();renderMotivation();renderHome();renderLeaderboard();renderAnalytics();toast("+"+$("#motPts").value+" نقاط لـ "+c.nick+" ⭐");};
function newPraise(){DB.praiseIdx=((DB.praiseIdx||0)+1)%PRAISE.length;$("#praiseBox").textContent="“"+PRAISE[DB.praiseIdx]+"”";}
$("#praiseNew").onclick=newPraise;
$("#certPrint").onclick=function(){const c=DB.children.find(function(v){return v.id===$("#motChild").value;});const nm=c?(c.nick||c.name):"بطلنا الصغير";
 doPrint('<div style="border:6px double #C9A45C;border-radius:18px;padding:30px;text-align:center"><div style="font-size:50px">🏆</div><h2 style="color:#9A7A35">شهادة تقدير</h2><p>تشهد <b>غراس لتحفيظ نور البيان</b> بأن</p><h3 style="font-size:28px">'+esc(nm)+'</h3><p>قد تميز في التهجي والقراءة — أحسنت يا بطل! 🌟</p><p>التاريخ: '+new Date().toLocaleDateString("ar")+'</p><p>توقيع المعلمة: ............ 🌱</p></div>');};

/* ===== الإدارة ===== */
function renderAdmin(){
 const z=$("#adminZone");
 if(!unlocked()){z.innerHTML='<div class="card lockbox"><div class="big">🔒</div><h3>لوحة الإدارة محمية</h3><p style="color:var(--muted)">ادخلي وضع المعلمة أولاً.</p></div>';return;}
 const libRows=DB.library.map(function(l){return '<div style="font-size:13px;border-bottom:1px dashed var(--line);padding:6px 0">📖 '+esc(l.title)+' '+(l.fileName?'<small style="color:var(--green-dark)">📎 '+esc(l.fileName)+'</small>':'<small style="color:#B06A5E">(بلا ملف)</small>')+'</div>';}).join("");
 const libOpts=DB.library.map(function(l){return '<option value="'+l.id+'">'+esc(l.title)+'</option>';}).join("");
 z.innerHTML='<div class="grid2"><div class="card"><h3>🖼️ شعار غراس</h3><div style="text-align:center"><img src="'+logoSrc()+'" style="height:130px;width:auto;border:2px solid var(--gold);border-radius:12px;background:#fff;padding:4px"></div>'
 +'<label class="fl">رفع شعار جديد (PNG/JPG/SVG)</label><input type="file" id="logoFile" accept="image/*" class="in">'
 +'<div style="margin-top:8px"><button class="btn soft small" id="logoReset">↺ استعادة الشعار الأصلي</button></div>'
 +'<h3 style="margin-top:14px">🔑 كلمة دخول المعلمة</h3><div class="frow"><div><input class="in" id="newPin" placeholder="رقم جديد" inputmode="numeric"></div><div><button class="btn primary small" id="pinSet" style="margin-top:22px">تغيير الرقم</button></div></div>'
 +'<h3 style="margin-top:14px">📎 إرفاق ملف لمورد في المكتبة</h3><label class="fl">المورد</label><select class="in" id="attSel">'+libOpts+'</select><label class="fl">الملف</label><input type="file" id="attFile" class="in"><div style="margin-top:8px"><button class="btn gold small" id="attGo">📎 إرفاق</button></div></div>'
 +'<div class="card"><h3>💾 النسخ الاحتياطي</h3><p style="font-size:13px;color:var(--muted)">كل البيانات محفوظة على جهازك فقط. صدّري نسخة قبل مسح بيانات المتصفح.</p>'
 +'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px"><button class="btn soft small" id="expBtn">📤 تصدير نسخة (JSON)</button><label class="btn small" style="cursor:pointer">📥 استيراد نسخة<input type="file" id="impFile" accept=".json" hidden></label><button class="btn danger small" id="wipeBtn">🗑️ مسح كل البيانات</button></div>'
 +'<h3 style="margin-top:14px">📚 موارد المكتبة ('+DB.library.length+')</h3><div style="max-height:230px;overflow:auto">'+libRows+'</div></div></div>';
 $("#logoFile").onchange=function(e){const f=e.target.files[0];if(!f)return;fileToData(f).then(function(fd){DB.logo=fd;save();refreshLogos();renderAdmin();toast("تم تحديث الشعار 🖼️");},function(){toast("الصورة كبيرة — اختاري صورة أصغر ⚠️");});};
 $("#logoReset").onclick=function(){DB.logo=null;save();refreshLogos();renderAdmin();toast("عاد الشعار الأصلي 🌱");};
 $("#pinSet").onclick=function(){const v=$("#newPin").value.trim();if(v.length<4){toast("الرقم ٤ خانات على الأقل 🔑");return;}DB.pin=v;save();toast("تم تغيير الرقم ✅");};
 $("#attGo").onclick=function(){const id=$("#attSel").value;const f=$("#attFile").files[0];if(!id||!f){toast("اختاري المورد والملف 📎");return;}
  fileToData(f).then(function(fd){const it=DB.library.find(function(x){return x.id===id;});it.fileName=f.name;it.fileData=fd;save();renderLib();renderAdmin();toast("تم إرفاق الملف 📎");},function(){toast("الملف أكبر من ٢.٥MB ⚠️");});};
 $("#expBtn").onclick=function(){const blob=new Blob([JSON.stringify(DB)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="gheras-backup.json";document.body.appendChild(a);a.click();a.remove();toast("تم التصدير 📤");};
 $("#impFile").onchange=function(e){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=function(){try{const d=JSON.parse(r.result);if(!d.library||!d.children)throw 0;DB=d;["teachers","weekly","workshops","audio","pics","certs"].forEach(function(k){if(!DB[k])DB[k]=seed()[k];});if(!DB.trecords)DB.trecords=[];if(!DB.levelProg)DB.levelProg={};if(DB.methodStage==null)DB.methodStage=2;save();refreshLogos();renderAll();toast("تم الاستيراد بنجاح 📥");}catch(err){toast("ملف غير صالح ❌");}};r.readAsText(f);};
 $("#wipeBtn").onclick=function(){if(confirm("مسح كل البيانات نهائياً؟ يُنصح بالتصدير أولاً.")){if(confirm("تأكيد أخير: سيُحذف كل شيء!")){DB=seed();save();refreshLogos();renderAll();toast("مُسحت البيانات 🗑️");}};};
}

/* ============================================================
   المزايا الجديدة — الأقسام الخمسة
   ============================================================ */
/* --- 1أ) بنك أدلة التهجي --- */
function renderSpellGuides(){
 const el=$("#spellGuides"); if(!el)return;
 el.innerHTML=SPELLGUIDES.map(function(g,i){
  return '<div class="item" style="margin-bottom:8px"><span class="tag">'+esc(g.level)+'</span><h4>'+esc(g.t)+'</h4><p>'+esc(g.d)+'</p><div class="row"><button class="btn small soft" data-sg="'+i+'">🔊 استمعي للشرح</button><button class="btn small" data-sgp="'+i+'">🖨️ ورقة تدريبية</button></div></div>';}).join("");
 Array.prototype.forEach.call(el.querySelectorAll("[data-sg]"),function(b){b.onclick=function(){var g=SPELLGUIDES[+b.dataset.sg];speak(g.t+". "+g.d);};});
 Array.prototype.forEach.call(el.querySelectorAll("[data-sgp]"),function(b){b.onclick=function(){var g=SPELLGUIDES[+b.dataset.sgp];
  doPrint('<h2 style="text-align:center">🔤 '+esc(g.t)+' — غراس</h2><p>'+esc(g.d)+'</p><table><tr><th>الكلمة</th><th>التهجية</th><th>✔</th></tr>'+["بَاب|بَا + ب","نُور|نُو + ر","كِتَاب|كِ + تَا + ب","مَسْجِد|مَسْ + جِ + د"].map(function(r){var a=r.split("|");return '<tr><td style="font-size:22px">'+a[0]+'</td><td>'+a[1]+'</td><td></td></tr>';}).join("")+'</table><p>اسم الطفل: ............ التاريخ: ..../..../....</p>');};});
}
/* --- 1ب) الوسائط المسموعة --- */
function renderAudio(){
 const el=$("#audioList"); if(!el)return;
 if(!DB.audio.length){el.innerHTML='<p style="color:var(--muted)">لا مقاطع بعد.</p>';return;}
 el.innerHTML=DB.audio.map(function(a){
  var inner=a.fileData?'<audio controls src="'+a.fileData+'" style="width:100%"></audio>':'<div><button class="btn small soft" data-play="'+a.id+'">🔊 تشغيل (عزل صوتي بدون موسيقى)</button> <button class="btn small" data-share="'+a.id+'">📤 مشاركة</button>'+(unlocked()?(' <button class="btn small danger" data-adel="'+a.id+'">🗑️</button>'):"")+'</div>';
  return '<div class="audio-row" style="display:block"><b>🎙️ '+esc(a.title)+'</b><small>'+esc(a.text||a.fileName||"ملف صوتي مرفوع")+'</small><div style="margin-top:6px">'+inner+'</div></div>';}).join("");
 Array.prototype.forEach.call(el.querySelectorAll("[data-play]"),function(b){b.onclick=function(){var a=DB.audio.find(function(x){return x.id===b.dataset.play;});if(a)speak(a.text||a.title);};});
 Array.prototype.forEach.call(el.querySelectorAll("[data-share]"),function(b){b.onclick=function(){var a=DB.audio.find(function(x){return x.id===b.dataset.share;});var t="🎧 "+a.title+" — غراس نور البيان: "+(a.text||"");if(navigator.share){navigator.share({title:a.title,text:t}).catch(function(){});}else if(navigator.clipboard){navigator.clipboard.writeText(t).then(function(){toast("نُسخ نص المقطع للمشاركة 📋");});}else toast("المشاركة غير مدعومة هنا");};});
 Array.prototype.forEach.call(el.querySelectorAll("[data-adel]"),function(b){b.onclick=function(){if(confirm("حذف المقطع؟")){DB.audio=DB.audio.filter(function(x){return x.id!==b.dataset.adel;});save();renderAudio();}};});
}
/* --- 1ج) شجرة المنهج --- */
function renderMethod(){
 const t=$("#methodTree"); if(!t)return;
 t.innerHTML=METHOD.map(function(m,i){
  var cls=i<DB.methodStage?"done":(i===DB.methodStage?"current":"");
  return '<div class="tnode '+cls+'" data-m="'+i+'"><div class="st">'+m.icon+'</div><b>'+(i+1)+'. '+esc(m.t)+'</b><small>'+esc(m.s)+'</small><br><span class="mv">'+(i<DB.methodStage?"✔ متقنة":i===DB.methodStage?"📍 المهارة الحالية":"🔒 قادمة")+'</span></div>';}).join("");
 Array.prototype.forEach.call(t.querySelectorAll("[data-m]"),function(n){n.onclick=function(){DB.methodStage=+n.dataset.m;save();renderMethod();};});
 var m=METHOD[DB.methodStage]||METHOD[0];
 $("#methodDetail").innerHTML='<div class="item"><span class="tag g">المهارة الحالية: '+esc(m.t)+'</span><h4>'+m.icon+' '+esc(m.t)+'</h4><p><b>الهدف:</b> '+esc(m.s)+'<br><b>الأنشطة:</b> '+esc(m.acts)+'<br><b>معيار الانتقال:</b> إتقان '+m.need+'٪ على الأقل.</p><div class="row"><button class="btn small soft" id="mHear">🔊 استمعي للمهارة</button><button class="btn small gold" id="mNext">⏭️ ترقية للمرحلة التالية</button></div></div>';
 var h=$("#mHear"); if(h)h.onclick=function(){speak("المرحلة الحالية: "+m.t+". "+m.s+". الأنشطة: "+m.acts);};
 var nx=$("#mNext"); if(nx)nx.onclick=function(){if(DB.methodStage<METHOD.length-1){DB.methodStage++;save();renderMethod();toast("انتقلتِ للمرحلة التالية 🌳");}else toast("اكتمل المسار — حفل الإتقان 🎓");};
}
/* --- 2أ) حقيبة: نماذج الطباعة --- */
const PRINT_MODELS=[
 {id:"prep",t:"📝 تحضير الدرس",d:"الأهداف + الأنشطة + التقويم"},
 {id:"att",t:"📋 سجل الحضور والغياب",d:"٣٠ اسماً + أيام الأسبوع"},
 {id:"daily",t:"📊 سجل الإتقان اليومي",d:"متابعة مهارات كل طفل يومياً"},
 {id:"indiv",t:"👧 التقييم الفردي للطفل",d:"بطاقة مستوى + خطة دعم"}];
function renderPrintModels(){
 const el=$("#printModels"); if(!el)return;
 el.innerHTML=PRINT_MODELS.map(function(m){return '<div class="item"><h4>'+esc(m.t)+'</h4><p>'+esc(m.d)+'</p><div class="row"><button class="btn small gold" data-pm="'+m.id+'">🖨️ طباعة</button></div></div>';}).join("");
 Array.prototype.forEach.call(el.querySelectorAll("[data-pm]"),function(b){b.onclick=function(){printModel(b.dataset.pm);};});
}
function printModel(id){
 if(id==="prep"){if($("#prepLesson"))$("#printPrep").click();return;}
 if(id==="att"){var rows="";for(var i=1;i<=15;i++)rows+='<tr><td>'+i+'</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>';
  doPrint('<h2 style="text-align:center">📋 سجل الحضور والغياب — غراس</h2><p>الفصل: ............ الشهر: ............ المعلمة: ............</p><table><tr><th>م</th><th>الاسم</th><th>السبت</th><th>الأحد</th><th>الاثنين</th><th>الثلاثاء</th><th>الأربعاء</th></tr>'+rows+'</table>');}
 if(id==="daily"){var r2="";for(var j=1;j<=10;j++)r2+='<tr><td>'+j+'</td><td></td><td></td><td></td><td></td><td></td></tr>';
  doPrint('<h2 style="text-align:center">📊 سجل الإتقان اليومي — غراس</h2><p>المهارة: ............ التاريخ: ..../..../....</p><table><tr><th>م</th><th>الاسم المستعار</th><th>قرأ ✔</th><th>هجى ✔</th><th>كتب ✔</th><th>ملاحظة</th></tr>'+r2+'</table>');}
 if(id==="indiv"){doPrint('<h2 style="text-align:center">👧 نموذج التقييم الفردي للطفل — غراس</h2><p>الاسم: ............ العمر: .... الفصل: ............ التاريخ: ..../..../....</p><table><tr><th>المهارة</th><th>متقن</th><th>جيد</th><th>يحتاج دعم</th></tr>'+Object.keys(SKILLS).map(function(k){return '<tr><td>'+SKILLS[k]+'</td><td></td><td></td><td></td></tr>';}).join("")+'</table><p>نقاط القوة: ..............................<br>الخطة المقترحة: ..............................<br>توقيع المعلمة: ............ توقيع الموجهة: ............</p>');}
}
function renderBagWeekly(){
 const el=$("#bagWeekly"); if(!el)return;
 if(!DB.weekly.length){el.innerHTML='<p style="color:var(--muted)">لا خطط أسبوعية بعد — تُضاف من صفحة الإشراف.</p>';return;}
 el.innerHTML='<table class="tbl"><tr><th>الأسبوع</th><th>المعلمة</th><th>الأهداف</th><th>الحالة</th></tr>'+DB.weekly.map(function(w){var tc=DB.teachers.find(function(x){return x.id===w.teacherId;});return '<tr><td>'+esc(w.week)+'</td><td>'+esc(tc?tc.name:"—")+'</td><td>'+esc(w.goals)+'</td><td>'+esc(w.status)+'</td></tr>';}).join("")+'</table>';
}
/* --- 5) المكتبة المصورة + بحث متطور --- */
let picCat="الكل";
function renderPics(){
 const g=$("#picGrid"),f=$("#picFilters"); if(!g)return;
 var cats=["الكل","بيت الحروف","البطاقات الخاطفة","تلوين وخط"];
 if(f)f.innerHTML=cats.map(function(c){return '<button class="chip '+(c===picCat?"active":"")+'" data-pc="'+c+'">'+c+'</button>';}).join("");
 if(f)Array.prototype.forEach.call(f.querySelectorAll("[data-pc]"),function(b){b.onclick=function(){picCat=b.dataset.pc;renderPics();};});
 var list=DB.pics.filter(function(p){return picCat==="الكل"||p.cat===picCat;});
 g.innerHTML=list.map(function(p){
  var vis=p.fileData?'<img src="'+p.fileData+'" alt="'+esc(p.title)+'">':'<div style="font-size:64px;text-align:center;background:var(--gold-soft);border-radius:10px;padding:20px">'+p.emoji+'</div>';
  return '<div class="item pic-card"><span class="tag">'+esc(p.cat)+'</span><h4>'+esc(p.title)+'</h4>'+vis+'<p>'+esc(p.desc)+(p.fileName?'<br>📎 '+esc(p.fileName):"")+'</p><div class="row"><button class="btn small soft" data-picpr="'+p.id+'">🖨️ طباعة</button>'+(p.fileData?'<button class="btn small gold" data-picdl="'+p.id+'">📥 تحميل</button>':"")+'</div></div>';}).join("")||'<div class="card">لا صور في هذا التصنيف.</div>';
 Array.prototype.forEach.call(g.querySelectorAll("[data-picpr]"),function(b){b.onclick=function(){var p=DB.pics.find(function(x){return x.id===b.dataset.picpr;});
  doPrint('<h2 style="text-align:center">'+esc(p.title)+' — غراس</h2>'+(p.fileData?'<div style="text-align:center"><img src="'+p.fileData+'" style="max-width:100%"></div>':'<div style="font-size:90px;text-align:center">'+p.emoji+'</div>')+'<p>'+esc(p.desc)+'</p><table><tr>'+LETTERS.slice(0,7).map(function(L){return '<td style="font-size:26px">'+L+'</td>';}).join("")+'</tr><tr>'+LETTERS.slice(0,7).map(function(){return '<td>لوّن ✍️</td>';}).join("")+'</tr></table>');};});
 Array.prototype.forEach.call(g.querySelectorAll("[data-picdl]"),function(b){b.onclick=function(){var p=DB.pics.find(function(x){return x.id===b.dataset.picdl;});if(!p||!p.fileData)return;var a=document.createElement("a");a.href=p.fileData;a.download=p.fileName||"gheras-pic";document.body.appendChild(a);a.click();a.remove();};});
}
function renderAdvSearch(){
 const q=$("#advSearch"),ty=$("#advType"),box=$("#advResults"); if(!q||!box)return;
 const run=function(){
  var s=q.value.trim(),t=ty.value,pool=[];
  DB.library.forEach(function(l){pool.push({k:"library",t:l.title,d:l.desc||l.level});});
  SPELLGUIDES.forEach(function(g){pool.push({k:"guide",t:g.t,d:g.d});});
  STRATS.forEach(function(g){pool.push({k:"strat",t:g[0],d:g[1]});});
  DB.workshops.forEach(function(w){pool.push({k:"workshop",t:w.title,d:w.desc});});
  DB.audio.forEach(function(a){pool.push({k:"audio",t:a.title,d:a.text||""});});
  DB.pics.forEach(function(p){pool.push({k:"pic",t:p.title,d:p.desc});});
  if(!s){box.innerHTML='<small style="color:var(--muted)">اكتبي كلمة للبحث الفوري في كل الأقسام...</small>';return;}
  var res=pool.filter(function(p){return (t==="all"||p.k===t||(t==="library"&&p.k==="pic"))&&(p.t+" "+p.d).includes(s);}).slice(0,12);
  box.innerHTML=res.length?res.map(function(r){return '<div class="audio-row" style="display:block"><b>'+esc(r.t)+'</b><small>'+esc(r.d).slice(0,120)+'</small></div>';}).join(""):'<small style="color:var(--muted)">لا نتائج — جرّبي: مد، شدة، بطاقات، حضور...</small>';
 };
 q.oninput=run; ty.onchange=run; run();
}
/* --- 2ب) السجل المهني للمعلمة: ٥ محاور قابلة للقياس --- */
const TEVAL_AXES=[
 {k:"prep",t:"📝 جودة التحضير وارتباطه بأهداف المستوى",h:"هل الأهداف من مستوى نور البيان الحالي؟ الأنشطة والوسائل والتقويم موثقة؟"},
 {k:"tahji",t:"🔤 إتقان تطبيق التهجي",h:"صوت الحرف مع حركته لا اسمه، مقاطع ثم كلمات، ترديد جماعي ثم فردي"},
 {k:"explain",t:"💡 جودة شرح القاعدة وتصحيح الأخطاء",h:"تبسيط + مثال متقابل + تصحيح فوري لطيف + إعادة التسميع"},
 {k:"plans",t:"📝 تنفيذ الخطط العلاجية",h:"خطط الفئة الضعيفة منفذة وموثقة؟ أُعيد التقييم في موعده؟"},
 {k:"commit",t:"✅ الالتزام بالتوصيات الإشرافية",h:"توصيات الزيارة السابقة: نُفذت أم لا؟ وما الدليل؟"}];
function trecordsFor(tid){return DB.trecords.filter(function(r){return r.teacherId===tid;}).sort(function(a,b){return a.visitNo-b.visitNo;});}
function travg(r){var v=[r.scores.prep,r.scores.tahji,r.scores.explain,r.scores.plans,r.scores.commit];return Math.round(v.reduce(function(a,b){return a+(+b||0);},0)/v.length);}
function tlevelName(a){return a>=90?"🏆 خبيرة":a>=80?"🌳 متقنة":a>=70?"🌿 نامية":a>=60?"🌱 مبتدئة — تحتاج دعماً":"⚠️ حرجة — خطة تطوير عاجلة";}
var trecSel=null;
function renderTrecords(){
 var z=$("#trecordZone"); if(!z)return;
 if(!unlocked()){z.innerHTML='<p style="color:var(--muted)">🔒 ادخلي وضع المعلمة لعرض السجلات المهنية.</p>';return;}
 if(!DB.teachers.length){z.innerHTML='<p style="color:var(--muted)">أضيفي معلمة أولاً من الأعلى ليُنشأ سجلها المهني.</p>';return;}
 if(!trecSel||!DB.teachers.find(function(t){return t.id===trecSel;}))trecSel=DB.teachers[0].id;
 var t=DB.teachers.find(function(x){return x.id===trecSel;});
 var recs=trecordsFor(t.id);
 var first=recs[0],last=recs[recs.length-1];
 var delta=recs.length>1?(travg(last)-travg(first)):0;
 var openRecs=[];recs.forEach(function(r){(r.recs||[]).forEach(function(o,i){if(!o.done)openRecs.push({r:r,o:o,ri:i});});});
 var h='<div class="frow"><div><label class="fl">المعلمة</label><select class="in" id="trTeacher">'
  +DB.teachers.map(function(x){return '<option value="'+x.id+'"'+(x.id===trecSel?" selected":"")+'>'+esc(x.name)+' — '+esc(x.className||"")+'</option>';}).join("")+'</select></div>'
  +'<div><label class="fl">ملخص التطور</label><div class="kv"><span class="pill">الزيارات: '+recs.length+'</span>'
  +(last?'<span class="pill">الأخير: '+travg(last)+'٪ ('+tlevelName(travg(last))+')</span>':"")
  +(recs.length>1?'<span class="pill">التطور: '+(delta>=0?"+":"")+delta+' نقطة '+(delta>=0?"📈":"📉")+'</span>':"")+'</div></div></div>';
 if(recs.length>1){
  var pts=recs.map(function(r,i){return (10+i*(180/Math.max(1,recs.length-1)))+","+(55-travg(r)*.5);}).join(" ");
  h+='<svg viewBox="0 0 200 60" style="width:100%;height:70px;background:#FCFAF3;border:1px solid var(--line);border-radius:10px;margin:8px 0"><polyline points="'+pts+'" fill="none" stroke="#5E8F7B" stroke-width="3"/>'
   +recs.map(function(r,i){var x=10+i*(180/Math.max(1,recs.length-1)),y=55-travg(r)*.5;return '<circle cx="'+x+'" cy="'+y+'" r="4" fill="#C9A45C"><title>زيارة '+r.visitNo+': '+travg(r)+'٪</title></circle>';}).join("")+'</svg>';
  h+='<p style="font-size:12.5px;color:var(--muted)">الأول: '+travg(first)+'٪ ('+first.date+') ← الأخير: '+travg(last)+'٪ ('+last.date+') — الفرق يُحسب تلقائياً ويُطبع في التقرير.</p>';
 }
 if(openRecs.length)h+='<div class="card" style="margin:10px 0;background:#FFFDF6"><h3>📌 توصيات مفتوحة تتحول لخطوات ('+openRecs.length+')</h3>'
  +openRecs.slice(0,8).map(function(e){return '<label class="rec-li"><input type="checkbox" data-openrec="'+e.r.id+':'+e.ri+'"> <span><b>'+esc(e.o.text)+'</b> <small style="color:var(--muted)">— من زيارة '+e.r.visitNo+' ('+esc(e.r.date)+')</small></span></label>';}).join("")+'</div>';
 h+='<div class="card" style="margin-top:10px"><h3>➕ رصد زيارة إشرافية جديدة — زيارة '+(recs.length+1)+'</h3>'
  +'<div class="frow"><div><label class="fl">المستوى المشاهَد</label><select class="in" id="trLevel">'+LIB_LEVELS.filter(function(l){return l.indexOf("المستوى")===0;}).map(function(l){return '<option>'+esc(l)+'</option>';}).join("")+'</select></div>'
  +'<div><label class="fl">الدرس المشاهَد + التاريخ</label><div style="display:flex;gap:6px"><input class="in" id="trLesson" placeholder="مثال: المد بالألف"><input class="in" type="date" id="trDate" style="max-width:150px"></div></div></div>'
  +'<div class="axis-grid" style="margin-top:8px">'+TEVAL_AXES.map(function(a){return '<div class="axis"><label>'+a.t+' <b data-val="'+a.k+'">75٪</b></label><small>'+a.h+'</small><input type="range" min="0" max="100" value="75" step="5" data-ax="'+a.k+'"></div>';}).join("")+'</div>'
  +'<div class="frow"><div><label class="fl">💪 نقاط القوة</label><textarea class="in" id="trStr" placeholder="ما أتقنته المعلمة..."></textarea></div><div><label class="fl">🌱 تحتاج تطوير</label><textarea class="in" id="trNeed" placeholder="..."></textarea></div></div>'
  +'<label class="fl">📌 التوصيات — سطر لكل توصية (تتحول لخطوات تُتابَع في الزيارة القادمة)</label><textarea class="in" id="trRecs" placeholder="مثال:&#10;ربط التحضير بهدف المستوى الثالث كتابة&#10;تطبيق التهجي مقطعاً مقطعاً قبل الكلمة"></textarea>'
  +'<div class="frow"><div><label class="fl">📅 موعد إعادة التقييم / المتابعة</label><input class="in" type="date" id="trNext"></div><div><label class="fl">إجراءات</label><div style="display:flex;gap:8px;margin-top:4px;flex-wrap:wrap"><button class="btn primary" id="trSave">💾 حفظ الزيارة</button><button class="btn soft small" id="trPrint">🖨️ طباعة السجل المهني</button><button class="btn small" id="trDemo" title="ينشئ زيارتين تجريبيتين لمعاينة المنحنى والتطور">🧪 مثال تجريبي</button></div></div></div></div>';
 h+='<div style="margin-top:10px">'+(recs.length?recs.slice().reverse().map(function(r){
   var a=travg(r);var prevR=recs[recs.indexOf(r)-1];var d=prevR?(a-travg(prevR)):0;
   return '<div class="trec"><div class="thead"><span class="vbadge'+(d>0?" up":"")+'">زيارة '+r.visitNo+' • '+a+'٪ '+(d?(d>0?"📈 +":"📉 ")+d:"🆕 أولى")+'</span><b>'+esc(r.date)+'</b><small style="color:var(--muted)">'+esc(r.level||"")+' — '+esc(r.lesson||"")+'</small><span style="margin-inline-start:auto;display:flex;gap:6px"><button class="btn small soft" data-trp="'+r.id+'">🖨️</button>'+(unlocked()?'<button class="btn small danger" data-trd="'+r.id+'">🗑️</button>':"")+'</span></div>'
   +TEVAL_AXES.map(function(ax){var v=r.scores[ax.k]||0;return '<div class="hbar'+(v<60?" low":"")+'"><span>'+ax.t+'</span><div class="tr"><i style="width:'+v+'%"></i></div><b>'+v+'٪</b></div>';}).join("")
   +'<div class="kv"><span class="pill">'+tlevelName(a)+'</span>'+(r.nextDate?'<span class="pill">إعادة التقييم: '+esc(r.nextDate)+'</span>':"")+'</div>'
   +((r.strengths||r.needs)?'<p style="font-size:12.5px"><b>💪 القوة:</b> '+esc(r.strengths||"—")+'<br><b>🌱 للتطوير:</b> '+esc(r.needs||"—")+'</p>':"")
   +((r.recs||[]).length?'<div style="font-size:12.5px"><b>📌 التوصيات وخطواتها:</b>'+r.recs.map(function(o){return '<div class="rec-li'+(o.done?" done":"")+'">'+(o.done?"✔":"○")+' '+esc(o.text)+'</div>';}).join("")+'</div>':"")
   +'</div>';}).join(""):'<div class="card">لا زيارات بعد — رصد أول زيارة يُنشئ خط الأساس للمقارنة 🌱</div>')+'</div>';
 z.innerHTML=h;
 $("#trTeacher").onchange=function(){trecSel=this.value;renderTrecords();};
 Array.prototype.forEach.call(z.querySelectorAll("[data-val]"),function(){});
 Array.prototype.forEach.call(z.querySelectorAll("[data-ax]"),function(r){r.oninput=function(){var b=z.querySelector('[data-val="'+r.dataset.ax+'"]');if(b)b.textContent=r.value+"٪";};});
 Array.prototype.forEach.call(z.querySelectorAll("[data-openrec]"),function(c){c.onchange=function(){var p=c.dataset.openrec.split(":"),rid=p[0],ix=+p[1];var rc=DB.trecords.find(function(x){return x.id===rid;});if(rc&&rc.recs[ix]){rc.recs[ix].done=c.checked;save();renderTrecords();toast(c.checked?"✔ أُنجزت خطوة التطوير":"أُعيد فتح الخطوة");}};});
 Array.prototype.forEach.call(z.querySelectorAll("[data-trd]"),function(b){b.onclick=function(){if(confirm("حذف هذه الزيارة؟")){DB.trecords=DB.trecords.filter(function(x){return x.id!==b.dataset.trd;});save();renderTrecords();renderSupervisor();}};});
 Array.prototype.forEach.call(z.querySelectorAll("[data-trp]"),function(b){b.onclick=function(){printTrecord(b.dataset.trp);};});
 $("#trSave").onclick=function(){
  var sc={};TEVAL_AXES.forEach(function(a){var el=z.querySelector('[data-ax="'+a.k+'"]');sc[a.k]=el?+el.value:75;});
  var recLines=$("#trRecs").value.split("\n").map(function(s){return s.trim();}).filter(Boolean).map(function(s){return {text:s,done:false};});
  DB.trecords.push({id:uid(),teacherId:t.id,visitNo:recs.length+1,date:$("#trDate").value||new Date().toLocaleDateString("ar"),level:$("#trLevel").value,lesson:$("#trLesson").value.trim(),scores:sc,strengths:$("#trStr").value.trim(),needs:$("#trNeed").value.trim(),recs:recLines,nextDate:$("#trNext").value||""});
  var nr=DB.trecords[DB.trecords.length-1];var avg=travg(nr);
  t.proAvg=avg; t.proVisits=recs.length+1;
  t.eval={prep:sc.prep,manage:Math.round((sc.plans+sc.commit)/2),recite:Math.round((sc.tahji+sc.explain)/2)};
  t.stars=avg>=90?5:avg>=80?4:avg>=70?3:avg>=60?2:1;t.mastery=Math.max(t.mastery||0,Math.min(100,avg));
  save();renderTrecords();renderSupervisor();renderAnalytics();toast("حُفظت الزيارة "+nr.visitNo+" — المتوسط "+avg+"٪ 📁");
 };
 $("#trPrint").onclick=function(){printTeacherRecord(t.id);};
 $("#trDemo").onclick=function(){
  if(recs.length){toast("يوجد زيارات مسجلة — المثال يعمل على سجل فارغ فقط 🧪");return;}
  if(!confirm("إنشاء زيارتين تجريبيتين لـ "+t.name+" لمعاينة المنحنى والتطور؟ (يمكن حذف أي زيارة لاحقاً 🗑️)"))return;
  DB.trecords.push({id:uid(),teacherId:t.id,visitNo:1,date:"قبل أسبوعين",level:"المستوى الثالث — المدود",lesson:"المد بالألف",scores:{prep:60,tahji:55,explain:65,plans:50,commit:70},strengths:"حماس وتفاعل جيد مع الأطفال.",needs:"ربط التحضير بأهداف المستوى، والتهجي مقطعاً مقطعاً.",recs:[{text:"كتابة هدف المستوى نصاً أعلى التحضير",done:true},{text:"تطبيق التهجي: مقطع ثم كلمة (بَا + ب = بَاب)",done:false},{text:"تصحيح فوري لطيف وإعادة التسميع الفردي",done:false}],nextDate:""});
  DB.trecords.push({id:uid(),teacherId:t.id,visitNo:2,date:"اليوم",level:"المستوى الثالث — المدود",lesson:"المد بالواو والياء",scores:{prep:80,tahji:75,explain:80,plans:70,commit:85},strengths:"تحسن واضح في ربط التحضير والتهجي المقطعي.",needs:"توثيق الخطط العلاجية وإعادة التقييم بموعدها.",recs:[{text:"توثيق تنفيذ الخطة العلاجية أسبوعياً",done:false},{text:"سطر إملاء يومي من كلمات المد",done:false}],nextDate:""});
  var l2=DB.trecords[DB.trecords.length-1];var a2=travg(l2);
  t.proAvg=a2;t.proVisits=2;t.eval={prep:80,manage:Math.round((70+85)/2),recite:Math.round((75+80)/2)};t.stars=a2>=90?5:a2>=80?4:a2>=70?3:2;
  save();renderTrecords();renderSupervisor();renderAnalytics();toast("🧪 أُنشئت زيارتان تجريبيتان — لاحظي المنحنى والتطور");
 };
}
function printTrecord(rid){var r=DB.trecords.find(function(x){return x.id===rid;});if(!r)return;var t=DB.teachers.find(function(x){return x.id===r.teacherId;});var a=travg(r);
 doPrint('<h2 style="text-align:center">📁 تقرير زيارة إشرافية — غراس</h2><p><b>المعلمة:</b> '+esc(t?t.name:"")+' &nbsp; <b>الفصل:</b> '+esc(t?(t.className||""):"")+' &nbsp; <b>زيارة:</b> '+r.visitNo+' &nbsp; <b>التاريخ:</b> '+esc(r.date)+'</p><p><b>المستوى:</b> '+esc(r.level||"")+' &nbsp; <b>الدرس:</b> '+esc(r.lesson||"")+'</p><table><tr><th>المحور</th><th>الدرجة</th></tr>'+TEVAL_AXES.map(function(ax){return '<tr><td>'+esc(ax.t)+'</td><td>'+(r.scores[ax.k]||0)+'٪</td></tr>';}).join("")+'<tr><td><b>المتوسط المهني</b></td><td><b>'+a+'٪ — '+tlevelName(a)+'</b></td></tr></table><p><b>القوة:</b> '+esc(r.strengths||"—")+'</p><p><b>للتطوير:</b> '+esc(r.needs||"—")+'</p><p><b>التوصيات:</b> '+(r.recs||[]).map(function(o){return (o.done?"✔ ":"○ ")+esc(o.text);}).join(" • ")+'</p><p><b>إعادة التقييم:</b> '+esc(r.nextDate||"—")+'</p><p>توقيع المشرفة: ............ توقيع المعلمة: ............</p>');}
function printTeacherRecord(tid){var t=DB.teachers.find(function(x){return x.id===tid;});if(!t)return;var recs=trecordsFor(tid);
 doPrint('<h2 style="text-align:center">📁 السجل المهني التراكمي — '+esc(t.name)+'</h2><p><b>الفصل:</b> '+esc(t.className||"")+' &nbsp; <b>الزيارات:</b> '+recs.length+' &nbsp; <b>التاريخ:</b> '+new Date().toLocaleDateString("ar")+'</p><table><tr><th>زيارة</th><th>التاريخ</th><th>تحضير</th><th>تهجي</th><th>شرح</th><th>خطط</th><th>التزام</th><th>المتوسط</th></tr>'+recs.map(function(r){return '<tr><td>'+r.visitNo+'</td><td>'+esc(r.date)+'</td><td>'+r.scores.prep+'٪</td><td>'+r.scores.tahji+'٪</td><td>'+r.scores.explain+'٪</td><td>'+r.scores.plans+'٪</td><td>'+r.scores.commit+'٪</td><td><b>'+travg(r)+'٪</b></td></tr>';}).join("")+'</table>'+(recs.length>1?'<p><b>التطور:</b> من '+travg(recs[0])+'٪ إلى '+travg(recs[recs.length-1])+'٪ — الفرق '+(travg(recs[recs.length-1])-travg(recs[0]))+' نقطة '+(travg(recs[recs.length-1])>=travg(recs[0])?"📈 تحسن":"📉 يحتاج وقفة")+'</p>':"")+'<p><b>المستوى المهني الحالي:</b> '+tlevelName(recs.length?travg(recs[recs.length-1]):0)+'</p><p>توقيع المشرفة: ............ توقيع المعلمة: ............</p>');}
/* --- 2ب) الإشراف: معلمات + خطط أسبوعية + تقييم --- */
function renderSupervisor(){
 const z=$("#supervisorZone"); if(!z)return;
 if(!unlocked()){z.innerHTML='<div class="card lockbox"><div class="big">🔒</div><h3>لوحة الإشراف محمية</h3><p style="color:var(--muted)">ادخلي وضع المعلمة أولاً من أعلى الصفحة.</p></div>';renderWorkshops();renderTrecords();return;}
 z.innerHTML='<div class="grid2"><div class="card"><h3>👩‍🏫 المعلمات ('+DB.teachers.length+')</h3><div id="tList"></div>'
 +'<div class="frow"><div><label class="fl">اسم المعلمة</label><input class="in" id="tName" placeholder="مثال: أ. سارة"></div><div><label class="fl">الفصل</label><input class="in" id="tClass" placeholder="مثال: فصل الفراشات"></div></div>'
 +'<div style="margin-top:8px"><button class="btn primary small" id="tAdd">➕ إضافة معلمة</button></div></div>'
 +'<div class="card"><h3>📅 خطة أسبوعية جديدة</h3><div class="frow"><div><label class="fl">المعلمة</label><select class="in" id="wTeacher"></select></div><div><label class="fl">الأسبوع</label><input class="in" id="wWeek" placeholder="مثال: الأسبوع ٨"></div></div>'
 +'<label class="fl">أهداف الأسبوع</label><textarea class="in" id="wGoals" placeholder="إتقان..."></textarea><div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn primary small" id="wAdd">💾 حفظ الخطة</button></div><h3 style="margin-top:12px">📂 الخطط ('+DB.weekly.length+')</h3><div id="wList"></div></div></div>';
 var tl=$("#tList");
 tl.innerHTML=DB.teachers.map(function(t){
  var ev=t.eval||{prep:70,manage:70,recite:70}; var avg=Math.round((ev.prep+ev.manage+ev.recite)/3);
  var _prs=trecordsFor(t.id); var _pl=_prs[_prs.length-1]; var pavg=_pl?travg(_pl):null;
  return '<div class="item" style="margin-bottom:8px"><h4>'+esc(t.name)+' — '+esc(t.className||"")+'</h4><div class="kv"><span class="pill">إنجاز الفصلية: '+(t.termPct||0)+'٪</span><span class="pill">إتقان الفصل: '+(t.mastery||0)+'٪</span><span class="pill">التقييم: '+avg+'٪ <span class="stars">'+"★".repeat(t.stars||0)+'</span></span><span class="pill">📁 المهني: '+(pavg==null?"—":pavg+'٪')+'</span></div>'
  +'<div class="hbar"><span>تحضير والتزام</span><div class="tr"><i style="width:'+ev.prep+'%"></i></div><b>'+ev.prep+'٪</b></div>'
  +'<div class="hbar"><span>إدارة الصف</span><div class="tr"><i style="width:'+ev.manage+'%"></i></div><b>'+ev.manage+'٪</b></div>'
  +'<div class="hbar"><span>تهجي وتجويد</span><div class="tr"><i style="width:'+ev.recite+'%"></i></div><b>'+ev.recite+'٪</b></div>'
  +'<div class="row"><button class="btn small soft" data-tev="'+t.id+'">📝 تقييم</button><button class="btn small gold" data-trec="'+t.id+'">📁 السجل المهني</button><button class="btn small" data-tpr="'+t.id+'">🖨️ تقرير</button><button class="btn small danger" data-tdel="'+t.id+'">🗑️</button></div></div>';}).join("")||"لا معلمات بعد.";
 Array.prototype.forEach.call(tl.querySelectorAll("[data-tdel]"),function(b){b.onclick=function(){if(confirm("حذف المعلمة وخططها؟")){DB.teachers=DB.teachers.filter(function(x){return x.id!==b.dataset.tdel;});DB.weekly=DB.weekly.filter(function(x){return x.teacherId!==b.dataset.tdel;});DB.trecords=DB.trecords.filter(function(x){return x.teacherId!==b.dataset.tdel;});save();renderSupervisor();renderTrecords();renderAnalytics();renderBagWeekly();}};});
 Array.prototype.forEach.call(tl.querySelectorAll("[data-trec]"),function(b){b.onclick=function(){trecSel=b.dataset.trec;renderTrecords();var el=$("#trecordZone");if(el)el.scrollIntoView({behavior:"smooth"});toast("📁 سجل المعلمة المهني — رصدي زيارة جديدة");};});
 Array.prototype.forEach.call(tl.querySelectorAll("[data-tev]"),function(b){b.onclick=function(){var t=DB.teachers.find(function(x){return x.id===b.dataset.tev;});
  openModal('<h3>📝 تقييم '+esc(t.name)+'</h3><label class="fl">التحضير والالتزام (0-100)</label><input class="in" type="number" id="e1" value="'+t.eval.prep+'" min="0" max="100"><label class="fl">إدارة الصف (0-100)</label><input class="in" type="number" id="e2" value="'+t.eval.manage+'" min="0" max="100"><label class="fl">التهجي والتجويد (0-100)</label><input class="in" type="number" id="e3" value="'+t.eval.recite+'" min="0" max="100"><label class="fl">إنجاز الخطة الفصلية ٪</label><input class="in" type="number" id="e4" value="'+(t.termPct||70)+'" min="0" max="100"><label class="fl">متوسط إتقان الفصل ٪</label><input class="in" type="number" id="e5" value="'+(t.mastery||75)+'" min="0" max="100"><div style="margin-top:10px;display:flex;gap:8px"><button class="btn primary" id="eGo">حفظ التقييم</button><button class="btn" id="eCx">إلغاء</button></div>');
  $("#eCx").onclick=closeModal;
  $("#eGo").onclick=function(){t.eval={prep:+$("#e1").value||0,manage:+$("#e2").value||0,recite:+$("#e3").value||0};t.termPct=Math.min(100,Math.max(0,+$("#e4").value||0));t.mastery=Math.min(100,Math.max(0,+$("#e5").value||0));var a=Math.round((t.eval.prep+t.eval.manage+t.eval.recite)/3);t.stars=a>=90?5:a>=80?4:a>=70?3:a>=60?2:1;save();closeModal();renderSupervisor();renderAnalytics();renderLeaderboard();toast("حُفظ تقييم "+t.name+" ⭐");};};});
 Array.prototype.forEach.call(tl.querySelectorAll("[data-tpr]"),function(b){b.onclick=function(){var t=DB.teachers.find(function(x){return x.id===b.dataset.tpr;});var a=Math.round((t.eval.prep+t.eval.manage+t.eval.recite)/3);
  doPrint('<h2 style="text-align:center">👩‍🏫 تقرير تقييم معلمة — غراس</h2><p><b>المعلمة:</b> '+esc(t.name)+' &nbsp; <b>الفصل:</b> '+esc(t.className||"")+' &nbsp; <b>التاريخ:</b> '+new Date().toLocaleDateString("ar")+'</p><table><tr><th>المؤشر</th><th>النسبة</th></tr><tr><td>التحضير والالتزام</td><td>'+t.eval.prep+'٪</td></tr><tr><td>إدارة الصف</td><td>'+t.eval.manage+'٪</td></tr><tr><td>التهجي والتجويد</td><td>'+t.eval.recite+'٪</td></tr><tr><td><b>المتوسط</b></td><td><b>'+a+'٪</b></td></tr><tr><td>إنجاز الخطة الفصلية</td><td>'+(t.termPct||0)+'٪</td></tr><tr><td>إتقان الفصل</td><td>'+(t.mastery||0)+'٪</td></tr></table><p>توقيع الموجهة: ............</p>');};});
 $("#tAdd").onclick=function(){var n=$("#tName").value.trim();if(!n){toast("اكتبي اسم المعلمة ✏️");return;}
  DB.teachers.push({id:uid(),name:n,className:$("#tClass").value.trim(),termPct:50,mastery:70,stars:3,eval:{prep:70,manage:70,recite:70}});save();renderSupervisor();renderAnalytics();toast("أُضيفت المعلمة 🎉");};
 var ws=$("#wTeacher"); if(ws)ws.innerHTML=DB.teachers.map(function(t){return '<option value="'+t.id+'">'+esc(t.name)+'</option>';}).join("");
 var wl=$("#wList");
 if(wl)wl.innerHTML=DB.weekly.map(function(w){var tc=DB.teachers.find(function(x){return x.id===w.teacherId;});
  return '<div class="audio-row" style="display:block"><b>'+esc(w.week)+' — '+esc(tc?tc.name:"")+'</b><small>'+esc(w.goals)+' • '+esc(w.status)+'</small><div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap"><button class="btn small soft" data-wok="'+w.id+'">✅ تم التنفيذ</button><button class="btn small danger" data-wdel="'+w.id+'">🗑️</button></div></div>';}).join("")||"لا خطط بعد.";
 if(wl){
  Array.prototype.forEach.call(wl.querySelectorAll("[data-wok]"),function(b){b.onclick=function(){var w=DB.weekly.find(function(x){return x.id===b.dataset.wok;});w.status="منفذة ✅";var t=DB.teachers.find(function(x){return x.id===w.teacherId;});if(t)t.termPct=Math.min(100,(t.termPct||0)+5);save();renderSupervisor();renderBagWeekly();renderAnalytics();toast("أُنجزت الخطة ✅");};});
  Array.prototype.forEach.call(wl.querySelectorAll("[data-wdel]"),function(b){b.onclick=function(){DB.weekly=DB.weekly.filter(function(x){return x.id!==b.dataset.wdel;});save();renderSupervisor();renderBagWeekly();};});
 }
 var wa=$("#wAdd"); if(wa)wa.onclick=function(){if(!DB.teachers.length){toast("أضيفي معلمة أولاً 👩‍🏫");return;}
  DB.weekly.unshift({id:uid(),teacherId:$("#wTeacher").value,week:$("#wWeek").value||"أسبوع جديد",goals:$("#wGoals").value||"—",status:"جارية 🌱"});save();renderSupervisor();renderBagWeekly();toast("حُفظت الخطة الأسبوعية 📅");};
 renderWorkshops(); renderTrecords();
}
/* --- 2ج) ورش العمل --- */
function renderWorkshops(){
 const g=$("#workshopGrid"); if(!g)return;
 g.innerHTML=DB.workshops.map(function(w){
  var link=w.url?'<a href="'+esc(w.url)+'" target="_blank" rel="noopener" class="btn small gold">▶️ مشاهدة</a>':'<span class="pill">يُضاف الرابط قريباً</span>';
  return '<div class="item"><span class="tag g">🎥 '+esc(w.dur||"ورشة")+'</span><h4>'+esc(w.title)+'</h4><p>'+esc(w.desc||"")+'</p><div class="row">'+link+(unlocked()?'<button class="btn small danger" data-wsdel="'+w.id+'">🗑️</button>':"")+'</div></div>';}).join("")||"لا ورش بعد.";
 Array.prototype.forEach.call(g.querySelectorAll("[data-wsdel]"),function(b){b.onclick=function(){DB.workshops=DB.workshops.filter(function(x){return x.id!==b.dataset.wsdel;});save();renderWorkshops();};});
}
/* --- 3) الإحصائيات وقياس الأثر --- */
function renderAnalytics(){
 var k=$("#anKids"); if(!k)return;
 if(!DB.children.length){k.innerHTML='<p style="color:var(--muted)">أضيفي أطفالاً من صفحة المتابعة لتظهر النسب.</p>';}
 else{
  k.innerHTML=DB.children.map(function(c){var a=childAvg(c);
   return '<div class="item" style="margin-bottom:8px"><h4>'+esc(c.name)+' — المتوسط '+a+'٪</h4>'+Object.keys(SKILLS).map(function(sk){var v=c.skills[sk]||0;
    return '<div class="hbar'+(v<60?" low":"")+'"><span>'+SKILLS[sk]+'</span><div class="tr"><i style="width:'+v+'%"></i></div><b>'+v+'٪</b></div>';}).join("")+'</div>';}).join("");
 }
 var t=$("#anTeachers");
 if(t){
  if(!DB.teachers.length)t.innerHTML='<p style="color:var(--muted)">لا معلمات بعد.</p>';
  else t.innerHTML=DB.teachers.map(function(x){var prs=trecordsFor(x.id);var pl=prs[prs.length-1];var pa=pl?travg(pl):null;var pf=prs[0];var dl=(prs.length>1&&pl&&pf)?(travg(pl)-travg(pf)):0;
   return '<div class="item" style="margin-bottom:8px"><h4>'+esc(x.name)+' — '+esc(x.className||"")+'</h4><div class="hbar"><span>إنجاز الفصلية</span><div class="tr"><i style="width:'+(x.termPct||0)+'%"></i></div><b>'+(x.termPct||0)+'٪</b></div><div class="hbar"><span>إتقان الفصل</span><div class="tr"><i style="width:'+(x.mastery||0)+'%"></i></div><b>'+(x.mastery||0)+'٪</b></div>'
   +'<div class="hbar'+((pa==null||pa>=60)?"":" low")+'"><span>📁 المتوسط المهني</span><div class="tr"><i style="width:'+(pa||0)+'%"></i></div><b>'+(pa==null?"—":pa+'٪')+'</b></div>'
   +'<p style="font-size:12px;color:var(--muted)">الزيارات: '+prs.length+(prs.length>1?(' • التطور: '+(dl>=0?"+":"")+dl+' نقطة '+(dl>=0?"📈":"📉")):"")+(pl?(' • الأخير: '+tlevelName(pa)):" — بانتظار أول زيارة")+'</p>'
   +'<div class="row"><button class="btn small gold" data-anrec="'+x.id+'">📁 فتح السجل المهني</button></div></div>';}).join("");
  Array.prototype.forEach.call(t.querySelectorAll("[data-anrec]"),function(b){b.onclick=function(){trecSel=b.dataset.anrec;go("supervisor");renderTrecords();var el=$("#trecordZone");if(el)setTimeout(function(){el.scrollIntoView({behavior:"smooth"});},150);};});
 }
 var r=$("#anReferral");
 if(r){
  var lows=[];
  DB.children.forEach(function(c){Object.keys(SKILLS).forEach(function(sk){if((c.skills[sk]||0)<60)lows.push({c:c,sk:sk,v:c.skills[sk]||0});});});
  if(!lows.length)r.innerHTML='<p style="color:var(--green-dark)">✅ لا حالات حرجة — جميع المهارات فوق 60٪. ممتاز!</p>';
  else r.innerHTML=lows.slice(0,12).map(function(L,i){return '<div class="audio-row" style="display:block"><b>⚠️ '+esc(L.c.name)+' — '+SKILLS[L.sk]+': '+L.v+'٪</b><div style="margin-top:6px"><button class="btn small primary" data-ref="'+L.c.id+"|"+L.sk+'">📝 إنشاء خطة علاجية تلقائية</button></div></div>';}).join("");
  Array.prototype.forEach.call(r.querySelectorAll("[data-ref]"),function(b){b.onclick=function(){if(!unlocked()){toast("ادخلي وضع المعلمة أولاً 🔒");return;}
   var p=b.dataset.ref.split("|"),cid=p[0],sk=p[1];var c=DB.children.find(function(x){return x.id===cid;});
   DB.plans.unshift({id:uid(),childId:cid,weeks:4,skills:[sk],goals:"رفع "+SKILLS[sk]+" لـ "+c.name+" من "+(c.skills[sk]||0)+"٪ إلى 85٪ خلال ٤ أسابيع (تحويل تلقائي).",acts:"تشخيص دقيق + بطاقات + لعبة يومية ١٠ دقائق + إملاء + متابعة أسبوعية.",status:"جارية 🌱",result:""});save();renderPlans();toast("أُنشئت خطة علاجية تلقائية 📝");go("plans");};});
 }
}
/* --- 4) التحفيز: صدارة + شهادة فورية + بطاقات يومية --- */
function renderLeaderboard(){
 const el=$("#leaderboard"); if(!el)return;
 var topKid=DB.children.slice().sort(function(a,b){return (b.points||0)-(a.points||0);})[0];
 var topT=DB.teachers.slice().sort(function(a,b){return (b.mastery||0)-(a.mastery||0);})[0];
 var bestClass=topT?topT.className||topT.name:"—";
 el.innerHTML='<div class="lead"><div class="lead-card"><div style="font-size:36px">👧</div><h4>الطفل المتقن</h4><b>'+esc(topKid?(topKid.nick||topKid.name):"—")+'</b><br><small>'+(topKid?(topKid.points||0)+" نقطة":"بانتظار النقاط")+'</small></div>'
 +'<div class="lead-card"><div style="font-size:36px">👩‍🏫</div><h4>معلمة الشهر</h4><b>'+esc(topT?topT.name:"—")+'</b><br><small>'+(topT?("إتقان فصلها "+(topT.mastery||0)+"٪"):"")+'</small></div>'
 +'<div class="lead-card"><div style="font-size:36px">🏫</div><h4>فصل الشهر</h4><b>'+esc(bestClass)+'</b><br><small>الأعلى إتقاناً وإنجازاً</small></div></div>';
}
function renderDailyCards(){
 const el=$("#dailyCards"); if(!el)return;
 el.innerHTML=DAILYCARDS.map(function(c,i){return '<div class="mcard"><div class="big">'+c.e+'</div><b>'+esc(c.t)+'</b><p style="font-size:12.5px;color:var(--muted)">'+esc(c.d)+'</p><div style="display:flex;gap:6px;justify-content:center;margin-top:8px;flex-wrap:wrap"><button class="btn small gold" data-dcp="'+i+'">🖨️ طباعة</button><button class="btn small soft" data-dcs="'+i+'">📤 مشاركة</button></div></div>';}).join("");
 Array.prototype.forEach.call(el.querySelectorAll("[data-dcp]"),function(b){b.onclick=function(){var c=DAILYCARDS[+b.dataset.dcp];
  doPrint('<div style="border:5px solid #C9A45C;border-radius:16px;padding:26px;text-align:center"><div style="font-size:70px">'+c.e+'</div><h2>'+esc(c.t)+'</h2><p>'+esc(c.d)+'</p><p>غراس | نور البيان 🌱 — '+new Date().toLocaleDateString("ar")+'</p><p>الاسم: ............</p></div>');};});
 Array.prototype.forEach.call(el.querySelectorAll("[data-dcs]"),function(b){b.onclick=function(){var c=DAILYCARDS[+b.dataset.dcs];var t=c.e+" "+c.t+" — "+c.d+" (غراس 🌱)";
  if(navigator.share)navigator.share({title:c.t,text:t}).catch(function(){});else if(navigator.clipboard)navigator.clipboard.writeText(t).then(function(){toast("نُسخت البطاقة للمشاركة 📋");});};});
}
function issueAutoCert(){
 var c=DB.children.find(function(v){return v.id===$("#motChild").value;});
 var reason=$("#motReason").value||"إتقان التهجي والقراءة";
 if(!c){toast("اختاري الطفل أولاً 👧");return;}
 var nm=c.nick||c.name, a=childAvg(c);
 DB.certs.unshift({id:uid(),childId:c.id,title:"شهادة إتقان — "+reason,date:new Date().toLocaleDateString("ar")});
 c.points=(c.points||0)+10; save(); renderMotivation(); renderHome();
 doPrint('<div style="border:6px double #C9A45C;border-radius:18px;padding:30px;text-align:center"><div style="font-size:50px">🎓</div><h2 style="color:#9A7A35">شهادة إتقان</h2><p>تشهد <b>غراس لنور البيان</b> بأن البطل/ة</p><h3 style="font-size:28px">'+esc(nm)+'</h3><p>أتقن: <b>'+esc(reason)+'</b> — متوسط الإتقان '+a+'٪ 🌟</p><p>التاريخ: '+new Date().toLocaleDateString("ar")+'</p><p>توقيع المعلمة: ............ توقيع الموجهة: ............ 🌱</p></div>');
 toast("🎓 صدرت شهادة إتقان لـ "+nm);
}

/* ============================================================
   المستويات السبعة + لوحة المتابعة — قسم مستقل لكل مستوى
   ============================================================ */
const LV_DATA=[
 {id:"L1",icon:"🔤",title:"المستوى الأول — الحروف الهجائية",sub:"أسماء الحروف وأصواتها ومواضعها كتابة ونطقاً",weeks:"أسابيع ١-٤",skill:"spelling",pass:80,
  goals:["يميز أشكال الحروف الـ٢٨ نطقاً","يكتب الحرف بصورته الصحيحة","يميز مواضع الحرف أول/وسط/آخر","يفرق بين المتشابهات (ب ت ث / ج ح خ)"],
  lessons:[
   {t:"الحروف المفردة نطقاً",d:"اعرضي البطاقة، انطقي الصوت لا الاسم (بَ لا باء)، يردد الأطفال جماعياً ثم فردياً.",words:["ا","ب","ت","ث","ج","ح"],act:"لعبة البطاقات الخاطفة ٣ دقائق يومياً + تلوين الحرف"},
   {t:"كتابة الحروف",d:"تتبع منقط ثم نسخ حر على السطر مع الاتجاه الصحيح لليد.",words:["د","ذ","ر","ز","س","ش"],act:"كراسة الخط + صلصال وتشكيل بالرمل"},
   {t:"مواضع الحروف",d:"الحرف يغير شكله حسب مكانه: بـ ـبـ ـب. دربي بلوحة المواضع الثلاثة.",words:["بـ","ـبـ","ـب","تـ","ـتـ"],act:"مغناطيس السبورة + ورقة صيد الموضع"},
   {t:"الحروف المتشابهة",d:"ركزي على مجموعات الخلط الشائعة بالتنقيط والتلوين والمقارنة المتجاورة.",words:["ب ت ث","ج ح خ","د ذ","ر ز","س ش"],act:"بطاقات متقابلة + إملاء ٣ حروف يومياً"}],
  quiz:[
   {q:"أين حرف الباء في كلمة (كِتَاب)؟",opts:["أول الكلمة","وسط الكلمة","آخر الكلمة"],ans:2},
   {q:"أي مجموعة حروف متشابهة؟",opts:["ا م ن","ب ت ث","ق ل ك"],ans:1},
   {q:"صوت حرف الميم هو:",opts:["مَ (صوته مع الحركة)","ميم (اسمه فقط)","لا يُنطق"],ans:0},
   {q:"شكل حرف الحاء وسط الكلمة:",opts:["ح","ـحـ","ـح"],ans:1}]},
 {id:"L2",icon:"🟥",title:"المستوى الثاني — الحركات الثلاث",sub:"الفتحة والضمة والكسرة قراءة وكتابة للمقاطع",weeks:"أسابيع ٥-٧",skill:"reading",pass:80,
  goals:["يقرأ المقطع المفتوح والمضموم والمكسور","يكتب المقطع مع حركته","يميز الحركات سماعاً وكتابة","يهجي كلمات من مقطعين"],
  lessons:[
   {t:"الفتحة ( َ )",d:"افتح فمك: بَ تَ ثَ. اللون الأحمر للفتحة + إشارة فتح اليد.",words:["بَ","تَ","كَ","قَ","مَ"],act:"عجلة المقاطع + قراءة خاطفة"},
   {t:"الضمة ( ُ )",d:"ضم الشفتين: بُ تُ. قارني بَ/بُ بالمرآة.",words:["بُ","تُ","نُ","مُ","قُ"],act:"لعبة: أين الضمة؟ + تلوين أخضر"},
   {t:"الكسرة ( ِ )",d:"ابتسامة: بِ تِ. اللون الأزرق للكسرة.",words:["بِ","تِ","كِ","نِ","سِ"],act:"صيد المقاطع + إملاء مقطعين"},
   {t:"خلط الحركات",d:"اقرئي مقاطع مخلوطة بسرعة متدرجة ثم كلمتين: كَتَبَ / سُمِعَ.",words:["بَ بُ بِ","كَتَبَ","عُمَرَ"],act:"تحدي الدقيقة + ورقة عمل مقاطع"}],
  quiz:[
   {q:"المقطع (بُ) حركته:",opts:["فتحة","ضمة","كسرة"],ans:1},
   {q:"لون الكسرة المعتمد في غراس:",opts:["أحمر","أخضر","أزرق"],ans:2},
   {q:"اقرئي: (كِ) — النطق الصحيح:",opts:["كا","كي (كسرة قصيرة)","كو"],ans:1},
   {q:"كلمة من مقطعين للحركات:",opts:["كَتَبَ","قَال","الشَّمْس"],ans:0}]},
 {id:"L3",icon:"〰️",title:"المستوى الثالث — المدود والتنوين",sub:"مد الألف والواو والياء + تنوين الفتح والضم والكسر",weeks:"أسابيع ٨-١٠",skill:"tashkeel",pass:75,
  goals:["يطيل المد مقدار حركتين","يفرق بين الحركة القصيرة والمد","يقرأ التنوين الثلاثة","يكتب كلمات ممدودة ومنونة"],
  lessons:[
   {t:"المد بالألف (بَا)",d:"فتحة طويلة: قَال / كِتَاب. إشارة إطالة اليد + تصفيق طويل.",words:["بَا","قَال","كِتَاب","بَاب"],act:"كلمات متقابلة: قَل/قَال"},
   {t:"المد بالواو والياء",d:"بُو (ضمة طويلة) / بِي (كسرة طويلة): نُور / كَرِيم.",words:["بُو","نُور","بِي","كَرِيم"],act:"مرآة الإطالة + بطاقات متقابلة"},
   {t:"التنوين",d:"نٌ خفية آخر الكلمة: بٌ / بٍ / بًا. جرس التنوين عند السماع.",words:["بٌ","بٍ","كِتَابٌ","نُورًا"],act:"لعبة الجرس + إملاء منون"},
   {t:"تمييز قصير/طويل ومنون",d:"املئي جدول المقارنة ثم أملِي ٥ كلمات.",words:["قَل/قَال","عِلْم/عَلِيم","بَيْتٌ"],act:"ورقة مقارنة + تسميع فردي"}],
  quiz:[
   {q:"المد في كلمة (نُور) هو:",opts:["مد بالألف","مد بالواو","مد بالياء"],ans:1},
   {q:"الفرق بين (قَل) و(قَال):",opts:["لا فرق","إطالة المد","التنوين"],ans:1},
   {q:"التنوين في (كِتَابٌ):",opts:["تنوين ضم","شدة","سكون"],ans:0},
   {q:"كلمة فيها مد بالياء:",opts:["يَقُول","كَرِيم","بَاب"],ans:1}]},
 {id:"L4",icon:"ّ",title:"المستوى الرابع — السكون والشدة",sub:"المقطع الساكن والحرف المشدد تفكيكاً وتهجية",weeks:"أسابيع ١١-١٢",skill:"reading",pass:75,
  goals:["يقرأ المقطع الساكن (مْ / سْ)","يفكك الشدة إلى ساكن + متحرك","يهجي كلمات فيها سكون وشدة","يكتب ما يُملى من مقاطع ساكنة"],
  lessons:[
   {t:"السكون ( ْ )",d:"الحرف الساكن لا يُنطق وحده بل مع ما قبله: مَسْ / قَمَرْ.",words:["مَسْ","قَمَرْ","مَسْجِد"],act:"القرع على الطاولة للمقطع الساكن"},
   {t:"الشدة ( ّ )",d:"الشدة = حرفان: ساكن + متحرك (بَّ = بْ + بَ). صفقتان.",words:["مُعَلِّمَة","شَمْس","بَّ"],act:"تفكيك الشدة بالتصفيق المزدوج"},
   {t:"تهجية كلمات ساكنة ومشددة",d:"هجِّ مقطعاً مقطعاً همساً ثم جهراً: مَسْ + جِ + د.",words:["مَسْجِد","مُعَلِّمَة","حَدِيقَة"],act:"إصبع على الكلمة + تهجية جماعية"},
   {t:"إملاء السكون والشدة",d:"أملِي مقاطع ثم كلمات كاملة مع التصحيح الفوري.",words:["شَمْس","قَمَر","كِتَاب"],act:"سطر إملاء يومي + بطاقة إتقان"}],
  quiz:[
   {q:"الشدة تعني:",opts:["حرفاً واحداً","حرفين: ساكن + متحرك","مداً طويلاً"],ans:1},
   {q:"المقطع الساكن في (مَسْجِد) هو:",opts:["مَسْ","جِ","د"],ans:0},
   {q:"كلمة فيها شدة:",opts:["قَمَر","مُعَلِّمَة","كِتَاب"],ans:1},
   {q:"نطق السكون الصحيح:",opts:["وحده","مع ما قبله","لا يُنطق أبداً"],ans:1}]},
 {id:"L5",icon:"🌙",title:"المستوى الخامس — اللامات",sub:"اللام الشمسية والقمرية قراءة وكتابة وقاعدة اليد",weeks:"أسابيع ١٣-١٤",skill:"reading",pass:75,
  goals:["يفرق بين اللام الشمسية والقمرية","يطبق قاعدة اليد عملياً","يقرأ كلمات معرفة بـ (ال)","يكتب اللام الصحيحة إملاءً"],
  lessons:[
   {t:"اللام القمرية",d:"تُكتب وتُنطق (الْ): القَمَر / الكِتَاب. حروفها مجموعة في (ابغ حجك وخف عقيمه).",words:["القَمَر","الكِتَاب","المَسْجِد"],act:"لوحة القمر + بطاقات تصنيف"},
   {t:"اللام الشمسية",d:"تُكتب ولا تُنطق ويُشدد ما بعدها: الشَّمْس. قاعدة اليد: أخفِ اللام.",words:["الشَّمْس","النُّور","السَّمَاء"],act:"إشارة إخفاء اليد + قراءة خاطفة"},
   {t:"لوحة المقارنة",d:"صنفي ١٠ كلمات يومياً في عمودي الشمس/القمر.",words:["الشَّمْس/القَمَر","النَّجْم/الكَوْكَب"],act:"مسابقة التصنيف + ملصقات"},
   {t:"قراءة جمل معرفة",d:"اقرئي جملاً قصيرة فيها النوعان ثم أملِيها.",words:["الشَّمْسُ مُشْرِقَة","القَمَرُ جَمِيل"],act:"قصة قصيرة + إملاء جملة"}],
  quiz:[
   {q:"اللام في (الشَّمْس) :",opts:["قمرية","شمسية","لا لام فيها"],ans:1},
   {q:"اللام في (القَمَر) :",opts:["شمسية","قمرية","محذوفة"],ans:1},
   {q:"علامة الشمسية بعد (ال):",opts:["السكون","الشدة","المد"],ans:1},
   {q:"كلمة بلام قمرية:",opts:["النُّور","الكِتَاب","الشَّارِع"],ans:1}]},
 {id:"L6",icon:"📖",title:"المستوى السادس — التهجي والقراءة",sub:"من المقطع إلى الكلمة إلى الجملة القصيرة",weeks:"أسابيع ١٤-١٥",skill:"spelling",pass:80,
  goals:["يهجي كلمة من ٢-٤ مقاطع","يقرأ جملة قصيرة بطلاقة","يفهم معنى ما يقرأ إجمالاً","يقرأ قصة قصيرة مشكولة"],
  lessons:[
   {t:"تهجية الكلمات",d:"قطّعي ثم اجمعي: كِ + تَا + ب = كِتَاب. القاعدة: صوت الحرف مع حركته.",words:["بَاب","نُور","كِتَاب","مَسْجِد"],act:"بطاقات التهجية + ترديد فردي"},
   {t:"قراءة الجمل",d:"إصبع على الكلمة + تهجية همساً ثم جهراً بسلاسة.",words:["قَرَأَ الطِّفْلُ الكِتَابَ","الشَّمْسُ مُشْرِقَة"],act:"سباق الجمل + تسجيل صوتي"},
   {t:"الفهم القرائي",d:"بعد القراءة اسألي: من؟ ماذا؟ أين؟ بصور داعمة.",words:["حَدِيقَة","مُعَلِّمَة"],act:"أسئلة مصورة + تمثيل المعنى"},
   {t:"القصة القصيرة",d:"قصة ٤-٦ جمل مشكولة تُقرأ على ٣ أيام.",words:["قصة: يوم في الحديقة"],act:"مسرح القراءة + تحدي الدقيقة"}],
  quiz:[
   {q:"تهجية (كِتَاب) الصحيحة:",opts:["كِ + تَا + ب","ك + ا + ت + ا + ب","كِتَا + ب فقط"],ans:0},
   {q:"أول خطوة لقراءة الجملة:",opts:["السرعة","إصبع + تهجية همساً","الحفظ غيباً"],ans:1},
   {q:"عدد مقاطع (مُعَلِّمَة):",opts:["٢","٤ (مُ/عَلْ/لِ/مَة)","٦"],ans:1},
   {q:"أفضل طريقة للفهم:",opts:["سؤال مصور بعد القراءة","قراءة صامتة فقط","تجاهل المعنى"],ans:0}]},
 {id:"L7",icon:"🚀",title:"المستوى السابع — الطلاقة والإملاء والتجويد",sub:"قراءة سريعة صحيحة + إملاء + تجويد مبسط وحفل الإتقان",weeks:"أسبوعا ١٥-١٦",skill:"dictation",pass:85,
  goals:["يقرأ ٢٠ كلمة في الدقيقة قراءة صحيحة","يكتب إملاءً من سطرين بلا أخطاء","يطبق الغنة والمد الطبيعي مبسطاً","يجتاز اختبار الإتقان النهائي"],
  lessons:[
   {t:"الطلاقة (تحدي الدقيقة)",d:"اقرئي قائمة كلمات مضبوطة ٦٠ ثانية وسجلي العدد الصحيح.",words:["قَمَر","شَمْس","نُور","كِتَاب","مَسْجِد"],act:"تحدي الدقيقة أسبوعياً + رسم بياني"},
   {t:"الإملاء المتقن",d:"سطر يومي متدرج: مقاطع ← كلمات ← جملة. صححي فوراً.",words:["سطر: النُّورُ جَمِيلٌ"],act:"كراسة الإملاء + إملاء منظور"},
   {t:"التجويد المبسط",d:"الغنة (نّ/مّ) والمد الطبيعي حركتين بأمثلة محببة.",words:["إِنَّ","عَمَّ","قَال"],act:"تلقين صوتي + تسجيل ومقارنة"},
   {t:"مشروع التخرج وحفل الإتقان",d:"يقرأ قصة + يكتب إملاء + يُسمع أمام الأهل ويُمنح شهادة.",words:["قصة التخرج"],act:"حفل إتقان 🎓 + شهادة فورية"}],
  quiz:[
   {q:"الطلاقة تعني:",opts:["السرعة مع الخطأ","قراءة صحيحة بانسياب","الحفظ فقط"],ans:1},
   {q:"الغنة تكون في:",opts:["النون والميم المشددة","كل الحروف","المد فقط"],ans:0},
   {q:"أفضل روتين للإملاء:",opts:["سطر يومي + تصحيح فوري","صفحة كاملة شهرياً","بلا إملاء"],ans:0},
   {q:"معيار اجتياز نور البيان:",opts:["٥٠٪","٩٠٪ قراءة + إملاء سليم","الحضور فقط"],ans:1}]}
];
function levelProg(id){if(!DB.levelProg)DB.levelProg={};if(!DB.levelProg[id])DB.levelProg[id]={lessons:[],quizBest:0,done:false};return DB.levelProg[id];}
function levelPct(L){var p=levelProg(L.id);var ld=L.lessons.length?Math.round(p.lessons.filter(Boolean).length/L.lessons.length*70):0;var qz=Math.round((p.quizBest||0)*0.3);return Math.min(100,ld+qz);}
function isUnlocked(i){if(i===0)return true;var prev=LV_DATA[i-1];var pp=levelProg(prev.id);return pp.done||(pp.quizBest>=60)||levelPct(prev)>=60;}

/* --- عرض المستويات --- */
var curLevel=null;
function renderLevels(){
 var hub=$("#levelsHub"),det=$("#levelDetail"); if(!hub)return;
 if(curLevel){hub.style.display="none";det.style.display="block";renderLevelDetail(det);}
 else{hub.style.display="block";det.style.display="none";
  hub.innerHTML='<div class="card" style="margin-bottom:12px"><h3>🗺️ خريطة المستويات — كيف تسير المعلمة؟</h3><p style="font-size:13px;color:var(--muted)">التدرج إلزامي: لا تنتقلي للمستوى التالي قبل <b>60٪</b> إتقاناً. كل مستوى يفتح دروسه وتدريباته واختباره، والنتيجة تُرحّل تلقائياً للوحة المتابعة وملف الطفل.</p><div class="kv"><span class="pill">7 مستويات</span><span class="pill">28 درساً مرتباً</span><span class="pill">28 سؤالاً تفاعلياً</span><span class="pill">تقارير + طباعة + مشاركة</span></div></div>'
  +'<div class="lv-grid">'+LV_DATA.map(function(L,i){var pct=levelPct(L);var p=levelProg(L.id);var un=isUnlocked(i);
   return '<div class="lv-card'+(un?"":" locked")+'" data-lv="'+L.id+'"><div class="lv-ic">'+L.icon+'</div><h3>'+(i+1)+'. '+esc(L.title)+'</h3><p>'+esc(L.sub)+'</p><div class="lv-meta"><span class="pill">'+esc(L.weeks)+'</span><span class="pill g">'+(p.done?"✔ مكتمل":pct+"٪")+'</span>'+(un?"":'<span class="pill">🔒 بعد إتقان السابق</span>')+'</div><div class="bar"><i style="width:'+pct+'%"></i></div><div style="margin-top:8px;display:flex;gap:6px"><button class="btn small '+(p.done?"soft":"gold")+'" data-open="'+L.id+'">'+(un?"📖 فتح القسم":"👁️ معاينة")+'</button><button class="btn small" data-lvprint="'+L.id+'">🖨️</button></div></div>';}).join("")+'</div>';
  Array.prototype.forEach.call(hub.querySelectorAll("[data-open]"),function(b){b.onclick=function(){curLevel=b.dataset.open;save();renderLevels();go("levels");};});
  Array.prototype.forEach.call(hub.querySelectorAll("[data-lvprint]"),function(b){b.onclick=function(ev){ev.stopPropagation();printLevel(b.dataset.lvprint);};});
 }
}
function renderLevelDetail(det){
 var i=LV_DATA.findIndex(function(x){return x.id===curLevel;});var L=LV_DATA[i];if(!L){curLevel=null;renderLevels();return;}
 var p=levelProg(L.id);var pct=levelPct(L);
 var h='<button class="btn small soft" id="lvBack">◀ عودة للمستويات</button> ';
 h+='<div class="card" style="margin:10px 0"><h3>'+L.icon+' '+esc(L.title)+'</h3><p style="font-size:13px;color:var(--muted)">'+esc(L.sub)+' • '+esc(L.weeks)+' • النجاح من '+L.pass+'٪ • المهارة المرتبطة: '+SKILLS[L.skill]+'</p>';
 h+='<div class="bar" style="margin:8px 0"><i style="width:'+pct+'%"></i></div><p style="font-size:13px">الإتقان: <b>'+pct+'٪</b> '+(p.done?'<span class="badge">✔ مكتمل</span>':'<span class="badge">أكملي الدروس ثم الاختبار</span>')+'</p>';
 h+='<div class="kv">'+L.goals.map(function(g){return '<span class="pill">🎯 '+esc(g)+'</span>';}).join("")+'</div>';
 h+='<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px"><button class="btn small soft" id="lvHear">🔊 استماع للأهداف</button><button class="btn small" id="lvShare">📤 مشاركة</button><button class="btn small gold" id="lvPrint">🖨️ طباعة القسم</button></div></div>';
 h+='<div class="card"><h3>📚 الدروس المرتبة ('+L.lessons.length+') — اضغطي الدرس لعرضه وتأشير إتمامه</h3><div id="lvLessons">'
  +L.lessons.map(function(ls,j){var dn=!!p.lessons[j];
   return '<div class="lesson'+(j===0?" open":"")+'" data-ls="'+j+'"><div class="lesson-head'+(dn?" done":"")+'"><span class="n'+(dn?" done":"")+'">'+(dn?"✔":(j+1))+'</span><span>'+esc(ls.t)+'</span><span style="margin-inline-start:auto;font-size:12px;color:var(--muted)">'+(dn?"تم ✔":"اضغطي للعرض")+'</span></div><div class="lesson-body"><p>'+esc(ls.d)+'</p><div class="words">'+ls.words.map(function(w){return '<button class="wchip" data-w="'+esc(w)+'">'+esc(w)+'</button>';}).join("")+'</div><p style="font-size:12.5px;color:var(--muted)">🎲 النشاط: '+esc(ls.act)+'</p><div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:6px"><button class="btn small soft" data-say="'+j+'">🔊 انطقي الكلمات</button><button class="btn small" data-ws="'+j+'">🖨️ ورقة عمل</button><button class="btn small '+(dn?"soft":"gold")+'" data-done="'+j+'">'+(dn?"↺ إعادة فتح":"✔ تأشير كمُنجز")+'</button></div></div></div>';}).join("")+'</div></div>';
 h+='<div class="card" style="margin-top:12px"><h3>🎯 التدريب السريع — بطاقات ناطقة</h3><p style="font-size:13px;color:var(--muted)">اضغطي أي بطاقة لتسمعي نطقها، ثم اطلبي من الطفل التكرار.</p><div class="words" id="lvTrain" style="display:flex;gap:8px;flex-wrap:wrap">'
  +L.lessons[0].words.concat(L.lessons[1].words).slice(0,8).map(function(w){return '<button class="wchip" data-t="'+esc(w)+'">'+esc(w)+'</button>';}).join("")+'</div></div>';
 h+='<div class="card" style="margin-top:12px"><h3>📝 اختبار المستوى — النجاح من '+L.pass+'٪</h3><div id="lvQuiz">'
  +L.quiz.map(function(q,j){return '<div class="quiz-q" data-qq="'+j+'"><b>'+(j+1)+'. '+esc(q.q)+'</b><div class="opts">'+q.opts.map(function(o,k){return '<button data-q="'+j+'" data-o="'+k+'">'+esc(o)+'</button>';}).join("")+'</div></div>';}).join("")
  +'</div><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:8px"><button class="btn gold" id="lvSubmit">📊 تصحيح ورصد النتيجة</button><span id="lvScore" style="font-weight:800;color:var(--gold-dark)">'+(p.quizBest?("أفضل نتيجة: "+p.quizBest+"٪"):"لم يُختبر بعد")+'</span></div></div>';
 h+='<div class="card" style="margin-top:12px"><h3>📊 تقرير إتقان المستوى</h3><div id="lvReport"></div><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px"><button class="btn primary small" id="lvToChild">📊 ترحيل لملف طفل</button><button class="btn soft small" id="lvPlan">📝 تحويل لخطة علاجية</button></div></div>';
 det.innerHTML=h;
 $("#lvBack").onclick=function(){curLevel=null;renderLevels();};
 $("#lvHear").onclick=function(){speak(L.title+". "+L.goals.join(". "));};
 $("#lvShare").onclick=function(){var t="🎓 "+L.title+" — غراس: "+L.sub+" | الإتقان "+pct+"٪";if(navigator.share)navigator.share({title:L.title,text:t}).catch(function(){});else if(navigator.clipboard)navigator.clipboard.writeText(t).then(function(){toast("نُسخ ملخص المستوى 📋");});};
 $("#lvPrint").onclick=function(){printLevel(L.id);};
 Array.prototype.forEach.call(det.querySelectorAll(".lesson-head"),function(x){x.onclick=function(){x.parentElement.classList.toggle("open");};});
 Array.prototype.forEach.call(det.querySelectorAll("[data-w],[data-t]"),function(b){b.onclick=function(ev){ev.stopPropagation();speak(b.textContent);};});
 Array.prototype.forEach.call(det.querySelectorAll("[data-say]"),function(b){b.onclick=function(ev){ev.stopPropagation();speak(L.lessons[+b.dataset.say].words.join(" . "));};});
 Array.prototype.forEach.call(det.querySelectorAll("[data-ws]"),function(b){b.onclick=function(ev){ev.stopPropagation();var ls=L.lessons[+b.dataset.ws];
  doPrint('<h2 style="text-align:center">🎓 '+esc(L.title)+' — ورقة عمل: '+esc(ls.t)+'</h2><p>'+esc(ls.d)+'</p><table><tr><th>الكلمة/المقطع</th><th>اقرأ ✔</th><th>اكتب ✍️</th></tr>'+ls.words.map(function(w){return '<tr><td style="font-size:24px">'+esc(w)+'</td><td></td><td></td></tr>';}).join("")+'</table><p>النشاط: '+esc(ls.act)+'</p><p>الاسم: ............ التاريخ: ..../..../....</p>');};});
 Array.prototype.forEach.call(det.querySelectorAll("[data-done]"),function(b){b.onclick=function(ev){ev.stopPropagation();var j=+b.dataset.done;p.lessons[j]=!p.lessons[j];if(p.lessons.every(Boolean)&&p.quizBest>=L.pass)p.done=true;save();renderLevels();renderDashboard();toast(p.lessons[j]?"✔ أُنجز الدرس":"أُعيد فتح الدرس");};});
 var answers={};
 Array.prototype.forEach.call(det.querySelectorAll("#lvQuiz [data-o]"),function(b){b.onclick=function(){var q=+b.dataset.q;answers[q]=+b.dataset.o;
  Array.prototype.forEach.call(det.querySelectorAll('[data-q="'+q+'"]'),function(x){x.classList.remove("ok","no");});b.classList.add("ok");speak(b.textContent);};});
 $("#lvSubmit").onclick=function(){
  if(Object.keys(answers).length<L.quiz.length){toast("أجيبي عن كل الأسئلة أولاً ✏️ ("+Object.keys(answers).length+"/"+L.quiz.length+")");return;}
  var ok=0;L.quiz.forEach(function(q,j){var sel=det.querySelector('[data-q="'+j+'"][data-o="'+q.ans+'"]');var chosen=det.querySelectorAll('[data-q="'+j+'"]')[answers[j]];
   if(answers[j]===q.ans){ok++;if(chosen)chosen.classList.add("ok");}else{if(chosen)chosen.classList.add("no");if(sel)sel.classList.add("ok");}});
  var score=Math.round(ok/L.quiz.length*100);p.quizBest=Math.max(p.quizBest||0,score);
  if(p.lessons.filter(Boolean).length>=Math.ceil(L.lessons.length*0.75)&&score>=L.pass)p.done=true;
  save();$("#lvScore").textContent="النتيجة: "+score+"٪ — الأفضل: "+p.quizBest+"٪ "+(score>=L.pass?"🎉 ناجح":"💪 أعيدي المحاولة");
  renderLvReport(L,p,score);renderLevels();renderDashboard();renderAnalytics();
  toast(score>=L.pass?"🎉 أحسنت! اجتزتِ اختبار "+L.title:"نتيجتك "+score+"٪ — راجعي الدروس وحاولي مجدداً 💪");};
 $("#lvToChild").onclick=function(){if(!unlocked()){toast("ادخلي وضع المعلمة أولاً 🔒");return;}
  if(!DB.children.length){toast("أضيفي طفلاً من المتابعة أولاً 👧");return;}
  openModal('<h3>📊 ترحيل نتيجة '+esc(L.title)+'</h3><label class="fl">الطفل</label><select class="in" id="lvChild">'+DB.children.map(function(c){return '<option value="'+c.id+'">'+esc(c.name)+'</option>';}).join("")+'</select><div style="margin-top:10px;display:flex;gap:8px"><button class="btn primary" id="lvGo">ترحيل ('+levelPct(L)+'٪ لمهارة '+SKILLS[L.skill]+')</button><button class="btn" id="lvCx">إلغاء</button></div>');
  $("#lvCx").onclick=closeModal;
  $("#lvGo").onclick=function(){var c=DB.children.find(function(x){return x.id===$("#lvChild").value;});if(c){c.skills[L.skill]=Math.max(c.skills[L.skill]||0,levelPct(L));c.hist.push({d:new Date().toLocaleDateString("ar"),avg:childAvg(c)});save();closeModal();renderTracking();renderDashboard();renderAnalytics();toast("رُحّلت النتيجة لملف "+c.name+" 📊");}};};
 $("#lvPlan").onclick=function(){if(!unlocked()){toast("ادخلي وضع المعلمة أولاً 🔒");return;}
  if(!DB.children.length){toast("أضيفي طفلاً أولاً 👧");return;}
  var c0=DB.children[0];DB.plans.unshift({id:uid(),childId:c0.id,weeks:4,skills:[L.skill],goals:"دعم "+L.title+" لـ "+c0.name+" (من لوحة المستوى).",acts:L.lessons.map(function(x){return x.t;}).join(" + "),status:"جارية 🌱",result:""});save();renderPlans();toast("أُنشئت خطة دعم من هذا المستوى 📝");go("plans");};
 renderLvReport(L,p,p.quizBest);
}
function renderLvReport(L,p,last){
 var el=$("#lvReport");if(!el)return;var pct=levelPct(L);
 var st=p.done?"✔ مكتمل ومُتقن 🌳":(pct>=60?"🌿 جارٍ — تجاوز 60٪ يؤهل للمستوى التالي":"🌱 في البداية — أكملي ٣ دروس على الأقل");
 el.innerHTML='<div class="hbar"><span>الدروس المنجزة</span><div class="tr"><i style="width:'+Math.round(p.lessons.filter(Boolean).length/L.lessons.length*100)+'%"></i></div><b>'+p.lessons.filter(Boolean).length+'/'+L.lessons.length+'</b></div>'
 +'<div class="hbar'+(p.quizBest<L.pass?" low":"")+'"><span>أفضل اختبار</span><div class="tr"><i style="width:'+(p.quizBest||0)+'%"></i></div><b>'+(p.quizBest||0)+'٪</b></div>'
 +'<div class="hbar"><span>الإتقان الكلي</span><div class="tr"><i style="width:'+pct+'%"></i></div><b>'+pct+'٪</b></div>'
 +'<p style="font-size:13px;margin-top:6px"><b>الحالة:</b> '+st+' • <b>آخر نتيجة:</b> '+(last||0)+'٪ • <b>عتبة النجاح:</b> '+L.pass+'٪</p>';
}
function printLevel(id){var L=LV_DATA.find(function(x){return x.id===id;});if(!L)return;var p=levelProg(L.id);
 doPrint('<h2 style="text-align:center">🎓 '+esc(L.title)+' — غراس نور البيان</h2><p>'+esc(L.sub)+' • '+esc(L.weeks)+' • الإتقان الحالي: '+levelPct(L)+'٪</p><p><b>الأهداف:</b> '+L.goals.map(esc).join(" • ")+'</p><table><tr><th>م</th><th>الدرس</th><th>الشرح</th><th>أُنجز ✔</th></tr>'+L.lessons.map(function(l,i){return '<tr><td>'+(i+1)+'</td><td>'+esc(l.t)+'</td><td>'+esc(l.d)+'</td><td>'+(p.lessons[i]?"✔":"")+'</td></tr>';}).join("")+'</table><table style="margin-top:8px"><tr><th>م</th><th>سؤال الاختبار</th><th>الإجابة</th></tr>'+L.quiz.map(function(q,i){return '<tr><td>'+(i+1)+'</td><td>'+esc(q.q)+'</td><td></td></tr>';}).join("")+'</table><p>الاسم: ............ التوقيع: ............</p>');}

/* --- لوحة المتابعة الشاملة --- */
function renderDashboard(){
 var z=$("#dashZone");if(!z)return;
 var avgL=Math.round(LV_DATA.reduce(function(a,L){return a+levelPct(L);},0)/LV_DATA.length);
 var doneN=LV_DATA.filter(function(L){return levelProg(L.id).done;}).length;
 var avgK=DB.children.length?Math.round(DB.children.reduce(function(a,c){return a+childAvg(c);},0)/DB.children.length):0;
 var lowN=0;DB.children.forEach(function(c){Object.keys(SKILLS).forEach(function(k){if((c.skills[k]||0)<60)lowN++;});});
 var h='<div class="dash-kpi">'
  +'<div class="kpi"><div class="big">🎓</div><b>'+avgL+'٪</b><br><small>متوسط إتقان المستويات</small></div>'
  +'<div class="kpi"><div class="big">✔</div><b>'+doneN+'/7</b><br><small>مستويات مكتملة</small></div>'
  +'<div class="kpi"><div class="big">👧</div><b>'+DB.children.length+'</b><br><small>طفلاً • المتوسط '+avgK+'٪</small></div>'
  +'<div class="kpi"><div class="big">⚠️</div><b>'+lowN+'</b><br><small>مهارة تحت 60٪</small></div></div>';
 h+='<div class="grid2"><div class="card"><h3>🎓 إتقان كل مستوى (مترابطة بالتتابع)</h3>'
  +LV_DATA.map(function(L,i){var pct=levelPct(L);var p=levelProg(L.id);
   return '<div class="hbar'+(pct<60?" low":"")+'"><span>'+L.icon+' '+(i+1)+'. '+esc(L.title.split("—")[1]||L.title)+'</span><div class="tr"><i style="width:'+pct+'%"></i></div><b>'+pct+'٪</b></div><div style="margin:-2px 0 8px;display:flex;gap:6px"><button class="btn small soft" data-dgo="'+L.id+'">فتح القسم 📖</button>'+(pct<60?'<button class="btn small" data-dplan="'+L.skill+'">📝 خطة دعم</button>':'<span style="font-size:11.5px;color:var(--green-dark)">✔ يؤهل للتالي</span>')+'</div>';}).join("")
  +'<div style="margin-top:8px"><button class="btn soft small" id="dashPrint">🖨️ طباعة اللوحة</button></div></div>';
 h+='<div class="card"><h3>👧 إتقان كل طفل لكل مهارة/مستوى</h3><div id="dashKids">'
  +(DB.children.length?DB.children.map(function(c){var a=childAvg(c);
   return '<div class="item" style="margin-bottom:8px"><h4>'+esc(c.name)+' — '+a+'٪ '+(a<60?"⚠️":"✅")+'</h4>'+LV_DATA.map(function(L){var map={L1:c.skills.spelling,L2:c.skills.reading,L3:c.skills.tashkeel,L4:c.skills.reading,L5:c.skills.reading,L6:c.skills.spelling,L7:c.skills.dictation};var v=map[L.id]||0;
    return '<div class="hbar'+(v<60?" low":"")+'"><span style="font-size:11.5px">'+L.icon+' '+esc(L.title.split("—")[1]||"")+'</span><div class="tr"><i style="width:'+v+'%"></i></div><b>'+v+'٪</b></div>';}).join("")+'</div>';}).join(""):'<p style="color:var(--muted)">لا أطفال بعد — أضيفي من صفحة المتابعة، وستظهر هنا نسبهم لكل مستوى تلقائياً.</p>')
  +'</div></div></div>';
 h+='<div class="card" style="margin-top:14px"><h3>🔗 الترابط: ماذا بعد اللوحة؟</h3><p style="font-size:13px;color:var(--muted)">• المستوى المتعثر (&lt;60٪) يُحوَّل لخطة علاجية بنقرة • نتيجة المستوى تُرحَّل لملف الطفل • تقدم المعلمات في الإشراف يتغذى من إنجاز المستويات • كل ذلك قابل للطباعة والمشاركة.</p><div class="kv"><span class="pill">المستويات ← المتابعة</span><span class="pill">المتابعة ← الخطط العلاجية</span><span class="pill">الخطط ← الإشراف والتقارير</span></div></div>';
 z.innerHTML=h;
 Array.prototype.forEach.call(z.querySelectorAll("[data-dgo]"),function(b){b.onclick=function(){curLevel=b.dataset.dgo;renderLevels();go("levels");};});
 Array.prototype.forEach.call(z.querySelectorAll("[data-dplan]"),function(b){b.onclick=function(){if(!unlocked()){toast("ادخلي وضع المعلمة أولاً 🔒");return;}
  if(!DB.children.length){toast("أضيفي طفلاً أولاً 👧");return;}
  DB.plans.unshift({id:uid(),childId:DB.children[0].id,weeks:4,skills:[b.dataset.dplan],goals:"دعم مهارة "+SKILLS[b.dataset.dplan]+" (من لوحة المتابعة).",acts:"بطاقات + لعبة + إملاء يومي.",status:"جارية 🌱",result:""});save();renderPlans();toast("أُنشئت خطة دعم 📝");go("plans");};});
 var dp=$("#dashPrint");if(dp)dp.onclick=function(){doPrint('<h2 style="text-align:center">🧭 لوحة متابعة نور البيان — غراس</h2><p>متوسط المستويات: '+avgL+'٪ • المكتملة: '+doneN+'/7 • الأطفال: '+DB.children.length+' • المتوسط: '+avgK+'٪ • التاريخ: '+new Date().toLocaleDateString("ar")+'</p><table><tr><th>المستوى</th><th>الإتقان</th><th>الحالة</th></tr>'+LV_DATA.map(function(L){return '<tr><td>'+esc(L.title)+'</td><td>'+levelPct(L)+'٪</td><td>'+(levelProg(L.id).done?"مكتمل ✔":"جارٍ")+'</td></tr>';}).join("")+'</table><table style="margin-top:8px"><tr><th>الطفل</th><th>المتوسط</th><th>الحالة</th></tr>'+DB.children.map(function(c){return '<tr><td>'+esc(c.name)+'</td><td>'+childAvg(c)+'٪</td><td>'+(childAvg(c)<60?"يحتاج دعم ⚠️":"جيد ✅")+'</td></tr>';}).join("")+'</table>');};
}

/* ===== تشغيل ===== */
function renderAll(){renderLock();refreshLogos();renderHome();renderLib();renderBag();renderSpelling();renderPlans();renderTracking();renderMotivation();renderAdmin();renderSpellGuides();renderAudio();renderMethod();renderPrintModels();renderBagWeekly();renderPics();renderAdvSearch();renderSupervisor();renderTrecords();renderAnalytics();renderLeaderboard();renderDailyCards();renderLevels();renderDashboard();}
renderAll();
/* ربط أزرار المزايا الجديدة */
(function(){
 var b;
 b=$("#audAdd"); if(b)b.onclick=function(){var t=$("#audTitle").value.trim();if(!t){toast("اكتبي عنوان المقطع ✏️");return;}DB.audio.push({id:uid(),title:t,text:$("#audText").value.trim()||t,fileData:null,fileName:null});save();$("#audTitle").value="";$("#audText").value="";renderAudio();toast("أُضيف المقطع الناطق 🎧");};
 b=$("#audFile"); if(b)b.onchange=function(e){var f=e.target.files[0];if(!f)return;if(f.size>2.5*1024*1024){toast("الملف أكبر من ٢.٥MB ⚠️");return;}var r=new FileReader();r.onload=function(){DB.audio.push({id:uid(),title:f.name,text:"",fileData:r.result,fileName:f.name});save();renderAudio();toast("رُفع المقطع الصوتي 🎤");};r.readAsDataURL(f);};
 b=$("#methodShare"); if(b)b.onclick=function(){var m=METHOD[DB.methodStage];var t="🌳 غراس — المهارة الحالية: "+m.t+" ("+m.s+") — الأنشطة: "+m.acts;if(navigator.share)navigator.share({title:"المهارة الحالية",text:t}).catch(function(){});else if(navigator.clipboard)navigator.clipboard.writeText(t).then(function(){toast("نُسخت المهارة للمشاركة 📋");});};
 b=$("#methodPrint"); if(b)b.onclick=function(){doPrint('<h2 style="text-align:center">🌳 مسار نور البيان — غراس</h2><table><tr><th>م</th><th>المرحلة</th><th>الهدف</th><th>الحالة</th></tr>'+METHOD.map(function(m,i){return '<tr><td>'+(i+1)+'</td><td>'+m.icon+' '+esc(m.t)+'</td><td>'+esc(m.s)+'</td><td>'+(i<DB.methodStage?"✔ متقنة":i===DB.methodStage?"📍 الحالية":"قادمة")+'</td></tr>';}).join("")+'</table>');};
 b=$("#wsAdd"); if(b)b.onclick=function(){var t=$("#wsTitle").value.trim();if(!t){toast("اكتبي عنوان الورشة ✏️");return;}DB.workshops.push({id:uid(),title:t,url:$("#wsUrl").value.trim(),desc:$("#wsDesc").value.trim(),dur:"ورشة"});save();$("#wsTitle").value="";$("#wsUrl").value="";$("#wsDesc").value="";renderWorkshops();toast("أُضيفت الورشة 🎥");};
 b=$("#anPrint"); if(b)b.onclick=function(){var avg=DB.children.length?Math.round(DB.children.reduce(function(a,c){return a+childAvg(c);},0)/DB.children.length):0;
  doPrint('<h2 style="text-align:center">📈 تقرير الأثر التربوي — غراس</h2><p>عدد الأطفال: '+DB.children.length+' • متوسط الإتقان العام: '+avg+'٪ • المعلمات: '+DB.teachers.length+' • الخطط العلاجية: '+DB.plans.length+'</p><table><tr><th>الطفل</th><th>التهجي</th><th>القراءة</th><th>الكتابة</th><th>الإملاء</th><th>التشكيل</th><th>المتوسط</th></tr>'+DB.children.map(function(c){return '<tr><td>'+esc(c.name)+'</td><td>'+c.skills.spelling+'٪</td><td>'+c.skills.reading+'٪</td><td>'+c.skills.writing+'٪</td><td>'+c.skills.dictation+'٪</td><td>'+c.skills.tashkeel+'٪</td><td><b>'+childAvg(c)+'٪</b></td></tr>';}).join("")+'</table><p>توقيع الموجهة: ............ التاريخ: '+new Date().toLocaleDateString("ar")+'</p>');};
 b=$("#certAuto"); if(b)b.onclick=issueAutoCert;
 b=$("#printWeekly"); if(b)b.onclick=function(){doPrint('<h2 style="text-align:center">📅 الخطط الأسبوعية — غراس</h2><table><tr><th>الأسبوع</th><th>المعلمة</th><th>الأهداف</th><th>الحالة</th></tr>'+DB.weekly.map(function(w){var tc=DB.teachers.find(function(x){return x.id===w.teacherId;});return '<tr><td>'+esc(w.week)+'</td><td>'+esc(tc?tc.name:"")+'</td><td>'+esc(w.goals)+'</td><td>'+esc(w.status)+'</td></tr>';}).join("")+'</table>');};
})();
