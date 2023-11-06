import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { setData } from '../../store/searchPage';

import data from '../../assets/fx.json';

const SEARCH_KEY = 'search';
const CURRENCY_KEY = 'currency';

export function useUrlSearchParamValueHook() {
  const [searchParams] = useSearchParams();
  return searchParams.get(SEARCH_KEY);
}

export function useUrlSearchCurrencyValueHook() {
  const [searchParams] = useSearchParams();
  return searchParams.get(CURRENCY_KEY) ?? data.baseCurrency;
}

export function useUrlSearchParamSetterHook() {
  const [, setSearchParams] = useSearchParams();
  return useCallback(
    (value: string) => {
      setSearchParams({ [SEARCH_KEY]: value });
    },
    [setSearchParams],
  );
}

export function useUrlSearchCurrencySetterHook() {
  const [, setSearchParams] = useSearchParams();
  return useCallback(
    (value: string) => {
      setSearchParams({ [CURRENCY_KEY]: value });
    },
    [setSearchParams],
  );
}

export function useSearchResultHook() {
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
