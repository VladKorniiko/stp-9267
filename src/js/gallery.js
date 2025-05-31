document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider-container');
    const sliderTrack = document.querySelector('.slider-track');
    const slides = Array.from(document.querySelectorAll('.slide'));

    let currentIndex = 0; // Поточний індекс активного слайда
    let startX = 0; // Для відстеження початкової позиції дотику/миші
    let isDragging = false; // Чи відбувається перетягування
    let currentTranslate = 0; // Поточне зміщення слайдера
    let prevTranslate = 0; // Попереднє зміщення

    // Функція для встановлення позиції слайдера
    function setSliderPosition() {
        sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
    }

    // Функція для переходу до конкретного слайда
    function moveToSlide(index) {
        if (index < 0) index = 0;
        if (index >= slides.length) index = slides.length - 1;
        currentIndex = index;
        currentTranslate = -currentIndex * sliderContainer.clientWidth;
        setSliderPosition();
    }

    // --- Обробка дотику (Touch Events) ---
    sliderContainer.addEventListener('touchstart', (event) => {
        isDragging = true;
        startX = event.touches[0].clientX; // Початкова позиція дотику X
        prevTranslate = currentTranslate; // Зберігаємо поточне зміщення
        sliderTrack.style.transition = 'none'; // Вимикаємо перехід під час перетягування
    });

    sliderContainer.addEventListener('touchmove', (event) => {
        if (!isDragging) return;
        const currentX = event.touches[0].clientX;
        const diff = currentX - startX; // Різниця в позиції
        currentTranslate = prevTranslate + diff;
        setSliderPosition();
    });

    sliderContainer.addEventListener('touchend', () => {
        isDragging = false;
        sliderTrack.style.transition = 'transform 0.3s ease-out'; // Повертаємо перехід
        const movedBy = currentTranslate - prevTranslate; // Наскільки ми пересунули

        // Визначаємо, до якого слайда перейти
        if (movedBy < -50) { // Свайп вліво (наступний слайд)
            moveToSlide(currentIndex + 1);
        } else if (movedBy > 50) { // Свайп вправо (попередній слайд)
            moveToSlide(currentIndex - 1);
        } else { // Якщо мало зрушили, повертаємося до поточного
            moveToSlide(currentIndex);
        }
    });

    // --- Обробка колеса миші (Wheel Event) ---
    sliderContainer.addEventListener('wheel', (event) => {
        // Запобігаємо прокрутці сторінки
        event.preventDefault();

        // Визначаємо напрямок прокрутки
        if (event.deltaY > 0) { // Прокрутка вниз = гортаємо вправо (наступний слайд)
            moveToSlide(currentIndex + 1);
        } else if (event.deltaY < 0) { // Прокрутка вгору = гортаємо вліво (попередній слайд)
            moveToSlide(currentIndex - 1);
        }
    }, { passive: false }); // `passive: false` важливий для `preventDefault`

    // Оновлення позиції слайдера при зміні розміру вікна
    window.addEventListener('resize', () => {
        moveToSlide(currentIndex); // Перезавантажуємо поточний слайд, щоб виправити позицію
    });
});