describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should have banner', () => {
    cy.get('h1').should('have.text', 'Cheese n Corn')
  })

  it('Should have products', () => {
    cy.get('div').should('have.class', 'pizza-list')
    cy.get('div').should('have.class', 'pizza-card')
  })

  it('Should have add to cart button', () => {
    cy.get('button').should('have.class', 'add-to-cart')
  })

  it('Should add to cart', () => {
    cy.get('button.add-to-cart').first().click()
    cy.get('button.add-to-cart').first().should('have.class', 'disabled')
  })
})
