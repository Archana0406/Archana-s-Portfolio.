const buttons = document.querySelectorAll('.animated-button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const x = e.pageX - button.offsetLeft;
        const y = e.pageY - button.offsetTop;

        const span = document.createElement('span');
        span.style.left = x + 'px';
        span.style.top = y + 'px';
        button.appendChild(span);

        setTimeout(() => {
            span.remove();
        }, 1000);
    });
});
