document.addEventListener('DOMContentLoaded', () => {
    // Inicializa os ícones do Lucide
    lucide.createIcons();

    // Elementos do Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Alternar o menu mobile
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um link (Mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Validação simples do formulário de contato
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (!nome || !email || !telefone || !mensagem) {
                alert('Por favor, preencha todos os campos do formulário para enviar sua mensagem.');
                return;
            }

            // Simulação de envio bem-sucedido
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
            contactForm.reset();
        });
    }

    // Efeito sutil no Header ao rolar a página
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        } else {
            header.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
        }
    });
});
