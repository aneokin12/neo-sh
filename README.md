# Neo-sh: Interactive Terminal Website

A modern, interactive terminal-style website built with Next.js and xterm.js, providing a unique command-line interface experience in the browser.

## 🌟 Features

- **Interactive Terminal Interface**: Fully functional terminal emulator with cursor blinking and command history
- **Custom ASCII Art**: Displays stylized welcome message with ASCII art
- **Responsive Design**: Maintains proper formatting across different screen sizes
- **Command-Line Interface**: Execute various commands to navigate through content

## 🛠 Available Commands

| Command   | Description                           |
|-----------|---------------------------------------|
| `welcome` | Display welcome message and ASCII art |
| `help`    | List all available commands          |
| `about`   | Show information about the developer  |
| `skills`  | Display technical skills             |
| `contact` | Show contact information             |
| `clear`   | Clear the terminal screen            |

## 💻 Technical Implementation

- Built with Next.js and TypeScript
- Uses xterm.js for terminal emulation
- Features custom terminal configuration:
  - Custom color theme
  - Fixed dimensions (100x30) for optimal ASCII art display
  - Command history support
  - URL detection and linking
  - Custom font and size settings

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
