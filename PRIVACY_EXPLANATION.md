# Global Visitor Counter - How It Works

## Overview

This visitor counter displays a **global count** that all visitors see. It uses CounterAPI, a third-party service, to maintain a centralized counter.

## How It Works

1. **Page Load**: When someone visits your webpage, a small JavaScript function runs automatically
2. **API Call**: The script sends a request to CounterAPI's `/up` endpoint
3. **Increment**: CounterAPI increments the global counter by 1
4. **Response**: CounterAPI returns the new total count
5. **Display**: The updated count is shown in the top-right corner

## What Data Is Collected

### By This Implementation
- **Nothing**: Your JavaScript code doesn't collect any personal data
- **No cookies**: No cookies are set by your code
- **No IP logging**: Your code doesn't log or store IP addresses

### By CounterAPI (Third-Party Service)
CounterAPI may collect:
- **Request metadata**: IP addresses, timestamps, user agents (standard web server logs)
- **Counter values**: The number of requests to your counter endpoint

**Important**: Check CounterAPI's privacy policy at their website for full details on their data handling practices.

## Privacy Considerations

### What This Counter Does NOT Do
- ❌ Does not identify individual users
- ❌ Does not use cookies
- ❌ Does not track user behavior across sites
- ❌ Does not create user profiles
- ❌ Does not share data with advertisers

### What Happens Behind the Scenes
- ✅ CounterAPI receives an HTTP request when someone visits your page
- ✅ CounterAPI may log the request (IP address, timestamp) in their server logs
- ✅ CounterAPI increments a number and sends it back
- ✅ This is similar to loading any external resource (image, font, script)

## GDPR Compliance

### Risk Assessment
Using CounterAPI involves sending data to a third-party service, which means:

1. **Minimal Personal Data**: Only technical data (IP address) is transmitted as part of normal HTTP requests
2. **Legitimate Interest**: Counting website visits is generally considered a legitimate interest
3. **Third-Party Processor**: CounterAPI acts as a data processor

### Recommendations for GDPR Compliance
- **Privacy Policy**: Mention the use of CounterAPI in your privacy policy
- **Consent** (optional): While likely not required for simple visit counting, you may choose to:
  - Add a cookie/privacy consent banner
  - Only load the counter after user consent
- **Review CounterAPI's Terms**: Check their data processing agreement and privacy policy

## Technical Details

- **Service**: CounterAPI (https://counterapi.dev)
- **API Endpoint**: `https://api.counterapi.dev/v2/lan-yangs-team-2779/pp-visitors/up`
- **Method**: HTTP GET request with optional Bearer token authentication
- **Response**: JSON object containing the current count
- **Fallback**: Shows "---" if API is unavailable

## What Visitors See

All visitors see the same badge in the top-right corner:
```
Visits: [global count]
```

This number represents the **total number of page loads** across all visitors, all devices, all time.

## Advantages

- ✅ True global counter - everyone sees the same number
- ✅ No database setup required
- ✅ No backend server needed
- ✅ Simple API integration
- ✅ Free tier available

## Limitations

- ⚠️ Relies on a third-party service (CounterAPI must be online)
- ⚠️ Counts page loads, not unique visitors
- ⚠️ Can be incremented by refreshing the page
- ⚠️ Subject to CounterAPI's rate limits and terms of service
- ⚠️ Minimal data is sent to a third party (HTTP request metadata)
