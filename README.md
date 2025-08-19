# Emergency Robotics — GitHub Pages Starter (for **Gormican**)

This repository publishes **www.emergency-robotics.com** via **GitHub Pages** on the `Gormican` account.
A `CNAME` file is already included and set to `www.emergency-robotics.com`.

## Publish on GitHub Pages
1. On GitHub (logged in as **Gormican**), create a **new public repo** (e.g., `emergency-robotics-site`).
2. Upload all files from this folder (keep the structure).
3. **Settings ▸ Pages ▸ Build and deployment ▸ Source: Deploy from a branch**.  
   Select branch: `main` (or `master`), folder: `/ (root)`, then **Save**.
4. In **Settings ▸ Pages**, confirm the custom domain shows `www.emergency-robotics.com` from the included `CNAME`.  
   When available, tick **Enforce HTTPS**.

## GoDaddy DNS — use these exact values
Add/confirm the following DNS records at GoDaddy for **emergency-robotics.com**:

- CNAME  | Host: `www`  | Points to: `gormican.github.io`
- A      | Host: `@`    | Points to: `185.199.108.153`
- A      | Host: `@`    | Points to: `185.199.109.153`
- A      | Host: `@`    | Points to: `185.199.110.153`
- A      | Host: `@`    | Points to: `185.199.111.153`

(Optional IPv6 records)
- AAAA   | Host: `@`    | `2606:50c0:8000::153`
- AAAA   | Host: `@`    | `2606:50c0:8001::153`
- AAAA   | Host: `@`    | `2606:50c0:8002::153`
- AAAA   | Host: `@`    | `2606:50c0:8003::153`

> Tip: Once DNS propagates and the site is live, test both `https://emergency-robotics.com` and `https://www.emergency-robotics.com`. GitHub Pages will redirect to the `www` canonical domain.

## Editing the Site
- Edit `index.html` and `styles.css` directly in GitHub or locally, then commit/push.  
- The PDF is in `assets/Emergency-Robotics.pdf` and is linked from the homepage button.

— Generated for Steve (Gormican)
