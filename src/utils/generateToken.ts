import Cookies from "universal-cookie";
let cookies = new Cookies();
export const encodeToken = (token: string, expires: number) => {
  const expiresTokenTime = new Date(expires * 1000);
  let index = token.indexOf(".");
  if (index !== -1) {
    let newToken = token.slice(0, index + 10) + "u" + token.slice(index + 10);
    cookies.set("token", newToken, { expires: expiresTokenTime, secure: true });
  }
};

export const decodeToken = (token: string) => {
  let originalToken = token.indexOf(".");
  if (originalToken !== -1) {
    let newToken =
      token.slice(0, originalToken + 10) + token.slice(originalToken + 11);
    return newToken;
  }
};
