// src/utils/manifest.ts

import { Manifest } from 'stremio-addon-sdk';
import pkg from '../../package.json';
import { Source } from '../types';
import sources from '../sources';
import { Config } from '../types';

export function buildManifest(config: Config): Manifest {
  const manifest: Manifest = {
    id: pkg.name,
    version: pkg.version,
    name: pkg.displayName || pkg.name,
    description: pkg.description,
    resources: ['stream'],
    types: ['movie', 'series'],
    catalogs: [],
    idPrefixes: ['tt'],
    behaviorHints: {
      p2p: false,
      configurable: true,
      configurationRequired: false,
    },
    config: [] as any[],
  };

  // === per-source toggles ===
  // for each handler in your sources array, expose a checkbox
  for (const handler of sources) {
    manifest.config.push({
      key: handler.id,
      type: 'checkbox',
      title: handler.label,
      ...(handler.id in config && { default: 'checked' }),
    });
  }

  // includeExternalUrls toggle
  manifest.config.push({
    key: 'includeExternalUrls',
    type: 'checkbox',
    title: 'Include external URLs in results',
    ...(config.includeExternalUrls && { default: 'checked' }),
  });

  // mediaFlow proxy URL textbox
  manifest.config.push({
    key: 'mediaFlowProxyUrl',
    type: 'text',
    title: 'MediaFlow Proxy URL',
    default: config.mediaFlowProxyUrl || '',
  });

  // mediaFlow proxy password textbox
  manifest.config.push({
    key: 'mediaFlowProxyPassword',
    type: 'password',
    title: 'MediaFlow Proxy Password',
    default: config.mediaFlowProxyPassword || '',
  });

  return manifest;
}
