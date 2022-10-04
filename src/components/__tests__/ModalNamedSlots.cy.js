import Modal from '../ModalNamed.vue'

describe('<Modal>', () => {
  
  const modalSelector = '.overlay'
  const closeButtonSelector = 'button'
  
  const footerText = 'My Custom Footer'
  const headerText = 'My Custom Header'

  const slots = {
    default: () => 'Content',
    footer: () => footerText,
    header: () => headerText
  }

  it('renders the default modal content', () => {
    cy.mount(Modal, { slots })
      .get(modalSelector).should('have.contain', 'Content')
  })

  it('renders a custom footer', () => {
    const footerText = 'My Custom Footer'  
    cy.mount(Modal, { slots })
      .get(modalSelector).should('have.contain', 'Content')
      .and('have.contain', footerText)
  })

  it('renders a custom header', () => {
    const headerText = 'My Custom Header'
    cy.mount(Modal, { slots })
      .get(modalSelector).should('have.contain', 'Content')
      .and('have.contain', headerText)
  })

  it('renders the fallback "Close" button when no footer is provided', () => {
    cy.mount(Modal, {
      slots: {
        default: () => 'Content',
        header: () => headerText
      }
    })
      .get(modalSelector).should('have.contain', 'Content')
      .get(closeButtonSelector)
      .should('have.contain', 'Close').click()
      // Repeat the assertion to make sure the text
      // is no longer visible
      .get(modalSelector).should('not.have.contain', 'Content')
  })  
})
