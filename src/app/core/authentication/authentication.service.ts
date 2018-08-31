import { Injectable } from '@angular/core';
import { Observable ,  of } from 'rxjs';

export interface Credentials {
  // Customize received credentials here
  username: string;
  token: string;
}
export interface JWTKey {
  // Customize received credentials here
  key: string;

}

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}
export interface JWTContext {
  key: string;
}

const credentialsKey = 'credentials';
const JWTKey = 'JWT';

/**
 * Provides a base for authentication workflow.
 * The Credentials interface as well as login/logout methods should be replaced with proper implementation.
 */
@Injectable()
export class AuthenticationService {

  private _credentials: Credentials | null;
  private _JWT: JWTKey | null;

  constructor() {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    }
  }

  /**
   * Authenticates the user.
   * @param {LoginContext} context The login parameters.
   * @return {Observable<Credentials>} The user credentials.
   */
  login(context: LoginContext): Observable<Credentials> {
    // Replace by proper authentication call
    const data = {
      username: context.username,
      token: '123456'
    };
    this.setCredentials(data, context.remember);
    return of(data);

  }
  /**
   * Authenticates the user using JWT.
   * @param {JWTContext} context The login parameters.
   * @return {Observable<Credentials>} The user credentials.
   */
  saveJWT(context: JWTContext): Observable<JWTContext> {
    // Replace by proper authentication call
    const storage = localStorage;
    this._JWT = {'key': context.key};
    storage.setItem('JWT', context.key);
    return of(context);
  }


  getJWT(): Observable<string> {
    // Replace by proper authentication call
    const storage = localStorage;
    let key = storage.getItem(JWTKey) || null;
    return of(key);
  }


  /**
   * Logs out the user and clear credentials.
   * @return {Observable<boolean>} True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.setCredentials();
    return of(true);
  }

  /**
   * Checks is the user is authenticated.
   * @return {boolean} True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    return !!this.credentials || !!this.getJWT();
  }

  /**
   * Gets the user credentials.
   * @return {Credentials} The user credentials or null if the user is not authenticated.
   */
  get credentials(): Credentials | null {
    return this._credentials;
  }

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param {Credentials=} credentials The user credentials.
   * @param {boolean=} remember True to remember credentials across sessions.
   */
  private setCredentials(credentials?: Credentials, remember?: boolean) {
    this._credentials = credentials || null;

    if (credentials) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      sessionStorage.removeItem(credentialsKey);
      localStorage.removeItem(credentialsKey);
    }
  }

}
