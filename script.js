document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------
    // Navigation / Hamburger
    // ----------------------------------------
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (!hamburger || !navMenu) return;

    // ハンバーガーメニューのトグル
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        navMenu.classList.toggle('is-active');
        
        // メニューが開いているときは背景のスクロールを防ぐ
        if (navMenu.classList.contains('is-active')) {
            document.body.style.overflow = 'hidden';
            hamburger.setAttribute('aria-expanded', 'true');
        } else {
            document.body.style.overflow = '';
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // メニュー内のリンクをクリックしたら自動で閉じる
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('is-active');
            navMenu.classList.remove('is-active');
            document.body.style.overflow = '';
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
});
