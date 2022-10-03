import Stepper from '../Stepper.vue'

describe('<Stepper>', () => {

  it('mounts', () => {
    cy.mount(Stepper)
  })
  
  // Set up some constants for the selectors
  const counterSelector = '[data-cy=counter]'
  const incrementSelector = '[aria-label=increment]'
  const decrementSelector = '[aria-label=decrement]'

  it('stepper should default to 0', () => {
    // Arrange
    cy.mount(Stepper)
    // Assert
    cy.get(counterSelector).should('have.text', '0')
  })

  it('supports an "initial" prop to set the value', () => {
    // Arrange
    cy.mount(Stepper, { props: { initial: 100 } })
    // Assert
    cy.get(counterSelector).should('have.text', '100')
  })
  
  it('when the increment button is pressed, the counter is incremented', () => {
    // Arrange
    cy.mount(Stepper)
    // Act
    cy.get(incrementSelector).click()
    // Assert
    cy.get(counterSelector).should('have.text', '1')
  })

  it('when the decrement button is pressed, the counter is decremented', () => {
    // Arrange
    cy.mount(Stepper)
    // Act
    cy.get(decrementSelector).click()
    // Assert
    cy.get(counterSelector).should('have.text', '-1')
  })
  
  it('when clicking increment and decrement buttons, the counter is changed as expected', () => {
    cy.mount(Stepper, { props: { initial: 100 } })
    cy.get(counterSelector).should('have.text', '100')
    cy.get(incrementSelector).click()
    cy.get(counterSelector).should('have.text', '101')
    cy.get(decrementSelector).click().click()
    cy.get(counterSelector).should('have.text', '99')
  })

  it('clicking + fires a change event with the incremented value', () => {
    // Arrange
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(Stepper, { props: { onChange: onChangeSpy } })
    // Act
    cy.get(incrementSelector).click()
    // Assert
    cy.get('@onChangeSpy').should('have.been.calledWith', 1)
  })
  
  it('With emitted', () => {  
    cy.mount(Stepper, { props: { initial: 100 } })
    cy.get(incrementSelector).click()
    cy.get('@vue').should((wrapper) => {
      expect(wrapper.emitted('change')).to.have.length
      expect(wrapper.emitted('change')[0][0]).to.equal(101)
    })  
  })  
  
  it('With spies', () => {   
    const onChangeSpy = cy.spy().as('onChangeSpy')     
    cy.mount(Stepper, { props: { initial: 100, onChange: onChangeSpy } })
    cy.get(incrementSelector).click()
    cy.get('@onChangeSpy').should('have.been.calledWith', 101)  
  })  

})

//cy.mount(Stepper).doStuff().get('@vue') // The subject is now the Vue Wrapper
