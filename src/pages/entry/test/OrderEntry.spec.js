import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { OrderDetailsProvider } from '../../../context/OrderDetail';
import { server } from '../../../mock/server';
import OrderEntry from '../OrderEntry';

test('handles error for scoops and toppings routes',async () => {
  server.resetHandlers(
    rest.get('http://localhost:3030/scoops', (req, res, ctx) =>
      res(ctx.status(500))
    ),
    rest.get('http://localhost:3030/toppings', (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  render(<OrderEntry/>, {wrapper: OrderDetailsProvider});

  // const alerts = await screen.findAllByRole ('alert')
  // expect(alerts).toHaveLength(3)
     // INSTEAD OF
  await waitFor(async () => {
    const alerts = await screen.findAllByRole ('alert')
    expect(alerts).toHaveLength(2)
  })
});

test.skip('not a real test', () => {})