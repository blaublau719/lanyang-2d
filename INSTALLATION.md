# Visitor Counter Installation Instructions

## How to Add the Counter to Your GitHub Pages Site

### Option 1: Add to Individual Pages

1. Open the HTML file you want to add the counter to
2. Copy the entire contents of `visitor-counter.html`
3. Paste it just before the closing `</body>` tag in your HTML file
4. Save the file and commit to your GitHub repository

### Option 2: Add to a Site-Wide Template/Layout

If your GitHub Pages site uses a template engine (like Jekyll):

1. Locate your layout file (usually in `_layouts/default.html` or similar)
2. Copy the entire contents of `visitor-counter.html`
3. Paste it just before the closing `</body>` tag in the layout file
4. Save the file and commit to your GitHub repository
5. The counter will now appear on all pages that use this layout

### Option 3: Add as an Include (Jekyll sites)

1. Create a file `_includes/visitor-counter.html` in your Jekyll site
2. Copy the entire contents of `visitor-counter.html` into this file
3. In your layout file or individual pages, add: `{% include visitor-counter.html %}`
4. Save and commit to your GitHub repository

## Verification

After pushing your changes to GitHub:

1. Wait a few minutes for GitHub Pages to rebuild your site
2. Visit your site in a browser
3. You should see a small counter badge in the top-right corner
4. Refresh the page - the counter should increment

## Customization

### Change Position
Edit the CSS in the `<style>` section:
- Change `top: 10px` to adjust vertical position
- Change `right: 10px` to adjust horizontal position
- Use `left: 10px` instead of `right` to move to the left side

### Change Appearance
- Modify `background-color` for different background
- Adjust `font-size` for larger/smaller text
- Change `color` properties for different text colors

### Change Counter Text
Edit the HTML: `Visits: <span id="visit-count">0</span>`
- Change "Visits:" to any text you prefer (e.g., "Page views:", "Visitor #", etc.)
