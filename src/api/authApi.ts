import { accountsApi } from "./baseApi";

export const registerApi = `${accountsApi}register/`;

// export const loginApi = `${accountsApi}login/`;

// export const forgotPasswordApi = `${accountsApi}forgot-password/`;

// export const sendVerificationCodeApi = (username: string) => `${forgotPasswordApi}?username=${username}`;

// export const changePasswordApi = `${accountsApi}profile/`;

export const getJWTTokenApi = `${accountsApi}token/`;

export const refreshJWTTokenApi = `${getJWTTokenApi}refresh/`;
