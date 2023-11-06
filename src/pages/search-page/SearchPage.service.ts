import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

const SEARCH_KEY = 'search';
export function useUrlSearchParamValueHook() {
  const [searchParams] = useSearchParams();
  return searchParams.get(SEARCH_KEY);
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
