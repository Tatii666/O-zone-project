import getData from "./getData"
import renderGoods from "./renderGoods"
import { priceFilter, hotSaleFilter } from "./filters"

const filter = () => {
    const minPrice = document.getElementById('min')
    const maxPrice = document.getElementById('max')
    const actionPrice = document.getElementById('discount-checkbox')
    const checkboxSpan = document.querySelector('.filter-check_checkmark')

    minPrice.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, actionPrice.checked), minPrice.value, maxPrice.value))
        })
    })

    maxPrice.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, actionPrice.checked), minPrice.value, maxPrice.value))
        })
    })

    actionPrice.addEventListener('change', () => {
        if (actionPrice.checked) {
            checkboxSpan.classList.add('checked')
        } else {
            checkboxSpan.classList.remove('checked')
        }

        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, actionPrice.checked), minPrice.value, maxPrice.value))
        })
    })

}

export default filter