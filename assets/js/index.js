document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll('.rs-ico')
  
  for (const icon of icons){
    icon.addEventListener('click', (e) => {
      const target = e.target
      const txt = target.previousElementSibling

      if(Array.from(txt.classList).includes('expand')) {
        txt.classList.remove('expand')
        txt.classList.add('contract')
      }
      else {
        txt.classList.remove('contract')
        txt.classList.add('expand')
      }
    })
  }

});