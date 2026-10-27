# Hospital Oeste Day — Portal & Landing Pages

Portal institucional e landing pages de alta conversão do **Hospital Oeste Day**, complexo hospitalar de 2.000 m² localizado em Jacarepaguá, Rio de Janeiro - RJ, 100% dedicado a cirurgias plásticas eletivas e procedimentos programados em modelo Day Hospital.

---

## 🏥 Sobre o Projeto

Este projeto foi desenvolvido com foco em performance, acessibilidade, SEO local e design moderno, utilizando os princípios do **Flat Design 2D** (sem sombras difusas ou gradientes excessivos, bordas limpas de 2px, paleta sólida institucional vibrante e tipografia expressiva).

### Destaques da Implementação:
- **Design System Flat 2D**: Arquitetura visual limpa em `flat-style.css`, priorizando tempo de carregamento rápido e estética contemporânea.
- **Apresentadores & Galerias Fotográficas**: Carrosséis interativos (`nav.js`) com controles de navegação, legendas dinâmicas sincronizadas e miniaturas clicáveis em todas as páginas de procedimentos e na página inicial.
- **Conformidade CFM**: Todos os casos clínicos e fotografias seguem as exigências éticas da Resolução CFM nº 1.974/11.
- **Responsividade Total**: Layout adaptado para smartphones, tablets e desktops (Mobile-First / Tailwind CSS).

---

## 📁 Estrutura de Arquivos

```
hospitaleosteday/
├── index.html                   # Página Inicial (Hero, Diferenciais, Especialidades, Financiamento, Depoimentos, CTA)
├── lipoescultura.html           # Procedimento: Lipoescultura / Lipo 360 de Alta Definição
├── mastopexia-com-protese.html  # Procedimento: Mastopexia com Prótese de Silicone
├── lipoabdominoplastia.html     # Procedimento: Lipoabdominoplastia (Abdômen + Diástase)
├── mastopexia-sem-protese.html  # Procedimento: Mastopexia sem Prótese (Lifting Mamário com Tecido Próprio)
├── sobre.html                   # Institucional: História, Instalações 2.000 m², Missão e Corpo Clínico SBCP
├── faq.html                     # Central de Dúvidas: Segurança, Cirurgia Programada e Recuperação
├── contato.html                 # Formulário de Avaliação, Rotas de Acesso (GPS) e Canais Oficiais
├── flat-style.css               # Design System Flat Design (Cores, botões, cards, badges e acordeões)
├── wireframe.css                # Estilos base estruturais
├── nav.js                       # Lógica unificada de navegação, dropdowns, acordeões e galerias/carrosséis
└── doc/                         # Documentação técnica de planejamento e copywriting
    ├── briefing.md
    ├── copywriting_completa.md
    └── descritivo_estrutural_wireframe.md
```

---

## 🚀 Como Visualizar Localmente

O projeto utiliza tecnologias web nativas (HTML5, Vanilla CSS e Vanilla JavaScript) com Tailwind CSS via CDN. Não é necessária nenhuma etapa de build ou compilação:

1. Clone o repositório:
   ```bash
   git clone https://github.com/henriquedowebs/eosteday.git
   ```
2. Abra qualquer um dos arquivos `.html` diretamente no seu navegador ou utilize a extensão **Live Server** no VS Code.

---

## 📌 Tecnologias Utilizadas

- **HTML5 Semântico**
- **Vanilla JavaScript (ES6+)**
- **CSS3 / Tailwind CSS (CDN)**
- **Google Fonts (Plus Jakarta Sans)**
- **SVG Icons (Heroicons / Lucide)**

---

## ⚖️ Conformidade e Termos

Desenvolvido para o **Hospital Oeste Day**  
Endereço: Rua Atininga, 684 – Jacarepaguá, Rio de Janeiro - RJ  
Atendimento em conformidade com as normas do Conselho Federal de Medicina (CFM) e LGPD (Lei nº 13.709/18).
