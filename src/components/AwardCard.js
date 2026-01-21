import { PALETTE } from "../constants";
import { opacityTrickleDown } from "../utils";

export default function makeAwardCard(
  k,
  parent,
  posVec2,
  height,
  awardData
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
    k.text(awardData.title, { font: "ibm-bold", size: 32, width: 750 }),
    k.color(k.Color.fromHex(PALETTE.color1)),
    k.pos(20, 20),
    k.opacity(0),
  ]);

  const institution = card.add([
    k.text(awardData.institution, {
      font: "ibm-regular",
      size: 28,
    }),
    k.color(k.Color.fromHex(PALETTE.color1)),
    k.pos(20, 80),
    k.opacity(0),
  ]);

  const year = card.add([
    k.text(awardData.year, {
      font: "ibm-regular",
      size: 28,
    }),
    k.color(k.Color.fromHex(PALETTE.color1)),
    k.pos(20, 120),
    k.opacity(0),
  ]);

  opacityTrickleDown(parent, [title, institution, year]);

  return card;
}
