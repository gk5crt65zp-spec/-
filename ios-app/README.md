# 📱 تطبيق الآيباد (iOS أصلي) — مسابقة التنوين

مشروع جاهز لتحويل المسابقة إلى **تطبيق iPad أصلي** يعمل **بدون إنترنت تمامًا**
(نسخة التطبيق مخزّنة داخل الجهاز — لا تحتاج WiFi ولا رابط).

> requires جهاز Mac + Xcode (مجانٍ من App Store). بدون ماك؟ استخدمِ
> **طريقة PWA** في `../competition-app/README.md` (تثبيت من سفاري في دقيقة).

---

## خطوات البناء (≈ 10 دقائق)

1. **ثبّتي Xcode** من App Store على الـ Mac، ثم افتحيه واقبلي соглачения التطوير.
2. من داخل مجلد `ios-app` افتحي الطرفية (Terminal) وشغّلي:
   ```bash
   cd ios-app
   mkdir Masabaqa.xcodeproj
   open Masabaqa.xcodeproj
   ```
   (أو: File ▸ New ▸ Project ▸ iOS ▸ App ▸ Swift —同名 `Masabaqa`، وInterface: SwiftUI.)
3. **احذفي** الملف `ContentView.swift` الذي أنشأه Xcode، و**أضيفي** ملف `MasabaqaApp.swift`
   (اسحبيه من هذا المجلد إلى المشروع).
4. **أضيفي مجلد `www`** إلى المشروع: اسحبيه إلى نافذة Xcode ← اختر **Copy items if needed**
   و**Create folder references** (حتى يُنسخ داخل الحزمة).
5. من **Settings ▸ General**: الاسم = `مسابقة التنوين`، و**Deployment Target** = iOS 16.0 فأحدث.
6. من **Info**: فعّلي كل الاتجاهات (Portrait + Landscape).
7. من **Assets**: أضيفي أيقونة التطبيق (استخدمي `www/icons/icon-512.png`).
8. وصّلي الآيباد بالـ Mac ← اختاري جهازك من قائمة_scheme ← **Run** (⌘R).
   - بتوقيع **Apple ID مجاني**: يعمل 7 أيام ثم يُعاد التوقيع (طبيعي لكل التطبيقات غير المدفوعة).
   - للرفع على App Store: Signing & Capabilities ← Team (حساب Apple Developer مدفوع).

---

## ملفات المشروع

| الملف | الوظيفة |
|---|---|
| `MasabaqaApp.swift` | التطبيق: شاشة `WKWebView` تعرض نسخة المسابقة المحفوظة داخل الجهاز |
| `www/index.html` | نسخة المسابقة الكاملة (تعمل بلا إنترنت) |
| `www/icons/` | أيقونات التطبيق (تاج) |

## ملاحظات
- الصوت (تصفيق الإجابة + نغمة الفائز) مفعّل داخل التطبيق لأنه يعمل محليًا ✓.
- التطبيق يعرض نسخة `www` أولًا، فإن لم يجدها ينتقل تلقائيًا إلى الرابط الإلكتروني.
- لإخفاء شريط الحالة أثناء العرض أضغطي `statusBarHidden(true)` (موجود أصلًا).
