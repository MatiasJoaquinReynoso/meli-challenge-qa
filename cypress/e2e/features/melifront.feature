Feature: Mercado Libre - Validate title and results of Subcategory
    Background:
        Given A web browser is at the MercadoLibre home page then open the categories menu
    Scenario: Choose One Option and Validate Title and Results of the subcategory selected
        When Click on Categories Button
        Then  The dropdown is enable
        Then Select an Option and enter a subcategory of it
        Then Check if the title and results
