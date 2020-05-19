const calculateCartPrice = (items) => {
  let totalPrice = 0
  items &&
    items.map((item) => {
      totalPrice = totalPrice + item.price * item.quantity
    })
  return totalPrice
}

const calculateCartItems = (items) => {
  let totalItems = 0
  items &&
    items.map((item) => {
      totalItems = parseInt(totalItems) + parseInt(item.quantity)
    })
  return totalItems
}

export { calculateCartPrice, calculateCartItems }
