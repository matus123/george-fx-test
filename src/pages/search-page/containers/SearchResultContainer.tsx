import { Grid, Card, Stack, Typography, Box } from '@mui/material';
import { useAppSelector } from '../../../store/hooks';
import { useMemo } from 'react';
import { FX } from '../../../interfaces';

import imgUrl from '../../../assets/flags/se.png';
import imgSkUrl from '../../../assets/flags/sk.png';
import { useUrlSearchCurrencyValueHook } from '../SearchPage.service';

function Flag({ item }: { item: FX }) {
  const src = item.flags?.[0] === 'provided' ? imgUrl : imgSkUrl;
  return <Box component="img" sx={{ width: 100, height: 60 }} src={src}></Box>;
}

function PriceTag({ item, currency }: { item: FX; currency: string }) {
  const precision = item.precision ?? 2;
  const price = item.exchangeRate?.buy ?? item.banknoteRate?.buy;

  if (price == null) return null;

  const priceString = price.toFixed(precision);

  return (
    <Typography>
      {priceString} {currency}
    </Typography>
  );
}

function SearchResultRow({ item, currency }: { item: FX; currency: string }) {
  return (
    <Grid key={item.currency} item xs={12} md={12}>
      <Card>
        <Stack direction="row" justifyContent={'space-between'}>
          <Stack direction="row" alignItems={'center'} spacing={2}>
            <Flag item={item} />
            <Typography>{item.currency}</Typography>
            {item.nameI18N != null ? <Typography>({item.nameI18N})</Typography> : null}
          </Stack>
          <Stack justifyContent={'center'}>
            <PriceTag item={item} currency={currency} />
          </Stack>
        </Stack>
      </Card>
    </Grid>
  );
}

export function SearchResultContainer() {
  const currency = useUrlSearchCurrencyValueHook();
  const data = useAppSelector((state) => state.searchPage.data);

  const rows = useMemo(
    () =>
      data.map((item) => {
        return <SearchResultRow key={item.currency} item={item} currency={currency} />;
      }),
    [currency, data],
  );

  return (
    <Box>
      <Grid container spacing={2}>
        {rows}
      </Grid>
    </Box>
  );
}
