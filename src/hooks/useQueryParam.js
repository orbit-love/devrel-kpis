import { useMemo } from "react";
import { parse } from "query-string";
import { useWindow } from "superlinear-react-ui";

export function useQueryParam(paramName, tranformer) {
  const window = useWindow();

  const search = window && window.location.search;
  const parsedQueryParams = useMemo(() => {
    if (!search) return;
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
