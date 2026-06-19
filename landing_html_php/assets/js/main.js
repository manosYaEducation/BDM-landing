
// Header scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('site-header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('open');
});
function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

// Counter animation
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const duration = 1800;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current);
    if (current >= target) clearInterval(timer);
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('[data-target]').forEach(el => {
        animateCounter(el, parseInt(el.dataset.target));
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.3 });
const statsSection = document.getElementById('global-impact');
if (statsSection) statsObserver.observe(statsSection);

// Tabs: valores / servicios
function showTab(tab) {
  document.getElementById('tab-valores').classList.toggle('hidden', tab !== 'valores');
  document.getElementById('tab-servicios').classList.toggle('hidden', tab !== 'servicios');
  document.getElementById('btn-valores').className = 'tab-btn px-6 py-2 uppercase tracking-widest text-sm font-bold transition-all duration-300 ' + (tab === 'valores' ? 'active' : 'inactive');
  document.getElementById('btn-servicios').className = 'tab-btn px-6 py-2 uppercase tracking-widest text-sm font-bold transition-all duration-300 ' + (tab === 'servicios' ? 'active' : 'inactive');
}

// Tabs: gallery
function showGallery(type) {
  document.getElementById('gallery-fotos').classList.toggle('hidden', type !== 'fotos');
  document.getElementById('gallery-videos').classList.toggle('hidden', type !== 'videos');
  document.getElementById('btn-fotos').className = 'tab-btn px-6 py-2 uppercase tracking-widest text-sm font-bold transition-all ' + (type === 'fotos' ? 'active' : 'inactive');
  document.getElementById('btn-videos').className = 'tab-btn px-6 py-2 uppercase tracking-widest text-sm font-bold transition-all ' + (type === 'videos' ? 'active' : 'inactive');
}

// Tabs: global impact
function showImpact(type) {
  document.getElementById('impact-global').classList.toggle('hidden', type !== 'global');
  document.getElementById('impact-chile').classList.toggle('hidden', type !== 'chile');
  document.getElementById('btn-global').className = 'tab-btn px-6 py-2 uppercase tracking-widest text-sm font-bold transition-all ' + (type === 'global' ? 'active' : 'inactive');
  document.getElementById('btn-chile').className = 'tab-btn px-6 py-2 uppercase tracking-widest text-sm font-bold transition-all ' + (type === 'chile' ? 'active' : 'inactive');
}





//Función genérica para enviar datos al backend
async function logInteraction(data) {
    try {
        const response = await fetch('save_data.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log('Interacción registrada:', result);
    } catch (error) {
        console.error('Error al registrar:', error);
    }
}

// // Ejemplo: Capturar el formulario de contacto
// document.querySelector('#form-contacto').addEventListener('submit', function(e) {
//     const emailValue = document.querySelector('#input-email').value;
    
//     logInteraction({
//         tipo: 'lead',
//         email: emailValue,
//         seccion: 'contacto'
//     });
// });

// Ejemplo: Capturar clics en botones de "Ver más" (Etapas del campeón)
document.querySelectorAll('.btn-ver-mas').forEach(btn => {
    btn.addEventListener('click', () => {
        logInteraction({
            tipo: 'click',
            elemento: btn.getAttribute('data-id'),
            seccion: 'camino-campeon'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {

    // Función de envío centralizada
    async function logInteraction(data) {
        try {
            const response = await fetch('save_data.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Manejador del Newsletter
    const newsletterForm = document.querySelector('#form-newsletter');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Evita que la página se recargue
            
            const emailValue = document.querySelector('#email-newsletter').value;
            
            const resultado = await logInteraction({
                tipo: 'lead',
                email: emailValue,
                seccion: 'newsletter'
            });

            if (resultado && resultado.status === 'success') {
                alert('¡Gracias por suscribirte!');
                newsletterForm.reset();
            }
        });
    }
});


