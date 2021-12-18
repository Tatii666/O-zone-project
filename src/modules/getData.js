const getData = () => {
    return fetch('https://o-zone-9e888-default-rtdb.firebaseio.com/goods.json')
        .then((res) => {
            return res.json()
        })

}

export default getData