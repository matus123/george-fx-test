import { AppBar, Box, Card, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import data from '../../assets/fx.json';
import { useUrlSearchParamSetterHook, useUrlSearchParamValueHook } from './SearchPage.service';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setData } from '../../store/searchPage';

interface XXX {
  buy?: number;
  middle?: number;
  sell?: number;
  indicator: number;
  lastModified: string;
}

interface FX {
  banknoteRate?: XXX;
  currency: string;
  exchangeRate?: XXX;
  denominations?: number[];
  flags?: string[];
  nameI18N?: string;
  precision: number;
}

interface ExchangeRate {
  baseCurrency: string;
  comparisonDate: string;
  fx: FX[];
  institute: number;
  lastUpdated: string;
}

function useSearchResultHook() {
  const searchInput = useUrlSearchParamValueHook();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!searchInput || searchInput === '') {
      dispatch(setData(data.fx));
    } else {
      const filteredData = data.fx.filter(
        (item) =>
          item.nameI18N?.toLocaleLowerCase()?.includes(searchInput.toLocaleLowerCase()) ||
          item.currency?.toLocaleLowerCase()?.includes(searchInput.toLocaleLowerCase()),
      );
      dispatch(setData(filteredData));
    }
  }, [dispatch, searchInput]);
}

export function StickySearchInputContainer() {
  const setSearchParam = useUrlSearchParamSetterHook();
  const searchInput = useUrlSearchParamValueHook();

  return (
    <AppBar
      sx={{
        backgroundColor: 'gray',
        padding: '10px',
      }}
      position={'sticky'}
    >
      <Stack direction={'row'}>
        <Typography alignSelf={'center'} variant="h6">
          Search:
        </Typography>
        <TextField
          sx={{ outlineColor: 'white', paddingLeft: '10px' }}
          InputProps={{ sx: { color: 'white' } }}
          value={searchInput}
          variant="outlined"
          onChange={(e) => setSearchParam(e.target.value)}
        />
      </Stack>
    </AppBar>
  );
}

export function SearchResultContainer() {
  const data = useAppSelector((state) => state.searchPage.data);

  const rows = data.map((item) => {
    return (
      <Grid key={item.currency} item xs={12} md={12}>
        <Card>
          <Stack direction="row" spacing={2}>
            <Typography>{item.nameI18N}</Typography>
            <Typography>{item.currency}</Typography>
          </Stack>
        </Card>
      </Grid>
    );
  });

  return (
    <Box>
      <Grid container spacing={2}>
        {rows}
      </Grid>
    </Box>
  );
}

export default function SearchPage() {
  useSearchResultHook();

  return (
    <Container fixed>
      <StickySearchInputContainer />
      <SearchResultContainer />
    </Container>
  );
}
