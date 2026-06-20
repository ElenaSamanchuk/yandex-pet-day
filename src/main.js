// Header on scroll
const header = document.getElementById('header');
const onScroll = () => {
  const scrolled = window.scrollY > 12;
  header.classList.toggle('border-border', scrolled);
  header.classList.toggle('bg-white/90', scrolled);
  header.classList.toggle('backdrop-blur-xl', scrolled);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

burger?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('max-h-[480px]');
  mobileNav.classList.toggle('visible', open);
  mobileNav.classList.toggle('opacity-100', open);
  mobileNav.classList.toggle('invisible', !open);
  mobileNav.classList.toggle('opacity-0', !open);
  burger.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.mobile-link, #mobileNav .btn-secondary').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('max-h-[480px]', 'visible', 'opacity-100');
    mobileNav.classList.add('invisible', 'opacity-0');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal removed — static layout closer to Gravity UI

// Format hints
const hintTexts = {
  offline: 'Количество мест ограничено',
  online: 'Пришлем ссылку на трансляцию на почту за час до начала',
};
const formatHint = document.getElementById('formatHint');

function updateFormatHint(value) {
  if (formatHint) formatHint.textContent = hintTexts[value];
  const petField = document.getElementById('petField');
  if (petField) {
    petField.classList.toggle('hidden', value === 'online');
    if (value === 'online') {
      const petInput = petField.querySelector('input[name="withPet"]');
      if (petInput) petInput.checked = false;
    }
  }
}

document.querySelectorAll('input[name="format"]').forEach((input) => {
  input.addEventListener('change', () => updateFormatHint(input.value));
});

const checkedFormat = document.querySelector('input[name="format"]:checked');
if (checkedFormat) updateFormatHint(checkedFormat.value);

// FAQ
function setFaqItemState(item, open) {
  const trigger = item.querySelector('.faq-trigger');
  const panel = item.querySelector('.faq-panel');
  const icon = item.querySelector('.faq-icon');

  item.classList.toggle('is-open', open);
  panel.classList.toggle('grid-rows-[1fr]', open);
  panel.classList.toggle('grid-rows-[0fr]', !open);
  trigger.setAttribute('aria-expanded', String(open));
  icon.textContent = open ? '−' : '+';
}

document.querySelectorAll('.faq-item').forEach((item) => {
  item.querySelector('.faq-trigger').addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');
    document.querySelectorAll('.faq-item').forEach((other) => setFaqItemState(other, false));
    if (!isOpen) setFaqItemState(item, true);
  });
});

// Modal
const modal = document.getElementById('questionModal');
const openBtn = document.getElementById('openQuestionModal');
const closeBtn = document.getElementById('closeModal');
const backdrop = document.getElementById('modalBackdrop');

const openModal = () => {
  modal.classList.remove('invisible', 'opacity-0');
  modal.classList.add('opacity-100');
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  modal.classList.add('invisible', 'opacity-0');
  modal.classList.remove('opacity-100');
  document.body.style.overflow = '';
};

openBtn?.addEventListener('click', openModal);
closeBtn?.addEventListener('click', closeModal);
backdrop?.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('invisible')) closeModal();
});

const registerForm = document.getElementById('registerForm');
const registerToast = document.getElementById('registerToast');
const toastTitle = document.getElementById('toastTitle');
const toastMessage = document.getElementById('toastMessage');

const defaultToast = {
  title: 'Регистрация отправлена',
  message: 'Подтверждение придёт на указанную почту',
};

function showToast({ title, message } = defaultToast) {
  if (!registerToast || !toastTitle || !toastMessage) return;

  toastTitle.textContent = title;
  toastMessage.textContent = message;
  registerToast.hidden = false;
  registerToast.classList.remove('invisible', 'opacity-0', 'translate-y-4', 'pointer-events-none');
  registerToast.classList.add('opacity-100', 'translate-y-0');

  window.setTimeout(() => {
    registerToast.classList.add('invisible', 'opacity-0', 'translate-y-4', 'pointer-events-none');
    registerToast.classList.remove('opacity-100', 'translate-y-0');
    window.setTimeout(() => {
      registerToast.hidden = true;
      toastTitle.textContent = defaultToast.title;
      toastMessage.textContent = defaultToast.message;
    }, 300);
  }, 5000);
}

registerForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  showToast();
  registerForm.reset();
  const checkedFormat = document.querySelector('input[name="format"]:checked');
  if (checkedFormat) updateFormatHint(checkedFormat.value);
});

document.getElementById('questionForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  closeModal();
  showToast({ title: 'Вопрос отправлен', message: 'Ответим на указанную почту' });
});
