import makeKaplayCtx from "./kaplayCtx";
import makePlayer from "./entities/Player";
import makeSection from "./components/Section";
import { PALETTE } from "./constants";
import makeSocialIcon from "./components/SocialIcon";
import makeSkillIcon from "./components/SkillIcon";
import { makeAppear } from "./utils";
import makeWorkExperienceCard from "./components/WorkExperienceCard";
import makeEmailIcon from "./components/EmailIcon";
import makeProjectCard from "./components/ProjectCard";
import makeEducationCard from "./components/EducationCard";
import makeResearchCard from "./components/ResearchCard";
import makeAwardCard from "./components/AwardCard";
import { cameraZoomValueAtom, store } from "./store";

export default async function initGame() {
  const generalData = await (await fetch("./configs/generalData.json")).json();
  const skillsData = await (await fetch("./configs/skillsData.json")).json();
  const socialsData = await (await fetch("./configs/socialsData.json")).json();
  const experiencesData = await (
    await fetch("./configs/experiencesData.json")
  ).json();
  const projectsData = await (
    await fetch("./configs/projectsData.json")
  ).json();
  const educationData = await (
    await fetch("./configs/educationData.json")
  ).json();
  const researchData = await (
    await fetch("./configs/researchData.json")
  ).json();
  const awardsData = await (
    await fetch("./configs/awardsData.json")
  ).json();

  const k = makeKaplayCtx();
  k.loadSprite("player", "./sprites/player.png", {
    sliceX: 4,
    sliceY: 8,
    anims: {
      "walk-down-idle": 0,
      "walk-down": { from: 0, to: 3, loop: true },
      "walk-left-down": { from: 4, to: 7, loop: true },
      "walk-left-down-idle": 4,
      "walk-left": { from: 8, to: 11, loop: true },
      "walk-left-idle": 8,
      "walk-left-up": { from: 12, to: 15, loop: true },
      "walk-left-up-idle": 12,
      "walk-up": { from: 16, to: 19, loop: true },
      "walk-up-idle": 16,
      "walk-right-up": { from: 20, to: 23, loop: true },
      "walk-right-up-idle": 20,
      "walk-right": { from: 24, to: 27, loop: true },
      "walk-right-idle": 24,
      "walk-right-down": { from: 28, to: 31, loop: true },
      "walk-right-down-idle": 28,
    },
  });
  k.loadFont("ibm-regular", "./fonts/IBMPlexSans-Regular.ttf");
  k.loadFont("ibm-bold", "./fonts/IBMPlexSans-Bold.ttf");
  k.loadSprite("github-logo", "./logos/github-logo.png");
  k.loadSprite("linkedin-logo", "./logos/linkedin-logo.png");
  k.loadSprite("youtube-logo", "./logos/youtube-logo.png");
  k.loadSprite("x-logo", "./logos/x-logo.png");
  k.loadSprite("substack-logo", "./logos/substack-logo.png");
  k.loadSprite("python-logo", "./logos/python-logo.png");
  k.loadSprite("java-logo", "./logos/java-logo.png");
  k.loadSprite("c-logo", "./logos/c-logo.png");
  k.loadSprite("csharp-logo", "./logos/csharp-logo.png");
  k.loadSprite("langgraph-logo", "./logos/langgraph-logo.png");
  k.loadSprite("openai-logo", "./logos/openai-logo.png");
  k.loadSprite("crewai-logo", "./logos/crewai-logo.png");
  k.loadSprite("tavily-logo", "./logos/tavily-logo.png");
  k.loadSprite("azureaifoundry-logo", "./logos/azureaifoundry-logo.png");
  k.loadSprite("pydanticai-logo", "./logos/pydanticai-logo.png");
  k.loadSprite("huggingface-logo", "./logos/huggingface-logo.png");
  k.loadSprite("lmstudio-logo", "./logos/lmstudio-logo.png");
  k.loadSprite("git-logo", "./logos/git-logo.png");
  k.loadSprite("docker-logo", "./logos/docker-logo.png");
  k.loadSprite("neo4j-logo", "./logos/neo4j-logo.png");
  k.loadSprite("unity-logo", "./logos/unity-logo.png");
  k.loadSprite("fastapi-logo", "./logos/fastapi-logo.png");
  k.loadSprite("streamlit-logo", "./logos/streamlit-logo.png");
  k.loadSprite("react-logo", "./logos/react-logo.png");
  k.loadSprite("azure-logo", "./logos/azure-logo.png");
  k.loadSprite("email-logo", "./logos/email-logo.png");
  k.loadSprite("cat-logo", "./logos/cat-logo.png");
  k.loadSprite("haw-logo", "./logos/haw-logo.png");
  k.loadSprite("sonic-js", "./projects/sonic-js.png");
  k.loadSprite("kirby-ts", "./projects/kirby-ts.png");
  k.loadSprite("platformer-js", "./projects/platformer-js.png");
  k.loadShaderURL("tiledPattern", null, "./shaders/tiledPattern.frag");

  const setInitCamZoomValue = () => {
    if (k.width() < 1000) {
      k.camScale(k.vec2(0.5));
      store.set(cameraZoomValueAtom, 0.5);
      return;
    }
    k.camScale(k.vec2(0.8));
    store.set(cameraZoomValueAtom, 0.8);
  };
  setInitCamZoomValue();

  k.onUpdate(() => {
    const cameraZoomValue = store.get(cameraZoomValueAtom);
    if (cameraZoomValue !== k.camScale().x) k.camScale(k.vec2(cameraZoomValue));
  });

  const tiledBackground = k.add([
    k.uvquad(k.width(), k.height()),
    k.shader("tiledPattern", () => ({
      u_time: k.time() / 20,
      u_color1: k.Color.fromHex(PALETTE.color3),
      u_color2: k.Color.fromHex(PALETTE.color2),
      u_speed: k.vec2(1, -1),
      u_aspect: k.width() / k.height(),
      u_size: 5,
    })),
    k.pos(0, 0),
    k.fixed(),
  ]);

  tiledBackground.onUpdate(() => {
    tiledBackground.width = k.width();
    tiledBackground.height = k.height();
    tiledBackground.uniform.u_aspect = k.width() / k.height();
  });

  // Calculate 7 section positions in a circle with proper spacing to avoid overlap
  const centerX = k.center().x;
  const centerY = k.center().y;
  const radius = 900; // Larger radius to prevent content overlap
  const angleStep = (2 * Math.PI) / 7;
  const startAngle = -Math.PI / 2; // Start at top

  // Section 1: About (Top - 0°)
  makeSection(
    k,
    k.vec2(centerX + radius * Math.cos(startAngle), centerY + radius * Math.sin(startAngle)),
    generalData.section1Name,
    (parent) => {
      const container = parent.add([k.pos(-805, -650), k.opacity(0)]);

      container.add([
        k.text(generalData.header.title, { font: "ibm-bold", size: 88 }),
        k.color(k.Color.fromHex(PALETTE.color1)),
        k.pos(395, -120),
        k.opacity(0),
      ]);

      const subtitleText = container.add([
        k.text(generalData.header.subtitle, {
          font: "ibm-bold",
          size: 36,
          width: 1680,
        }),
        k.color(k.Color.fromHex(PALETTE.color1)),
        k.anchor("center"),
        k.pos(800, 50),
        k.opacity(0),
      ]);

      const socialContainer = container.add([k.pos(130, 0), k.opacity(0)]);

      for (const socialData of socialsData) {
        if (socialData.name === "Email") {
          makeEmailIcon(
            k,
            socialContainer,
            k.vec2(socialData.pos.x, socialData.pos.y),
            socialData.logoData,
            socialData.name,
            socialData.address
          );
          continue;
        }

        makeSocialIcon(
          k,
          socialContainer,
          k.vec2(socialData.pos.x, socialData.pos.y),
          socialData.logoData,
          socialData.name,
          socialData.link,
          socialData.description
        );
      }

      makeAppear(k, container);
      makeAppear(k, socialContainer);
    }
  );

  // Section 2: Skills (Top-Right - 51.4°)
  makeSection(
    k,
    k.vec2(centerX + radius * Math.cos(startAngle + angleStep), centerY + radius * Math.sin(startAngle + angleStep)),
    generalData.section2Name,
    (parent) => {
      // Position skills icons at right edge of the black box
      const container = parent.add([
        k.opacity(0),
        k.pos(600, -300),
      ]);

      for (const skillData of skillsData) {
        makeSkillIcon(
          k,
          container,
          k.vec2(skillData.pos.x, skillData.pos.y),
          skillData.logoData,
          skillData.name
        );
      }

      makeAppear(k, container);
    }
  );

  // Section 3: Personal Projects (Right - 102.9°)
  makeSection(
    k,
    k.vec2(centerX + radius * Math.cos(startAngle + 2 * angleStep), centerY + radius * Math.sin(startAngle + 2 * angleStep)),
    generalData.section3Name,
    (parent) => {
      // Projects section - empty for now
      const container = parent.add([k.opacity(0), k.pos(400, -300)]);
      makeAppear(k, container);
    }
  );

  // Section 4: Education (Bottom-Right - 154.3°)
  makeSection(
    k,
    k.vec2(centerX + radius * Math.cos(startAngle + 3 * angleStep), centerY + radius * Math.sin(startAngle + 3 * angleStep)),
    generalData.section4Name,
    (parent) => {
      const container = parent.add([k.opacity(0), k.pos(-400, 400)]);

      for (const education of educationData) {
        makeEducationCard(
          k,
          container,
          k.vec2(education.pos.x, education.pos.y),
          education.cardHeight,
          education.educationData
        );
      }

      makeAppear(k, container);
    }
  );

  // Section 5: Working Experience (Bottom - 205.7°)
  makeSection(
    k,
    k.vec2(centerX + radius * Math.cos(startAngle + 4 * angleStep), centerY + radius * Math.sin(startAngle + 4 * angleStep)),
    generalData.section5Name,
    (parent) => {
      const container = parent.add([k.opacity(0), k.pos(-600, 350)]);

      for (const experienceData of experiencesData) {
        makeWorkExperienceCard(
          k,
          container,
          k.vec2(experienceData.pos.x, experienceData.pos.y),
          experienceData.cardHeight,
          experienceData.roleData
        );
      }

      makeAppear(k, container);
    }
  );

  // Section 6: Research & Teaching (Bottom-Left - 257.1°)
  makeSection(
    k,
    k.vec2(centerX + radius * Math.cos(startAngle + 5 * angleStep), centerY + radius * Math.sin(startAngle + 5 * angleStep)),
    generalData.section6Name,
    (parent) => {
      const container = parent.add([k.opacity(0), k.pos(-1200, 300)]);

      for (const research of researchData) {
        makeResearchCard(
          k,
          container,
          k.vec2(research.pos.x, research.pos.y),
          research.cardHeight,
          research.researchData
        );
      }

      makeAppear(k, container);
    }
  );

  // Section 7: Awards (Left - 308.6°)
  makeSection(
    k,
    k.vec2(centerX + radius * Math.cos(startAngle + 6 * angleStep), centerY + radius * Math.sin(startAngle + 6 * angleStep)),
    generalData.section7Name,
    (parent) => {
      const container = parent.add([k.opacity(0), k.pos(-1200, -400)]);

      for (const award of awardsData) {
        makeAwardCard(
          k,
          container,
          k.vec2(award.pos.x, award.pos.y),
          award.cardHeight,
          award.awardData
        );
      }

      makeAppear(k, container);
    }
  );

  makePlayer(k, k.vec2(k.center()), 700);
}
