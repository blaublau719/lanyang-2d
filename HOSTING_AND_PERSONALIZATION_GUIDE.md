# 2D Portfolio Hosting & Personalization Guide

## 🚀 HOSTING PLAN (GitHub Pages via GitHub Actions)

### Prerequisites

- GitHub account
- Repository already created (✓ cloned)
- Git installed locally

### Step 1: Update Vite Configuration

**File:** `vite.config.js`

The current configuration has:

```javascript
base: "/new-2d-portfolio";
```

**Action:** Change the `base` property to match your GitHub repository name

Example: If your repo is `my-portfolio`, change to:

```javascript
base: "/my-portfolio";
```

### Step 2: Create GitHub Actions Workflow

**Location:** Create `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "./dist"

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. Save changes

### Step 4: Deploy

1. Commit and push your changes (including the workflow file)
   ```bash
   git add .
   git commit -m "Add GitHub Actions deployment workflow"
   git push origin main
   ```
2. Go to **Actions** tab in your repository
3. The workflow should trigger automatically
4. Once complete, your site will be live at: `https://[username].github.io/[repo-name]/`

---

## 🎨 PERSONALIZATION PLAN

### 1. General Information

**File:** `public/configs/generalData.json`

Current content:

```json
{
  "header": {
    "title": "Hi, I'm JSLegendDev!",
    "subtitle": "A creative software developer"
  },
  "section1Name": "About",
  "section2Name": "Skills",
  "section3Name": "Work Experience",
  "section4Name": "Projects"
}
```

**Update:**

- `title`: Your name/brand
- `subtitle`: Your tagline/description
- Section names: Customize section titles as needed

### 2. Skills

**File:** `public/configs/skillsData.json`

Structure:

```json
[
  {
    "pos": { "x": 100, "y": 200 },
    "name": "html"
  }
]
```

**Actions:**

- Add/remove skill entries
- Update skill names (must match logo filenames)
- Adjust `pos` coordinates for positioning in the game world
- Replace logo images in `public/logos/` with your tech stack logos

**Available logo files:**

- `css-logo.png`
- `html-logo.png`
- `js-logo.png`
- `ts-logo.png`
- `react-logo.png`
- `nextjs-logo.png`
- `python-logo.png`
- `postgres-logo.png`
- `tailwind-logo.png`

### 3. Work Experience

**File:** `public/configs/experiencesData.json`

Structure:

```json
[
  {
    "pos": { "x": 0, "y": 300 },
    "company": "Company Name",
    "role": "Your Role",
    "startDate": "Jan 2020",
    "endDate": "Present",
    "description": "Job responsibilities and achievements"
  }
]
```

**Update each experience entry:**

- `company`: Company name
- `role`: Your job title
- `startDate` & `endDate`: Employment dates
- `description`: Job responsibilities/achievements
- `pos`: Position in the game world (x, y coordinates)

### 4. Projects

**File:** `public/configs/projectsData.json`

Current structure:

```json
[
  {
    "pos": { "x": 0, "y": 350 },
    "thumbnail": "sonic-js",
    "data": {
      "title": "JavaScript Sonic Themed Infinite Runner Game",
      "links": [
        {
          "id": 0,
          "name": "Live Demo",
          "link": "https://example.com"
        },
        {
          "id": 1,
          "name": "Source Code",
          "link": "https://github.com/username/repo"
        }
      ]
    }
  }
]
```

**For each project:**

- `title`: Project name and description
- `thumbnail`: Image filename (without extension)
- `links`: Array of links (Live Demo, Source Code, Documentation, etc.)
- `pos`: Position coordinates in the game world

**Add project images:**

- Place PNG images in `public/projects/`
- Reference them by filename (without extension) in the JSON
- Current examples: `sonic-js.png`, `kirby-ts.png`, `platformer-js.png`

### 5. Social Links

**File:** `public/configs/socialsData.json`

Structure:

```json
[
  {
    "pos": { "x": 100, "y": 200 },
    "name": "github",
    "link": "https://github.com/yourusername"
  }
]
```

