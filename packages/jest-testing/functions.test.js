import {div, containsNumbers} from "./functions.js"


test('Testing div -- integer division', () => {
   const expected = 15;
   const result = div(30,2);
   expect(result).toBe(expected);
});

test('Testing div -- divide by zero', () => {
   const expected = Infinity
   const result = div(30,0);
   expect(result).toBe(expected);
});

test('Testing div -- dividing zero leads to zero', () => {
   const expected = 0
   const result = div(0,999999999999);
   expect(result).toBe(expected);
});

test('Testing div -- odd division leads to floats', () => {
   const expected = 7.5
   const result = div(15,2);
   expect(result).toBe(expected);
});

test('Testing div -- small division leads to floats', () => {
   const expected = 0.4
   const result = div(2, 5)
   expect(result).toBe(expected);
})

test('Testing containsNumbers -- base true', () => {
   const expected = true
   const result = containsNumbers("61723")
   expect(result).toBe(expected)
})

test('Testing containsNumbers -- base false', () => {
   const expected = false
   const result = containsNumbers("Seven")
   expect(result).toBe(expected)
})

test('Testing containsNumbers -- at end', () => {
   const expected = true
   const result = containsNumbers("the number 1")
   expect(result).toBe(expected)
})

test('Testing containsNumbers -- at beginning', () => {
   const expected = true
   const result = containsNumbers("9 is a number")
   expect(result).toBe(expected)
})

test('Testing containsNumbers -- in middle', () => {
   const expected = true
   const result = containsNumbers("The number 7 is here")
   expect(result).toBe(expected)
})

test('Testing containsNumbers -- with non-alphanumeric', () => {
   const expected = true
   const result = containsNumbers("!@#!$$#%9900$^*&$&")
   expect(result).toBe(expected)
})

test('Testing containsNumbers -- just space', () => {
   const expected = false
   const result = containsNumbers("     ")
   expect(result).toBe(expected)

})




