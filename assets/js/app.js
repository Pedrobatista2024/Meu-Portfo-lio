document.addEventListener('DOMContentLoaded', () => {
    // Definimos uma altura fixa para o cabeçalho para garantir precisão na rolagem
    const headerHeight = 100;

    // Função para rolar suavemente para uma seção, ajustando para o cabeçalho fixo
    const smoothScroll = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // Calcula a posição de rolagem subtraindo a altura do cabeçalho
            const scrollPosition = targetElement.offsetTop - headerHeight;
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    };

    // Adiciona event listeners para os links da barra lateral
    const navLinks = document.querySelectorAll('.sidebar_navigation ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            smoothScroll(targetId);
        });
    });

    // Adiciona event listeners para as setas de navegação
    const sections = ['sobre-mim', 'projetos', 'habilidades', 'contato'];
    let currentSectionIndex = 0;

    const updateArrowButtons = () => {
        const leftArrow = document.querySelector('.arrow-left');
        const rightArrow = document.querySelector('.arrow-right');
        
        leftArrow.disabled = currentSectionIndex === 0;
        rightArrow.disabled = currentSectionIndex === sections.length - 1;
    };

    const handleArrowClick = (direction) => {
        currentSectionIndex += direction;
        if (currentSectionIndex < 0) {
            currentSectionIndex = 0;
        } else if (currentSectionIndex >= sections.length) {
            currentSectionIndex = sections.length - 1;
        }
        
        smoothScroll(sections[currentSectionIndex]);
        updateArrowButtons();
    };

    document.querySelector('.arrow-left').addEventListener('click', () => handleArrowClick(-1));
    document.querySelector('.arrow-right').addEventListener('click', () => handleArrowClick(1));

    updateArrowButtons(); // Atualiza o estado dos botões ao carregar a página
});