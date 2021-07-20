/// <reference types = "Cypress" />

describe('get api user tests', ()=>{
    it('get users', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'authorization': 'Bearer aee7e4498456da13c28fc01883725173f3b7a4e4b4ed14352c7b647fa47342ce'
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(20)
        })





    })












})