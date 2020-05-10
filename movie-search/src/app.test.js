import GetMovie from './get_movie';

const getMovie = new GetMovie('red', 1, 'a48b3198');

test('red', () => {
  expect(getMovie.movie('red', 1, 'search')).toBe();
});
