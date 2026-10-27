# Descritivo Estrutural & Wireframe da Arquitetura do Site — Oeste Day
**Persona:** `*apex-lead`  
**Objetivo:** Especificação detalhada de cada seção, colunas, elementos, textos, botões e imagens do projeto Oeste Day.  
**Regra Atendida:** Cumprimento obrigatório do descritivo estrutural prévio para wireframes e aprovação do usuário.

---

## 1. Visão Geral do Sistema de Navegação (Header / Navbar Global)

* **Tipo de Componente:** Header fixo com efeito *glassmorphism* (fundo translúcido com leve desfoque) ao rolar a página.
* **Coluna Esquerda (Branding):**
  * Logotipo oficial do **Oeste Day** com ícone médico estilizado e tipografia institucional.
* **Coluna Central (Menu de Navegação):**
  * Link: **Início**
  * Dropdown Interativo: **Procedimentos**
    * /procedimentos/lipoescultura/
    * /procedimentos/mastopexia-com-protese/
    * /procedimentos/lipoabdominoplastia/
    * /procedimentos/mastopexia-sem-protese/
  * Link: **Sobre Nós**
  * Link: **FAQ**
  * Link: **Contato**
* **Coluna Direita (Ação Rápida):**
  * Botão de CTA Destaque: *"Agendar Avaliação"* (com tom dourado/âmbar `#D4AF37` e link direto para WhatsApp/Triagem).

---

## 2. Estrutura da Página Inicial (Home — 7 Seções)

### SEÇÃO 1: Hero Section (Impacto & Conversão Principal)
* **Objetivo:** Estabelecer autoridade imediata, transmitir segurança e estimular a primeira conversão.
* **Disposição / Grid:** 2 Colunas (55% Esquerda / 45% Direita no Desktop; 1 Coluna no Mobile).
* **Coluna Esquerda (Conteúdo & Call to Action):**
  * *Tag de Localização/Posicionamento:* Pílula com borda suave: `Hospital Dia Especializado em Cirurgia Plástica • Jacarepaguá, RJ`.
  * *Título Principal (H1):* `Realize a cirurgia plástica dos seus sonhos com a segurança de um hospital de ponta e condições que cabem no seu bolso.`
  * *Subtítulo de Apoio:* Mais de 2.000 m² de infraestrutura hospitalar dedicada exclusivamente a cirurgias eletivas. Conforto, equipe altamente qualificada (membros da SBCP) e planos de cirurgia programada com parcelamento facilitado.
  * *Grupo de Botões:*
    * Botão Primário: `Agendar Minha Avaliação` (Dourado/Âmbar com micro-interação ao passar o cursor).
    * Botão Secundário / Link: `Conhecer Nossos Procedimentos` (Estilo contorno/outline elegante).
  * *Badges de Confiança (Horizontal abaixo dos botões):*
    * Ícone Check + `Ambiente 100% livre de doentes infectocontagiosos`
    * Ícone Check + `Cirurgiões com RQE e membros da SBCP`
    * Ícone Check + `Condições em até 18x ou Cirurgia Programada`
* **Coluna Direita (Visual & Apresentação Fotográfica Interativa):**
  * *Módulo de Galeria & Carrossel Interativo:* Viewport fotográfico amplo (16:10 / 16:9) com imagens reais em alta definição das instalações do hospital.
  * *Controles de Navegação:* Botões circulares "Anterior" e "Próximo" sobrepostos com estilo Flat Design.
  * *Legenda Concisa:* Caixa de identificação com badge colorido (ex: `Infraestrutura Hospitalar 2.000 m²`), título do ambiente e breve descrição funcional.
  * *Barra de Miniaturas (4 Vistas Rápidas):* Botões clicáveis interativos com visualização imediata de:
    1. Fachada Principal (Acesso exclusivo e estacionamento na Rua Atininga)
    2. Centro Cirúrgico Especializado (Salas inteligentes e fluxo laminar)
    3. Apartamentos & Leitos URPA (Recuperação anestésica monitorada)
    4. Recepção & Acolhimento (Atendimento humanizado para pacientes e acompanhantes)
  * *Selo de Qualidade:* Badge no topo direito indicando `Padrão Ouro em Eletivas`.

---

### SEÇÃO 2: O Diferencial Hospital Dia (Segurança & Acolhimento)
* **Objetivo:** Educar o paciente sobre a superioridade do Hospital Dia em relação a hospitais gerais e clínicas improvisadas.
* **Cabeçalho Centralizado:**
  * *Tag:* `O Padrão Ouro em Procedimentos Eletivos`
  * *Título (H2):* `Toda a segurança de um grande hospital, com o acolhimento e a agilidade que você merece.`
  * *Subtítulo:* Entenda por que operar em um Hospital Dia é a escolha mais moderna e segura para a sua cirurgia plástica.
