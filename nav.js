/**
 * Oeste Day - Navigation & Interactive Behaviors
 * Suporte completo para dropdowns (hover + clique/touch), acessibilidade e FAQs interativos.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Dropdown de Procedimentos
  const dropdownItems = document.querySelectorAll('.nav-item.dropdown');

  dropdownItems.forEach((dropdown) => {
    const trigger = dropdown.querySelector('a');
    const menu = dropdown.querySelector('.dropdown-menu');

    if (!trigger || !menu) return;

    // Toggle ao clicar no botão/link principal (especialmente para touch/mobile)
    trigger.addEventListener('click', (e) => {
      // Impede navegação se for link toggle
      e.preventDefault();
      e.stopPropagation();

      const isOpen = dropdown.classList.contains('is-open');

      // Fecha outros dropdowns abertos
      dropdownItems.forEach(d => {
        if (d !== dropdown) {
          d.classList.remove('is-open');
          const t = d.querySelector('a');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        dropdown.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        dropdown.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });

    // Fecha ao clicar em qualquer item dentro do menu
    menu.querySelectorAll('a').forEach(itemLink => {
      itemLink.addEventListener('click', () => {
        dropdown.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      });
    });
  });

  // Fecha dropdowns se clicar fora
  document.addEventListener('click', (e) => {
    dropdownItems.forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('is-open');
        const trigger = dropdown.querySelector('a');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Fecha ao pressionar ESC no teclado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdownItems.forEach((dropdown) => {
        dropdown.classList.remove('is-open');
        const trigger = dropdown.querySelector('a');
        if (trigger) {
          trigger.setAttribute('aria-expanded', 'false');
          trigger.focus();
        }
      });
    }
  });

  // 2. Acordeão para Itens de FAQ (Suporte a classes legacy e flat design)
  const faqHeaders = document.querySelectorAll('.faq-question, .faq-flat-header');
  faqHeaders.forEach((question) => {
    question.addEventListener('click', () => {
      const parent = question.closest('.faq-item, .faq-flat-item');
      if (!parent) return;

      const answer = parent.querySelector('.faq-answer, .faq-flat-body');
      const arrow = question.querySelector('span, svg');

      if (!answer) return;

      const isHidden = window.getComputedStyle(answer).display === 'none';

      if (isHidden) {
        answer.style.display = 'block';
        if (arrow) {
          if (arrow.tagName.toLowerCase() === 'svg') {
            arrow.style.transform = 'rotate(180deg)';
          } else {
            arrow.textContent = '▴';
          }
        }
      } else {
        answer.style.display = 'none';
        if (arrow) {
          if (arrow.tagName.toLowerCase() === 'svg') {
            arrow.style.transform = 'rotate(0deg)';
          } else {
            arrow.textContent = '▾';
          }
        }
      }
    });
  });

  // 3. Miniaturas e Alternador de Fotos / Galerias (Suporte Universal)
  const galleryContainers = document.querySelectorAll('[data-photo-gallery]');
  galleryContainers.forEach((container) => {
    const mainImg = container.querySelector('[data-main-img]');
    const titleEl = container.querySelector('[data-img-title]');
    const descEl = container.querySelector('[data-img-desc]');
    const badgeEl = container.querySelector('[data-img-badge]');
    const thumbs = container.querySelectorAll('[data-thumb-btn]');
    const prevBtn = container.querySelector('[data-prev-btn]');
    const nextBtn = container.querySelector('[data-next-btn]');

    let currentIndex = 0;

    const updateActiveItem = (index) => {
      if (!thumbs.length) return;
      currentIndex = (index + thumbs.length) % thumbs.length;
      const activeThumb = thumbs[currentIndex];
      
      const newSrc = activeThumb.getAttribute('data-img-src');
      const newTitle = activeThumb.getAttribute('data-title');
      const newDesc = activeThumb.getAttribute('data-desc');
      const newBadge = activeThumb.getAttribute('data-badge');

      if (mainImg && newSrc) mainImg.src = newSrc;
      if (titleEl && newTitle) titleEl.textContent = newTitle;
      if (descEl && newDesc) descEl.textContent = newDesc;
      if (badgeEl && newBadge) badgeEl.textContent = newBadge;

      thumbs.forEach((t, i) => {
        if (i === currentIndex) {
          t.classList.add('border-[#0066CC]', 'ring-2', 'ring-[#0066CC]');
          t.classList.remove('border-[#CBD5E1]', 'opacity-60');
        } else {
          t.classList.remove('border-[#0066CC]', 'ring-2', 'ring-[#0066CC]');
          t.classList.add('border-[#CBD5E1]', 'opacity-60');
        }
      });
    };

    thumbs.forEach((thumb, idx) => {
      thumb.addEventListener('click', () => updateActiveItem(idx));
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => updateActiveItem(currentIndex - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => updateActiveItem(currentIndex + 1));
    }
  });
});
