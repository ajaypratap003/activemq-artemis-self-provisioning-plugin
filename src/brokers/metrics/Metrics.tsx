import { FC, useCallback, useState } from 'react';
import {
  CardBrokerMemoryUsageMetricsContainer,
  CardBrokerMemoryUsageMetricsContainerProps,
  CardBrokerCPUUsageMetricsContainer,
  ToolbarMetrics,
} from './components';
import { parsePrometheusDuration } from '../../utils';
import { MetricsLayout } from './components/MetricsLayout/MetricsLayout';

export type MetricsProps = CardBrokerMemoryUsageMetricsContainerProps;

export const Metrics: FC<MetricsProps> = ({ name, namespace, size }) => {
  const [pollTime, setPollTime] = useState<string>('0');
  const [span, setSpan] = useState<string>('30m');

  const onSelectOptionPolling = useCallback((value: string) => {
    setPollTime(value);
  }, []);

  const onSelectOptionSpan = useCallback((value: string) => {
    setSpan(value);
  }, []);

  return (
    <MetricsLayout
      metricsMemoryUsage={
        <CardBrokerMemoryUsageMetricsContainer
          name={name}
          namespace={namespace}
          size={size}
          pollTime={pollTime}
          timespan={parsePrometheusDuration(span)}
        />
      }
      metricsCPUUsage={
        <CardBrokerCPUUsageMetricsContainer
          name={name}
          namespace={namespace}
          size={size}
          pollTime={pollTime}
          timespan={parsePrometheusDuration(span)}
        />
      }
      toolbarMetrics={
        <ToolbarMetrics
          pollingTime={pollTime}
          span={span}
          onSelectOptionPolling={onSelectOptionPolling}
          onSelectOptionSpan={onSelectOptionSpan}
          // isRefreshing={isRefreshing}
          // lastUpdated={lastUpdated}
          // onRefresh={onRefresh}
        />
      }
    />
  );
};
