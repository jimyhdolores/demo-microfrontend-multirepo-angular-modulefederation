import { Manifest, RemoteConfig } from '@angular-architects/module-federation';

export type CustomRemoteConfig = RemoteConfig & {
  exposedModule: string;
  routePath: string;
  ngModuleName: string;
  isStandalone: boolean;
};

export type CustomManifest = Manifest<CustomRemoteConfig>;
