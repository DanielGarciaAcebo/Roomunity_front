// src/app/models/auth-response.model.ts
export interface LoginResponse {
  /** Access token to include in Authorization headers */
  accessToken: string;
  /** token to refresh the accessToken */
  refreshToken?: string;
  tokenType: 'Bearer';
  /** Number of seconds until the accessToken expires */
  expiresIn: number;
  /** Basic user data */
  user: {
    id: number | string;
    username: string;
    email: string;
    password: string;
    /** Assigned roles or permissions */
    roles?: string[];
    /** Any other fields you may need to expose */
    [key: string]: any;
  };
}
