import { PALETTE } from "../constants";
import { opacityTrickleDown } from "../utils";

export default function makeEducationCard(
  k,
  parent,
  posVec2,
  height,
  educationData
) {
  const card = parent.add([
    k.rect(800, height, { radius: 8 }),
    k.area(),
    k.outline(4, k.Color.fromHex(PALETTE.color1)),
    k.pos(posVec2),
    k.color(k.Color.fromHex(PALETTE.color2)),
    k.opacity(0),
    k.offscreen({ hide: true, distance: 300 }),
  ]);

  const degree = card.add([
    k.text(educationData.degree, { font: "ibm-bold", size: 40, width: 750 }),
    k.color(k.Color.fromHex(PALETTE.color1)),
    k.pos(20, 20),
    k.opacity(0),
  ]);

  const institution = card.add([
    k.text(`${educationData.institution} | ${educationData.location}`, {
      font: "ibm-regular",
      size: 30,
      width: 750,
    }),
    k.color(k.Color.fromHex(PALETTE.color1)),
    k.pos(20, 120),
    k.opacity(0),
  ]);

  const period = card.add([
    k.text(educationData.period, {
      font: "ibm-regular",
      size: 28,
    }),
    k.color(k.Color.fromHex(PALETTE.color1)),
    k.pos(20, 200),
    k.opacity(0),
  ]);

  let yOffset = 240;
  const additionalElements = [];

  if (educationData.grade) {
    const grade = card.add([
      k.text(educationData.grade, {
        font: "ibm-regular",
        size: 28,
        width: 750,
      }),
      k.color(k.Color.fromHex(PALETTE.color1)),
      k.pos(20, yOffset),
      k.opacity(0),
    ]);
    additionalElements.push(grade);
  }

  opacityTrickleDown(parent, [degree, institution, period, ...additionalElements]);

  return card;
}