* **Grid de Conteúdo:** 4 Colunas no Desktop / 2 no Tablet / 1 no Mobile (Cards Elevados com bordas sutis).
  * *Card 1:* Ícone de Proteção/Escudo • **Risco Mínimo de Infecção Hospitalar** • Texto explicativo sobre a ausência de emergências e doentes infectocontagiosos.
  * *Card 2:* Ícone de Relógio/Casa • **Alta no Mesmo Dia com Conforto** • Texto sobre monitoramento em sala de recuperação e retorno ágil ao lar.
  * *Card 3:* Ícone de Monitor Cardíaco • **Estrutura Completa de Retaguarda** • Salas amplas, equipamentos avançados e gerador próprio.
  * *Card 4:* Ícone de Coração/Mãos • **Atendimento Humanizado de Verdade** • Cuidado centrado na paciente, acolhimento desde a recepção até a alta.

---

### SEÇÃO 3: Procedimentos em Destaque
* **Objetivo:** Apresentar de forma visual e atrativa os 4 procedimentos core.
* **Cabeçalho da Seção:** Alinhado à esquerda com botão "Ver Todos os Procedimentos" à direita.
  * *Tag:* `Especialidades Mais Procuradas`
  * *Título (H2):* `Transformações reais planejadas para valorizar a sua melhor versão.`
* **Grid de Procedimentos:** 4 Cards Verticais Elegantes.
  * *Card 1:* Imagem temática real de contorno corporal • Tag "Corpo" • Título: **Lipoescultura & Lipo 360** • Resumo do procedimento • Link com seta: `Ver detalhes da Lipoescultura →`.
  * *Card 2:* Imagem temática real de colo/mama • Tag "Mamas" • Título: **Mastopexia com Prótese** • Resumo do procedimento • Link com seta: `Ver detalhes da Mastopexia com Prótese →`.
  * *Card 3:* Imagem temática real de abdômen firme • Tag "Abdômen" • Título: **Lipoabdominoplastia** • Resumo do procedimento • Link com seta: `Ver detalhes da Lipoabdominoplastia →`.
  * *Card 4:* Imagem temática real de contorno mamário natural • Tag "Mamas" • Título: **Mastopexia sem Prótese** • Resumo do procedimento • Link com seta: `Ver detalhes da Mastopexia sem Prótese →`.

---

### SEÇÃO 4: Cirurgia Programada & Condições de Pagamento
* **Objetivo:** Quebrar a objeção de preço e apresentar os planos acessíveis para classes B, C e D.
* **Disposição / Grid:** 2 Colunas (50% Esquerda com Conteúdo e Pilares / 50% Direita com Card Informativo de Simulação).
* **Coluna Esquerda:**
  * *Tag:* `Acessibilidade e Planejamento`
  * *Título (H2):* `A cirurgia dos seus sonhos não precisa ficar apenas no papel.`
  * *Subtítulo:* Acreditamos que a cirurgia plástica de qualidade deve ser acessível e segura. Desenvolvemos formatos flexíveis para você se planejar sem aperto.
  * *Lista de 3 Pilares com Ícones de Destaque:*
    1. **Modelo Cirurgia Programada:** Planejamento prévio por mensalidades até a data da cirurgia, operando 100% quitada.
    2. **Parcelamento Facilitado no Cartão:** Até 12x ou 18x nos cartões com transparência total de taxas.
    3. **Pacotes Transparentes:** Detalhamento claro de custos hospitalares, equipe e anestesia, sem surpresas.
* **Coluna Direita (Card de Destaque Financeiro):**
  * Box com acabamento premium e fundo sutilmente contrastante.
  * Título interno: `Planejamento Sob Medida para Você`
  * Lista de benefícios inclusos no pacote cirúrgico.
  * Botão de Ação: `Simular Meu Planejamento Cirúrgico` (conduzindo para contato/WhatsApp de triagem).

---

### SEÇÃO 5: Estrutura Física & Equipe Especializada
* **Objetivo:** Consolidar a prova de autoridade física e credibilidade médica.
* **Disposição / Grid:** 2 Colunas Invertidas (45% Esquerda com Mosaico Fotográfico / 55% Direita com Dados e Especificações).
* **Coluna Esquerda:**
  * Composição de 2 ou 3 fotos reais do Oeste Day: Sala cirúrgica, recepção e equipe multiprofissional.
