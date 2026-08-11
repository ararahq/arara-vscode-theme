/**
 * ============================================
 * ARARA BRAND COLORS - SINGLE SOURCE OF TRUTH
 * ============================================
 *
 * Quando a identidade visual mudar, altere APENAS este arquivo.
 * Todos os themes (dark/light) usam essas cores como base.
 *
 * Para atualizar:
 * 1. Mude as cores abaixo
 * 2. Rode: node generate-themes.js
 * 3. Os arquivos em /themes/ serao regenerados automaticamente
 */

const brand = {
  // === FONTES DA MARCA ===
  // VS Code nao aplica fontes via theme, mas ficam aqui como referencia
  // pra usar em outros projetos (docs, landing page, CLI outputs, etc.)
  // O usuario pode configurar manualmente em settings.json:
  //   "editor.fontFamily": "JetBrains Mono"
  //   "editor.fontSize": 14
  fonts: {
    heading:   "DM Sans",          // titulos, headers, UI
    body:      "DM Sans",          // texto corrido, paragrafos
    code:      "JetBrains Mono",   // editor, code blocks, terminal
    serif:     "Instrument Serif", // destaques editoriais, quotes
  },

  // === PRIMARY (a cor principal da marca) ===
  // Teal oficial da identidade AraraHQ (ararahq-identidade.pen / globals.css do dash).
  primary:        "#1C99A7",
  primaryLight:   "#5FBCC7",
  primaryDark:    "#0E7D8A",
  primaryMuted:   "#1C99A733", // Primary com 20% opacity
  primarySubtle:  "#1C99A715", // Primary com 8% opacity

  // === ACCENT (cor secundaria / destaque) ===
  accent:         "#F3B64B",  // Dourado da identidade
  accentLight:    "#FFCA57",
  accentDark:     "#D4911E",

  // === SEMANTIC (nao mudam com a marca) ===
  success:        "#4EC9B0",
  warning:        "#E5C07B",
  error:          "#F44747",
  info:           "#61AFEF",

  // === SYNTAX HIGHLIGHTING (personalizaveis) ===
  syntax: {
    keyword:      "#1C99A7",  // primary — if, const, return
    function:     "#61AFEF",  // azul — nomes de funcao
    string:       "#98C379",  // verde — strings
    number:       "#D19A66",  // dourado — numeros
    comment:      "#5C6370",  // cinza — comentarios
    type:         "#E5C07B",  // amarelo — tipos/classes
    variable:     "#ABB2BF",  // cinza claro — variaveis
    operator:     "#C678DD",  // roxo — operadores
    punctuation:  "#ABB2BF",  // cinza — pontuacao
    tag:          "#E06C75",  // vermelho — tags HTML/JSX
    attribute:    "#D19A66",  // dourado — atributos
    property:     "#61AFEF",  // azul — propriedades
    constant:     "#D19A66",  // dourado — constantes
    regexp:       "#98C379",  // verde — regex
    decorator:    "#1C99A7",  // primary — decorators
  }
};

/**
 * Variante Laranja — a cor original do tema (1.0.x), mantida como opcao.
 * Quem escolheu "Arara Dark Laranja" fica com o visual de sempre.
 */
const laranja = {
  ...brand,
  primary:        "#E86A2A",
  primaryLight:   "#F0944D",
  primaryDark:    "#C45A1F",
  primaryMuted:   "#E86A2A33",
  primarySubtle:  "#E86A2A15",
  accent:         "#F5A623",
  syntax: { ...brand.syntax, keyword: "#E86A2A", decorator: "#E86A2A" },
};

module.exports = { brand, palettes: { teal: brand, laranja } };
