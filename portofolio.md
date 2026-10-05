# Auditoria do Portfólio — Roberto Vilela

> URL analisada: https://portfolio-roberto-nine.vercel.app/
> Data da auditoria: 2026-08-05
> Método: navegação por todas as rotas, extração de texto real por página, checagens A–E.

---

## 1. Páginas visitadas (URL + título)

| URL | Título |
|-----|--------|
| `/` (index.html) | Roberto Vilela \| AI Workflow Systems & Operations Architect |
| `/memory-bank-rmv.html` | Memory Bank RMV \| AI Governance Case Study |
| `/dexafit-wellness-hub.html` | DexaFit Wellness Hub \| Case Study |
| `/voice-rmv.html` | **AI Operations Case Study** (genérico — sem nome do projeto) |
| `/rmv-sales-engine-v1.html` | RMV Sales Engine V1 \| Technical Validation |
| `/rmv-flow-management.html` | Visa Flow Management \| Operational Base for Cases and Documents |
| `/rmv-flow-ecosystem.html` | RMV Flow Ecosystem \| Technical Architecture |
| `/rmv-flow-copilot.html` | Visa Flow Copilot \| AI Interface for Staff Support |
| `/rmv-memory-framework.html` | RMV Memory Framework \| **AI Workflow Automation Specialist** (título = cargo do dono, não a página) |
| `/neural-lab-ai.html` | RMV Neural Lab AI \| Local AI Operations Case Study |
| `/playbook-rmv.html` | Playbook-RMV \| Internal System |

**Não existem páginas separadas de "Sobre" ou "Contato"** — são seções-âncora na home (`#about`, `#featured-work`, modal de contato). Menu da home: `#what-i-do`, `#featured-work`, `#how-i-work`, `#about`. Todas as 11 rotas retornam HTTP 200; nenhuma página em branco.

---

## 2. Tabela de status A–E

| Item | Status | Nota |
|------|--------|------|
| **A1** Título do dono sem "Certified" | ✅ OK | Título no About: `AI Solutions Architect` (sem "Certified"). O único "Certified" no site é a credencial legítima "HubSpot Certified". |
| **A2** Rodapé com copyright 2026 | ✅ OK | Todas as 11 páginas mostram 2026 (ex.: `© 2026 Roberto Vilela. All rights reserved.`). |
| **B1** Nome do produto de imigração consistente | ⚠️ PENDENTE | "AFV Flow" e "Immigration Case Growth Copilot" **não aparecem** (bom). Porém a home usa **"All For Visa Flow"** como nome do Active System (grid de evidências + Summary Footer Bar), enquanto os produtos reais são **"Visa Flow Management"**, **"Visa Flow Copilot"**, **"RMV Flow Ecosystem"**. Nome inconsistente entre home e páginas de produto. |
| **B2** "RMV Flow Systems" como nome da empresa/ecossistema | ❌ NÃO ENCONTRADO | O termo **"RMV Flow Systems" nunca aparece**. O ecossistema é chamado de **"RMV Flow Ecosystem"**. Não é erro, mas o nome esperado não existe em lugar nenhum. |
| **C** Neural Lab AI — "funcional/completo"? | ⚠️ PENDENTE (INCONSISTÊNCIA CONFIRMADA) | A página afirma que o produto é funcional/completo (citações abaixo). Conflita com o estado real documentado ("frontend vazio, backend parcial") — que, ironicamente, o próprio `rmv-memory-framework.html` declara (citação abaixo). |
| **D** Disciplina de claims | ⚠️ PENDENTE | Sem "10x/20x", sem "zero risco"/"padrão ouro"/"garantido". Mas há métricas apresentadas como fato sem ressalva: **"80% Reduction in Processing Time"** (hero, repetido no card Google AI Essentials) e **"1 Live Deployment"** / "live deployment on Digital Ocean". |
| **E1** Forma clara de contato | ✅ OK | Modal de contato (Formspree `meewwpvg`) em todas as páginas + botão "Let's Talk" (calendar.app.google) + LinkedIn/GitHub/YouTube. Sem email exposto (bom — o placeholder do AGENTS.md não está no site live). |
| **E2** Proposta de valor na primeira dobra | ✅ OK | H2 `AI-Assisted Operations & Workflow Builder` + tagline clara (abaixo). |
| **E3** Narrativa coerente entre projetos | ⚠️ PENDENTE | Há coesão via "AI Operations Builder Map", mas: V1 ("Memory Bank Methodology") e V2 ("RMV Memory Framework") são **duas páginas separadas** para o mesmo framework; "Voice RMV" tem title genérico; card V2 (home) + link para V1 não deixa a hierarquia óbvia. |
| **E4** Links quebrados / imagens faltando | ⚠️ PENDENTE | Nenhuma página/asset quebrado (todas 200, inclusive imagens Google-hosted e MP3s com URL-encoding). Porém o **LinkedIn usa dois handles diferentes**: `linkedin.com/in/roberto-vilela-ma` (home, memory-bank, memory-framework, voice) vs `linkedin.com/in/roberto-vilela` (dexafit, rmv-sales-engine-v1). Ambos resolvem, mas apontam para perfis distintos. |

