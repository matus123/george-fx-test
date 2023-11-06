import { render, screen } from '../../../test-utils';
import { SearchResultGrid } from './SearchResultContainer';

describe('SearchResultGrid', () => {
  test('It should mount', async () => {
    render(
      <SearchResultGrid
        currency="EUR"
        data={[
          {
            currency: 'SWE',
            precision: 2,
            exchangeRate: { indicator: 1, buy: 2.5, lastModified: new Date().toISOString() },
          },
          {
            currency: 'USD',
            nameI18N: 'USA',
            precision: 2,
            exchangeRate: { indicator: 1, buy: 1.4, lastModified: new Date().toISOString() },
          },
        ]}
      />,
    );

    expect(await screen.findAllByText('SWE')).toBeDefined();
    expect(await screen.findAllByText('2.50 EUR')).toBeDefined();

    expect(await screen.findAllByText('USD')).toBeDefined();
    expect(await screen.findAllByText('1.40 EUR')).toBeDefined();
  });
});
