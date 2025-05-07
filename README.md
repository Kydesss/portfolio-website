# Docker Compose Setup for Multiple Services with Cloudflare Tunnel

This setup allows you to run multiple web services behind a Cloudflare Tunnel, with each service available at its own subdomain of your main domain.

## Services Included

- **Portfolio Website**: A static website served by Nginx, available at https://portfolio.joaquinpacia.com
- **Affine**: An existing service running at 192.168.2.39:3010, available at https://affine.joaquinpacia.com

## How to Use

1. Make sure Docker and Docker Compose are installed on your system.

2. Start all services:
   ```
   docker-compose up -d
   ```

3. Check if services are running:
   ```
   docker-compose ps
   ```

4. View logs:
   ```
   docker-compose logs -f
   ```

5. Stop all services:
   ```
   docker-compose down
   ```

## Adding a New Service

To add a new service:

1. Add the service to `docker-compose.yml`
2. Update the `config.yml` file to include the new service in the ingress rules
3. Add a DNS record in Cloudflare pointing the new subdomain to your tunnel

## Configuration

The Cloudflare tunnel configuration is in `config.yml`. It includes:

- Tunnel ID and token
- Ingress rules for routing traffic to different services
- A catch-all rule for handling unknown hostnames

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
