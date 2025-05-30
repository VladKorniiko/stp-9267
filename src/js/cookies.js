document.addEventListener('DOMContentLoaded', function () {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookie');
  const rejectBtn = document.getElementById('reject-cookie');
  const body = document.body;

  const decision = localStorage.getItem('cookieConsentDecision');

  if (!decision) {
    banner.dataset.visible = 'true';
    body.style.overflow = 'hidden';
  }

  function closeBanner() {
    banner.dataset.visible = 'false';
    body.style.overflow = '';
  }

  acceptBtn.addEventListener('click', function () {
    localStorage.setItem('cookieConsentDecision', 'accepted');
    closeBanner();
  });

  rejectBtn.addEventListener('click', function () {
    localStorage.setItem('cookieConsentDecision', 'rejected');
    closeBanner();
  });
});
