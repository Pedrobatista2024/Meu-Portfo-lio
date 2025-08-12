// Este script implementa a funcionalidade de busca para projetos e habilidades.
document.addEventListener('DOMContentLoaded', () => {
    // Pega o elemento de input de busca.
    const searchInput = document.getElementById('search-input');
    
    // Pega todos os cards de projeto e habilidade.
    const projectCards = document.querySelectorAll('.project-card');
    const skillCards = document.querySelectorAll('.skill-card');

    // Adiciona um listener para o evento 'input' no campo de busca.
    // Isso faz a busca em tempo real, a cada letra digitada.
    searchInput.addEventListener('input', (event) => {
        // Pega o termo de busca e o converte para minúsculas para uma comparação sem distinção de maiúsculas e minúsculas.
        const searchTerm = event.target.value.toLowerCase();

        // Itera sobre cada card de projeto.
        projectCards.forEach(card => {
            // Pega o texto do card (ou o atributo de dados) para a busca.
            const cardText = card.textContent.toLowerCase();
            
            // Se o texto do card incluir o termo de busca, exibe o card.
            // Caso contrário, o oculta.
            if (cardText.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Itera sobre cada card de habilidade.
        skillCards.forEach(card => {
            // Pega o texto do card (ou o atributo de dados) para a busca.
            const cardText = card.textContent.toLowerCase();

            // Se o texto do card incluir o termo de busca, exibe o card.
            // Caso contrário, o oculta.
            if (cardText.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
