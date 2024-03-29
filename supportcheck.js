"use strict";
! function() {
    var e = !!document.querySelector('script[src*="kaspersky"]'),
        t = document.createElement("canvas"),
        r = [];
    if (!(!t.getContext("webgl") && !t.getContext("experimental-webgl")) || r.push("WebGL"), "undefined" == typeof WebAssembly && r.push("WebAssembly"), "noModule" in HTMLScriptElement.prototype || r.push("JavaScript Modules"), 0 !== r.length || e) {
        var o = document.createElement("div");
        o.id = "notSupportedWrap", document.body.appendChild(o);
        var s = document.createElement("h2");
        s.id = "notSupportedTitle", s.textContent = e ? "Kaspersky Internet Security broke this export" : "Software update needed", o.appendChild(s);
        var n = document.createElement("p");
        n.className = "notSupportedMessage";
        var a = "This content is not supported because your device's software is out-of-date. ",
            i = navigator.userAgent;
        /android/i.test(i) ? a += '<br><br>On Android, fix this by making sure the <a href="https://play.google.com/store/apps/details?id=com.google.android.webview">Android System Webview</a> app has updates enabled and is up-to-date.' : /iphone|ipad|ipod/i.test(i) ? a += "<br><br>Note: using the <strong>iOS simulator</strong> requires <strong>Xcode 12+</strong>. Otherwise try testing on a real device instead." : !/msie/i.test(i) && !/trident/i.test(i) || /edge\//i.test(i) ? e ? a = "It appears a script was added to this export by Kaspersky software. This prevents the exported project from working. Try disabling Kaspersky and exporting again." : a += "Try installing any available software updates. Alternatively try on a different device." : a += "<br><br>Note: <strong>Internet Explorer</strong> is not supported. Try using <a href='https://www.google.com/chrome'>Chrome</a> or <a href='https://www.mozilla.org/firefox'>Firefox</a> instead.", a += "<br><br><em>Missing features: " + r.join(", ") + "<br>User agent: " + navigator.userAgent + "</em>", n.innerHTML = a, o.appendChild(n)
    } else window.C3_IsSupported = !0
}();