import { loginEndPoint } from "../../constants/endPoint";
import { CredentialResponse, CredentialType } from "../../types/loginTypes";
import { ResponseType } from "../../types/resposeType";

export const login = async (
  credential: CredentialType
): Promise<CredentialResponse> => {
  try {
    let response = await fetch(
      `http://localhost:8000/authentication/api/token/`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(credential),
      }
    );
    let data: CredentialResponse = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
