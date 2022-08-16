# Resource
1. https://github.com/testing-library/jest-dom
2. https://jestjs.io/docs/webpack#mocking-css-modules
3. https://www.w3.org/TR/wai-aria/#role_definitions
4. https://testing-library.com/docs/ecosystem-user-event/

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