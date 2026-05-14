document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------
    // Loading Animation: Jazz Count-in
    // ----------------------------------------
    const loader = document.getElementById('loader');
    if (loader) {
        // Prevent scrolling during load
        document.body.classList.add('loading');
        
        // Count timing (simulating a jazz count-in)
        const counts = [
            { id: 'count-1', time: 200 },   // "1,"
            { id: 'count-2', time: 800 },   // "2,"
            { id: 'count-3', time: 1400 },  // "1"
            { id: 'count-4', time: 1800 },  // "2"
            { id: 'count-5', time: 2200 },  // "3"
            { id: 'count-6', time: 2600 }   // "4"
        ];
        
        counts.forEach(c => {
            setTimeout(() => {
                const el = document.getElementById(c.id);
                if (el) el.classList.add('show');
            }, c.time);
        });

        // Fade out loader after the count
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.visibility = 'hidden';
                document.body.classList.remove('loading');
            }, 600); // Wait for CSS transition
        }, 3200);
    }

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
