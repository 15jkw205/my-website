# CloudFlare Configuration & Security Guide

This document provides comprehensive CloudFlare configuration and security recommendations for your portfolio website.

## Table of Contents
1. [CloudFlare Pages Setup](#cloudflare-pages-setup)
2. [Security Configuration](#security-configuration)
3. [Performance Optimization](#performance-optimization)
4. [DNS Configuration](#dns-configuration)
5. [Monitoring & Analytics](#monitoring--analytics)

---

## CloudFlare Pages Setup

### Initial Deployment

1. **Connect GitHub Repository**
   - Go to CloudFlare Dashboard → Pages
   - Click "Create a project" → "Connect to Git"
   - Select your repository: `my-website`
   - Branch: `main` or `development`

2. **Build Configuration**
   ```
   Build command: npm run build
   Build output directory: out
   Root directory: /
   ```

3. **Environment Variables**
   ```
   NODE_VERSION=20
   ```

### Custom Domain Setup

1. **Add Custom Domain**
   - Pages → Your Project → Custom domains
   - Add `jakobwest.com` and `www.jakobwest.com`
   - CloudFlare will automatically configure DNS

2. **SSL/TLS Settings**
   - Go to SSL/TLS → Overview
   - Set encryption mode to: **Full (strict)**
   - Enable "Always Use HTTPS"
   - Enable "Automatic HTTPS Rewrites"

---

## Security Configuration

### 1. SSL/TLS Security

**Navigate to: SSL/TLS**

- **Encryption Mode**: Full (strict)
- **Minimum TLS Version**: TLS 1.2 or higher (recommended: TLS 1.3)
- **TLS 1.3**: Enabled
- **Opportunistic Encryption**: Enabled
- **Onion Routing**: Enabled (optional, for Tor users)

**Edge Certificates:**
- **Always Use HTTPS**: ✅ Enabled
- **HTTP Strict Transport Security (HSTS)**: ✅ Enabled
  - Max Age: 6 months (15768000 seconds)
  - Include subdomains: ✅
  - Preload: ✅
  - No-Sniff header: ✅
- **Automatic HTTPS Rewrites**: ✅ Enabled
- **Certificate Transparency Monitoring**: ✅ Enabled

### 2. Firewall Rules

**Navigate to: Security → WAF**

**Recommended Firewall Rules:**

1. **Block Known Bots and Threats**
   ```
   (cf.threat_score gt 10)
   Action: Block
   ```

2. **Rate Limiting for API Protection** (if you add APIs later)
   ```
   (http.request.uri.path contains "/api/")
   Rate: 100 requests per minute
   Action: Block
   ```

3. **Geo-blocking** (optional - only if needed)
   ```
   (ip.geoip.country in {"CN" "RU"})
   Action: Challenge or Block
   ```

4. **Block SQL Injection Attempts**
   ```
   (http.request.uri.query contains "union select" or
    http.request.uri.query contains "' or 1=1")
   Action: Block
   ```

### 3. Security Level

**Navigate to: Security → Settings**

- **Security Level**: Medium (recommended) or High for stricter security
- **Challenge Passage**: 30 minutes
- **Browser Integrity Check**: ✅ Enabled
- **Privacy Pass Support**: ✅ Enabled

### 4. DDoS Protection

**Navigate to: Security → DDoS**

- CloudFlare provides automatic DDoS protection
- **HTTP DDoS Attack Protection**: ✅ Enabled (automatic)
- **Network-layer DDoS Attack Protection**: ✅ Enabled (automatic)

### 5. Bot Protection

**Navigate to: Security → Bots**

- **Bot Fight Mode**: ✅ Enabled (Free tier)
- For more control, upgrade to Bot Management (paid)

### 6. Page Rules for Enhanced Security

**Navigate to: Rules → Page Rules**

**Rule 1: Force HTTPS**
```
URL: http://*jakobwest.com/*
Settings:
  - Always Use HTTPS: On
```

**Rule 2: Security Headers**
```
URL: *jakobwest.com/*
Settings:
  - Security Level: High
  - Cache Level: Standard
```

---

## Performance Optimization

### 1. Caching Configuration

**Navigate to: Caching → Configuration**

- **Caching Level**: Standard
- **Browser Cache TTL**: Respect Existing Headers (recommended)
- **Always Online**: ✅ Enabled
- **Development Mode**: ❌ Disabled (only enable when testing)

**Cache Rules:**

Create these custom cache rules:

1. **Cache Static Assets Aggressively**
   ```
   If: URI Path matches regex: \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$
   Then:
     - Cache Level: Cache Everything
     - Edge TTL: 1 year
     - Browser TTL: 1 year
   ```

2. **Cache HTML with Short TTL**
   ```
   If: URI Path matches: *.html or /
   Then:
     - Cache Level: Cache Everything
     - Edge TTL: 1 hour
     - Browser TTL: 5 minutes
   ```

### 2. Speed Optimizations

**Navigate to: Speed → Optimization**

- **Auto Minify**:
  - ✅ JavaScript
  - ✅ CSS
  - ✅ HTML
- **Brotli Compression**: ✅ Enabled
- **Early Hints**: ✅ Enabled
- **HTTP/2**: ✅ Enabled (automatic)
- **HTTP/3 (with QUIC)**: ✅ Enabled
- **0-RTT Connection Resumption**: ✅ Enabled
- **Rocket Loader**: ❌ Disabled (can cause issues with React)

### 3. Image Optimization

**Navigate to: Speed → Optimization → Images**

- **Polish**: Lossless (or Lossy if you want more compression)
- **WebP**: ✅ Enabled
- **Mirage**: ✅ Enabled (lazy-loading for images)

### 4. Argo Smart Routing (Paid Feature)

**Navigate to: Speed → Argo**

- Reduces latency by routing traffic through CloudFlare's fastest paths
- Cost: $5/month + $0.10 per GB

### 5. Workers (Optional - Advanced)

Create CloudFlare Workers for:
- Custom redirects
- A/B testing
- Personalization
- Additional security logic

---

## DNS Configuration

**Navigate to: DNS → Records**

### Recommended DNS Records:

1. **Root Domain (A Record or CNAME)**
   ```
   Type: A or CNAME (CloudFlare automatically handles this for Pages)
   Name: @
   Target: Your CloudFlare Pages URL
   Proxy: ✅ Proxied (orange cloud)
   ```

2. **WWW Subdomain**
   ```
   Type: CNAME
   Name: www
   Target: jakobwest.com
   Proxy: ✅ Proxied (orange cloud)
   ```

3. **Email SPF Record** (if you use email)
   ```
   Type: TXT
   Name: @
   Content: v=spf1 include:_spf.google.com ~all
   (adjust based on your email provider)
   ```

4. **DMARC Record** (email security)
   ```
   Type: TXT
   Name: _dmarc
   Content: v=DMARC1; p=quarantine; rua=mailto:jwest21@uccs.edu
   ```

### DNS Settings:

- **DNSSEC**: ✅ Enabled (enhances DNS security)
- **CNAME Flattening**: Full Setup (recommended)

---

## Monitoring & Analytics

### 1. CloudFlare Analytics

**Navigate to: Analytics & Logs → Web Analytics**

- Enable CloudFlare Web Analytics for privacy-friendly visitor tracking
- No cookies, GDPR-compliant
- Provides insights on:
  - Page views
  - Unique visitors
  - Top pages
  - Referrers
  - Geographic distribution

### 2. Security Events

**Navigate to: Security → Events**

- Monitor blocked requests
- Analyze attack patterns
- Adjust firewall rules based on threats

### 3. Performance Insights

**Navigate to: Speed → Performance**

- Review Core Web Vitals
- Identify slow-loading pages
- Monitor cache hit rates

### 4. Alerts & Notifications

**Navigate to: Notifications**

**Recommended Alerts:**
- ✅ SSL/TLS certificate expiration
- ✅ DDoS attack detection
- ✅ Secondary DNS zone changes
- ✅ Advanced DDoS attack alerts
- ✅ Firewall events rate limit alerts

---

## Additional Security Hardening

### 1. Enable Two-Factor Authentication (2FA)

**Navigate to: My Profile → Authentication**

- ✅ Enable 2FA on your CloudFlare account
- Use authenticator app (Google Authenticator, Authy, etc.)
- Save backup codes securely

### 2. API Token Security

**Navigate to: My Profile → API Tokens**

- Use API tokens instead of global API keys
- Create tokens with minimum required permissions
- Rotate tokens regularly
- Never commit tokens to Git

### 3. Access Control

**Navigate to: Security → API Shield** (Paid feature)

- Rate limiting for API endpoints
- Schema validation
- JWT validation

### 4. Audit Logs

**Navigate to: Audit Log** (Enterprise)

- Review all configuration changes
- Track user access
- Monitor suspicious activity

---

## Deployment Checklist

Before going live, ensure:

- [x] SSL/TLS is configured (Full Strict mode)
- [x] HSTS is enabled with preload
- [x] Always Use HTTPS is enabled
- [x] WAF (Web Application Firewall) rules are configured
- [x] Bot Fight Mode is enabled
- [x] Caching rules are optimized
- [x] Auto Minify is enabled
- [x] Brotli compression is enabled
- [x] DNS records are properly configured
- [x] Custom domain is connected
- [x] CloudFlare Analytics is enabled
- [x] Security alerts are configured
- [x] 2FA is enabled on your account
- [x] robots.txt and sitemap.xml are deployed

---

## Performance Testing

After deployment, test your site:

1. **Security Headers**
   - Test at: https://securityheaders.com
   - Target: A+ rating

2. **SSL/TLS Configuration**
   - Test at: https://www.ssllabs.com/ssltest/
   - Target: A+ rating

3. **Page Speed**
   - Test at: https://pagespeed.web.dev/
   - Target: 90+ for both mobile and desktop

4. **DNS Performance**
   - Test at: https://www.dnsperf.com/
   - Verify CloudFlare DNS is resolving correctly

5. **Uptime Monitoring**
   - Use services like UptimeRobot or Pingdom
   - Set up alerts for downtime

---

## Maintenance Schedule

**Weekly:**
- Review security events
- Check analytics for anomalies

**Monthly:**
- Review and update firewall rules
- Check SSL certificate status
- Review cache hit rates
- Analyze performance metrics

**Quarterly:**
- Rotate API tokens
- Review access logs
- Update security configurations
- Test disaster recovery procedures

**Annually:**
- Comprehensive security audit
- Review and renew domain registration
- Update emergency contacts

---

## Troubleshooting Common Issues

### 1. "Too Many Redirects" Error
**Solution:** Check SSL/TLS mode - should be "Full (strict)", not "Flexible"

### 2. Static Assets Not Updating
**Solution:**
- Purge CloudFlare cache: Caching → Configuration → Purge Everything
- Check cache rules for proper TTLs

### 3. 520/521/522 Errors
**Solution:**
- Verify origin server is online
- Check DNS records
- Review firewall rules that might be blocking CloudFlare IPs

### 4. Slow TTFB (Time to First Byte)
**Solution:**
- Enable Argo Smart Routing
- Review cache rules
- Enable Early Hints

---

## Additional Resources

- CloudFlare Documentation: https://developers.cloudflare.com/
- CloudFlare Community: https://community.cloudflare.com/
- CloudFlare Status: https://www.cloudflarestatus.com/
- Next.js + CloudFlare Pages: https://developers.cloudflare.com/pages/framework-guides/nextjs/

---

## Support Contacts

- CloudFlare Support: https://support.cloudflare.com/
- Emergency: dashboard.cloudflare.com (submit a ticket)

---

**Last Updated:** October 31, 2024
**Version:** 1.0
**Maintained by:** Jakob West
