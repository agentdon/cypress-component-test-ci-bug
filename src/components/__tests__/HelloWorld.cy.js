import Vue from "vue"
import HelloWorld from "../HelloWorld.vue"

describe("HelloWorld", () => {
  it("renders properly", () => {
    mount({ props: { msg: "Hello Cypress" } })
    cy.get("h1").should("contain", "Hello Cypress")
  })
})

const i18nMock = {
  install: () => {
    Vue.prototype.somePlugin = (msg) => msg
  },
}

const mount = (props) => {
  cy.mount(HelloWorld, {
    propsData: props,
    extensions: { plugins: [i18nMock] },
  })
}
