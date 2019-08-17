export const getEnvValue = (key: string) => {
    const variable = process.env[key];
    return variable !== undefined ? variable.toString() : '';
};
