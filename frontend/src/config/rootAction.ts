import { ActionType } from 'typesafe-actions';

// import { redirectToUrl } from 'common/actions/navigationAction'
// import * as authActions from 'features/auth/actions'
// import * as userActions from 'features/user/actions'
// import * as campaignActions from 'features/campaign/actions'
// import * as influencerActions from 'features/influencer/actions'
// import * as invitationActions from 'features/invitation/actions'
// import * as cashierActions from 'features/cashier/actions'
// import * as customerActions from 'features/customer/actions'
// import * as layoutActions from 'features/layout/actions'

const rootAction = {
    // navigation: redirectToUrl,
    // auth: authActions,
    // user: userActions,
    // campaign: campaignActions,
    // influencer: influencerActions,
    // invitation: invitationActions,
    // cashier: cashierActions,
    // customer: customerActions,
    // layout: layoutActions,
};

export type AppAction = ActionType<typeof rootAction>;
