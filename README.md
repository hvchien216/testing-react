# Resource
1. [Jest DOM Documentation](https://github.com/testing-library/jest-dom)
2. [Mocking css modules](https://jestjs.io/docs/webpack#mocking-css-modules)
3. [W3 - Role definitions](https://www.w3.org/TR/wai-aria/#role_definitions)
4. [Ecosystem user event](https://testing-library.com/docs/ecosystem-user-event/)
5. [Common mistakes with React Testing Library](http://localhost:3000)

## screen Query Methods

  Syntax: command[All]ByQueryType

### command ###
 + get: expect element to be in DOM
 + query: expect element not to be in DOM
 + find: expect element to appear async

### [All] ###
 + (exclude): expect only one match
 + (include): expect more than one match

### QueryType ###
 + Role (most preferred)
 + AltText (images)
 + Form elements
    - PlaceholderText
    - LabelText
    - DisplayValue