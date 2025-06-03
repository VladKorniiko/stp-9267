import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Navigation, Keyboard } from 'swiper/modules';

const reviews = [
  {
    name: 'Mia C. (UK)',
    lowText: 'The cutest game I’ve ever played!',
    text: '“From the first level I was hooked! The candies look so real you almost want to eat them. It’s simple, relaxing, and gives that little brain tickle you want from a puzzle game. And those combo blasts? So satisfying!”',
  },
  {
    name: 'Eric L. (USA)',
    lowText: 'No stress, just pure fun',
    text: '“I love that there are no timers or pressure. I can take my time and plan my moves without feeling rushed. It’s my go-to game for winding down after work or during my lunch break. Plus, the music is chill and relaxing.”',
  },
  {
    name: 'Ayumi S. (Japan)',
    lowText: 'My daughter and I play together!',
    text: '“We’ve made it our nightly routine. We sit together, take turns passing levels, and celebrate the candy combos. The visuals are adorable and it’s easy enough for her, but still fun for me. Great for bonding!”',
  },
  {
    name: 'Leonardo R. (Brazil)',
    lowText: 'It’s hard to stop playing once you start',
    text: '“I downloaded it just to kill time while traveling, but now I play every day. The levels are challenging without being frustrating, and I love how new lands and mechanics are introduced gradually. The candy explosion effects are so cool!”',
  },
  {
    name: 'Sophie D. (France)',
    lowText: 'Better than the big-name puzzle games',
    text: '“I’ve played tons of match-3 games, but this one feels fresh and polished. The boosters are powerful but balanced, and the design is top-tier. I especially love the seasonal updates and colorful new maps.”',
  },
  {
    name: 'Tariq H. (UAE)',
    lowText: 'Perfect for relaxing before bed',
    text: '“I used to scroll social media before sleeping, but now I just play Lollipop World for 20 minutes. It helps me unwind, and I sleep better. There’s something very calming about those soft candy pops and pastel backgrounds.”',
  },
];

// ----------- MOBILE ----------
const mobileList = document.querySelector('#reviews-mobile');
const loadMoreBtn = document.querySelector('#loadMoreBtn');
let visibleMobile = 2;

function renderMobile() {
  mobileList.innerHTML = '';
  reviews.slice(0, visibleMobile).forEach(r => {
    const li = document.createElement('li');
    li.innerHTML = `<p>${r.name}</p><p class="quotes">"${r.lowText}"</p><p>${r.text}</p>`;
    mobileList.appendChild(li);
  });

  if (visibleMobile >= reviews.length) {
    loadMoreBtn.style.display = 'none';
  }
}

loadMoreBtn.addEventListener('click', () => {
  visibleMobile += 2;
  renderMobile();
});
renderMobile();

const swiperWrapper = document.querySelector('#swiper-wrapper');

function initSwiperAfterRender() {
  new Swiper('#swiper-wrapper-container', {
    modules: [Navigation, Keyboard],
    navigation: {
      nextEl: '#swiper-next',
      prevEl: '#swiper-prev',
    },
    keyboard: {
      enabled: true,
    },
    slidesPerView: 2,
    spaceBetween: 180,
  });
}

function createReviewsMarkup() {
  const createdMarkup = reviews.map(r => {
    return `
        <li class="swiper-slide">
          <p>${r.name}</p>
          <p class="quotes">"${r.lowText}"</p>
          <p>${r.text}</p>
        </li>`;
  });

  swiperWrapper.innerHTML = createdMarkup.join('');

  initSwiperAfterRender();
}

createReviewsMarkup();
