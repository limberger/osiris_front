# Osiris Frontend

Frontend for the OSIRIS home automation and access control system.

## Deployment

The frontend is deployed on Vercel with automatic previews for pull requests and continuous production deployments.

### Vercel Setup

The project is already configured in Vercel with:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite

### Environment Variables

Environment variables are configured in Vercel project settings. For local development, copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Then update the values to match your environment:

- `VITE_API_URL`: Backend API endpoint (e.g., `https://api.example.com`)
- `VITE_WS_URL`: WebSocket server endpoint (e.g., `wss://ws.example.com`)
- `OAUTH2_CLIENT_ID`: OAuth2 client ID (if using OAuth2 authentication)
- `OAUTH2_ISSUER`: OAuth2 issuer URL
- `OAUTH2_REDIRECT_URI`: OAuth2 redirect URI after login

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` (or the URL shown in the terminal) in your browser.

### Building

To create a production build:

```bash
npm run build
```

The output will be in the `dist/` directory.

### Preview

To preview the production build locally:

```bash
npm run preview
```

## Deployment Process

### Automatic Deployments

- **Preview deployments**: Every pull request automatically triggers a preview deployment on Vercel. The URL is posted as a comment on the PR.
- **Production deployment**: Merging to the `main` branch triggers a production deployment to the main Vercel URL.

### Manual Deployment

To deploy manually via Vercel CLI:

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Deploy
vercel
```

### Custom Domain

To set up a custom domain:

1. Go to the Vercel project settings: https://vercel.com/dashboard/project/prj_eYUUjdOhgKYUctGADYqyiCh6LlQZ/settings/domains
2. Click "Add Domain"
3. Enter your domain name
4. Follow the DNS configuration instructions

## OAuth2 Integration

If the frontend handles OAuth2 login:

1. Set `OAUTH2_CLIENT_ID` in Vercel environment variables (public, safe to expose)
2. Keep `OAUTH2_CLIENT_SECRET` only in the backend (never expose in frontend)
3. The redirect URI should point to the Vercel deployment URL or your custom domain

## Monitoring

Monitor deployments and performance:

- **Deployments**: https://vercel.com/dashboard/project/prj_eYUUjdOhgKYUctGADYqyiCh6LlQZ/deployments
- **Analytics**: https://vercel.com/dashboard/project/prj_eYUUjdOhgKYUctGADYqyiCh6LlQZ/analytics
- **Speed Insights**: https://vercel.com/dashboard/project/prj_eYUUjdOhgKYUctGADYqyiCh6LlQZ/speed-insights

## Troubleshooting

### Build Fails

- Check the build logs in Vercel: Deployments → Failed deployment → Logs
- Ensure `npm run build` works locally: `npm run build`
- Verify all dependencies are installed and versions match

### Environment Variables Not Applied

- Redeploy the project after updating environment variables (Vercel doesn't automatically redeploy on env var changes)
- Check that variables are set for the correct environment (production/preview/development)

### WebSocket Connection Issues

- Ensure `VITE_WS_URL` points to the correct WebSocket server
- Check that the WebSocket server is running and accessible from the frontend domain
- Verify CORS policies on the WebSocket server allow connections from the frontend domain

## Support

For issues or questions, open an issue in the main repository: https://github.com/limberger/osiris/issues
