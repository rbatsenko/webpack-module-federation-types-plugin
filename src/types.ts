import { container } from 'webpack';

export type FederationConfig = {
  name: string,
  exposes: Dict<string>,
}

export type CompileTypesResult = {
  isSuccess: boolean,
  typeDefinitions: string,
};

export type RemoteManifest = {
  [key: string]: unknown,
  url: string,
}

export type RemotesRegistryManifest = {
  [key: string]: unknown,
  scope: string,
  url: string,
}[];

export type RemoteEntryUrls = Dict<string>;
export type RemoteManifestUrls = Record<'registry' | string, string>;

export type ModuleFederationPluginOptions = ConstructorParameters<typeof container.ModuleFederationPlugin>[0];

export type ModuleFederationTypesPluginOptions = {
  dirEmittedTypes?: string,
  dirGlobalTypes?: string;
  dirDownloadedTypes?: string;

  disableDownladingRemoteTypes?: boolean,
  disableTypeCompilation?: boolean,
  downloadTypesWhenIdleIntervalInSeconds?: number,
  remoteEntryUrls?: RemoteEntryUrls,
  remoteManifestUrls?: RemoteManifestUrls,
  remoteManifestUrl?: string,

  cloudbedsRemoteManifestsBaseUrl?: string | /** @deprecated */ 'use-domain-name' | 'dev-ga',
}