---

## 3. Citações exatas (itens PENDENTES)

### C — Neural Lab AI apresenta-se como funcional/completo (`neural-lab-ai.html`)
- Métricas hero (linhas 91–94): **"6 Working screens" · "19 REST endpoints" · "111 Automated tests" · "12+ Validated phases"**
- Seção "Real product evidence": **"Six working screens — not a concept mockup"**
- Linha 301: **"Together, they show how research and requirements were transformed into a functional, testable workflow."**
- Seção "Engineering evidence": **"Validated beyond the happy path"** com badges verdes para **"Production build — Vite build validated as a release gate"**, e **"Backend suite 76" / "Frontend suite 35"**.

→ Mas o `rmv-memory-framework.html` diz o contrário: **"backend partially implemented, frontend still in progress, specific technical constraints still open"** e **"Managed project Neural Lab AI — in progress (by design)"**. Contradição direta entre duas páginas do mesmo site.

### B1 — Inconsistência de nome do produto de imigração (home)
- Home, Evidence Grid: **"All For Visa Flow — Client-facing immigration workflow · 200+ cases managed"** (badge "Soon").
- Home, Summary Footer Bar: **"Active Systems: All For Visa Flow"**.
- Porém as páginas reais são: **"Visa Flow Management"** (rmv-flow-management.html), **"Visa Flow Copilot"** (rmv-flow-copilot.html), **"RMV Flow Ecosystem"** (rmv-flow-ecosystem.html).

### B2 — "RMV Flow Systems"
- Não aparece. O termo usado no ecossistema é **"RMV Flow Ecosystem"** (home e 3 páginas de produto). Ex.: home card: **"AI-assisted case management system … deployed for immigration operations."**

### D — Claims como fato (home)
- Hero: **"80% Reduction in Processing Time"** (sem qualificativo).
- Card Google AI Essentials: **"80% reduction in processing time — from 15 days to 3–4 business days"**.
- Métricas: **"1,138 YouTube subscribers"**, **"86k+ views"**, **"1 Live Deployment"**; texto: **"including a live deployment on Digital Ocean."**

### E3/E4 — Links divergentes e titles
- DexaFit / Sales Engine V1 usam `https://linkedin.com/in/roberto-vilela`; home e demais usam `https://www.linkedin.com/in/roberto-vilela-ma/`.
- `<title>` do `voice-rmv.html` é apenas **"AI Operations Case Study"** (não identifica o projeto Voice-RMV).
- `<title>` do `rmv-memory-framework.html` termina com **"AI Workflow Automation Specialist"** — padrão diferente das outras páginas.

---

## 4. Recomendação final

**Precisa de ajustes antes** — o site está funcional, sem links/imagens quebrados e com proposta de valor clara, mas há inconsistências factuais e de nomenclatura que um recrutador/cliente pode pegar.

Correções por prioridade:

1. **Neural Lab AI (crítico):** reescrever a página para alinhar ao estado real (frontend vazio, backend parcial). Remover "Six working screens — not a concept mockup", "functional, testable workflow", "111 Automated tests" e o badge verde "Production build validated". Ou atualizar o projeto real antes de publicar. É a maior exposição de credibilidade do site.
2. **Unificar nome do produto de imigração:** trocar "All For Visa Flow" na home (evidence grid + Summary Footer) por "Visa Flow" ou alinhar com as páginas "Visa Flow Management/Copilot". (Deprecated AFV Flow / Immigration Case Growth Copilot já estão ausentes — manter assim.)
3. **Qualificar claims de métricas:** "80% reduction in processing time" e "1 Live Deployment" devem ser apresentados como resultado de caso específico/estágio atual, não como capacidade garantida.
4. **Consistência de títulos e identidade:** definir um único título do dono (sugerido: "AI Solutions Architect") e aplicá-lo em todas as páginas; corrigir title genérico do voice-rmv e title-cargo do rmv-memory-framework; unificar o handle do LinkedIn em todas as páginas.
5. **Narrativa Memory V1/V2:** decidir se Memory Bank Methodology V1 e RMV Memory Framework V2 são páginas separadas (e deixar claro no card) ou mesclar em uma só.
