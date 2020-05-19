const calculateCartPrice = (items) => {
  let totalPrice = 0
  items.map((item) => {
    totalPrice = totalPrice + item.price * item.quantity
  })
  return totalPrice
}

export { calculateCartPrice }
