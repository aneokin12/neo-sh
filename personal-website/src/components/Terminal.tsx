'use client';

import { useEffect, useRef } from 'react';
import { Terminal as XTerm } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';
// Import the ASCII art from a separate file
import { asciiArt, asciiName } from '../utils/ascii';

export default function Terminal() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<XTerm | null>(null);
  const fitAddonRef = useRef<any>(null);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    // Dynamically import the addons only on the client side
    const loadTerminal = async () => {
      // Dynamically import the addons
      const { FitAddon } = await import('@xterm/addon-fit');
      const { WebLinksAddon } = await import('@xterm/addon-web-links');
      
      // Initialize terminal with specific dimensions to prevent distortion
      const term = new XTerm({
        cursorBlink: true,
        theme: {
          background: '#1E1E1E',
          foreground: '#F8F8F8',
          cursor: '#F8F8F8',
          selectionBackground: '#4D4D4D',
        },
        fontFamily: 'monospace',
        fontSize: 14,
        // Disable automatic line wrap to prevent ASCII art distortion
        cols: 100, // Set a fixed width that's wide enough for ASCII art
        rows: 30,  // Set reasonable height
        scrollback: 1000,
        allowTransparency: true,
      });
      
      xtermRef.current = term;
      
      // Create and load addons
      const fitAddon = new FitAddon();
      fitAddonRef.current = fitAddon;
      term.loadAddon(fitAddon);
      term.loadAddon(new WebLinksAddon());

      // Function to display welcome message with ASCII art
      const displayWelcome = (terminal: XTerm) => {
        // Display name line by line
        const nameLines = asciiName.split('\n');
        for (const line of nameLines) {
          terminal.writeln('\x1b[1;32m' + line + '\x1b[0m');
        }
        
        terminal.writeln('\r\n');
        terminal.writeln('Welcome to my terminal website!');
        terminal.writeln('Type \x1b[1;32mhelp\x1b[0m to see available commands.');
        terminal.writeln('\r\n');
      };

      // Define command handlers
      const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim();
        
        switch (trimmedCmd) {
          case 'welcome':
            displayWelcome(term);
            break;
          case 'help':
            term.writeln('Available commands:');
            term.writeln('\x1b[1;34m  welcome\x1b[0m');
            term.writeln('    - Display welcome message and ASCII art')
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
            // Do nothing for empty commands
            break;
          default:
            term.writeln(`Command not found: ${trimmedCmd}`);
            term.writeln('Type \x1b[1;32mhelp\x1b[0m to see available commands.');
        }
      };

      // Mount terminal to DOM
      if (terminalRef.current) {
        term.open(terminalRef.current);
        // Don't auto-fit to prevent distortion of ASCII art
        
        // Run welcome command on startup
        displayWelcome(term);
        term.write('$ ');
        
        // Handle input
        let command = '';
        term.onData(e => {
          switch (e) {
            case '\r': // Enter
              term.write('\r\n');
              handleCommand(command);
              command = '';
              term.write('$ ');
              break;
            case '\u007F': // Backspace
              if (command.length > 0) {
                command = command.substring(0, command.length - 1);
                term.write('\b \b');
              }
              break;
            default:
              command += e;
              term.write(e);
          }
        });
      }

      // Handle resize but be careful not to distort the content
      const handleResize = () => {
        // Still call fit but with a minimum width constraint
        fitAddonRef.current?.fit();
        // Ensure minimum column width is maintained
        if (term.cols < 100) {
          term.resize(100, term.rows);
        }
      };
      window.addEventListener('resize', handleResize);

      // Call resize once to initialize properly
      handleResize();

      // Return cleanup function for when component unmounts
      return () => {
        term.dispose();
        window.removeEventListener('resize', handleResize);
      };
    };

    // Execute the async function
    const cleanup = loadTerminal();
    
    // Return a cleanup function
    return () => {
      // When the component unmounts, ensure we call the cleanup function
      cleanup.then(cleanupFn => cleanupFn && cleanupFn());
    };
  }, []);

  return (
    <div className="terminal-outer-container">
      <div ref={terminalRef} className="terminal-inner-container" />
    </div>
  );
}