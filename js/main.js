let cards = document.querySelector('.items')
cards.addEventListener('click',(event)=>{
    if (event.target.closest('.item') && !event.target.closest('.item').classList.contains('active') ) {
        event.target.closest('.item').classList.add('active')
        event.target.closest('.items').append(event.target.closest('.item'))
    }
})