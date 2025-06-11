import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useGameStore } from "../stores/game";

describe("GameStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("initializes with default values", () => {
    const store = useGameStore();
    expect(store.playerMoney).toBe(0);
    expect(store.playerLap).toBe(1);
    expect(store.playerStage).toBe(1);
    expect(store.isGameOver).toBe(false);
  });

  it("can toggle animation speed", () => {
    const store = useGameStore();
    const initialSpeed = store.animationSpeedMultiplier;
    store.toggleAnimationSpeed();
    expect(store.animationSpeedMultiplier).not.toBe(initialSpeed);
  });

  it("correctly adds reserved dice", () => {
    const store = useGameStore();
    const testDie = { type: "Fixed", value: 6 };
    store.addReservedDie(testDie);
    expect(store.reservedDice).toHaveLength(1);
    expect(store.reservedDice[0]).toEqual(testDie);
  });

  it("respects max dice limit", () => {
    const store = useGameStore();
    const testDie = { type: "Fixed", value: 6 };

    // Fill up to max capacity
    for (let i = 0; i < store.maxDiceInBag + 2; i++) {
      store.addReservedDie(testDie);
    }

    expect(store.reservedDice).toHaveLength(store.maxDiceInBag);
  });
});
