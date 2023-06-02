import { FC } from 'react';
import { ToolbarItem } from '@patternfly/react-core';
import { useTranslation } from '../../../../i18n';
import { FormatDate, RefreshButton } from '../../../../shared-components';

export type ToolbarRefreshProps = {
  isRefreshing: boolean;
  lastUpdated: Date | undefined;
  ariaLabel: string;
  onRefresh: () => void;
};

export const ToolbarRefresh: FC<ToolbarRefreshProps> = ({
  isRefreshing,
  lastUpdated = new Date(),
  ariaLabel,
  onRefresh,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <ToolbarItem>
        <RefreshButton
          ariaLabel={ariaLabel}
          onClick={onRefresh}
          isRefreshing={isRefreshing}
        />
      </ToolbarItem>
      <ToolbarItem
        alignment={{ default: 'alignRight' }}
        style={{ color: 'var(--pf-global--Color--200)' }}
      >
        <div className="pf-u-font-size-xs">
          {isRefreshing ? (
            t('refreshing')
          ) : (
            <>
              {t('last-refresh')}
              <br />
              <FormatDate date={lastUpdated} format="distanceToNow" />
              {t('last-refresh-distance')}
            </>
          )}
        </div>
      </ToolbarItem>
    </>
  );
};
