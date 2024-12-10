import { Route } from '@angular/router'
import { FeaturesComponent } from './features/features.component'
import { FeatureSingleComponent } from './feature-single/feature-single.component'
import { IntegrationsComponent } from './integrations/integrations.component'
import { IntegrationsSingleComponent } from './integrations-single/integrations-single.component'
import { SaasV1Component } from '../../saas/saas-v1/saas-v1.component'
import { SaasV2Component } from '../../saas/saas-v2/saas-v2.component'
import { SaasV3Component } from '../../saas/saas-v3/saas-v3.component'
import { SaasV4Component } from '../../saas/saas-v4/saas-v4.component'
import { SaasV5Component } from '../../saas/saas-v5/saas-v5.component'

export const SAAS_ROUTES: Route[] = [
  {
    path: 'features',
    component: FeaturesComponent,
    data: { title: 'SaaS Features' },
  },
  {
    path: 'feature-single',
    component: FeatureSingleComponent,
    data: { title: 'SaaS Feature Single' },
  },
  {
    path: 'integrations',
    component: IntegrationsComponent,
    data: { title: 'SaaS Integration' },
  },
  {
    path: 'integration-single',
    component: IntegrationsSingleComponent,
    data: { title: 'SaaS Integration Single' },
  },
  {
    path: 'v1',
    component: SaasV1Component,
    data: { title: 'SaaS v.1' },
  },
  {
    path: 'v2',
    component: SaasV2Component,
    data: { title: 'SaaS v.2' },
  },
  {
    path: 'v3',
    component: SaasV3Component,
    data: { title: 'SaaS v.3' },
  },
  {
    path: 'v4',
    component: SaasV4Component,
    data: { title: 'SaaS v.4' },
  },
  {
    path: 'v5',
    component: SaasV5Component,
    data: { title: 'SaaS v.5' },
  },
]
