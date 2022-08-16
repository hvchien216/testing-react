import { render, screen } from './../../../test-utils/testing-libraty';
import { OrderDetailsProvider } from '../../../context/OrderDetail';
import Options from '../Options';
import TopingOption from '../TopingOption';

test('displays image for each scoop option from server', async () => {
  render(<Options optionType='scoops' />);

  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((e) => e.alt);
  expect(altText).toStrictEqual(['Chocolate scoop', 'Vanilla scoop', ]);
  //expect(altText).toEqual(['Chocolate', 'Vanilla']);
});

test('displays image for each topping option from server', async () => {
  render(<Options optionType='toppings' />);

  const scoopImages = await screen.findAllByRole('img', { name: /topping$/i });
  expect(scoopImages).toHaveLength(3);

  // confirm alt text of images
  const altText = scoopImages.map((e) => e.alt);
  expect(altText).toStrictEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping']);

  //expect(altText).toEqual(['Chocolate', 'kiwi']);
});