* **Coluna Direita:**
  * *Tag:* `Mais de 2.000 m² a Seu Serviço`
  * *Título (H2):* `Um complexo hospitalar pensado nos mínimos detalhes para o seu bem-estar.`
  * *Grid de 4 Especificações Técnicas:*
    * **Centro Cirúrgico de Última Geração:** Fluxo laminar, aparelhagem de monitoração e salas climatizadas.
    * **Sala de Recuperação Acolhedora:** Leitos monitorados ininterruptamente por equipe de enfermagem.
    * **Recepção e Hotelaria:** Conforto para pacientes e acompanhantes.
    * **Corpo Clínico Certificado:** Exclusivamente cirurgiões membros da SBCP e com RQE ativo.
  * *Botão:* `Conheça Nossa História e Instalações` (leva para a página Sobre).

---

### SEÇÃO 6: Depoimentos & Prova Social
* **Objetivo:** Gerar identificação emocional e confiança através de relatos de quem já operou.
* **Cabeçalho Centralizado:**
  * *Tag:* `Histórias de Transformação`
  * *Título (H2):* `O que dizem as pacientes que confiaram no Oeste Day.`
* **Grid de 3 Cards de Depoimentos:**
  * *Card 1 (Mariana S., 34 anos — Mastopexia com Prótese):* Foto de avatar/paciente, estrelas (5.0), texto sobre segurança de hotelaria e recuperação serena.
  * *Card 2 (Carla M., 41 anos — Lipoabdominoplastia):* Foto de avatar/paciente, estrelas (5.0), texto sobre a realização do sonho através da cirurgia programada pós-maternidade.
  * *Card 3 (Juliana R., 28 anos — Lipoescultura 360):* Foto de avatar/paciente, estrelas (5.0), texto sobre a transparência da equipe e segurança do centro cirúrgico.

---

### SEÇÃO 7: CTA Final (Fechamento da Home)
* **Objetivo:** Captura final do visitante com banner de alto contraste.
* **Estrutura:** Banner horizontal com fundo escuro sofisticado (azul profundo hospitalar) e detalhes em dourado.
  * *Tag:* `Dê o Primeiro Passo`
  * *Título (H2):* `Pronta para viver a transformação que você sempre desejou?`
  * *Subtítulo:* Agende uma consulta de avaliação com nossos especialistas e descubra o plano ideal para a sua cirurgia em Jacarepaguá.
  * *Botão Central de Alta Conversão:* `Agendar Avaliação pelo WhatsApp` (com ícone do WhatsApp).
  * *Micro-texto de apoio:* `Atendimento acolhedor, rápido e sem compromisso.`

---

## 3. Estrutura Padrão das Páginas de Procedimentos (Matriz Editorial / Blog)

As páginas `/procedimentos/lipoescultura/`, `/procedimentos/mastopexia-com-protese/`, `/procedimentos/lipoabdominoplastia/` e `/procedimentos/mastopexia-sem-protese/` compartilham rigorosamente a seguinte arquitetura de 8 blocos:

```
[Bloco 1: Header do Procedimento + Ficha Rápida]
[Bloco 2: Sobre o Procedimento (Conceito, Indicação e Anatomia)]
[Bloco 3: Diferenciais Exclusivos no Oeste Day]
[Bloco 4: Processos Passo a Passo (Da Consulta ao Pós)]
[Bloco 5: Resultados + GALERIA DE FOTOS (Casos Clínicos Reais)]
[Bloco 6: Principais Benefícios para o Paciente]
[Bloco 7: Avaliações e Relatos de Quem Já Fez]
[Bloco 8: FAQ Específico do Procedimento + CTA Final]
```

### Detalhamento dos Blocos Especiais das Páginas de Procedimentos:
* **Bloco 1 (Header & Ficha Rápida):**
  * Título H1 específico do procedimento com menção ao Rio de Janeiro.
  * Subtítulo explicativo e focado em benefícios.
  * Card horizontal com "Ficha Cirúrgica": Duração média, Tipo de Anestesia, Tempo de Permanência (Hospital Dia).
* **Bloco 2 (Sobre o Procedimento — Grid 2 Colunas com Showcase Fotográfico):**
  * *Coluna Esquerda (Conceito & Anatomia):* Explicação clínica do procedimento, indicação anatômica detalhada, objetivos estéticos e critérios de candidatura cirúrgica.
  * *Coluna Direita (Showcase Fotográfico Anatômico):* Viewport com proporção 16:10 emoldurado no Flat Design, badge de categoria (ex: `Mapeamento Anatômico`), imagem de alta resolução representativa e card inferior com descrição concisa da área tratada e botão interativo.
