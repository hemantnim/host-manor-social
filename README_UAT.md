# 🚀 Host Manor: UAT Deployment Guide (AWS)

Follow these steps to host the estate on Amazon Web Services for User Acceptance Testing.

## 1. Frontend: AWS Amplify (Recommended)
AWS Amplify provides the fastest way to host Next.js apps with CI/CD.

1. Log in to the [AWS Amplify Console](https://console.aws.amazon.com/amplify).
2. Click **New App > Host web app**.
3. Select **GitHub** and connect your `host-manor-social` repository.
4. **App Settings:**
   - **App Name:** `host-manor-social`
   - **Environment:** `uat`
   - **Root Directory:** `apps/web`
5. **Build Settings:** Amplify should auto-detect Next.js. Ensure the build command is `npm run build` and the base directory is `.next`.
6. **Environment Variables:**
   - Click 'Manage variables' and add your Supabase keys:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
7. Click **Save and Deploy**.

## 2. Backend: Supabase (Managed PostgreSQL)
Supabase remains the best companion for AWS for rapid MVP development.

1. Create a project at [Supabase](https://supabase.com).
2. Run the SQL schema from `packages/database/schema.sql` in the Supabase SQL Editor.
3. Copy the API URL and Public Key into the AWS Amplify environment variables (Step 1.6).

## 3. Custom Domain (Optional)
If you have a Route53 domain, you can easily point it to your Amplify UAT estate in the **Domain Management** section of the Amplify console.