**Update your social media profiles:**

- GitHub
- LinkedIn
- Twitter/X
- YouTube
- Substack
- Email

**Available social icons:**

- `github-logo.png`
- `linkedin-logo.png`
- `x-logo.png`
- `youtube-logo.png`
- `substack-logo.png`
- `email-logo.png`

### 6. Visual Customization

#### Player Character

**File:** `public/sprites/player.png`

- Replace with your custom sprite
- Must be 8-directional sprite sheet format
- Current sprite is a modified version from: https://gibbongl.itch.io/8-directional-gameboy-character-template

#### Styling

**File:** `style.css`

Customize:

- Global styles
- Color scheme
- Typography
- Layout properties

#### Fonts

**Location:** `public/fonts/`

Current fonts:

- `IBMPlexSans-Bold.ttf`
- `IBMPlexSans-Regular.ttf`

Replace with your preferred fonts and update CSS accordingly.

#### Game Constants

**File:** `src/constants.js`

Adjust game mechanics:

- Player speed
- Camera settings
- Scale factors
- Interaction distances

### 7. Content Sections

**About Section:**

- Modify in React components if needed
- Check `src/ReactUI.jsx` for UI structure
- Update modal content and styling

---

## 📋 PERSONALIZATION CHECKLIST

### Hosting Setup

- [ ] Update `vite.config.js` base path to match repository name
- [ ] Create `.github/workflows/deploy.yml` file
- [ ] Push changes to GitHub
- [ ] Configure GitHub Pages settings (Settings → Pages → GitHub Actions)
- [ ] Verify deployment in Actions tab

### Content Updates

- [ ] Update `public/configs/generalData.json` with your info
- [ ] Replace skills in `public/configs/skillsData.json`
- [ ] Add work experience to `public/configs/experiencesData.json`
- [ ] Update projects in `public/configs/projectsData.json`
- [ ] Add project thumbnails to `public/projects/`
- [ ] Update social links in `public/configs/socialsData.json`

### Visual Customization

- [ ] Replace skill logos in `public/logos/` (if needed)
- [ ] Add custom project images to `public/projects/`
- [ ] (Optional) Replace player sprite in `public/sprites/player.png`
- [ ] (Optional) Customize colors and fonts in `style.css`
- [ ] (Optional) Replace fonts in `public/fonts/`

### Testing

- [ ] Test locally with `npm run dev`
- [ ] Build test with `npm run build` and `npm run preview`
- [ ] Verify all links work
- [ ] Check responsive design
- [ ] Test on different browsers

---

## 🧪 LOCAL TESTING

### Development Mode

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to preview changes.

### Build Test

```bash
npm run build
npm run preview
```

This simulates the production build locally.

---

## 📦 TECH STACK

This portfolio uses:

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Kaplay** - 2D game engine (formerly Kaboom.js)
- **Framer Motion** - Animation library
- **Jotai** - State management

---

## 🎮 GAME CONTROLS

- **Arrow Keys** or **WASD**: Move character
- **Click on icons**: Interact with sections
- **ESC**: Close modals

---

## 📝 TIPS

1. **Positioning**: The `pos` coordinates in JSON files determine where elements appear in the game world. Adjust these to create your desired layout.

2. **Images**: All images should be optimized for web (compressed PNG/JPG). Keep file sizes reasonable for faster loading.

3. **Testing**: Always test locally before deploying. Use `npm run dev` for quick iterations.

4. **Git Workflow**:

   - Make changes locally
   - Test thoroughly
   - Commit and push to trigger automatic deployment

5. **Troubleshooting**: If deployment fails, check the Actions tab on GitHub for error logs.

6. **Custom Domain**: You can add a custom domain in GitHub Pages settings after initial deployment.

---

## 🔗 USEFUL LINKS

- [Vite Documentation](https://vitejs.dev/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Kaplay Documentation](https://kaplayjs.com/)
- [React Documentation](https://react.dev/)

---

## 📄 LICENSE

Check the original repository for license information before deploying your customized version.

---

**Good luck with your 2D portfolio! 🚀**
