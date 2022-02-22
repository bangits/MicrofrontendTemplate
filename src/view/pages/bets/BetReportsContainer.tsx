import { SortTypesEnum, useFirstValue } from '@atom/common';
import { useMemo, useState } from 'react';
import BetReports from './BetReports';

const BetReportsContainer = () => {
  const filtersInitialValues = useMemo<{}>(() => ({}), []);

  const [filters, setFilters] = useState<{}>(filtersInitialValues);

  //   const { data, requestId, isFetching, refetch } = providerApi.useGetProviderQuery(filters);
  const data = {};
  const requestId = 1;
  const isFetching = false;
  const refetch = () => {};

  const { results, rowCount } = (data || {}) as {
    results: any[];
    rowCount: number;
  };

  const firstRequestId = useFirstValue(requestId);

  return (
    <>
      <BetReports
        results={results || []}
        isFilteredData={firstRequestId !== requestId}
        isFetching={isFetching}
        refetch={refetch}
        rowCount={rowCount}
        onFiltersChange={(parameters) => {
          const sorting = parameters.sortedBy
            ? {
                direction: parameters.sortedBy.desc ? SortTypesEnum.DESC : SortTypesEnum.ASC,
                propertyId: parameters.sortedBy.id
              }
            : null;

          setFilters({
            ...filters,
            ...parameters.filters,
            sorting
          });
        }}
        filtersInitialValues={filtersInitialValues}
      />
    </>
  );
};

export default BetReportsContainer;
