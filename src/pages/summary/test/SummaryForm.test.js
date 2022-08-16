import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

test('initial conditions', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });

  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole('button', { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test('Checkbox enables button on first click and disables on second click', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole('button', { name: /confirm order/i });

  fireEvent.click(checkbox);

  expect(confirmButton).toBeEnabled();
});

test('popover responds to hover', async () => {
  render(<SummaryForm />);

  // popover start out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  userEvent.unhover(termsAndConditions);

  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );

  // instead of
  // const nullPopoverAgain = screen.queryByText(
  //   /no ice cream will actually be delivered/i
  // );
  // await waitFor(() => {
  //   expect(nullPopoverAgain).not.toBeInTheDocument();
  // })
});
