const expect = require('chai').expect
const calculator = require('../calculator')


describe('calculator', ()=> {
	it('should exist', ()=> {
		expect('calculator').to.be.ok
	});

	describe('add', ()=> {
		it('should add 1 and 2', ()=> {
			expect(calculator.add(1,2)).to.eql(3)
		});
		it('should add negative numbers', ()=> {
			expect(calculator.add(-4,-5)).to.eql(-9)
		});
	});

	describe('subtract', ()=> {
		it('should add 1 and 2', ()=> {
			expect(calculator.subtract(3,2)).to.eql(1)
		});
		it('should subtract negative numbers', ()=> {
			expect(calculator.subtract(-3,3)).to.eql(-6)
		});
	});

	describe('multiply', ()=> {
		it('should multiply 4 and 5', ()=> {
			expect(calculator.multiply(4,5)).to.eql(20)
		});
		it('should multiply negative numbers', ()=> {
			expect(calculator.multiply(-8,-2)).to.eql(16)
		});
	});

	describe('divide', ()=> {
		it('should divide 10 and 2', ()=> {
			expect(calculator.divide(10,2)).to.eql(5)
		});
		it('should divide negative numbers', ()=> {
			expect(calculator.divide(-2,-2)).to.eql(1)
		});
	});
});

	