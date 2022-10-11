import Modal from '../ModalSimple.vue'

describe('<Modal>', () => {  
  const modalSelector = '.overlay'
  const closeButtonSelector = 'button'
  
  it('renders the modal content', () => {
    cy.mount(Modal, { slots: { default: () => 'Content' } })
      .get(modalSelector)
      .should('have.contain', 'Content')
  })

  it('can be closed', () => {
    cy.mount(Modal, { slots: { default: () => 'Content' } })
      .get(modalSelector)
      .should('have.contain', 'Content')
      .get(closeButtonSelector)
      .should('have.contain', 'Close')
      .click()
      // Repeat the assertion to make sure the text
      // is no longer visible
      .get(modalSelector)      
      .should('not.have.contain', 'Content')
  })
})
