import { combineEpics, Epic as _Epic } from 'redux-observable';

// import { notificationEpicFactory } from 'common/epics/notificationEpic'
// import { navigationEpicFactory } from 'common/epics/navigationEpic'

// import { authEpicFactory } from 'features/auth/epic'
// import { campaignEpicFactory } from 'features/campaign/epic'
// import { invitationEpicFactory } from 'features/invitation/epic'
// import { cashierEpicFactory } from 'features/cashier/epic'
// import { influencerEpicFactory } from 'features/influencer/epic'
// import { userEpicFactory } from 'features/user/epic'
// import { customerEpicFactory } from 'features/customer/epic'

// import {
//     authService,
//     storageService,
//     campaignService,
//     influencerService,
//     invitationService,
//     cashierService,
//     userService,
//     customerService,
// } from './rootService'
import { AppAction } from './rootAction';
// import { layoutEpicFactory } from 'features/layout/epic'

export type Epic = _Epic<AppAction, AppAction>;

export const rootEpic = combineEpics();
// notificationEpicFactory(),
// navigationEpicFactory(),
// authEpicFactory(authService, storageService),
// campaignEpicFactory(campaignService),
// influencerEpicFactory(influencerService),
// invitationEpicFactory(invitationService),
// cashierEpicFactory(cashierService, storageService),
// userEpicFactory(userService),
// customerEpicFactory(customerService),
// layoutEpicFactory(storageService),
