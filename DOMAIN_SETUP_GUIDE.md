# Custom Domain Setup Guide - GoDaddy to Vercel

## Step 1: Buy Domain from GoDaddy
1. Go to https://godaddy.com
2. Search for your desired domain name (e.g., `mystictarotgems.in`)
3. Complete the purchase
4. Wait for domain activation (usually 5-10 minutes)

## Step 2: Add Domain in Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Click on your project: `mystic-tarot-gems`
3. Go to **Settings** tab
4. Click **Domains** in the left sidebar
5. Click **Add** button
6. Enter your domain name: `yourdomain.in`
7. Click **Add**

## Step 3: Get DNS Records from Vercel
After adding domain, Vercel will show you DNS records to add:

**Type A Record:**
- Name: `@` (or leave blank)
- Value: `76.76.19.61` (Vercel's IP)
- TTL: 3600

**Type CNAME Record:**
- Name: `www`
- Value: `cname.vercel-dns.com`
- TTL: 3600

## Step 4: Configure DNS in GoDaddy
1. Login to your GoDaddy account
2. Go to **My Products** → **All Products and Services**
3. Find your domain and click **DNS**
4. Click **Manage DNS**

### Add A Record:
1. Click **Add** button
2. Select **Type**: A
3. **Name**: @ (or leave blank)
4. **Value**: `76.76.19.61`
5. **TTL**: 1 Hour
6. Click **Save**

### Add CNAME Record:
1. Click **Add** button
2. Select **Type**: CNAME
3. **Name**: www
4. **Value**: `cname.vercel-dns.com`
5. **TTL**: 1 Hour
6. Click **Save**

### Remove Default Records (if any):
- Delete any existing A records pointing to GoDaddy parking page
- Delete any existing CNAME records for www

## Step 5: Wait for DNS Propagation
- DNS changes take 15 minutes to 24 hours to propagate
- Usually works within 1-2 hours
- You can check status at: https://dnschecker.org/

## Step 6: Verify Domain in Vercel
1. Go back to Vercel dashboard
2. Check if domain shows "Valid Configuration"
3. If not, wait more time for DNS propagation

## Step 7: Set Primary Domain (Optional)
1. In Vercel Domains section
2. Click on your custom domain
3. Click **Set as Primary**
4. This will redirect vercel.app URL to your custom domain

## Troubleshooting

### If Domain Not Working:
1. Check DNS records are correct
2. Wait more time (up to 24 hours)
3. Clear browser cache
4. Try incognito/private browsing

### If SSL Certificate Issues:
- Vercel automatically provides SSL
- May take 10-15 minutes after domain verification
- Certificate will show as "Issued" in Vercel dashboard

### Common Issues:
- **Wrong DNS records**: Double-check IP and CNAME values
- **TTL too high**: Set TTL to 1 hour (3600 seconds)
- **Cached DNS**: Use different network or wait longer

## Final Result
After successful setup:
- `yourdomain.in` → Your website
- `www.yourdomain.in` → Your website
- Both will have SSL certificate (https://)
- Old vercel.app URL will still work

## Need Help?
If any issues, share:
1. Domain name you bought
2. Screenshot of GoDaddy DNS settings
3. Screenshot of Vercel domain status