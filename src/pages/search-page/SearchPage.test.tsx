import { screen } from '@testing-library/react';
import { render } from '../../test-utils';
import SearchPage from './SearchPage';

describe('SearchPage', () => {
  test.skip('It should mount', async () => {
    render(<SearchPage />);

    const input = await screen.findAllByDisplayValue('Search');

    expect(input).toBeDefined();
  });
});
