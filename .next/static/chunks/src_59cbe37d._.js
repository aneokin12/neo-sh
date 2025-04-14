(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/utils/ascii.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Terminal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Terminal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xterm$2f$xterm$2f$lib$2f$xterm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@xterm/xterm/lib/xterm.js [app-client] (ecmascript)");
// Import the ASCII art from a separate file
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$ascii$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/ascii.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Terminal() {
    _s();
    const terminalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const xtermRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fitAddonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Terminal.useEffect": ()=>{
            // Only run on client-side
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            // Dynamically import the addons only on the client side
            const loadTerminal = {
                "Terminal.useEffect.loadTerminal": async ()=>{
                    // Dynamically import the addons
                    const { FitAddon } = await __turbopack_context__.r("[project]/node_modules/@xterm/addon-fit/lib/addon-fit.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                    const { WebLinksAddon } = await __turbopack_context__.r("[project]/node_modules/@xterm/addon-web-links/lib/addon-web-links.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                    // Initialize terminal with specific dimensions to prevent distortion
                    const term = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xterm$2f$xterm$2f$lib$2f$xterm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]({
                        cursorBlink: true,
                        theme: {
                            background: '#1E1E1E',
                            foreground: '#F8F8F8',
                            cursor: '#F8F8F8',
                            selectionBackground: '#4D4D4D'
                        },
                        fontFamily: 'monospace',
                        fontSize: 14,
                        // Disable automatic line wrap to prevent ASCII art distortion
                        cols: 100,
                        rows: 30,
                        scrollback: 1000,
                        allowTransparency: true
                    });
                    xtermRef.current = term;
                    // Create and load addons
                    const fitAddon = new FitAddon();
                    fitAddonRef.current = fitAddon;
                    term.loadAddon(fitAddon);
                    term.loadAddon(new WebLinksAddon());
                    // Function to display welcome message with ASCII art
                    const displayWelcome = {
                        "Terminal.useEffect.loadTerminal.displayWelcome": (terminal)=>{
                            // Display name line by line
                            const nameLines = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$ascii$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asciiName"].split('\n');
                            for (const line of nameLines){
                                terminal.writeln('\x1b[1;32m' + line + '\x1b[0m');
                            }
                            terminal.writeln('\r\n');
                            terminal.writeln('Welcome to my terminal website!');
                            terminal.writeln('Type \x1b[1;32mhelp\x1b[0m to see available commands.');
                            terminal.writeln('\r\n');
                        }
                    }["Terminal.useEffect.loadTerminal.displayWelcome"];
                    // Define command handlers
                    const handleCommand = {
                        "Terminal.useEffect.loadTerminal.handleCommand": (cmd)=>{
                            const trimmedCmd = cmd.trim();
                            switch(trimmedCmd){
                                case 'welcome':
                                    displayWelcome(term);
                                    break;
                                case 'help':
                                    term.writeln('Available commands:');
                                    term.writeln('\x1b[1;34m  welcome\x1b[0m');
                                    term.writeln('    - Display welcome message and ASCII art');
                                    term.writeln('\x1b[1;34m  help\x1b[0m');
                                    term.writeln('    - List available commands');
                                    term.writeln('\x1b[1;34m  about\x1b[0m');
                                    term.writeln('    - Show information about me');
                                    term.writeln('\x1b[1;34m  skills\x1b[0m');
                                    term.writeln('    - Show my technical skills');
                                    term.writeln('\x1b[1;34m  contact\x1b[0m');
                                    term.writeln('    - Show my contact information');
                                    term.writeln('\x1b[1;34m  clear\x1b[0m');
                                    term.writeln('    - Clear the terminal');
                                    break;
                                case 'about':
                                    term.writeln('I am a developer who loves building terminal-like interfaces.');
                                    term.writeln('This website is built using Next.js and xterm.js.');
                                    break;
                                case 'skills':
                                    term.writeln('Technical Skills:');
                                    term.writeln('- Frontend: React, Next.js, TypeScript');
                                    term.writeln('- Backend: Node.js, Express');
                                    term.writeln('- Other: Git, Docker, AWS');
                                    break;
                                case 'contact':
                                    term.writeln('Email: example@example.com');
                                    term.writeln('GitHub: github.com/yourusername');
                                    term.writeln('LinkedIn: linkedin.com/in/yourusername');
                                    break;
                                case 'clear':
                                    term.clear();
                                    break;
                                case '':
                                    break;
                                default:
                                    term.writeln(`Command not found: ${trimmedCmd}`);
                                    term.writeln('Type \x1b[1;32mhelp\x1b[0m to see available commands.');
                            }
                        }
                    }["Terminal.useEffect.loadTerminal.handleCommand"];
                    // Mount terminal to DOM
                    if (terminalRef.current) {
                        term.open(terminalRef.current);
                        // Don't auto-fit to prevent distortion of ASCII art
                        // Run welcome command on startup
                        displayWelcome(term);
                        term.write('$ ');
                        // Handle input
                        let command = '';
                        term.onData({
                            "Terminal.useEffect.loadTerminal": (e)=>{
                                switch(e){
                                    case '\r':
                                        term.write('\r\n');
                                        handleCommand(command);
                                        command = '';
                                        term.write('$ ');
                                        break;
                                    case '\u007F':
                                        if (command.length > 0) {
                                            command = command.substring(0, command.length - 1);
                                            term.write('\b \b');
                                        }
                                        break;
                                    default:
                                        command += e;
                                        term.write(e);
                                }
                            }
                        }["Terminal.useEffect.loadTerminal"]);
                    }
                    // Handle resize but be careful not to distort the content
                    const handleResize = {
                        "Terminal.useEffect.loadTerminal.handleResize": ()=>{
                            // Still call fit but with a minimum width constraint
                            fitAddonRef.current?.fit();
                            // Ensure minimum column width is maintained
                            if (term.cols < 100) {
                                term.resize(100, term.rows);
                            }
                        }
                    }["Terminal.useEffect.loadTerminal.handleResize"];
                    window.addEventListener('resize', handleResize);
                    // Call resize once to initialize properly
                    handleResize();
                    // Return cleanup function for when component unmounts
                    return ({
                        "Terminal.useEffect.loadTerminal": ()=>{
                            term.dispose();
                            window.removeEventListener('resize', handleResize);
                        }
                    })["Terminal.useEffect.loadTerminal"];
                }
            }["Terminal.useEffect.loadTerminal"];
            // Execute the async function
            const cleanup = loadTerminal();
            // Return a cleanup function
            return ({
                "Terminal.useEffect": ()=>{
                    // When the component unmounts, ensure we call the cleanup function
                    cleanup.then({
                        "Terminal.useEffect": (cleanupFn)=>cleanupFn && cleanupFn()
                    }["Terminal.useEffect"]);
                }
            })["Terminal.useEffect"];
        }
    }["Terminal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "terminal-outer-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(Terminal, "tHNrciJKCeMAUWP/4GbBLYQWsmk=");
_c = Terminal;
var _c;
__turbopack_context__.k.register(_c, "Terminal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_59cbe37d._.js.map