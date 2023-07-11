import TopCard from '../../reusable/TopCard.vue'

describe('TopCard', () => {
  it('renders', () => {
    cy.mount(TopCard, { props: { title: 'Progression' } })
  })

  it('renders title properly', () => {
    cy.mount(TopCard, { props: { title: 'Progression' } })
    cy.get('[data-cy=title]').should('contain', 'Progression')
  })

  it('renders slots properly', () => {
    const slots = {
      icon: 'svg',
      data: '12 / 20'
    }
    cy.mount(TopCard, {
      props: { title: 'Progression' },
      slots
    })
    cy.get('[data-cy=icon]').should('contain', 'svg')
    cy.get('[data-cy=data').should('contain', '12 / 20')
  })
})
