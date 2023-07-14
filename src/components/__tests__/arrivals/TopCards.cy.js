import TopCards from '../../arrivals/TopCards.vue'
import { bookings } from '../../../../cypress/data/bookings'

describe('TopCards', () => {
  it('renders properly with bookings', () => {
    cy.mount(TopCards, { props: { bookings } })
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
