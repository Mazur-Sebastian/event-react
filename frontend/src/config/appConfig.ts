import { getEnvValue } from 'common/helpers/getEnvValue';

export interface Config {
    [key: string]: string;
}

export const routeConfig: Config = {
    API_URL: getEnvValue('API_URL'),
    // logIn: '/auth/token-obtain/',
    // refreshToken: '/auth/token-refresh/',
    // verifyToken: '/auth/token-verify/',
    // employees: '/employees/',
    // projects: '/projects/',
    // deviceTypes: '/device-types',
    // createDeviceType: '/create-device-type',
    // editDeviceType: '/edit-device-type',
    // nodeDevices: '/node/device',
    // nodeDeviceTypes: '/node/device-types',
    // office: '/office',
    // device: '/device',
};

const authConfig: Config = {
    tokenField: 'auth-token',
};

export const config = {
    routeConfig,
    authConfig,
};
