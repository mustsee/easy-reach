import CardInfos from '../../guests/CardInfos.vue'
import { bookings } from '../../../../cypress/data/bookings'

const booking = bookings[0]

describe('CardInfos', () => {
  it('renders properly', () => {
    cy.mount(CardInfos, { props: { booking } })
    cy.get('[data-cy=phone]').should('not.have.text', 'No phone')
    cy.get('[data-cy=email]').should('not.have.text', 'No email')
    cy.get('[data-cy=arrival-time]').should('not.have.text', 'No data')
    cy.get('[data-cy=comments]').should('not.have.text', 'No data')
  })

  it('when the edit icon is pressed, the input is displayed with correct value', () => {
    cy.mount(CardInfos, { props: { booking } })
    cy.get('[data-cy=edit]').click()
    cy.get('[data-cy=input]').should('have.value', booking.arrivalTime)
  })

  it('when the cancel button is pressed, the input is not displayed anymore', () => {
    cy.mount(CardInfos, { props: { booking } })
    cy.get('[data-cy=edit]').click()
    cy.get('[data-cy=cancel]').click()
    cy.get('[data-cy=edit]').should('be.visible')
    cy.get('[data-cy=arrival-time]').should('have.text', booking.arrivalTime)
  })
})
