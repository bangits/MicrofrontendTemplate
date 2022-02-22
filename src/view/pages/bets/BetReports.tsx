import { AuthenticatedContext } from '@atom/authorization';
import { TablePage, useTranslation } from '@atom/common';
import { FetchDataParameters, Icons, PageWrapper } from '@atom/design-system';
import { useContext, useMemo } from 'react';

export interface BetReportsProps {
  onFiltersChange: (parameters: FetchDataParameters<{}, {}>) => void;
  refetch: () => void;
  results: {}[];
  rowCount: number;
  isFilteredData: boolean;
  isFetching: boolean;
  filtersInitialValues: {};
}

function BetReports({
  results,
  onFiltersChange,
  rowCount,
  isFilteredData,
  filtersInitialValues,
  isFetching,
  refetch
}: BetReportsProps) {
  const { user } = useContext(AuthenticatedContext);
  const t = useTranslation();

  const tableColumns = useMemo(
    () => [
      {
        Header: t.get('providerName'),
        accessor: 'providerName',
        sortingId: 1
      }
      // {
      //   Header: t.get('status'),
      //   accessor: 'status',
      //   variant: 'status' as const,
      //   getVariant: (value: string) => 'danger',
      //   getVariantName: (value: string) => 'test',
      //   disableSortBy: true
      // }
    ],
    [t]
  );

  const filtersList = useMemo(
    () => [
      {
        label: t.get('providerId'),
        name: 'providerId',
        type: 'input' as const,
        props: {
          label: t.get('providerId'),
          type: 'number'
        }
      }
    ],
    [t]
  );

  return (
    <PageWrapper title={t.get('providers')}>
      <TablePage
        fetchData={onFiltersChange}
        isFilteredData={isFilteredData}
        isFetching={isFetching}
        isLoading={isFetching}
        refetch={refetch}
        filterProps={{
          defaultOpened: false,
          initialValues: filtersInitialValues,
          filters: filtersList
        }}
        tableProps={{
          data: results,
          columns: tableColumns,

          illustrationIcon: isFilteredData ? <Icons.NoDataIcon /> : <Icons.EmptyDataIcon />,
          emptyText: isFilteredData ? (
            <>
              {t.get('tables.emptyResultFirstSentence')}
              <br />
              {t.get('tables.emptyResultSecondSentence')}
            </>
          ) : (
            <>
              {t.get('youDontHaveProvidersAdded')}
              <br />
              {t.get('pleaseAddProvider')}
            </>
          )
        }}
        // pageId={PageIdsEnum.PROVIDERS_PAGE}
        userId={user.userId}
        rowCount={rowCount}
      />
    </PageWrapper>
  );
}

export default BetReports;
