import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given("A web browser is at the MercadoLibre home page then open the categories menu", () => {
    cy.visit("/");
});

When("Click on Categories Button", () => {
    cy.log('Confirm other modals to not disturb Categories Dropdown')
    cy.get('.onboarding-cp-tooltip')
    cy.xpath('/html/body/div[3]/div/div/div[2]/div/div/div[2]/button[2]').click()
    cy.contains("Categorías").invoke('removeAttr', 'href').click()
    cy.wait(2000)
});

Then("The dropdown is enable", () => {
    cy.log('Open Dropdown')
    cy.get('body > header > div > div.nav-area.nav-bottom-area.nav-center-area > div > ul > li:nth-child(1) > div').invoke('show')
    .should('be.visible')
});

Then("Select an Option and enter a subcategory of it", () => {
    cy.contains('Hogar y Muebles').click()
    cy.title().should('eq', 'Hogar, Muebles y Jardín en Mercado Libre Argentina')
    cy.log('Click "Decoracion" Button')
    cy.get(':nth-child(2) > .hub__boxed-width > .content > .splinter-row > :nth-child(3) > a > :nth-child(1) > .andes-card > .banner > img').as('decoracionBtn')
    cy.get('@decoracionBtn').click()
    cy.log('Click "Veladores lamparas mesa" Button')
    cy.get(':nth-child(2) > .hub__boxed-width > .content > .splinter-row > :nth-child(1) > a > :nth-child(1) > .andes-card > .banner > img').as('lampsBtn')
    cy.get('@lampsBtn').click()
    cy.log('Validate Title and H1')
    cy.title().should('eq', 'Veladores Lamparas Mesa | MercadoLibre 📦')
    cy.log('Validate Title is the Correct')
    cy.get('.ui-search-breadcrumb__title').should('have.text', 'Veladores lamparas mesa')
});
Then("Check if the title and results", () => {
    cy.log('Validate Results have text and numbers')
    cy.contains('resultados').should('be.visible')
    cy.get('.ui-search-search-result__quantity-results')
    .invoke('text')
    .should('match', /^[0-9]+/)
});