// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/lalpha/.config/yarn/global/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.js').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.js').default
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('@/pages/login/index.js').default
      },
      {
        "path": "/welcome",
        "exact": true,
        "component": require('@/pages/welcome/index.js').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
