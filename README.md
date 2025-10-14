# dumato
E-commerce de produtos naturais. Esta loja virtual apresenta um Carrinho de Compras dinâmico, onde os itens são persistidos via localStorage e gerenciados por JavaScript. A estilização utiliza CSS Flexbox e Media Queries para um layout responsivo. Inclui funcionalidade de Modo Escuro, manipulação de DOM com jQuery e animações ScrollReveal
Este projeto, intitulado Du Mato - Produtos Naturais, consiste em uma loja virtual front-end desenvolvida para oferecer uma variedade de produtos naturais para compra online. O site visa ser o "produto natural que vai até você".
O projeto foi estruturado com foco em design responsivo, interatividade do usuário e persistência de dados essenciais.

--------------------------------------------------------------------------------
Link: https://belemdebelem.github.io/dumato/
Funcionalidades Principais
1. Carrinho de Compras Dinâmico: A seção "Carrinho" (carrinho.html ou #cart) permite que o usuário gerencie sua lista de compras.
    ◦ Persistência de Dados: O carrinho utiliza JavaScript e a API localStorage para salvar e carregar os itens adicionados, garantindo que a lista persista mesmo após o fechamento ou atualização da página (saveCart, loadCart).
    ◦ Gerenciamento de Itens: O JavaScript verifica se um produto já existe na lista e, se sim, incrementa sua quantidade e recalcula o preço total do item dinamicamente.
    ◦ Ações: O carrinho inclui botões de ação como "Finalizar Compra" e "Verificar Frete".
2. Layout Responsivo: O projeto foi desenvolvido para funcionar perfeitamente em diferentes dispositivos.
    ◦ Utiliza-se CSS Flexbox extensivamente para organizar o conteúdo, como nas seções #home, #cta, #dishes, #testimonials e no rodapé (#footer_items).
    ◦ O design se adapta através de Media Queries em diversos breakpoints, como max-width: 1170px (onde o banner da home e a imagem do chef somem) e max-width: 600px (onde o layout do rodapé e dos produtos mudam para coluna).
3. Navegação e Interatividade:
    ◦ Navegação Responsiva: O menu principal (#nav_list) é ocultado em telas menores que 1170px e substituído por um botão móvel (#mobile_btn). O menu móvel é ativado/desativado usando jQuery, que também alterna o ícone do botão (fa-x).
    ◦ Scroll: O comportamento de rolagem é suave (scroll-behavior: smooth). jQuery é usado para monitorar o scroll da janela e aplicar uma sombra (box-shadow) ao cabeçalho após o início da rolagem.
    ◦ Modo Escuro (Dark Mode): O tema pode ser alternado através de um botão (🌙 Alternar Tema). O JavaScript adiciona a classe dark-mode ao body, que inverte as cores de fundo, texto, botões e elementos específicos do carrinho para tons escuros (e.g., #121212 e #1e1e1e para fundos).
4. Animações: As animações de entrada dos elementos na tela são gerenciadas pela biblioteca ScrollReveal. Animações específicas foram aplicadas à seção de Chamada para Ação (#cta), aos cartões de produtos (.dish), à imagem do chef (#testimonial_chef), e aos feedbacks.

--------------------------------------------------------------------------------
Estrutura e Conteúdo
• Página Inicial (index.html): Inclui a seção #home com uma Chamada para Ação (CTA) e elementos visuais como uma forma geométrica de fundo na cor #59c24b e o banner principal (que são ocultados em telas menores).
• Menu de Produtos (#menu): Apresenta os produtos como Pimenta Calabresa (R4,80),PimentadoReino(R 4,80), Chimichuri (R5,00) e
Cúrcuma(R 5,00). Cada item (.dish) possui um design com cantos arredondados, sombra e um detalhe de coração em destaque.
• Cadastro (#testimonials): Permite o cadastro para receber novidades e promoções, coletando Nome, E-mail e Telefone. O layout da seção é responsivo e estilizado com uma cor de fundo específica (#63783d) para os grupos de formulário.
• Rodapé (footer): Contém informações de copyright (&copy 2025 Du Mato) e botões de mídia social estilizados com sombra e transição de hover.

--------------------------------------------------------------------------------
Tecnologias Utilizadas
• HTML5 & CSS3: Estrutura básica e estilização.
• CSS Flexbox e Media Queries: Implementação do layout responsivo.
• JavaScript Puro: Gerenciamento da lógica do Carrinho de Compras e persistência com localStorage.
• jQuery: Manipulação de DOM para eventos de scroll e toggle do menu mobile.
• ScrollReveal.js: Implementação de animações de rolagem (revelação de elementos).
• Google Fonts: Utilização da fonte "Noto Sans"
