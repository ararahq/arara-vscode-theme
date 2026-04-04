#!/usr/bin/env node

/**
 * Gerador de themes do VS Code a partir das cores centralizadas.
 *
 * Uso: node generate-themes.js
 *
 * Gera:
 *   - themes/arara-dark.json
 *   - themes/arara-light.json
 */

const fs = require("fs");
const path = require("path");
const { brand } = require("./colors");

const darkTheme = {
  name: "Arara Dark",
  type: "dark",
  semanticHighlighting: true,
  colors: {
    // === Editor ===
    "editor.background": "#1A1B26",
    "editor.foreground": "#C0CAF5",
    "editor.lineHighlightBackground": "#1E2030",
    "editor.selectionBackground": `${brand.primary}40`,
    "editor.selectionHighlightBackground": `${brand.primary}20`,
    "editor.findMatchBackground": `${brand.primary}50`,
    "editor.findMatchHighlightBackground": `${brand.primary}25`,
    "editor.wordHighlightBackground": `${brand.primary}20`,
    "editor.wordHighlightStrongBackground": `${brand.primary}30`,
    "editorCursor.foreground": brand.primary,
    "editorWhitespace.foreground": "#3B4261",
    "editorIndentGuide.background": "#292E42",
    "editorIndentGuide.activeBackground": "#3B4261",
    "editorLineNumber.foreground": "#3B4261",
    "editorLineNumber.activeForeground": brand.primary,
    "editorBracketMatch.background": `${brand.primary}30`,
    "editorBracketMatch.border": brand.primary,
    "editorGutter.addedBackground": brand.success,
    "editorGutter.modifiedBackground": brand.info,
    "editorGutter.deletedBackground": brand.error,

    // === Workbench ===
    "focusBorder": brand.primary,
    "foreground": "#C0CAF5",
    "descriptionForeground": "#787C99",
    "errorForeground": brand.error,
    "widget.shadow": "#00000050",
    "selection.background": `${brand.primary}40`,
    "icon.foreground": brand.primary,

    // === Activity Bar ===
    "activityBar.background": "#16161E",
    "activityBar.foreground": brand.primary,
    "activityBar.inactiveForeground": "#3B4261",
    "activityBar.border": "#16161E",
    "activityBarBadge.background": brand.primary,
    "activityBarBadge.foreground": "#FFFFFF",

    // === Side Bar ===
    "sideBar.background": "#16161E",
    "sideBar.foreground": "#787C99",
    "sideBar.border": "#1A1B26",
    "sideBarTitle.foreground": brand.primary,
    "sideBarSectionHeader.background": "#16161E",
    "sideBarSectionHeader.foreground": brand.primary,

    // === Title Bar ===
    "titleBar.activeBackground": "#16161E",
    "titleBar.activeForeground": "#C0CAF5",
    "titleBar.inactiveBackground": "#16161E",
    "titleBar.inactiveForeground": "#787C99",
    "titleBar.border": "#16161E",

    // === Tabs ===
    "editorGroupHeader.tabsBackground": "#16161E",
    "tab.activeBackground": "#1A1B26",
    "tab.activeForeground": "#C0CAF5",
    "tab.activeBorderTop": brand.primary,
    "tab.inactiveBackground": "#16161E",
    "tab.inactiveForeground": "#787C99",
    "tab.border": "#16161E",
    "tab.hoverBackground": "#1A1B26",
    "tab.hoverForeground": "#C0CAF5",

    // === Status Bar ===
    "statusBar.background": "#16161E",
    "statusBar.foreground": "#787C99",
    "statusBar.border": "#16161E",
    "statusBar.debuggingBackground": brand.primary,
    "statusBar.debuggingForeground": "#FFFFFF",
    "statusBar.noFolderBackground": "#16161E",
    "statusBarItem.hoverBackground": `${brand.primary}30`,
    "statusBarItem.activeBackground": `${brand.primary}40`,
    "statusBarItem.remoteBackground": brand.primary,
    "statusBarItem.remoteForeground": "#FFFFFF",

    // === Input ===
    "input.background": "#1A1B26",
    "input.foreground": "#C0CAF5",
    "input.border": "#3B4261",
    "input.placeholderForeground": "#3B4261",
    "inputOption.activeBackground": `${brand.primary}40`,
    "inputOption.activeBorder": brand.primary,
    "inputValidation.errorBackground": "#FF2D6F20",
    "inputValidation.errorBorder": brand.error,

    // === Button ===
    "button.background": brand.primary,
    "button.foreground": "#FFFFFF",
    "button.hoverBackground": brand.primaryLight,
    "button.secondaryBackground": "#3B4261",
    "button.secondaryForeground": "#C0CAF5",
    "button.secondaryHoverBackground": "#4B5272",

    // === Dropdown ===
    "dropdown.background": "#1A1B26",
    "dropdown.foreground": "#C0CAF5",
    "dropdown.border": "#3B4261",

    // === List ===
    "list.activeSelectionBackground": `${brand.primary}30`,
    "list.activeSelectionForeground": "#C0CAF5",
    "list.hoverBackground": "#1E2030",
    "list.hoverForeground": "#C0CAF5",
    "list.inactiveSelectionBackground": "#1E2030",
    "list.highlightForeground": brand.primary,
    "list.focusBackground": `${brand.primary}20`,

    // === Scrollbar ===
    "scrollbar.shadow": "#00000030",
    "scrollbarSlider.background": "#3B426150",
    "scrollbarSlider.hoverBackground": "#3B426180",
    "scrollbarSlider.activeBackground": brand.primary,

    // === Badge ===
    "badge.background": brand.primary,
    "badge.foreground": "#FFFFFF",

    // === Terminal ===
    "terminal.background": "#1A1B26",
    "terminal.foreground": "#C0CAF5",
    "terminal.ansiBlack": "#16161E",
    "terminal.ansiRed": "#F7768E",
    "terminal.ansiGreen": "#9ECE6A",
    "terminal.ansiYellow": "#E0AF68",
    "terminal.ansiBlue": "#7AA2F7",
    "terminal.ansiMagenta": "#BB9AF7",
    "terminal.ansiCyan": "#7DCFFF",
    "terminal.ansiWhite": "#C0CAF5",
    "terminal.ansiBrightBlack": "#3B4261",
    "terminal.ansiBrightRed": "#F7768E",
    "terminal.ansiBrightGreen": "#9ECE6A",
    "terminal.ansiBrightYellow": "#E0AF68",
    "terminal.ansiBrightBlue": "#7AA2F7",
    "terminal.ansiBrightMagenta": "#BB9AF7",
    "terminal.ansiBrightCyan": "#7DCFFF",
    "terminal.ansiBrightWhite": "#C0CAF5",
    "terminalCursor.foreground": brand.primary,

    // === Git Decoration ===
    "gitDecoration.addedResourceForeground": brand.success,
    "gitDecoration.modifiedResourceForeground": brand.info,
    "gitDecoration.deletedResourceForeground": brand.error,
    "gitDecoration.untrackedResourceForeground": brand.success,
    "gitDecoration.conflictingResourceForeground": brand.warning,

    // === Peek View ===
    "peekView.border": brand.primary,
    "peekViewEditor.background": "#1A1B26",
    "peekViewResult.background": "#16161E",
    "peekViewTitle.background": "#16161E",
    "peekViewTitleLabel.foreground": brand.primary,

    // === Minimap ===
    "minimap.findMatchHighlight": `${brand.primary}60`,
    "minimap.selectionHighlight": `${brand.primary}40`,

    // === Notification ===
    "notificationCenter.border": brand.primary,
    "notifications.background": "#1A1B26",
    "notifications.foreground": "#C0CAF5",

    // === Bracket Pair Colorization ===
    "editorBracketHighlight.foreground1": brand.primary,
    "editorBracketHighlight.foreground2": "#BB9AF7",
    "editorBracketHighlight.foreground3": "#7AA2F7",
    "editorBracketHighlight.foreground4": "#9ECE6A",
    "editorBracketHighlight.foreground5": "#E0AF68",
    "editorBracketHighlight.foreground6": "#7DCFFF",
  },
  tokenColors: [
    {
      name: "Comments",
      scope: ["comment", "punctuation.definition.comment"],
      settings: { foreground: brand.syntax.comment, fontStyle: "italic" }
    },
    {
      name: "Keywords",
      scope: ["keyword", "storage.type", "storage.modifier"],
      settings: { foreground: brand.syntax.keyword }
    },
    {
      name: "Control Keywords",
      scope: ["keyword.control", "keyword.control.flow"],
      settings: { foreground: "#BB9AF7" }
    },
    {
      name: "Functions",
      scope: ["entity.name.function", "support.function", "meta.function-call"],
      settings: { foreground: brand.syntax.function }
    },
    {
      name: "Strings",
      scope: ["string", "string.quoted"],
      settings: { foreground: brand.syntax.string }
    },
    {
      name: "Template Strings",
      scope: ["string.template", "punctuation.definition.template-expression"],
      settings: { foreground: brand.syntax.string }
    },
    {
      name: "Numbers",
      scope: ["constant.numeric"],
      settings: { foreground: brand.syntax.number }
    },
    {
      name: "Constants",
      scope: ["constant.language", "support.constant", "variable.other.constant"],
      settings: { foreground: brand.syntax.constant }
    },
    {
      name: "Types & Classes",
      scope: ["entity.name.type", "entity.name.class", "support.type", "support.class"],
      settings: { foreground: brand.syntax.type }
    },
    {
      name: "Interfaces",
      scope: ["entity.name.type.interface"],
      settings: { foreground: brand.syntax.type, fontStyle: "italic" }
    },
    {
      name: "Variables",
      scope: ["variable", "variable.other"],
      settings: { foreground: brand.syntax.variable }
    },
    {
      name: "Variable - Parameter",
      scope: ["variable.parameter"],
      settings: { foreground: "#E0AF68", fontStyle: "italic" }
    },
    {
      name: "Object Properties",
      scope: ["variable.other.property", "variable.other.object.property", "support.variable.property"],
      settings: { foreground: brand.syntax.property }
    },
    {
      name: "Operators",
      scope: ["keyword.operator"],
      settings: { foreground: brand.syntax.operator }
    },
    {
      name: "Punctuation",
      scope: ["punctuation", "meta.brace"],
      settings: { foreground: brand.syntax.punctuation }
    },
    {
      name: "HTML/JSX Tags",
      scope: ["entity.name.tag", "support.class.component"],
      settings: { foreground: brand.syntax.tag }
    },
    {
      name: "HTML/JSX Attributes",
      scope: ["entity.other.attribute-name"],
      settings: { foreground: brand.syntax.attribute, fontStyle: "italic" }
    },
    {
      name: "CSS Properties",
      scope: ["support.type.property-name.css"],
      settings: { foreground: brand.syntax.property }
    },
    {
      name: "CSS Values",
      scope: ["support.constant.property-value.css"],
      settings: { foreground: brand.syntax.constant }
    },
    {
      name: "CSS Units",
      scope: ["keyword.other.unit.css"],
      settings: { foreground: brand.syntax.number }
    },
    {
      name: "Regex",
      scope: ["string.regexp"],
      settings: { foreground: brand.syntax.regexp }
    },
    {
      name: "Decorators / Annotations",
      scope: ["meta.decorator", "punctuation.decorator"],
      settings: { foreground: brand.syntax.decorator }
    },
    {
      name: "JSON Keys",
      scope: ["support.type.property-name.json"],
      settings: { foreground: brand.syntax.property }
    },
    {
      name: "Markdown Heading",
      scope: ["markup.heading", "entity.name.section.markdown"],
      settings: { foreground: brand.primary, fontStyle: "bold" }
    },
    {
      name: "Markdown Bold",
      scope: ["markup.bold"],
      settings: { foreground: brand.syntax.keyword, fontStyle: "bold" }
    },
    {
      name: "Markdown Italic",
      scope: ["markup.italic"],
      settings: { foreground: brand.syntax.type, fontStyle: "italic" }
    },
    {
      name: "Markdown Link",
      scope: ["markup.underline.link"],
      settings: { foreground: brand.syntax.function }
    },
    {
      name: "Markdown Code",
      scope: ["markup.inline.raw", "markup.fenced_code.block"],
      settings: { foreground: brand.syntax.string }
    },
    {
      name: "Diff Added",
      scope: ["markup.inserted"],
      settings: { foreground: brand.success }
    },
    {
      name: "Diff Deleted",
      scope: ["markup.deleted"],
      settings: { foreground: brand.error }
    },
    {
      name: "Diff Changed",
      scope: ["markup.changed"],
      settings: { foreground: brand.info }
    },
    {
      name: "Import/Export",
      scope: ["keyword.control.import", "keyword.control.export", "keyword.control.from"],
      settings: { foreground: brand.syntax.keyword }
    },
    {
      name: "this/self",
      scope: ["variable.language.this", "variable.language.self", "variable.language.special"],
      settings: { foreground: brand.primary, fontStyle: "italic" }
    },
  ]
};

