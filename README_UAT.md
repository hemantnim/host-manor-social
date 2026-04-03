# 🚀 Host Manor: UAT Deployment Guide

Follow these steps to host the estate for User Acceptance Testing.

## 1. Frontend: Vercel (Fastest)
1. Go to [Vercel](https://vercel.com/new).
2. Import the `host-manor-social` repository.
3. **Framework Preset:** Next.js.
4. **Root Directory:** `apps/web`.
5. **Environment Variables:**
   - Add placeholders for your Supabase keys (you can fill them in Step 2).
6. Click **Deploy**.

## 2. Backend: Supabase (Data & Auth)
1. Create a project at [Supabase](https://supabase.com).
2. Go to the **SQL Editor**.
3. Copy and run the schema from `packages/database/schema.sql`.
4. Go to **Project Settings > API** and copy your:
   - `Project URL`
   - `anon public key`
5. Add these to your Vercel Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 3. Invite Testers
Once Vercel gives you a production URL (e.g., `host-manor.vercel.app`), share it with your users to begin onboarding as Individuals, Organizations, or Professionals.
