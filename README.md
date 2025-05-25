# bash

A developer portfolio presented in a sleek, ubuntu terminal-inspired interface.

Link for my bash portfolio: https://bash.5war00p.dev/

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev -- --open

# to expose server to our network
pnpm dev --host
```

## Building

To create a production version of your app:

```bash
pnpm build
```

You can preview the production build with `npm run preview`.

## Deploying

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment and update `svelete.config.js`.

Also, the `*.json` files in `src/lib/data` are gitignored, create your own file as per the typescript schema give in respective `src/lib/data/*.ts` files.

