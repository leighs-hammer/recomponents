import {expect} from "chai"
import Handlers from "../src/functions/Handlers"

describe("it should should pass default functions to components.", () => {
	const result = Handlers

	it("should be an object, that contains functions.", () => {
		expect(result).to.be.an("object")
	})

	it("should include a function 'changer' which is used for input value updates", () => {
		expect(result.changer).to.be.an("function")
	})

	it("should take an input onChange event and trim it down to value only", () => {
		const evalText = "This is an evaluation value"
		expect(
			result.changer(
				{target : {value: evalText}}, 
				"input")).to.be.equal(evalText)
	})
	
	it("should handle bools as a simple toggle method 'toggle' ", () => {
		expect(result.toggle(true)).to.be.equal(false)
		expect(result.toggle(false)).to.be.equal(true)
	})


	
})