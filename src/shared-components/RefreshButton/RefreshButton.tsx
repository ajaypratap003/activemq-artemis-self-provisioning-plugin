import { FC } from 'react';
import { Button, Tooltip } from '@patternfly/react-core';
import { SyncAltIcon } from '@patternfly/react-icons';
import { useTranslation } from '../../i18n';

export type RefreshButtonProps = {
  isDisabled?: boolean;
  tooltip?: string;
  isRefreshing: boolean;
  ariaLabel?: string;
  onClick: () => void;
};
export const RefreshButton: FC<RefreshButtonProps> = ({
  ariaLabel,
  onClick,
  isDisabled,
  tooltip,
  isRefreshing,
}) => {
  const { t } = useTranslation();

  const defaultTooltip = isRefreshing
    ? t('refreshing_tooltip')
    : t('refresh_description');

  return (
    <Tooltip content={tooltip || defaultTooltip}>
      <Button
        className="pf-m-hoverable"
        style={{ color: 'var(--pf-global--Color--200)' }}
        variant="plain"
        aria-label={ariaLabel || t('refresh_button_label')}
        isDisabled={isDisabled}
        onClick={isDisabled === true ? undefined : onClick}
        isLoading={isRefreshing}
        icon={<SyncAltIcon />}
      />
    </Tooltip>
  );
};
