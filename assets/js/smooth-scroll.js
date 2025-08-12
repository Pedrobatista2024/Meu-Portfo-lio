// Este script controla o comportamento de rolagem suave da página.
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links na navegação lateral que começam com '#'
    const navLinks = document.querySelectorAll('.sidebar_navigation ul li a[href^="#"]');
    const header = document.querySelector('.header__navigation');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Previne o comportamento padrão do link, que é pular para a âncora instantaneamente
            event.preventDefault();

            // Pega o ID da seção do atributo href do link
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Obtém a altura do cabeçalho fixo para calcular o offset
                const headerHeight = header ? header.offsetHeight : 0;
                // Calcula a posição do elemento no topo da viewport
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                // Ajusta a posição de rolagem subtraindo a altura do cabeçalho
                const offsetPosition = elementPosition - headerHeight;

                // Rola a página para a posição ajustada com uma animação suave
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
