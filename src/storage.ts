export const TOKEN_KEY = "token";

export const deleteToken = () => localStorage.removeItem(TOKEN_KEY);

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const setToken = (token: string) => {
  if (!token) return;
  localStorage.setItem(TOKEN_KEY, token);
};
