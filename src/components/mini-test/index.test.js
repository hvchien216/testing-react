import { fireEvent, render, screen } from '@testing-library/react';
import MiniTest, { replaceCamelWithSpaces } from './';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('button has correct initial color', () => {
  render(<MiniTest/>);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton =  screen.getByRole('button', {name: 'Change to blue'})

  //expect the background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})

  //click button
  fireEvent.click(colorButton);

  //expect the background color to be blue
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})

  //expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent('Change to red');

  // -------
  const appTag = screen.getByTestId('MiniTest');
  expect(appTag).toHaveClass('MiniTest')
})

test('initial conditions', () => {
  render(<MiniTest/>);

  //check that the button starts out enabled
  const colorButton =  screen.getByRole('button', {name: 'Change to blue'})
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })

  test('Works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})