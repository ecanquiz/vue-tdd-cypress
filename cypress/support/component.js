// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Import global styles
import '@/assets/main.css'

import { mount } from 'cypress/vue'

// Cypress.Commands.add('mount', mount)

// Example use:
// cy.mount(MyComponent)

Cypress.Commands.add('mount', (...args) => {
  return mount(...args).then((wrapper) => {
    return cy.wrap(wrapper).as('vue')
  })
})

// the "@vue" alias will now work anywhere
// after you've mounted your component
//cy.mount(Stepper).doStuff().get('@vue') // The subject is now the Vue Wrapper

