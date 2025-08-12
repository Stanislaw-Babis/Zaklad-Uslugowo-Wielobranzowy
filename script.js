function phoneReveal() {
    const phoneParts = ['+48', '604', '867'];
    const bait = ['2137']
    phoneParts.push('827');

    document.querySelectorAll('.show-phone').forEach(button => {
        button.addEventListener('click', function () {
            const phone = phoneParts.join(' ').replace('+48 ', '+48 ');
            const phoneLink = document.createElement('a');
            phoneLink.href = 'tel:' + phone.replace(/\s/g, '');
            phoneLink.className = 'text-white text-decoration-none';
            phoneLink.textContent = phone;

            const phoneContainer = this.nextElementSibling;
            phoneContainer.appendChild(phoneLink);
            phoneContainer.classList.remove('d-none');

            this.remove();
        });
    });
}
function galleryOperations() {
    document.addEventListener('DOMContentLoaded', () => {
        const thumbnails = document.querySelectorAll('.gallery-thumbnails img');
        const previewImage = document.getElementById('preview-image');

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const fullImageSrc = thumbnail.getAttribute('data-full');
                previewImage.src = fullImageSrc;
                previewImage.alt = thumbnail.alt;
            });
        });
    });
}
function fading(){
    const fadeElements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(el => observer.observe(el));
}