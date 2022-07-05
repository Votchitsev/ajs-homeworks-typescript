import Movie from "../domain/Movie";

const movie = new Movie(
  1, 
  'Мстители', 
  'The Avengers', 
  2012, 
  'США', 
  'Avengers assemble', 
  ['фантастика', 'боевик', 'фэнтэзи', 'приключения'],
  '137 мин. / 02:17',
  1000,
  )

test('Testing movie creating', () => {
  expect(movie.name).toBe('Мстители');
});