* **Bloco 3 (Diferenciais Exclusivos no Oeste Day — Seção Independente Full Width):**
  * *Disposição:* Seção dedicada com cabeçalho de destaque e grid de 3 cards horizontais Flat Design.
  * *Card 1 (Tecnologia/Segurança Cirúrgica):* Ícone SVG temático, título do diferencial, badge de certificação e texto sobre precisão técnica.
  * *Card 2 (Equipe & Qualificação SBCP/RQE):* Ícone de proteção, garantias regulatórias e formação cirúrgica comprovada.
  * *Card 3 (Recuperação Assistida & Day Hospital):* Ícone de acolhimento e monitoramento pós-anestésico contínuo na URPA.
* **Bloco 4 (Processo Passo a Passo):**
  * Grid de 4 passos: (1) Consulta & Planejamento, (2) O Dia da Cirurgia no Centro Cirúrgico, (3) Recuperação & Alta assistida, (4) Pós-Operatório & Retornos.
* **Bloco 5 (Resultados & Galeria de Fotos Interativa — Casos Clínicos Reais):**
  * *Cabeçalho Centralizado:* Título "Casos Clínicos & Galeria Fotográfica", badge temático e introdução educativa sobre evolução biológica e regressão de inchaço.
  * *Módulo de Galeria & Carrossel Interativo:*
    * Viewport principal de alta imersão em proporção 16:9 com foto clínica real de alta resolução.
    * Controles de navegação: Botões circulares "Anterior" e "Próximo" sobrepostos.
    * Card inferior sincronizado: Badge de perspectiva, título do caso e descrição anatômica detalhada (atualizados via JavaScript em tempo real).
    * Barra de 4 Miniaturas Interativas Clicáveis: Acesso rápido a diferentes ângulos clínicos (ex: Vista Frontal, Ângulo Lateral, Detalhe de Cicatriz/Aréola, Simetria Consolidada) com indicador de miniatura ativa.
  * *Disclaimer Regulatório:* Box de conformidade ética destacando que os resultados cirúrgicos dependem de características biológicas singulares de cada paciente (Resolução CFM nº 1.974/11).
* **Blocos 6 e 7 (Benefícios e Avaliação de Paciente):**
  * *Coluna Esquerda:* Lista de 3 benefícios transformadores para a autoestima.
  * *Coluna Direita:* Card de depoimento com nota 5 estrelas, nome, idade e relato autêntico.
* **Bloco 8 (FAQ Específico & CTA de Agendamento):**
  * Acordeão interativo com as 3 principais perguntas daquele procedimento (cintas, repouso, amamentação, pós-cirúrgico).
  * Box de CTA fixando o agendamento de consulta prévia no WhatsApp.

### 3.1. Especificação Detalhada por Procedimento

#### 3.1.1. Mastopexia com Prótese (`mastopexia-com-protese.html`)
* **Header / H1:** Mastopexia com Prótese no RJ: Firmeza, projeção e colo desenhado.
* **Ficha Rápida:** Duração: 2 a 3h • Anestesia: Peridural com sedação ou Geral • Permanência: Hospital Dia.
* **Sobre:** Levantamento mamário (remoção de pele excessiva e correção de ptose) combinado com prótese de silicone de alta tecnologia para polo superior marcado.
* **Diferenciais:** Implantes com certificação Anvisa/FDA, cicatrizes refinadas (T invertido, L ou periareolar) por especialistas SBCP e recuperação acolhedora.
* **Galeria:** 3 fotos reais de colo preenchido, restauração pós-amamentação e correção de ptose.
* **Depoimento:** Patrícia V., 37 anos.
* **FAQ:** Braços elevados (15-21 dias), evolução das cicatrizes, preservação da amamentação.

#### 3.1.2. Lipoabdominoplastia (`lipoabdominoplastia.html`)
* **Header / H1:** Lipoabdominoplastia no Rio de Janeiro: Abdômen liso, firme e cintura esculpida.
* **Ficha Rápida:** Duração: 3 a 5h • Anestesia: Peridural com sedação ou Geral • Permanência: Hospital Dia ou pernoite assistido.
* **Sobre:** Fusão entre lipoaspiração (flancos, dorso e abdômen) e plicatura muscular dos retos abdominais (correção de diástase) com ressecção de avental de pele.
* **Diferenciais:** Preservação vascular (técnica de Saldanha), prevenção de trombose com botas de compressão pneumática contínua, leito assistido.
* **Galeria:** 3 fotos reais de contorno abdominal pós-gestação múltipla, tratamento de diástase e correção de avental cutâneo.
* **Depoimento:** Renata C., 39 anos.
* **FAQ:** Andar curvada (10-14 dias), cicatriz baixa oculta no biquíni, aspecto natural do umbigo.