const lightTheme = {
  name: "Arara Light",
  type: "light",
  semanticHighlighting: true,
  colors: {
    // === Editor ===
    "editor.background": "#FAFAFA",
    "editor.foreground": "#383A42",
    "editor.lineHighlightBackground": "#F0F0F0",
    "editor.selectionBackground": `${brand.primary}30`,
    "editor.selectionHighlightBackground": `${brand.primary}15`,
    "editor.findMatchBackground": `${brand.primary}40`,
    "editor.findMatchHighlightBackground": `${brand.primary}20`,
    "editor.wordHighlightBackground": `${brand.primary}15`,
    "editorCursor.foreground": brand.primaryDark,
    "editorWhitespace.foreground": "#D3D3D3",
    "editorIndentGuide.background": "#E8E8E8",
    "editorIndentGuide.activeBackground": "#C8C8C8",
    "editorLineNumber.foreground": "#C8C8C8",
    "editorLineNumber.activeForeground": brand.primaryDark,
    "editorBracketMatch.background": `${brand.primary}25`,
    "editorBracketMatch.border": brand.primaryDark,
    "editorGutter.addedBackground": "#4EC9B0",
    "editorGutter.modifiedBackground": "#4078F2",
    "editorGutter.deletedBackground": "#E45649",

    // === Workbench ===
    "focusBorder": brand.primaryDark,
    "foreground": "#383A42",
    "descriptionForeground": "#A0A1A7",
    "errorForeground": "#E45649",
    "icon.foreground": brand.primaryDark,

    // === Activity Bar ===
    "activityBar.background": "#F0F0F0",
    "activityBar.foreground": brand.primaryDark,
    "activityBar.inactiveForeground": "#A0A1A7",
    "activityBar.border": "#E8E8E8",
    "activityBarBadge.background": brand.primaryDark,
    "activityBarBadge.foreground": "#FFFFFF",

    // === Side Bar ===
    "sideBar.background": "#F0F0F0",
    "sideBar.foreground": "#707177",
    "sideBar.border": "#E8E8E8",
    "sideBarTitle.foreground": brand.primaryDark,

    // === Title Bar ===
    "titleBar.activeBackground": "#F0F0F0",
    "titleBar.activeForeground": "#383A42",
    "titleBar.border": "#E8E8E8",

    // === Tabs ===
    "editorGroupHeader.tabsBackground": "#F0F0F0",
    "tab.activeBackground": "#FAFAFA",
    "tab.activeForeground": "#383A42",
    "tab.activeBorderTop": brand.primaryDark,
    "tab.inactiveBackground": "#F0F0F0",
    "tab.inactiveForeground": "#A0A1A7",
    "tab.border": "#E8E8E8",

    // === Status Bar ===
    "statusBar.background": "#F0F0F0",
    "statusBar.foreground": "#707177",
    "statusBar.border": "#E8E8E8",
    "statusBar.debuggingBackground": brand.primaryDark,
    "statusBar.debuggingForeground": "#FFFFFF",
    "statusBarItem.hoverBackground": `${brand.primaryDark}20`,
    "statusBarItem.remoteBackground": brand.primaryDark,
    "statusBarItem.remoteForeground": "#FFFFFF",

    // === Input ===
    "input.background": "#FFFFFF",
    "input.foreground": "#383A42",
    "input.border": "#D3D3D3",
    "input.placeholderForeground": "#A0A1A7",
    "inputOption.activeBackground": `${brand.primaryDark}30`,
    "inputOption.activeBorder": brand.primaryDark,

    // === Button ===
    "button.background": brand.primaryDark,
    "button.foreground": "#FFFFFF",
    "button.hoverBackground": brand.primary,

    // === List ===
    "list.activeSelectionBackground": `${brand.primaryDark}25`,
    "list.activeSelectionForeground": "#383A42",
    "list.hoverBackground": "#E8E8E8",
    "list.highlightForeground": brand.primaryDark,

    // === Terminal ===
    "terminal.background": "#FAFAFA",
    "terminal.foreground": "#383A42",
    "terminalCursor.foreground": brand.primaryDark,

    // === Git ===
    "gitDecoration.addedResourceForeground": "#50A14F",
    "gitDecoration.modifiedResourceForeground": "#4078F2",
    "gitDecoration.deletedResourceForeground": "#E45649",
    "gitDecoration.untrackedResourceForeground": "#50A14F",

    // === Bracket Pair ===
    "editorBracketHighlight.foreground1": brand.primaryDark,
    "editorBracketHighlight.foreground2": "#A626A4",
    "editorBracketHighlight.foreground3": "#4078F2",
    "editorBracketHighlight.foreground4": "#50A14F",
    "editorBracketHighlight.foreground5": "#E0AF68",
    "editorBracketHighlight.foreground6": "#0184BC",
  },
  tokenColors: [
    {
      name: "Comments",
      scope: ["comment", "punctuation.definition.comment"],
      settings: { foreground: "#A0A1A7", fontStyle: "italic" }
    },
    {
      name: "Keywords",
      scope: ["keyword", "storage.type", "storage.modifier"],
      settings: { foreground: "#A626A4" }
    },
    {
      name: "Control Keywords",
      scope: ["keyword.control", "keyword.control.flow"],
      settings: { foreground: "#A626A4" }
    },
    {
      name: "Functions",
      scope: ["entity.name.function", "support.function", "meta.function-call"],
      settings: { foreground: "#4078F2" }
    },
    {
      name: "Strings",
      scope: ["string", "string.quoted"],
      settings: { foreground: "#50A14F" }
    },
    {
      name: "Numbers",
      scope: ["constant.numeric"],
      settings: { foreground: "#986801" }
    },
    {
      name: "Constants",
      scope: ["constant.language", "support.constant", "variable.other.constant"],
      settings: { foreground: "#986801" }
    },
    {
      name: "Types & Classes",
      scope: ["entity.name.type", "entity.name.class", "support.type", "support.class"],
      settings: { foreground: "#C18401" }
    },
    {
      name: "Variables",
      scope: ["variable", "variable.other"],
      settings: { foreground: "#383A42" }
    },
    {
      name: "Variable - Parameter",
      scope: ["variable.parameter"],
      settings: { foreground: "#986801", fontStyle: "italic" }
    },
    {
      name: "Object Properties",
      scope: ["variable.other.property", "support.variable.property"],
      settings: { foreground: "#E45649" }
    },
    {
      name: "Operators",
      scope: ["keyword.operator"],
      settings: { foreground: "#A626A4" }
    },
    {
      name: "HTML/JSX Tags",
      scope: ["entity.name.tag", "support.class.component"],
      settings: { foreground: "#E45649" }
    },
    {
      name: "HTML/JSX Attributes",
      scope: ["entity.other.attribute-name"],
      settings: { foreground: "#986801", fontStyle: "italic" }
    },
    {
      name: "Decorators",
      scope: ["meta.decorator", "punctuation.decorator"],
      settings: { foreground: brand.primaryDark }
    },
    {
      name: "Markdown Heading",
      scope: ["markup.heading", "entity.name.section.markdown"],
      settings: { foreground: brand.primaryDark, fontStyle: "bold" }
    },
    {
      name: "Markdown Link",
      scope: ["markup.underline.link"],
      settings: { foreground: "#4078F2" }
    },
    {
      name: "this/self",
      scope: ["variable.language.this", "variable.language.self"],
      settings: { foreground: brand.primaryDark, fontStyle: "italic" }
    },
    {
      name: "Import/Export",
      scope: ["keyword.control.import", "keyword.control.export"],
      settings: { foreground: "#A626A4" }
    },
  ]
};

const themesDirectory = path.join(__dirname, "themes");

if (!fs.existsSync(themesDirectory)) {
  fs.mkdirSync(themesDirectory, { recursive: true });
}

fs.writeFileSync(
  path.join(themesDirectory, "arara-dark.json"),
  JSON.stringify(darkTheme, null, 2)
);

fs.writeFileSync(
  path.join(themesDirectory, "arara-light.json"),
  JSON.stringify(lightTheme, null, 2)
);

console.log("Themes generated successfully!");
console.log("  - themes/arara-dark.json");
console.log("  - themes/arara-light.json");
