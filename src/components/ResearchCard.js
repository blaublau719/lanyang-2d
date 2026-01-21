import { PALETTE } from "../constants";
import { opacityTrickleDown } from "../utils";

export default function makeResearchCard(
  k,
  parent,
  posVec2,
  height,
  researchData
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

  const title = card.add([
    k.text(researchData.title, { font: "ibm-bold", size: 28 }),
    k.color(k.Color.fromHex(PALETTE.color1)),
    k.pos(20, 20),
    k.opacity(0),
  ]);

  const projectName = card.add([
    k.text(researchData.projectName, { font: "ibm-bold", size: 22 }),
    k.color(k.Color.fromHex(PALETTE.color1)),
    k.pos(20, 55),
    k.opacity(0),
  ]);

  const period = card.add([
    k.text(researchData.period, {
      font: "ibm-regular",
      size: 20,
    }),
    k.color(k.Color.fromHex(PALETTE.color1)),
    k.pos(20, 85),
    k.opacity(0),
  ]);

  const description = card.add([
    k.text(researchData.description, {
      font: "ibm-regular",
      size: 20,
      width: 750,
    }),
    k.color(k.Color.fromHex(PALETTE.color1)),
    k.pos(20, 115),
    k.opacity(0),
  ]);

  opacityTrickleDown(parent, [title, projectName, period, description]);

  return card;
}
