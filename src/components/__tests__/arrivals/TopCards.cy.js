import TopCards from '../../arrivals/TopCards.vue'

let bookings = []
let data = [
  ['todo', 'whatsapp'],
  ['done', 'email'],
  ['todo', 'email'],
  ['other', 'other']
]
data.forEach((item) => {
  bookings.push({
    status: item[0],
    type: item[1]
  })
})

describe('TopCards', () => {
  it('renders properly with bookings', () => {
    cy.mount(TopCards, { props: { bookings: bookings } })
  })

  it('renders properly with no bookings', () => {
    cy.mount(TopCards, { props: { bookings: null } })
    cy.get('[data-cy=guests] [data-cy=data]').should('contain', '0')
    cy.get('[data-cy=whatsapp] [data-cy=data]').should('contain', '0 / 0')
    cy.get('[data-cy=email] [data-cy=data]').should('contain', '0 / 0')
    cy.get('[data-cy=progression] [data-cy=data]').should('contain', '0 / 0')
  })

  it('renders data properly', () => {
    cy.mount(TopCards, { props: { bookings: bookings } })
    cy.get('[data-cy=guests] [data-cy=data]').should('contain', '4')
    cy.get('[data-cy=whatsapp] [data-cy=data]').should('contain', '0 / 1')
    cy.get('[data-cy=email] [data-cy=data]').should('contain', '1 / 2')
    cy.get('[data-cy=progression] [data-cy=data]').should('contain', '1 / 3')
  })
})
