import css from '../css/goTop-module.css'


function show(node) {
    node.classList.add(css.show)
}
function hide(node) {
    node.classList.remove(css.show)
}

export default function getGoTop() {
    let node = document.createElement('div')
    node.classList.add(css.goTop)
    document.body.appendChild(node)
    let timeoutID
    window.addEventListener('scroll', () => {
        timeoutID && clearTimeout(timeoutID)
        setTimeout(() => {
            document.body.scrollTop > 200 ? show(node) : hide(node)
        }, 200);
    })
    node.addEventListener('click', () => {
        document.body.scrollTop = 0
    })
}