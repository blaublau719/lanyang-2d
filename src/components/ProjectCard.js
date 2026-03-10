import { PALETTE } from "../constants";
import {
  isProjectModalVisibleAtom,
  chosenProjectDataAtom,
  store,
} from "../store";
import { opacityTrickleDown } from "../utils";

export default function makeProjectCard(k, parent, posVec2, data, thumbnail) {
  const cardWidth = 1000;
  const hasThumbnail = thumbnail && thumbnail !== "";
  const imgHeight = hasThumbnail ? 400 : 0;
  const titleHeight = 70;
  const descHeight = 380;
  const totalHeight = imgHeight + titleHeight + descHeight;

  const card = parent.add([
    k.anchor("center"),
    k.pos(posVec2),
    k.opacity(0),
    k.offscreen({ hide: true, distance: 300 }),
  ]);

  // Image area with mask (if thumbnail exists)
  if (hasThumbnail) {
    const cardMask = card.add([
      k.rect(cardWidth, imgHeight, { radius: [10, 10, 0, 0] }),
      k.anchor("top"),
      k.pos(0, -totalHeight / 2),
      k.mask("intersect"),
      k.opacity(0),
    ]);

    const image = cardMask.add([
      k.sprite(thumbnail, { width: cardWidth, height: imgHeight }),
      k.anchor("top"),
      k.opacity(0),
    ]);

    opacityTrickleDown(parent, [cardMask, image]);
  }

  // Title area (green bg matching other cards)
  const titleBg = card.add([
    k.rect(cardWidth, titleHeight, hasThumbnail ? { radius: [0, 0, 0, 0] } : { radius: [10, 10, 0, 0] }),
    k.outline(4, k.Color.fromHex(PALETTE.color1)),
    k.anchor("top"),
    k.pos(0, -totalHeight / 2 + imgHeight),
    k.color(k.Color.fromHex(PALETTE.color1)),
    k.opacity(0),
  ]);

  const titleText = card.add([
    k.text(data.title, {
      font: "ibm-bold",
      size: 34,
      width: cardWidth - 40,
    }),
    k.color(k.Color.fromHex(PALETTE.color2)),
    k.pos(-cardWidth / 2 + 20, -totalHeight / 2 + imgHeight + 15),
    k.opacity(0),
  ]);

  // Description area (green bg matching Education/Experience cards)
  const descBg = card.add([
    k.rect(cardWidth, descHeight, { radius: [0, 0, 10, 10] }),
    k.outline(4, k.Color.fromHex(PALETTE.color1)),
    k.anchor("top"),
    k.pos(0, -totalHeight / 2 + imgHeight + titleHeight),
    k.color(k.Color.fromHex(PALETTE.color2)),
    k.opacity(0),
  ]);

  const descText = card.add([
    k.text(data.description || "", {
      font: "ibm-regular",
      size: 30,
      width: cardWidth - 40,
      lineSpacing: 10,
    }),
    k.color(k.Color.fromHex(PALETTE.color1)),
    k.pos(-cardWidth / 2 + 20, -totalHeight / 2 + imgHeight + titleHeight + 15),
    k.opacity(0),
  ]);

  // Interaction button
  const cardSwitch = card.add([
    k.circle(30),
    k.area(),
    k.color(k.Color.fromHex(PALETTE.color1)),
    k.pos(cardWidth / 2 + 40, 0),
    k.opacity(0),
  ]);

  cardSwitch.onCollide("player", () => {
    store.set(isProjectModalVisibleAtom, true);
    store.set(chosenProjectDataAtom, data);
  });

  opacityTrickleDown(parent, [titleBg, titleText, descBg, descText, cardSwitch]);

  return card;
}
