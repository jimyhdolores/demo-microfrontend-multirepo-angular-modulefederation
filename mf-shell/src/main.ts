import { loadManifest } from '@angular-architects/module-federation';

loadManifest('http://localhost:8080/api/manifest.json')
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
