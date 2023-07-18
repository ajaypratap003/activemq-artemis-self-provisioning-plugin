import Jolokia, { IJolokia } from 'jolokia.js';

export interface Connection {
  name?: string;
  scheme?: string;
  host?: string;
  port?: number;
  path?: string;
  useProxy?: boolean;
  jolokiaUrl?: string;
  username?: string;
  password?: string;
  token?: string;
}

class JolokiaService {
  private connection: Connection;
  constructor(connection: Connection) {
    this.connection = connection;
  }

  /*
   * Create a Jolokia instance with given url
   */

  createJoloia(checkCredentials = false): IJolokia {
    const { jolokiaUrl, username, password } = this.connection;

    if (checkCredentials) {
      return new Jolokia({
        url: jolokiaUrl,
        method: 'post',
        mimeType: 'application/json',
        username: username,
        password: password,
      });
    }

    return new Jolokia({
      url: jolokiaUrl,
      method: 'post',
      mimeType: 'application/json',
    });
  }

  /**
   * Get the Jolokia  URL for the given connection
   */

  getJolokiaUrl(): string {
    return this.connection.jolokiaUrl;
  }

  /**
   * Set the Jolokia URL for the given connection
   */

  setJolokiaUrl(jolokiaUrl: string) {
    this.connection.jolokiaUrl = jolokiaUrl;
  }
}
