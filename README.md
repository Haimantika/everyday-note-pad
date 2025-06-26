
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
Add the following prompt to Lovable, to help it make your app production-ready and ready to be deployed on DigitalOcean's App Platform:
```
I would like to deploy this app to production in DigitalOcean App Platform. Please help me review and make the necessary adjustments.

A few notes about DigitalOcean App Platform:
**Security**: Don't hardcode credentials in the source code. Instead, use environment variables and remind me to configure them in App Platform's environment variables section before deployment.
**Vite Configuration**: In vite.config.ts, make sure to exclude any allowedHosts restrictions so the app can accept connections from App Platform's hosts.
**Health Check**: Add a /health endpoint that returns a simple JSON response with status and timestamp for App Platform monitoring.
**Single Component**: Structure as a single web service (don't split into multiple components unless absolutely necessary).
**GitHub Ready**: Ensure the code is ready to be committed to GitHub main branch for App Platform's auto-deploy feature.
**No App Spec**: Do not create an app spec file. App Platform doesn't need one when using the console for deployment.
**No Dockerfile**: Do not create a Dockerfile. App Platform will use the Node.js buildpack to automatically build the container image.

After generating the code, please remind me to:
* Move any credentials from source code to App Platform environment variables
* Connect the GitHub repository to App Platform
* Configure the environment variables in App Platform before deployment
* Review the component type auto-detected by App Platform during deployment (change from Web Service to Static Site if building a frontend-only app)
* Add custom domain in App Platform Settings > Domains if needed (can be done during or after app creation)

Please add a section to README.md with the instructions to deploy to DigitalOcean App Platform specific to this project.
```

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
