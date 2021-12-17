const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const closeBtn = cartModal.querySelector('.cart-close')


    function openCart() {
        cartModal.style.display = 'flex'
    }

    const closeModal = () => {
        cartModal.style.display = ''
    }

    cartBtn.addEventListener('click', openCart)
    closeBtn.addEventListener('click', closeModal)
}

export default cart