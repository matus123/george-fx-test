import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { StickySearchInputContainer } from './StickySearchContainer';
import { render } from '../../../test-utils';

describe('StickySearchInputContainer', () => {
  test.skip('It should mount', async () => {
    render(<StickySearchInputContainer />);

    const user = userEvent.setup();

    const input = screen.getByRole('textbox');

    await user.type(input, 'chine');

    console.log(global.window.location);

    expect(global.window.location).toContain('/search=chine');
  });
});
