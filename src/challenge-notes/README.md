# Teste Frontend Leroy Merlin Brazil

## Escopo do Teste
O desenvolvimento do teste se baseia numa interface já existente, encontrada na pasta deste projeto. Uma dashboard simples para visualização/interação de links externos.

O objetivo é avaliar a capacidade de estimativa do desenvolvedor, em conjunto com a capacidade de se trabalhar com uma interface inacabada, e bons padrões de código.

A interface deve ser construida se baseando na imagem disponibilizada, e parte do teste representa o desenvolvedor correr atrás de alguns aspectos da interface:

- Família de ícones - (Font Awesome and React Font Awesome) ✅
- Tipografia - ✅ (Segoe UI)
- Motion para interação com os elementos da interface - ✅
- (OPCIONAL) Visual "mobile-first/responsivo/adaptativo/fluído" (Baseado no approach escolhido pelo desenvolvedor) - ✅
- Ou seja, só tem o png mesmo para se basear - DONE ✅

### Responsividade da interface
A interface deve atender alguns critérios:

- Permitir filtrar as postagens pela barra de pesquisa (Se eu digitar algo, deve filtrar pelo o que foi digitado, caso não encontre nada, mostrar um feedback). - DONE ✅
- Filtrar as postagens a partir de filtros pré determinados
  - Popularidade - DONE ✅
  - Data - DONE ✅
  - Comentários - DONE ✅
- (OPCIONAL) Ao realizar qualquer tipo de filtro, seria interessante animar os resultados de alguma maneira. - DONE ✅

### Construção da interface
Em critérios de tecnologia, é esperado:

- Consumir o arquivo data.json para popular os links na interface (**Os dados estão no arquivo data.json**) - DONE ✅
- Bons padrões de código. Linters (eslint, jshint, jscs, algum linter de css) - DONE ✅ (Eslint com React e Stylelint para SASS e Styled Components)
- Documentação de código (docblockr) - NOT DONE ❌ - Não tive muito tempo, mas toda a documentação seria via [Storybook](https://storybook.js.org/);
- Testes automatizados (TDD/BDD) - NOT TOTALY DONE ❗, ainda faltaram testar alguns métodos; 
- Automatizador de tarefas - DONE ✅ (Não quis perder tempo criando ambiente, parti para o bom e velho Create React App V2 com todo o setup pronto)
- Preprocessador - DONE ✅ (SASS para CSS base e Styled Components para componentes React)
- Crossbrowser (Vamos ser legais e pedir IEegde+, Chrome e FF) - DONE ✅
- (OPCIONAL) Testes de integração (E2E) - NOT DONE ❌ (iria de Cypress para E2E mas o tempo foi curto);
- (OPCIONAL) Utilização de algum FW para padronizar o fluxo de código - DONE ✅ (React & Redux)
- (OPCIONAL) Trabalhar com esnext - DONE ✅ (Default with React and Create React App)
- (OPCIONAL) Padronização de versionamento (git flow por exemplo) - DONE ✅ (Bitbucket with Feature Branch)

### Critérios de aceite
Será considerado entrege, o teste que seguir os seguintes critérios:

- Atender todos os pontos já citados que são obrigatórios
- Versionamento a partir de algum ambiente (seja bitbucket ou github, privado ou pago) - DONE ✅ (Repo privado no Bitbucket, link enviado por e-mail)


#### Observações
- O footer, links, loadmore, botão de menu, ícone de usuário não precisam ter interação
- A estimativa de início/término do teste deve ser entregue até 24h após o recebimento do teste
- O repositório deve ser enviado ao iniciar o teste. 
- Não tenha medo de fazer perguntas, de verdade.
