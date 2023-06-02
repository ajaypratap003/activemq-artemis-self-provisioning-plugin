import { FC, ReactElement } from 'react';
import { Grid, GridItem, PageSection } from '@patternfly/react-core';

export type MetricsLayoutProps = {
  metricsMemoryUsage: ReactElement;
  metricsCPUUsage: ReactElement;
  toolbarMetrics: ReactElement;
};

export const MetricsLayout: FC<MetricsLayoutProps> = ({
  metricsMemoryUsage,
  metricsCPUUsage,
  toolbarMetrics,
}) => {
  return (
    <PageSection
      hasOverflowScroll={true}
      aria-label="metrics"
      padding={{ default: 'noPadding' }}
      className={
        'pf-u-px-lg-on-xl pf-u-pt-sm-on-xl pf-u-pb-lg-on-xl pf-u-px-md pf-u-pb-md'
      }
    >
      <Grid hasGutter>
        <GridItem>{toolbarMetrics}</GridItem>
        <GridItem sm={6}>{metricsMemoryUsage}</GridItem>
        <GridItem sm={6}>{metricsCPUUsage} </GridItem>
        {/* <GridItem sm={6}>{metricsMemoryUsage} </GridItem>
                <GridItem sm={6}>{metricsMemoryUsage} </GridItem> */}
      </Grid>
    </PageSection>
  );
};
