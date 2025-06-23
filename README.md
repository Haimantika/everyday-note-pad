
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/85a77c2e-cf4d-47be-b88b-94731f098051

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/85a77c2e-cf4d-47be-b88b-94731f098051) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/85a77c2e-cf4d-47be-b88b-94731f098051) and click on Share -> Publish.

## Deploying to DigitalOcean App Platform

This project is configured for deployment on DigitalOcean App Platform. Follow these steps:

### Prerequisites
1. Push your code to a GitHub repository
2. Have a DigitalOcean account

### Deployment Steps

1. **Connect GitHub Repository**
   - Log in to your DigitalOcean account
   - Go to App Platform
   - Click "Create App"
   - Choose "GitHub" as your source
   - Connect and authorize your GitHub account if not already done
   - Select your repository and branch (usually `main`)

2. **Configure Build Settings**
   - App Platform should auto-detect this as a Node.js app
   - **Important**: Change the component type from "Web Service" to "Static Site" since this is a frontend-only app
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Node.js Version: 18.x or later

3. **Environment Variables** (if needed in future)
   - Go to Settings > Environment Variables
   - Add any environment variables your app might need
   - Currently, this app doesn't require any environment variables as it uses localStorage

4. **Health Check**
   - The app includes a health check endpoint at `/health`
   - App Platform will automatically detect and use this for monitoring

5. **Custom Domain** (optional)
   - After deployment, go to Settings > Domains
   - Add your custom domain and configure DNS

### Build Configuration
The app is pre-configured with:
- Vite build optimization for production
- Health check endpoint at `/health`
- Proper host configuration for App Platform
- Static file serving setup

### Important Notes
- This is a frontend-only application that uses localStorage for data persistence
- No backend services or databases are required
- The app will be served as a static site from DigitalOcean's CDN
- All data is stored locally in the user's browser

### Monitoring
- Health check available at: `https://your-app-url/health`
- Returns JSON with status, service name, and timestamp

For more information about DigitalOcean App Platform, visit: https://docs.digitalocean.com/products/app-platform/

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
