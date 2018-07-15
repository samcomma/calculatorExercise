const expect = require('chai').expect
const {add, subtract, multiply} = require('../calculator')



describe('add', ()=> {
	it('should add 1 and 2', ()=> {
		expect(add(1,2)).to.eql(3)
	})
	it('should add negative numbers', ()=> {
		expect(add(-4,-5)).to.eql(-9)
	})
});


describe('subtract', ()=> {
	it('should add 1 and 2', ()=> {
		expect(subtract(3,2)).to.eql(1)
	})
	it('should subtract negative numbers', ()=> {
		expect(subtract(-3,3)).to.eql(-6)
	})
});

describe('multiply', ()=> {
	it('should multiply 4 and 5', ()=> {
		expect(multiply(4,5)).to.eql(20)
	})
	it('should multiply negative numbers', ()=> {
		expect(multiply(-8,-2)).to.eql(16)
	})
});