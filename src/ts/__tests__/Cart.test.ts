import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});


test('adding movie to cart', () => {
  const cart = new Cart();
  cart.add(new Movie(1, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers assemble', 
  ['фантастика', 'боевик', 'фэнтэзи', 'приключения'], '137 мин. / 02:17',1000));
  expect(cart.items).toContainEqual({
    id: 1,
    name: 'Мстители',
    originalName: 'The Avengers', 
    year: 2012,
    country: 'США', 
    tagline: 'Avengers assemble',
    genre: ['фантастика', 'боевик', 'фэнтэзи', 'приключения'], 
    duration: '137 мин. / 02:17',
    price: 1000,
  })
})
