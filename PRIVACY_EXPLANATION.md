# Privacy-Friendly Visitor Counter - How It Works

## Overview

This visitor counter is designed to be completely privacy-friendly and GDPR-compliant. It counts page visits without tracking any personal information about visitors.

## How It Works

1. **Page Load**: When someone visits your webpage, a small JavaScript function runs automatically
2. **Read Count**: The script checks the browser's localStorage for a saved visit count
3. **Increment**: It adds 1 to the count
4. **Save**: The new count is saved back to localStorage
5. **Display**: The updated count is shown in the top-right corner

## Why This Doesn't Track Personal Data

### No Server Communication
- The counter runs entirely in the visitor's browser
- No data is sent to any server, database, or external service
- No network requests are made for counting purposes

### No Personal Information Collected
- **No IP addresses** are logged or stored
- **No cookies** are created or used
- **No device fingerprinting** or tracking technology
- **No user identification** of any kind

### LocalStorage Only
- The only data stored is a single number (the visit count)
- This is stored locally in the visitor's own browser
- Other websites cannot access this data
- The visitor can clear it anytime by clearing browser data

### No Unique Visitor Tracking
- The counter doesn't distinguish between different visitors
- It simply counts every page load, regardless of who loads it
- The same person visiting multiple times will increment the count each time
- This is intentional - we're counting visits, not tracking visitors

## GDPR Compliance

This implementation is GDPR-compliant because:

1. **No Personal Data**: It doesn't process any personal data as defined by GDPR
2. **No Consent Required**: Since no personal data is collected, no consent banner is needed
3. **Data Minimization**: Only stores a single integer, nothing more
4. **Transparency**: The counter is visible, not hidden
5. **User Control**: Users can clear localStorage themselves anytime

## Technical Details

- **Storage**: Uses browser's localStorage API (falls back to session-only if unavailable)
- **Persistence**: Count persists across page refreshes and browser sessions
- **Per-Browser**: Each browser on each device maintains its own count
- **Privacy Mode**: Automatically falls back to session-only counting if localStorage is blocked

## What Visitors See

Visitors simply see a small badge in the top-right corner showing:
```
Visits: [number]
```

This number represents how many times pages have been loaded in their specific browser, not a global visitor count across all users.

## Limitations

- **Not a True Analytics Tool**: This counter doesn't provide website-wide statistics
- **Browser-Specific**: Each browser shows its own count
- **Can Be Reset**: Users can clear their localStorage to reset the count
- **No Cross-Device Sync**: Counts don't transfer between devices

These "limitations" are actually features that preserve privacy!
