# Projeto: Conscientização sobre Lixo Eletrônico

## Descrição
Este projeto consiste em uma apresentação interativa sobre lixo eletrônico, seus impactos ambientais e a importância do descarte correto. A apresentação foi desenvolvida utilizando HTML, CSS, Bootstrap e TailwindCSS para criar um slide interativo que apresenta informações sobre o tema de forma clara e visualmente atraente.

## Estrutura do Projeto
- `index.html` - Página principal com o carrossel de slides.
- `style.css` - Estilos adicionais (opcional, para ajustes finos).
- `descarte.svg` - Imagem ilustrativa usada nos slides.
- `seta_esquerda.png` e `seta_direita.png` - Ícones personalizados das setas de navegação.

## Tecnologias Utilizadas
- [Bootstrap 5](https://getbootstrap.com/): Estrutura do carrossel, grid e responsividade.
- [Tailwind CSS](https://tailwindcss.com/): Utilizado para utilitários de espaçamento, tipografia e cores.
- [Google Fonts - Roboto](https://fonts.google.com/specimen/Roboto): Fonte principal do projeto.

## Funcionalidades
- Navegação entre slides com botões personalizados (setas).
- Layout responsivo, adaptando-se a diferentes tamanhos de tela.
- Imagens e textos organizados lado a lado em telas grandes e empilhados em telas menores.
- Utilização de Bootstrap Carousel para transições suaves e controle de slides.

## Características do Design
- **Design Responsivo**: Adaptação automática para diferentes tamanhos de tela
- **Navegação Intuitiva**: Botões de navegação para alternar entre os slides
- **Animações Suaves**: Transições suaves entre os conteúdos
- **Paleta de Cores Temática**: Cores relacionadas ao tema ambiental

## Como usar
1. **Pré-requisitos:**
   - Não é necessário instalar nada, pois Bootstrap e Tailwind são carregados via CDN.
   - Certifique-se de que os arquivos `descarte.svg`, `seta_esquerda.png` e `seta_direita.png` estejam na mesma pasta do `index.html`.

2. **Abrir o projeto:**
   - Basta abrir o arquivo `index.html` em seu navegador.

3. **Navegação:**
   - Use as setas laterais para navegar entre os slides.
   - O carrossel mostra apenas um slide por vez, com transição suave.

## Observações
- O carrossel é totalmente controlado pelo Bootstrap, não sendo necessário JavaScript adicional.
- O layout é facilmente adaptável para mais slides, bastando duplicar o bloco `.carousel-item` dentro do `.carousel-inner`.
- Para alterar textos ou imagens, edite diretamente o conteúdo de cada slide no `index.html`.

---

Projeto desenvolvido para fins educativos e de demonstração de carrossel responsivo com Bootstrap.