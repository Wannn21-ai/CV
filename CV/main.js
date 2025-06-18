document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('section').forEach(sec => {
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('visible');
    });
    }, { threshold: 0.1 });
    observer.observe(sec);
});