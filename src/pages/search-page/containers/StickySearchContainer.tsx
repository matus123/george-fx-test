import { AppBar, Stack, Typography, TextField } from '@mui/material';
import { PropsWithChildren } from 'react';
import { useUrlSearchParamSetterHook, useUrlSearchParamValueHook } from '../SearchPage.service';

function StickySearchHeader({ children }: PropsWithChildren<Record<never, never>>) {
  return (
    <AppBar
      sx={{
        backgroundColor: 'gray',
        padding: '10px',
      }}
      position={'sticky'}
    >
      {children}
    </AppBar>
  );
}

function SearchInput({
  searchInput,
  setSearchParam,
}: {
  setSearchParam: (value: string) => void;
  searchInput: string | null;
}) {
  return (
    <Stack direction={'row'}>
      <Typography alignSelf={'center'} variant="h6">
        Search:
      </Typography>
      <TextField
        sx={{ outlineColor: 'white', paddingLeft: '10px' }}
        InputProps={{ sx: { color: 'white' } }}
        value={searchInput ?? ''}
        variant="outlined"
        onChange={(e) => setSearchParam(e.target.value)}
      />
    </Stack>
  );
}

export function StickySearchInputContainer() {
  const setSearchParam = useUrlSearchParamSetterHook();
  const searchInput = useUrlSearchParamValueHook();

  return (
    <StickySearchHeader>
      <SearchInput searchInput={searchInput} setSearchParam={setSearchParam} />
    </StickySearchHeader>
  );
}
