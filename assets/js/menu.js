window.addEventListener('load', function() {
    const links = document.querySelectorAll('.item__link');
    links.forEach(item => item.addEventListener('click', handleHoverlink));

    const line = document.createElement('div');
    line.className = 'line-effect';
    document.getElementById('header').appendChild(line)

    const offsetBottom = 4;


    function handleHoverlink (event) {
        const {left, width, bottom} = event.target.getBoundingClientRect();
        line.style.width = `${width}px`;
        line.style.left = `${left}px`;
        line.style.top = `${bottom + offsetBottom}px`;
        // line.style.top = `${top+height+offsetBottom}px`

    }



})
