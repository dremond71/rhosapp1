import {RhOpenShiftApp1} from './application';
import {ApplicationConfig} from '@loopback/core';

export {RhOpenShiftApp1};

export async function main(options: ApplicationConfig = {}) {
  const app = new RhOpenShiftApp1(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
