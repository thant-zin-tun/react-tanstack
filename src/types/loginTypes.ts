export interface CredentialType {
  username: string;
  password: string;
}

export interface CredentialResponse {
  access?: string;
  refresh?: string;
  detail?: string;
}
