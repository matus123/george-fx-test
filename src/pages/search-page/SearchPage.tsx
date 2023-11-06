import { Container } from '@mui/material';

import { useSearchResultHook } from './SearchPage.service';
import { StickySearchInputContainer } from './containers/StickySearchContainer';
import { SearchResultContainer } from './containers/SearchResultContainer';

export default function SearchPage() {
  useSearchResultHook();

  return (
    <Container fixed>
      <StickySearchInputContainer />
      <SearchResultContainer />
    </Container>
  );
}
