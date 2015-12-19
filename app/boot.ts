import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';

import { AppContainerComponent } from './components/app-container/app-container.component';

bootstrap(AppContainerComponent, [
	ROUTER_PROVIDERS
]);

