let content_text
let parentNode
const btnsToggle = document.querySelectorAll('.toggle-accordion-item');
btnsToggle.forEach(item => {
    item.addEventListener('click', (event) => {
        let childNode = event.target;
        parentNode = childNode.parentElement;
        let icon = parentNode.childNodes.item(3)
        
        content_text = parentNode.nextElementSibling
        if(content_text.classList[0]=='accordion-text-answer') {
           content_text.toggleAttribute('hidden')
           icon.classList.toggle('icon-minus') 
        }
        
    })
})