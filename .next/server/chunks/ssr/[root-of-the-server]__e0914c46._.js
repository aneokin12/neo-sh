module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/utils/ascii.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// ASCII art for the terminal welcome screen
__turbopack_context__.s({
    "asciiArt": (()=>asciiArt),
    "asciiName": (()=>asciiName)
});
const asciiArt = `
   _____                        _           _ 
  / ____|                      (_)         | |
 | |     ___  _ __  ___  ___   _ _ __   __| |
 | |    / _ \\| '_ \\/ __|/ _ \\ | | '_ \\ / _\` |
 | |___| (_) | | | \\__ \\ (_) || | | | | (_| |
  \\_____\\___/|_| |_|___/\\___/ |_|_| |_|\\__,_|
`;
const asciiName = `

    ███▄    █ ▓█████  ▒█████       ██████  █    ██ ▓█████▄ 
    ██ ▀█   █ ▓█   ▀ ▒██▒  ██▒   ▒██    ▒  ██  ▓██▒▒██▀ ██▌
    ▓██  ▀█ ██▒▒███   ▒██░  ██▒   ░ ▓██▄   ▓██  ▒██░░██   █▌
    ▓██▒  ▐▌██▒▒▓█  ▄ ▒██   ██░     ▒   ██▒▓▓█  ░██░░▓█▄   ▌
    ▒██░   ▓██░░▒████▒░ ████▓▒░   ▒██████▒▒▒▒█████▓ ░▒████▓ 
    ░ ▒░   ▒ ▒ ░░ ▒░ ░░ ▒░▒░▒░    ▒ ▒▓▒ ▒ ░░▒▓▒ ▒ ▒  ▒▒▓  ▒ 
    ░ ░░   ░ ▒░ ░ ░  ░  ░ ▒ ▒░    ░ ░▒  ░ ░░░▒░ ░ ░  ░ ▒  ▒ 
    ░   ░ ░    ░   ░ ░ ░ ▒     ░  ░  ░   ░░░ ░ ░  ░ ░  ░ 
            ░    ░  ░    ░ ░           ░     ░        ░    
                                                    ░      
`; // Feel free to replace the ASCII art above with your actual name and preferred art design
 // You can create ASCII art using tools like http://patorjk.com/software/taag/
}}),
"[project]/src/components/Terminal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Terminal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xterm$2f$xterm$2f$lib$2f$xterm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@xterm/xterm/lib/xterm.js [app-ssr] (ecmascript)");
// Import the ASCII art from a separate file
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$ascii$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/ascii.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Terminal() {
    const terminalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const xtermRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fitAddonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only run on client-side
        if ("TURBOPACK compile-time truthy", 1) return;
        "TURBOPACK unreachable";
        // Dynamically import the addons only on the client side
        const loadTerminal = undefined;
        // Execute the async function
        const cleanup = undefined;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "terminal-outer-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: terminalRef,
            className: "terminal-inner-container"
        }, void 0, false, {
            fileName: "[project]/src/components/Terminal.tsx",
            lineNumber: 179,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Terminal.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__e0914c46._.js.map