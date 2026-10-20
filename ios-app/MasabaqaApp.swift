import SwiftUI
import WebKit

// ============================================================
//  تطبيق الآيباد لمسابقة التنوين — فريقا الأميرات والملكات
//  يعمل بدون إنترنت (نسخة التطبيق مخزّنة داخل الجهاز)
// ============================================================

@main
struct MasabaqaApp: App {
    var body: some Scene {
        WindowGroup {
            WebScreen()
                .ignoresSafeArea()
                .statusBarHidden(true)
        }
    }
}

struct WebScreen: UIViewRepresentable {
    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        config.allowsInlineMediaPlayback = true
        config.mediaTypesRequiringUserActionForPlayback = []

        let webView = WKWebView(frame: .zero, configuration: config)
        webView.isOpaque = false
        webView.backgroundColor = UIColor(red: 0.99, green: 0.95, blue: 0.98, alpha: 1)
        webView.scrollView.contentInsetAdjustmentBehavior = .never
        webView.allowsBackForwardNavigationGestures = false

        if let url = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "www") {
            webView.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())
        } else if let url = URL(string: "https://gk5crt65zp-spec.github.io/-/competition-app/") {
            webView.load(URLRequest(url: url))
        }
        return webView
    }

    func updateUIView(_ uiView: WKWebView, context: Context) {}
}
