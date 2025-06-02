// src/utils/imageUtils.js
import { DICE_TYPES } from "../stores/game"; // Assuming DICE_TYPES is exported from your store

/**
 * Generates the filename for a die based on its properties.
 * @param {object} die - The die object, e.g., { type, value } or from lastDiceRoll
 * @param {boolean} [isFromLastRoll=false] - Flag if the die object is from lastDiceRoll structure
 * @returns {string|null} The filename or null if no match.
 */
export function generateDieImageFilename(die, isFromLastRoll = false) {
  if (!die || !die.type) return null;

  let type = die.type;
  let value = die.value;
  let isReverse = isFromLastRoll
    ? die.direction === "backward"
    : type === DICE_TYPES.REVERSE_FIXED || type === DICE_TYPES.REVERSE_RANDOM;

  // Adjust type for reverse if it's a base type made reverse
  if (isFromLastRoll && isReverse) {
    if (type === DICE_TYPES.NORMAL)
      type = DICE_TYPES.REVERSE_RANDOM; // Map normal+backward to reverse_random
    else if (type === DICE_TYPES.FIXED) type = DICE_TYPES.REVERSE_FIXED; // Map fixed+backward to reverse_fixed
    // Add more mappings if other types can be reversed by direction
  }

  switch (type) {
    case DICE_TYPES.NORMAL:
      return "die_d6.png";
    case DICE_TYPES.FIXED:
      return `die_fixed_${value}.png`;
    case DICE_TYPES.D20:
      return "die_d20.png";
    case DICE_TYPES.REVERSE_FIXED:
      return `die_fixed_reverse_${value}.png`;
    case DICE_TYPES.REVERSE_RANDOM:
      return "die_d6_reverse.png";
    default:
      console.warn("Unknown die type for image:", type);
      return null;
  }
}

/**
 * Gets the public URL for a die image.
 * Assumes images are in public/assets/images/dice/
 * @param {string} filename - The image filename (e.g., "die_d6.png")
 * @returns {string|null} The resolved image URL or null if filename is invalid.
 */
export function getDieImageUrl(filename) {
  if (!filename) return null;
  return `${import.meta.env.BASE_URL}assets/images/dice/${filename}`;

}
