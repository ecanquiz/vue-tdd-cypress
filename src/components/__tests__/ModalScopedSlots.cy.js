import Modal from '../ModalScoped.vue'
import { h } from 'vue'

const modalSelector = '.modal'
const footerSelector = '[data-testid=footer-close]'
const headerSelector = '[data-testid=header-close]'
const contentSelector = '[data-testid=content-close]'
const text = 'Close me!'

const slots = {
  footer: ({ close }) => h('div', { onClick: close , 'data-testid': 'footer-close' }, text ),
  header: ({ close }) => h('div', { onClick: close, 'data-testid': 'header-close' }, text ),
  default: ({ close }) => h('div', { onClick: close, 'data-testid': 'content-close' }, text ),
}

describe('<Modal>', () => {

  it('The footer slot binds the close method', () => {
    cy.mount(Modal, { slots })
      .get(footerSelector).should('have.text', text)
      .click()
      .get(modalSelector).should('not.exist')
  })

  it('The header slot binds the close method', () => {
    cy.mount(Modal, { slots })
      .get(headerSelector).should('have.text', text)
      .click()
      .get(modalSelector).should('not.exist')
  })

  it('The default slot binds the close method', () => {
    cy.mount(Modal, { slots })
      .get(contentSelector).should('have.text', text)
      .click()
      .get(modalSelector).should('not.exist')
  })
  
})
