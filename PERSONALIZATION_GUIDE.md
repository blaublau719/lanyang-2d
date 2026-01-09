# Portfolio Personalization Guide

This guide will walk you through personalizing each section of your 2D portfolio. All configuration files are located in the `public/configs/` directory.

---

## 📝 Table of Contents

1. [General Information (Header & Sections)](#1-general-information)
2. [Skills Section](#2-skills-section)
3. [Work Experience Section](#3-work-experience-section)
4. [Projects Section](#4-projects-section)
5. [Social Links Section](#5-social-links-section)
6. [Testing Your Changes](#6-testing-your-changes)

---

## 1. General Information

**File:** `public/configs/generalData.json`

This file controls your portfolio header and section names.

### Current Structure:

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

### How to Personalize:

1. **Update your name and tagline:**

   ```json
   {
     "header": {
       "title": "Hi, I'm Lan Yang!",
       "subtitle": "Full-Stack Developer & Creative Problem Solver"
     },
     "section1Name": "About",
     "section2Name": "Skills",
     "section3Name": "Work Experience",
     "section4Name": "Projects"
   }
   ```

2. **Customize section names (optional):**
   ```json
   {
     "header": {
       "title": "Hi, I'm Lan Yang!",
       "subtitle": "Full-Stack Developer"
     },
     "section1Name": "About Me",
     "section2Name": "Tech Stack",
     "section3Name": "Experience",
     "section4Name": "My Projects"
   }
   ```

### Tips:

- Keep the title concise and friendly
- The subtitle should describe what you do in 3-7 words
- Section names appear as labels in the game world

---

## 2. Skills Section

**File:** `public/configs/skillsData.json`

This file defines your technical skills and their positions in the game world.

### Current Structure:

```json
[
  {
    "pos": { "x": 0, "y": 0 },
    "name": "JavaScript",
    "logoData": {
      "name": "javascript-logo",
      "width": 128,
      "height": 128
    }
  }
]
```

### How to Personalize:

#### Step 1: Choose Your Skills

Available logos in `public/logos/`:

- `javascript-logo` (js-logo.png)
- `typescript-logo` (ts-logo.png)
- `react-logo` (react-logo.png)
- `nextjs-logo` (nextjs-logo.png)
- `html-logo` (html-logo.png)
- `css-logo` (css-logo.png)
- `tailwind-logo` (tailwind-logo.png)
- `python-logo` (python-logo.png)
- `postgres-logo` (postgres-logo.png)

#### Step 2: Update the JSON

Example with your own skills:

```json
[
  {
    "pos": { "x": 0, "y": 0 },
    "name": "JavaScript",
    "logoData": {
      "name": "javascript-logo",
      "width": 128,
      "height": 128
    }
  },
  {
    "pos": { "x": -200, "y": 0 },
    "name": "Python",
    "logoData": {
      "name": "python-logo",
      "width": 128,
      "height": 128
    }
  },
  {
    "pos": { "x": 0, "y": -200 },
    "name": "React",
    "logoData": {
      "name": "react-logo",
      "width": 148,
      "height": 128
    }
  }
]
```

#### Step 3: Understanding Positioning

The `pos` coordinates determine where skills appear in the game:

- `x`: Horizontal position (negative = left, positive = right)
- `y`: Vertical position (negative = up, positive = down)
- Center is `{ "x": 0, "y": 0 }`

**Layout Example:**

```
(-200, -200)    (0, -200)    (200, -200)
     HTML         React         CSS

(-200, 0)       (0, 0)        (200, 0)
  TypeScript   JavaScript    Next.js

(-200, 200)     (0, 200)     (200, 200)
   Python      PostgreSQL    Tailwind
```

#### Step 4: Adding Custom Skill Logos

If you want to add skills not in the default list:

1. **Add your logo image:**

   - Place a PNG file in `public/logos/`
   - Name it descriptively (e.g., `vue-logo.png`)
   - Recommended size: 128x128 pixels

2. **Reference it in the JSON:**
   ```json
   {
     "pos": { "x": 200, "y": 0 },
     "name": "Vue.js",
     "logoData": {
       "name": "vue-logo",
       "width": 128,
       "height": 128
     }
   }
   ```

### Tips:

- Space skills 200 units apart for good visibility
- Keep 5-10 skills for a clean layout
- Adjust width/height if logos have different aspect ratios

---

## 3. Work Experience Section

**File:** `public/configs/experiencesData.json`

This file contains your work history with company details and descriptions.

### Current Structure:

```json
[
  {
    "pos": { "x": 150, "y": -100 },
    "cardHeight": 250,
    "roleData": {
      "title": "Front-End Software Engineer",
      "description": "Enhanced design platform by building prototyping tools...",
      "company": {
        "name": "Company Name",
        "startDate": "2024",
        "endDate": "Present"
      }
    }
  }
]
```

### How to Personalize:

#### Example with Your Experience:

```json
[
  {
    "pos": { "x": 150, "y": -100 },
    "cardHeight": 250,
    "roleData": {
      "title": "Senior Full-Stack Developer",
      "description": "Led development of microservices architecture serving 1M+ users. Implemented CI/CD pipelines reducing deployment time by 60%. Mentored junior developers and conducted code reviews.",
      "company": {
        "name": "Tech Company Inc.",
        "startDate": "2022",
        "endDate": "Present"
      }
    }
  },
  {
    "pos": { "x": 150, "y": 180 },
    "cardHeight": 280,
    "roleData": {
      "title": "Full-Stack Developer",
      "description": "Built RESTful APIs using Node.js and Express. Developed responsive front-end interfaces with React. Optimized database queries improving performance by 40%.",
      "company": {
        "name": "Startup XYZ",
        "startDate": "2020",
        "endDate": "2022"
      }
    }
  },
  {
    "pos": { "x": 150, "y": 490 },
    "cardHeight": 250,
    "roleData": {
      "title": "Junior Developer",
      "description": "Maintained legacy codebase and fixed bugs. Collaborated with design team to implement new features. Participated in agile development process.",
      "company": {
        "name": "Digital Agency",
        "startDate": "2019",
        "endDate": "2020"
      }
    }
  }
]
```

### Field Explanations:

- **`pos`**: Position in game world

  - `x`: Keep at 150 for alignment
  - `y`: Space entries 280-310 units apart vertically

- **`cardHeight`**: Height of the experience card in pixels

  - Adjust based on description length (200-350)
  - Longer descriptions need taller cards

- **`title`**: Your job title

  - Be specific (e.g., "Senior React Developer" not just "Developer")

- **`description`**: What you did in this role

  - 2-4 sentences
  - Focus on achievements and impact
  - Use action verbs (Led, Built, Implemented, Optimized)
  - Include metrics when possible (e.g., "improved performance by 40%")

- **`company.name`**: Company name

- **`startDate`**: Year you started (e.g., "2020" or "Jan 2020")

- **`endDate`**: Year you ended or "Present" for current role

### Tips:

- List experiences in reverse chronological order (newest first)
- Keep descriptions concise but impactful
- Adjust `cardHeight` if text is cut off
- Use consistent date format across all entries

---

## 4. Projects Section

**File:** `public/configs/projectsData.json`

This file showcases your portfolio projects with images and links.

### Current Structure:

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

### How to Personalize:

#### Step 1: Prepare Project Images

1. Create screenshots or thumbnails of your projects
2. Save as PNG files in `public/projects/`
3. Name them descriptively (e.g., `ecommerce-app.png`, `weather-dashboard.png`)
4. Recommended size: 800x600 pixels or similar aspect ratio

#### Step 2: Update the JSON

Example with your projects:

```json
[
  {
    "pos": { "x": 0, "y": 350 },
    "thumbnail": "ecommerce-app",
    "data": {
      "title": "E-Commerce Platform - Full-stack online shopping application with payment integration",
      "links": [
        {
          "id": 0,
          "name": "Live Demo",
          "link": "https://myecommerce.netlify.app"
        },
        {
          "id": 1,
          "name": "Source Code",
          "link": "https://github.com/blaublau719/ecommerce-app"
        },
        {
          "id": 2,
          "name": "Case Study",
          "link": "https://medium.com/@lanyang/my-ecommerce-project"
        }
      ]
    }
  },
  {
    "pos": { "x": 0, "y": 840 },
    "thumbnail": "weather-dashboard",
    "data": {
      "title": "Weather Dashboard - Real-time weather app using OpenWeather API",
      "links": [
        {
          "id": 0,
          "name": "Live Demo",
          "link": "https://weather-dash.vercel.app"
        },
        {
          "id": 1,
          "name": "GitHub",
          "link": "https://github.com/blaublau719/weather-dashboard"
        }
      ]
    }
  },
  {
    "pos": { "x": 0, "y": 1320 },
    "thumbnail": "task-manager",
    "data": {
      "title": "Task Management App - Collaborative project management tool",
      "links": [
        {
          "id": 0,
          "name": "Live Demo",
          "link": "https://taskmanager.herokuapp.com"
        },
        {
          "id": 1,
          "name": "Source Code",
          "link": "https://github.com/blaublau719/task-manager"
        }
      ]
    }
  }
]
```

### Field Explanations:

- **`pos`**: Position in game world

  - `x`: Keep at 0 for center alignment
  - `y`: Space projects 480-500 units apart (350, 840, 1320, etc.)

- **`thumbnail`**: Image filename WITHOUT extension

  - If file is `ecommerce-app.png`, use `"ecommerce-app"`

- **`title`**: Project name and brief description

  - Format: "Project Name - Short description"
  - Keep under 100 characters

- **`links`**: Array of project links
  - `id`: Sequential number (0, 1, 2, etc.)
  - `name`: Link label (Live Demo, Source Code, Documentation, etc.)
  - `link`: Full URL

### Common Link Types:

```json
"links": [
  {
    "id": 0,
    "name": "Live Demo",
    "link": "https://your-project.com"
  },
  {
    "id": 1,
    "name": "Source Code",
    "link": "https://github.com/username/repo"
  },
  {
    "id": 2,
    "name": "Documentation",
    "link": "https://docs.your-project.com"
  },
  {
    "id": 3,
    "name": "Case Study",
    "link": "https://medium.com/@you/article"
  },
  {
    "id": 4,
    "name": "Video Demo",
    "link": "https://youtube.com/watch?v=..."
  }
]
```

### Tips:

- Showcase 3-6 of your best projects
- Use high-quality screenshots
- Include live demos when possible
- Add case studies or blog posts for major projects
- Order projects by importance or recency

---

## 5. Social Links Section

**File:** `public/configs/socialsData.json`

This file contains your social media profiles and contact information.

### Current Structure:

```json
[
  {
    "pos": { "x": 300, "y": 250 },
    "name": "GitHub",
    "description": "GitHub is where I host my projects.",
    "link": "https://github.com/jslegenddev",
    "logoData": {
      "name": "github-logo",
      "width": 228.6,
      "height": 179.5
    }
  },
  {
    "pos": { "x": 500, "y": 250 },
    "name": "Email",
    "address": "jslegend@protonmail.com",
    "logoData": {
      "name": "email-logo",
      "width": 128,
      "height": 128
    }
  }
]
```

### How to Personalize:

#### Available Social Platforms:

Available logos in `public/logos/`:

- `github-logo` (github-logo.png)
- `linkedin-logo` (linkedin-logo.png)
- `x-logo` (x-logo.png) - Twitter/X
- `youtube-logo` (youtube-logo.png)
- `substack-logo` (substack-logo.png)
- `email-logo` (email-logo.png)

#### Example Configuration:

```json
[
  {
    "pos": { "x": 300, "y": 250 },
    "name": "GitHub",
    "description": "Check out my open-source projects and contributions.",
    "link": "https://github.com/blaublau719",
    "logoData": {
      "name": "github-logo",
      "width": 228.6,
      "height": 179.5
    }
  },
  {
    "pos": { "x": 500, "y": 250 },
    "name": "LinkedIn",
    "description": "Connect with me professionally on LinkedIn.",
    "link": "https://linkedin.com/in/lanyang",
    "logoData": {
      "name": "linkedin-logo",
      "width": 128,
      "height": 128
    }
  },
  {
    "pos": { "x": 700, "y": 250 },
    "name": "Email",
    "address": "lan980719@gmail.com",
    "logoData": {
      "name": "email-logo",
      "width": 128,
      "height": 128
    }
  },
  {
    "pos": { "x": 900, "y": 250 },
    "name": "Twitter",
    "description": "Follow me for tech insights and updates.",
    "link": "https://twitter.com/yourhandle",
    "logoData": {
      "name": "x-logo",
      "width": 128,
      "height": 128
    }
  }
]
```

### Field Explanations:

- **`pos`**: Position in game world

  - `x`: Space icons 200 units apart (300, 500, 700, 900, etc.)
  - `y`: Keep at 250 for horizontal alignment

- **`name`**: Platform name (GitHub, LinkedIn, Email, etc.)

- **`description`**: Short description of what visitors will find

  - Only for platforms with links (not email)
  - Keep under 60 characters

- **`link`**: Full URL to your profile

  - Used for GitHub, LinkedIn, Twitter, YouTube, etc.
  - **Don't use for Email**

- **`address`**: Your email address

  - **Only for Email entries**
  - Replace `link` with `address`

- **`logoData`**: Logo configuration
  - `name`: Logo filename without extension
  - `width` & `height`: Logo dimensions (keep default values)

### Email vs Link Entries:

**For social platforms (with link):**

```json
{
  "pos": { "x": 300, "y": 250 },
  "name": "GitHub",
  "description": "My projects and code",
  "link": "https://github.com/blaublau719",
  "logoData": { "name": "github-logo", "width": 228.6, "height": 179.5 }
}
```

**For email (with address):**

```json
{
  "pos": { "x": 500, "y": 250 },
  "name": "Email",
  "address": "your.email@gmail.com",
  "logoData": { "name": "email-logo", "width": 128, "height": 128 }
}
```

### Tips:

- Include 3-5 social links (don't overwhelm visitors)
- Prioritize: GitHub, LinkedIn, Email (most important for developers)
- Update descriptions to reflect your personal brand
- Keep icons evenly spaced (200 units apart)
- Test all links to ensure they work

---

## 6. Testing Your Changes

After making changes to any configuration file:

### Local Testing:

```bash
# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your changes in real-time.

### What to Check:

1. **General Info:**

   - Does your name appear correctly?
   - Is the subtitle accurate?

2. **Skills:**

   - Do all skill logos load?
   - Are they positioned well?
   - No overlapping icons?

3. **Work Experience:**

   - Are cards the right height?
   - Is text readable and not cut off?
   - Dates formatted correctly?

4. **Projects:**

   - Do project images load?
   - Are all links working?
   - Titles clear and descriptive?

5. **Social Links:**
   - Do icons appear in order?
   - Links open correctly?
   - Email modal works?

### Deploy Changes:

Once you're happy with your changes:

```bash
# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Update portfolio with personal information"

# Push to GitHub (triggers automatic deployment)
git push
```

Your changes will be live at `https://blaublau719.github.io/lanyang-2d/` in 1-2 minutes.

---

## 🎨 Quick Personalization Checklist

- [ ] Update name and subtitle in `generalData.json`
- [ ] Replace skills in `skillsData.json` with your tech stack
- [ ] Add your work experience to `experiencesData.json`
- [ ] Add project screenshots to `public/projects/`
- [ ] Update projects in `projectsData.json`
- [ ] Update social links in `socialsData.json`
- [ ] Test locally with `npm run dev`
- [ ] Commit and push changes
- [ ] Verify live site

---

## 📚 Additional Resources

- **JSON Validator:** https://jsonlint.com/ (validate your JSON syntax)
- **Image Optimization:** https://tinypng.com/ (compress images)
- **Logo Resources:** https://simpleicons.org/ (find tech logos)

---

## 🆘 Troubleshooting

### Images not loading?

- Check filename matches exactly (case-sensitive)
- Ensure file is in correct directory (`public/logos/` or `public/projects/`)
- Don't include file extension in JSON (use `"react-logo"` not `"react-logo.png"`)

### Text cut off in cards?

- Increase `cardHeight` value in experience entries
- Shorten description text

### JSON errors?

- Validate JSON at https://jsonlint.com/
- Check for missing commas, brackets, or quotes
- Ensure proper nesting

### Changes not showing?

- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check if dev server is running
- Verify file was saved

---

**Happy personalizing! 🚀**
