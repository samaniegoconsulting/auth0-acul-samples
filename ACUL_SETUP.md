# Auth0 ACUL Configuration Guide

This guide explains how to apply `settings.json` configuration to Auth0 ACUL (Advanced Customizations for Universal Login).

## Prerequisites

Before applying ACUL configuration, ensure you have:

- **Auth0 Enterprise plan** with ACUL access
- **Verified custom domain** configured in your Auth0 tenant
- **Auth0 CLI** installed and authenticated
- **Built assets** deployed and accessible via CDN
- **settings.json** file with proper configuration

## Installation

### 1. Install Auth0 CLI

```bash
npm install -g @auth0/auth0-cli
```

### 2. Login to Auth0

```bash
auth0 login
```

This will open your browser to authenticate with your Auth0 account.

## Command Syntax

The command to apply `settings.json` configuration to ACUL is:

```bash
auth0 ul customize --rendering-mode advanced --prompt <prompt-name> --screen <screen-name> --settings ./settings.json
```

### Parameters

- `--rendering-mode advanced` - Specifies ACUL (Advanced Customizations for Universal Login)
- `--prompt <prompt-name>` - The Auth0 prompt (e.g., `login-id`, `login-password`, `login`)
- `--screen <screen-name>` - The specific screen name (e.g., `login-id`, `login-password`, `login`)
- `--settings ./settings.json` - Path to your settings configuration file

## Example Commands

### Login Screen

```bash
auth0 ul customize --rendering-mode advanced --prompt login --screen login --settings ./settings.json
```

### Login ID Screen

```bash
auth0 ul customize --rendering-mode advanced --prompt login-id --screen login-id --settings ./settings.json
```

### Login Password Screen

```bash
auth0 ul customize --rendering-mode advanced --prompt login-password --screen login-password --settings ./settings.json
```

### Signup Screen

```bash
auth0 ul customize --rendering-mode advanced --prompt signup --screen signup --settings ./settings.json
```

## Settings.json Structure

Your `settings.json` file should contain the ACUL payload configuration that references your built assets:

```json
{
  "rendering_mode": "advanced",
  "context_configuration": [
    "branding.settings",
    "branding.themes.default",
    "screen.texts"
  ],
  "default_head_tags_disabled": false,
  "head_tags": [
    {
      "tag": "base",
      "attributes": {
        "href": "https://your-cdn-domain.com/"
      }
    },
    {
      "tag": "meta",
      "attributes": {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }
    },
    {
      "tag": "link",
      "attributes": {
        "rel": "stylesheet",
        "href": "https://your-cdn-domain.com/assets/shared/style.[hash].css"
      }
    },
    {
      "tag": "script",
      "attributes": {
        "src": "https://your-cdn-domain.com/assets/main.[hash].js",
        "type": "module"
      }
    },
    {
      "tag": "script",
      "attributes": {
        "src": "https://your-cdn-domain.com/assets/shared/common.[hash].js",
        "type": "module"
      }
    },
    {
      "tag": "script",
      "attributes": {
        "src": "https://your-cdn-domain.com/assets/shared/vendor.[hash].js",
        "type": "module"
      }
    },
    {
      "tag": "script",
      "attributes": {
        "src": "https://your-cdn-domain.com/assets/login-id/index.[hash].js",
        "type": "module"
      }
    }
  ]
}
```

## Build and Deploy Assets

Before applying the configuration, you need to build and deploy your assets:

### 1. Build the Project

```bash
npm run build
```

This creates optimized assets in the `dist/` directory.

### 2. Deploy Assets

Deploy the `dist/` directory to your CDN or hosting service. The assets should be accessible via HTTPS.

### 3. Update Settings.json

Update your `settings.json` file with the correct URLs and hashed filenames from your deployed assets.

## Available Prompts and Screens

Based on the project structure, the following prompts and screens are available:

### Authentication Screens

- `login` - Main login screen
- `login-id` - Username/email input screen
- `login-password` - Password input screen
- `signup` - User registration screen
- `signup-id` - Registration identifier screen
- `signup-password` - Registration password screen

### Password Reset Screens

- `reset-password` - Password reset main screen
- `reset-password-email` - Email input for password reset
- `reset-password-request` - Password reset request screen
- `reset-password-success` - Password reset success screen
- `reset-password-error` - Password reset error screen

### MFA Screens

- `mfa-login-options` - MFA login options
- `mfa-begin-enroll-options` - MFA enrollment options
- `mfa-email-challenge` - Email MFA challenge
- `mfa-sms-challenge` - SMS MFA challenge
- `mfa-otp-challenge` - OTP MFA challenge
- `mfa-push-challenge-push` - Push notification MFA challenge

### Other Screens

- `consent` - Application consent screen
- `logout` - Logout screen
- `logout-complete` - Logout completion screen
- `organization-picker` - Organization selection screen

## Troubleshooting

### Common Issues

#### "Command not found: auth0"

- Ensure Auth0 CLI is installed: `npm install -g @auth0/auth0-cli`
- Check your PATH environment variable

#### "Authentication required"

- Run `auth0 login` to authenticate with your Auth0 account

#### "ACUL not available"

- Verify you have an Auth0 Enterprise plan
- Ensure ACUL feature is enabled for your tenant
- Check that you have a verified custom domain

#### "Invalid settings file"

- Verify your `settings.json` is valid JSON
- Check that all asset URLs are accessible
- Ensure all referenced files exist

#### "Assets not loading"

- Verify all asset URLs in `settings.json` are correct
- Check that assets are accessible via HTTPS
- Ensure CORS is properly configured on your CDN

### Verification

After applying the configuration:

1. **Check Auth0 Dashboard**:
   - Go to **Branding > Universal Login**
   - Verify your custom screen is active

2. **Test the Login Flow**:
   - Navigate to your application's login URL
   - Verify the custom screen loads correctly
   - Test the authentication flow

3. **Check Browser Console**:
   - Look for any JavaScript errors
   - Verify all assets are loading correctly

## Security Considerations

- **HTTPS Only**: Ensure all asset URLs use HTTPS
- **CORS Configuration**: Configure your CDN to allow Auth0 domains
- **Asset Integrity**: Consider using SRI (Subresource Integrity) hashes
- **Access Control**: Ensure your CDN assets are publicly accessible

## Rollback

To revert to the default Auth0 Universal Login:

```bash
auth0 ul customize --rendering-mode hosted --prompt <prompt-name> --screen <screen-name>
```

## Additional Resources

- [Auth0 ACUL Documentation](https://auth0.com/docs/customize/login-pages/advanced-customizations)
- [Auth0 CLI Documentation](https://auth0.com/docs/cli)
- [Universal Login Customization](https://auth0.com/docs/customize/universal-login-pages)
- [Auth0 Management API](https://auth0.com/docs/api/management/v2)

## Support

- **Auth0 Community**: [https://community.auth0.com/](https://community.auth0.com/)
- **Auth0 Documentation**: [https://auth0.com/docs/](https://auth0.com/docs/)
- **Enterprise Support**: Available through your Auth0 Enterprise plan
