import { useMemo } from "react";
import { parse } from "query-string";

export function useQueryParam(paramName, tranformer) {
  const search = window.location.search;
  const parsedQueryParams = useMemo(() => {
    return parse(search);
  }, [search]);

  if (parsedQueryParams) {
    const value = parsedQueryParams[paramName];
    if (tranformer && value !== undefined) {
      return tranformer(value);
    } else if (value !== undefined) {
      return value;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
