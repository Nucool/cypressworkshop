
context('Create Task', () => {
  beforeEach(() => {
    /// TODO refactor domain url 
    cy.visit('https://staging.claimdi.com/')
  })

  it('FRS', () => {
    cy.get('#txtuser').type('admin').should('have.value', 'admin')
    cy.get('#txtpass').type('123456').should('have.value', '123456')
    cy.get('#btnlogin').click()

    // open create page
    cy.get('#bt_new_task').click()
    cy.get('#informerName').type('ทดสอบ')
    cy.get('#informerTel').type('0123456789')
    cy.get('#taskTypeId').select('FRS')


    cy.get('#CarInfo_policyInsurerId_ddl').select('IN0066')

    cy.get('.col-md-8 > .item > #CarInfo_carRegis').type('test car')
    cy.get('#CarInfo_Deduct').type(0)
    cy.get('#CarInfo_TpDeduct').type(0)


    // assign surveryor
    cy.get('#home-tab9').click()
    cy.get('#google_map_assign > img').click()
    cy.get('#textSearch').type('ดินแดง')
    cy.get('#textSearch').type('{enter}')

    cy.get('#map_select_assignType').select('3')
    cy.get('#map_surveyor_name').type('เกมส์')
    cy.get('#btnCar').click()

    cy.get('.list-unstyled > :nth-child(1) > a').first().click()
    cy.get('#assignSurveyor').click()

    cy.get('#m_save').click()
  })

  it('INS', () => {
    cy.get('#txtuser').type('admin').should('have.value', 'admin')
    cy.get('#txtpass').type('123456').should('have.value', '123456')
    cy.get('#btnlogin').click()

    // open create page
    cy.get('#bt_new_task').click()
    cy.get('#informerName').type('ทดสอบ')
    cy.get('#informerTel').type('0123456789')
    cy.get('#taskTypeId').select('INS')

    cy.get('.required > .item > #CarInfo_carRegis').type('Test 123')
    cy.get('#insId').select('IN0128')


    // assign surveryor
    cy.get('#home-tab9').click()
    cy.get('#google_map_assign > img').click()
    cy.get('#textSearch').type('ดินแดง')
    cy.get('#textSearch').type('{enter}')

    cy.get('#map_surveyor_name').type('เกมส์')
    cy.get('#btnCar').click()

    cy.get('.list-unstyled > :nth-child(1) > a').first().click()
    cy.get('#assignSurveyor').click()

    cy.get('#m_save').click()
  })

  it('CC', () => {
    cy.get('#txtuser').type('admin').should('have.value', 'admin')
    cy.get('#txtpass').type('123456').should('have.value', '123456')
    cy.get('#btnlogin').click()

    // open create page
    cy.get('#bt_new_task').click()
    cy.url().should('eq', 'https://staging.claimdi.com/Task/Create/')
    cy.get('#informerName').type('ทดสอบ')
    cy.get('#informerTel').type('0123456789')
    cy.get('#taskTypeId').select('CC')
    cy.get('#taskTypeId').should('have.value', 'CC')

    cy.get('#CarInfo_policyInsurerId_ddl').select('IN0066')
    cy.get('.col-md-8 > .item > #CarInfo_carRegis').type('test car')
    cy.get('#CarInfo_Deduct').type(0)
    cy.get('#CarInfo_TpDeduct').type(0)
    cy.get('#InsTaskTypeId').select('FRS')

    cy.get('#m_save').click()
    cy.get('.buttons > .btn').click()
  })
})