# Arara Theme for VS Code

A vibrant, developer-first theme crafted by [AraraHQ](https://ararahq.com) — the communication infrastructure for Latin America.

## Variants

- **Arara Dark** — Deep, focused dark theme for long coding sessions
- **Arara Light** — Clean, crisp light theme for bright environments

## Installation

### From VS Code Marketplace

1. Open **Extensions** sidebar (`Cmd+Shift+X`)
2. Search for `Arara Theme`
3. Click **Install**
4. Open **Command Palette** (`Cmd+Shift+P`) → `Preferences: Color Theme` → Select **Arara Dark** or **Arara Light**

### From VSIX

```bash
code --install-extension arara-theme-1.0.0.vsix
```

## Customizing Colors

All brand colors are centralized in `colors.js`. To customize:

1. Edit `colors.js` — change the `brand` object
2. Run `node generate-themes.js`
3. The theme files in `themes/` are regenerated automatically

This makes it trivial to update the entire theme when brand colors change.

## Language Support

Optimized syntax highlighting for:

- TypeScript / JavaScript / JSX / TSX
- Kotlin / Java
- Python
- Go
- PHP
- HTML / CSS / SCSS
- JSON / YAML / TOML
- Markdown
- SQL
- Shell / Bash
- And many more via TextMate scopes

## Contributing

Found a language that doesn't look right? Open an issue or PR at [github.com/ararahq/arara-vscode-theme](https://github.com/ararahq/arara-vscode-theme).

## License

MIT - [AraraHQ](https://ararahq.com)