#### 3.1.3. Mastopexia sem Prótese (`mastopexia-sem-protese.html`)
* **Header / H1:** Mastopexia sem Prótese no RJ: Levantamento mamário natural e harmonioso.
* **Ficha Rápida:** Duração: 2 a 3h • Anestesia: Peridural com sedação ou Geral • Permanência: Hospital Dia.
* **Sobre:** Reposicionamento e sustentação das mamas utilizando exclusivamente o próprio tecido mamário da paciente como retalho ("auto-implante"), sem corpos estranhos.
* **Diferenciais:** Leveza e mobilidade natural, retalhos glandulares estruturados, sem necessidade de troca futura de próteses.
* **Galeria:** 3 fotos reais de lifting mamário natural, reposicionamento aréolo-mamilar e simetria sem implantes.
* **Depoimento:** Camila T., 44 anos.
* **FAQ:** Durabilidade dos resultados, redução do volume mamário, retorno a exercícios.

---

## 4. Estrutura da Página Sobre Nós (/sobre/)

* **Hero Institucional:** Título de acolhimento + Imagem panorâmica de 2.000 m² do complexo.
* **Bloco História & Galeria Estrutural:** Texto da fundação em Jacarepaguá integrado a um Apresentador Fotográfico Interativo com carrossel de 4 ambientes:
  1. Fachada Principal & Recepção
  2. Bloco Cirúrgico de Eletivas
  3. Leitos & Apartamentos de Recuperação Pós-Anestésica (URPA)
  4. Atendimento Humanizado & Concierge
* **Bloco Estrutura em Números:** Cards com métricas consolidadas (2.000 m², leitos dedicados, risco zero de infecção cruzada).
* **Bloco Missão, Visão e Valores:** 3 colunas detalhando os princípios oficiais do hospital.
* **Bloco Corpo Clínico & Segurança Médica:** Exigência de SBCP e RQE para todos os cirurgiões parceiros.
* **CTA Institucional:** Convite para visita presencial ou agendamento.

---

## 5. Estrutura da Página FAQ (/faq/)

* **Hero de Dúvidas:** Título e campo de busca rápida de perguntas frequentes.
* **Abas / Categorias de Acordeão:**
  * *Categoria A: Sobre o Hospital Dia e Segurança Cirúrgica* (3 perguntas detalhadas).
  * *Categoria B: Cirurgia Programada e Condições de Pagamento* (3 perguntas detalhadas).
  * *Categoria C: Pré e Pós-Operatório & SEO Local* (3 perguntas detalhadas).
* **CTA Flutuante / Fim de Página:** "Não encontrou sua dúvida? Chame nossa equipe no WhatsApp".

---

## 6. Estrutura da Página Contato (/contato/)

* **Disposição / Grid:** 2 Colunas Balanceadas (50% Formulário / 50% Informações de Localização e Mapa).
* **Coluna Esquerda (Formulário de Triagem):**
  * Campos estruturados: Nome, WhatsApp, Procedimento de Interesse, Formato de Pagamento Preferido, Melhor Horário.
  * Botão de Envio: `Confirmar Solicitação de Avaliação`.
  * Texto de conformidade com a LGPD e sigilo médico.
* **Coluna Direita (Rotas, Reconhecimento Visual e Canais):**
  * *Card 1:* Endereço em Jacarepaguá (Rua Atininga, 684) e Rotas detalhadas via Linha Amarela, Transolímpica e Barra da Tijuca.
  * *Card 2 (Reconhecimento Fotográfico da Fachada & GPS):*
    * Foto real da fachada e entrada do hospital para fácil reconhecimento pelo paciente na chegada.
    * Coordenadas GPS (-22.9234, -43.3512) e botões diretos para Google Maps e Waze.
  * *Card 3:* Canais de atendimento imediato (Central Telefônica e WhatsApp Oficial).

---

## 7. Estrutura do Rodapé Global (Footer)

* **Coluna 1 (Sobre):** Logomarca Oeste Day, resumo da proposta e selo Day Hospital.
* **Coluna 2 (Procedimentos):** Links para Lipoescultura, Mastopexia com Prótese, Lipoabdominoplastia e Mastopexia sem Prótese.
* **Coluna 3 (Institucional):** Links para Sobre Nós, Cirurgia Programada, FAQ e Contato.
* **Coluna 4 (Atendimento & Localização):** Endereço em Jacarepaguá, WhatsApp e horários.
* **Barra Inferior:** Direitos autorais, aviso ético em conformidade com o CFM e política de privacidade.
