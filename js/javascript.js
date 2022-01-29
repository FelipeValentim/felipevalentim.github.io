const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

function callBackLink(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);

    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
    });
    // section.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start',
    // });
    console.log()
}

internalLinks.forEach((link) => {
    link.addEventListener('click', callBackLink);
});

function initScrollAnim() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const halfWindow = window.innerHeight * 0.80;

        function scrollAnim() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - halfWindow;
                if (sectionTop < 0) {
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            });
        }
        scrollAnim()
        window.addEventListener('scroll', scrollAnim);
    }
}

initScrollAnim();