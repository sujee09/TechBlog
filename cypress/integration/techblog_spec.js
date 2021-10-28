describe('My First Test', () => {
    it('Visits the TechBlog', () => {
      cy.visit('localhost:8000')

      cy.contains('TechBlog')
    })
  })