// backend/services/gameLogic.js
// This is where your game's static rules live.

// --- Configuration ---
const STAGE_CONFIGS = {
  1: {
    // 6x6
    rows: 6,
    cols: 6,
    moneyMultiplier: 1,
    lapsToComplete: 3,
    minions: {
      count: { min: 2, max: 4 },
      hp: 5,
      penalty: 10,
      image: "goblin_soldier.png",
    },
    minChoiceDiceMoneySquares: 2,
    maxChoiceDiceMoneySquares: 4,
    minChoicePickDieSquares: 2,
    maxChoicePickDieSquares: 4,
    bossName: "Tax Collector",
    bossImage: "tax_collector.png",
    bossDefeatCondition: {
      diceThrows: 3,
      hp: 15,
      bribeCost: 40,
    },
  },
  2: {
    // 9x9
    rows: 9,
    cols: 9,
    moneyMultiplier: 1.5,
    lapsToComplete: 3,
    minions: {
      count: { min: 2, max: 4 },
      hp: 5,
      penalty: 10,
      image: "goblin_soldier.png",
    },
    minChoiceDiceMoneySquares: 4,
    maxChoiceDiceMoneySquares: 8,
    minChoicePickDieSquares: 4,
    maxChoicePickDieSquares: 8,
    bossName: "Greedy Goblin",
    bossImage: "greedy_goblin_king.webp",
    bossDefeatCondition: {
      diceThrows: 3,
      hp: 30,
      bribeCost: 80,
    },
  },
  3: {
    // 9x9
    rows: 9,
    cols: 9,
    moneyMultiplier: 1.75,
    lapsToComplete: 3,
    minions: {
      count: { min: 2, max: 4 },
      hp: 5,
      penalty: 10,
      image: "goblin_soldier.png",
    },
    minChoiceDiceMoneySquares: 4,
    maxChoiceDiceMoneySquares: 8,
    minChoicePickDieSquares: 4,
    maxChoicePickDieSquares: 8,
    bossName: "Orc Commander",
    bossImage: "orc_general.png",
    bossDefeatCondition: {
      diceThrows: 3,
      hp: 40,
      bribeCost: 70,
    },
  },
  4: {
    // 12x12
    rows: 10,
    cols: 14,
    moneyMultiplier: 2,
    lapsToComplete: 3,
    minions: {
      count: { min: 4, max: 8 },
      hp: 5,
      penalty: 10,
      image: "goblin_soldier.png",
    },
    minChoiceDiceMoneySquares: 8,
    maxChoiceDiceMoneySquares: 16,
    minChoicePickDieSquares: 8,
    maxChoicePickDieSquares: 16,
    bossName: "Treasurer Dragon",
    bossImage: "dragon_treasurer.png",
    bossDefeatCondition: {
      diceThrows: 3,
      hp: 50,
      bribeCost: 100,
    },
  },
  5: {
    // 12x12
    rows: 10,
    cols: 14,
    moneyMultiplier: 2.5,
    lapsToComplete: 3,
    minions: {
      count: { min: 4, max: 8 },
      hp: 5,
      penalty: 10,
      image: "goblin_soldier.png",
    },
    minChoiceDiceMoneySquares: 8,
    maxChoiceDiceMoneySquares: 16,
    minChoicePickDieSquares: 8,
    maxChoicePickDieSquares: 16,
    bossName: "Dark Godcat",
    bossImage: "dark_godcat.webp",
    bossDefeatCondition: {
      diceThrows: 3,
      hp: 70,
      bribeCost: 200,
    },
  },
};

const MAX_RESERVED_DICE = 15;
const HUGE_MONEY_AMOUNT_BASE = 10;

// --- Helper Functions ---
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// --- Getter-like Functions ---
function calculateTotalBoardSquares(config) {
  if (!config || !config.rows || !config.cols) return 0;
  const R = config.rows;
  const C = config.cols;
  if (R <= 1 || C <= 1) return R * C;
  return 2 * R + 2 * C - 4;
}

function getCornerSquareIds(config) {
  if (
    !config ||
    !config.rows ||
    !config.cols ||
    config.rows <= 1 ||
    config.cols <= 1
  )
    return [];
  const R = config.rows;
  const C = config.cols;
  return [0, R - 1, R - 1 + (C - 1), R - 1 + (C - 1) + (R - 1)];
}

function getBottomRightCornerId(config) {
  if (
    !config ||
    !config.rows ||
    !config.cols ||
    config.rows <= 1 ||
    config.cols <= 1
  )
    return -1;
  return config.rows - 1 + (config.cols - 1);
}

function getCandidateSquareIds(boardSquares, config) {
  if (!boardSquares.length) return [];
  const corners = getCornerSquareIds(config);
  return boardSquares
    .filter((sq) => sq.baseType === "normal" && !corners.includes(sq.id))
    .map((sq) => sq.id);
}

function calculateCurrentHugeMoneyValue(playerStage) {
  return HUGE_MONEY_AMOUNT_BASE * playerStage;
}

// --- Core Logic Functions ---
function generateBoardLayout(gameState) {
  const config = STAGE_CONFIGS[gameState.playerStage];
  const totalSquares = calculateTotalBoardSquares(config);
  const corners = getCornerSquareIds(config);
  const brCornerId = getBottomRightCornerId(config);

  const newLayout = [];
  for (let i = 0; i < totalSquares; i++) {
    let baseType = "normal";
    if (i === corners[0]) baseType = "start";
    else if (i === corners[1]) baseType = "corner_bl";
    else if (i === brCornerId) baseType = "corner_br";
    else if (i === corners[3]) baseType = "corner_tr";

    newLayout.push({
      id: i,
      baseType,
      currentEffectType: "none",
      isTempBad: false,
      effectDetails: null,
    });
  }
  return newLayout;
}

function setupLapEffects(gameState) {
  const config = STAGE_CONFIGS[gameState.playerStage];

  // Reset all squares
  gameState.boardSquares.forEach((sq) => {
    sq.isTempBad = false;
    if (sq.baseType === "normal") {
      sq.currentEffectType = "none";
      sq.effectDetails = null;
    }
  });

  const squareIdToIndexMap = new Map(
    gameState.boardSquares.map((sq, index) => [sq.id, index])
  );
  let availableCandidateIds = [
    ...getCandidateSquareIds(gameState.boardSquares, config),
  ];
  shuffleArray(availableCandidateIds);

  // Add minion squares
  const numMinions = getRandomInt(
    config.minions.count.min,
    config.minions.count.max
  );
  for (let i = 0; i < numMinions; i++) {
    if (availableCandidateIds.length === 0) break;
    const minionId = availableCandidateIds.pop();
    const square = gameState.boardSquares[squareIdToIndexMap.get(minionId)];
    if (square) {
      square.isTempBad = true; // For styling
      square.currentEffectType = "minion_encounter";
      square.effectDetails = {
        hp: Math.floor(
          config.minions.hp * (1 + (gameState.playerStage - 1) * 0.5)
        ),
        penalty: Math.floor(
          config.minions.penalty * (1 + (gameState.playerStage - 1) * 0.75)
        ),
        image: config.minions.image,
      };
    }
  }

  // Add choice dice money squares
  const numChoiceDiceMoney = getRandomInt(
    config.minChoiceDiceMoneySquares,
    config.maxChoiceDiceMoneySquares
  );
  for (let i = 0; i < numChoiceDiceMoney; i++) {
    if (availableCandidateIds.length === 0) break;
    const choiceId = availableCandidateIds.pop();
    const square = gameState.boardSquares[squareIdToIndexMap.get(choiceId)];
    if (square) square.currentEffectType = "choice_dice_money";
  }

  // Add choice pick die squares
  const numChoicePickDie = getRandomInt(
    config.minChoicePickDieSquares,
    config.maxChoicePickDieSquares
  );
  for (let i = 0; i < numChoicePickDie; i++) {
    if (availableCandidateIds.length === 0) break;
    const pickId = availableCandidateIds.pop();
    const square = gameState.boardSquares[squareIdToIndexMap.get(pickId)];
    if (square) square.currentEffectType = "choice_pick_die";
  }

  // Add money squares to remaining candidates
  availableCandidateIds.forEach((id) => {
    const square = gameState.boardSquares[squareIdToIndexMap.get(id)];
    if (square) {
      const rand = Math.random();
      if (rand < 0.15) {
        square.currentEffectType = "huge_money";
        square.effectDetails = {
          amount: calculateCurrentHugeMoneyValue(gameState.playerStage),
        };
      } else {
        square.currentEffectType = "normal_money";
        square.effectDetails = {
          amount: Math.floor(getRandomInt(1, 3) * config.moneyMultiplier),
        };
      }
    }
  });
}

function setupStage(gameState) {
  const config = STAGE_CONFIGS[gameState.playerStage];
  if (!config) {
    console.error("Invalid stage config");
    gameState.isGameOver = true;
    return gameState;
  }

  gameState.boardRows = config.rows;
  gameState.boardCols = config.cols;
  gameState.playerLap = 1;
  gameState.playerPosition = 0;
  gameState.lastPlayerPositionBeforeThisMove = 0;
  gameState.lastDiceRoll = null;
  gameState.choiceDetails = null;
  gameState.currentStageBoss = null;

  gameState.boardSquares = generateBoardLayout(gameState);
  setupLapEffects(gameState);
  gameState.gameMessage = `Stage ${gameState.playerStage} - Lap ${gameState.playerLap}/${config.lapsToComplete}. Roll the die!`;
  gameState.gamePhase = "rolling";
  gameState.isAnimating = false;

  return gameState;
}

function startBossEncounter(gameState) {
  const config = STAGE_CONFIGS[gameState.playerStage];
  const bossInfo = config.bossDefeatCondition;

  gameState.gamePhase = "boss_encounter";
  gameState.currentBoss = {
    name: config.bossName,
    image: config.bossImage,
    bribeCost: bossInfo.bribeCost,
  };
  gameState.currentBossHP = bossInfo.hp;
  gameState.currentBossMaxHP = bossInfo.hp;
  gameState.currentDiceThrows = []; // Reset throws for the new fight
  gameState.gameMessage = `A Boss Appears: ${config.bossName}! Use your dice to attack!`;

  return gameState;
}

// --- Main Initialization Function ---
function initializeNewGame(options = {}) {
  let newGame = {
    // Game Session State
    userId: options.userId || null,
    // Player State
    playerPosition: 0,
    playerMoney: 0,
    playerLap: 1,
    playerStage: 1,
    lastDiceRoll: null,
    reservedDice: [{ type: "Random" }],
    maxDiceInBag: MAX_RESERVED_DICE,
    isGameOver: false,
    gamePhase: "rolling",
    choiceDetails: null,
    showSummaryModal: false,
    playerCharacter: options.playerCharacter || "knight",
    playerSkin: options.playerSkin || "blue",

    // Board State
    boardRows: 0,
    boardCols: 0,
    boardSquares: [],

    // Animation State
    animationSpeedMultiplier:
      options.animationSpeedMultiplier !== undefined
        ? options.animationSpeedMultiplier
        : 1,
    isAnimating: false,
    diceRollAnimationBaseDuration: 1000,
    playerStepBaseDuration: 300,
    lastPlayerPositionBeforeThisMove: 0,

    // Game Summary State
    totalRolls: 0,
    diceObtained: 0,
    bossesDefeated: 0,
    perfectBossDefeats: 0,
    bribesBosses: 0,
    stats: {
      mostRolledNumber: {},
      mostUsedDie: {},
    },

    // Boss State
    currentBoss: null,
    currentBossHP: null,
    currentBossMaxHP: null,
  };

  // Now use our logic to generate the dynamic parts
  newGame = setupStage(newGame);
  return newGame;
}

// --- ADD THIS NEW CORE FUNCTION ---
function getRandomDiePool() {
  // Pool of possible dice
  return [
    { type: "Fixed", value: getRandomInt(2, 6) },
    { type: "Reverse Fixed", value: getRandomInt(2, 6) },
    { type: "Reverse Random" },
    { type: "20" },
    { type: "Fixed", value: 1 },
    { type: "Fixed", value: 6 },
    { type: "Random" },
  ];
}

function getRandomChoiceDiceOption() {
  const pool = getRandomDiePool();
  shuffleArray(pool);
  return pool[0];
}

function getRandomPickDieOptions() {
  const pool = getRandomDiePool();
  shuffleArray(pool);
  // Pick 3-4 unique dice
  const num = getRandomInt(3, 4);
  const sigs = new Set();
  const opts = [];
  for (const d of pool) {
    let sig = d.type;
    if (d.value) sig += `_${d.value}`;
    if (!sigs.has(sig)) {
      opts.push(d);
      sigs.add(sig);
    }
    if (opts.length >= num) break;
  }
  return opts;
}

function handlePlayerTurn(gameState, reservedDieIndex, user) {
  /* ------------  VALIDACIONES Y DATOS BÁSICOS  ------------ */
  if (
    !gameState.reservedDice ||
    reservedDieIndex === undefined ||
    reservedDieIndex === null ||
    !gameState.reservedDice[reservedDieIndex]
  ) {
    throw new Error("A valid die from the pouch must be used.");
  }

  const config = STAGE_CONFIGS[gameState.playerStage];
  const dieToRoll = gameState.reservedDice[reservedDieIndex];
  gameState.reservedDice.splice(reservedDieIndex, 1);

  /* --- Resultado del dado --- */
  let steps;
  switch (dieToRoll.type) {
    case "Fixed":          steps =  dieToRoll.value || 1;   break;
    case "20":             steps =  getRandomInt(1, 20);    break;
    case "Reverse Fixed":  steps = -(dieToRoll.value || 1); break;
    case "Reverse Random": steps = -getRandomInt(1, 6);     break;
    default:               steps =  getRandomInt(1, 6);     break;
  }

  /* --- placeholder para animación --- */
  let movementPath = [];

  /* --- estadísticas globales --- */
  gameState.totalRolls += 1;
  gameState.lastDiceRoll = { value: steps, type: dieToRoll.type };
  gameState.stats ??= { mostRolledNumber: {}, mostUsedDie: {} };
  gameState.stats.mostUsedDie[dieToRoll.type] =
    (gameState.stats.mostUsedDie[dieToRoll.type] || 0) + 1;

  /* =========================================================
     1)  FASES ESPECIALES (Boss o Minion)  – sin movimiento
     ========================================================= */
  if (gameState.gamePhase === "boss_encounter") {
    let damage = Math.abs(steps);

    // --- KNIGHT SKILL ---
    let skillMessage = "";
    if (
      gameState.playerCharacter === "knight" &&
      gameState.skillState.isActive
    ) {
      damage *= 2;
      gameState.skillState.isActive = false;
      gameState.skillState.isUsedInEncounter = true;
      skillMessage = "Knight's skill: Double damage! ";
    }

    gameState.lastDiceRoll = { value: damage, type: dieToRoll.type };
    gameState.currentBossHP = Math.max(
      0,
      (gameState.currentBossHP || 0) - damage
    );
    if (!gameState.currentDiceThrows) gameState.currentDiceThrows = [];
    gameState.currentDiceThrows.push(damage);

    // --- NEW: Update Stats ---
    if (!gameState.stats) gameState.stats = {};
    if (!gameState.stats.mostRolledNumber)
      gameState.stats.mostRolledNumber = {};
    if (!gameState.stats.mostUsedDie) gameState.stats.mostUsedDie = {};
    const rollValueStr = String(damage);
    gameState.stats.mostRolledNumber[rollValueStr] =
      (gameState.stats.mostRolledNumber[rollValueStr] || 0) + 1;

    // Check for boss defeat
    if (
      gameState.currentBossHP <= 0 &&
      gameState.gamePhase === "boss_encounter"
    ) {
      if (gameState.currentBossHP === 0) {
        gameState.perfectBossDefeats = (gameState.perfectBossDefeats || 0) + 1;
      }
      gameState.bossesDefeated = (gameState.bossesDefeated || 0) + 1;
      gameState.gameMessage = `You have defeated the boss!`;

      // --- LIVE USER STAT UPDATE ---
      if (user) {
        user.stats.totalBossesDefeated =
          (user.stats.totalBossesDefeated || 0) + 1;
        if (gameState.currentBossHP === 0) {
          user.stats.totalPerfectDefeats =
            (user.stats.totalPerfectDefeats || 0) + 1;
        }
        user = checkAndUnlockAchievements(user, gameState);
      }

      // --- SKILL RECHARGE ---
      // Reset skill for all characters after a boss is defeated
      gameState.skillState.isUsedInEncounter = false;
      gameState.gameMessage += " (Skill recharges!)";

      // --- REWARD: Add a die for defeating the boss ---
      if (gameState.reservedDice.length < gameState.maxDiceInBag) {
        gameState.reservedDice.push({ type: "Random" });
        gameState.diceObtained = (gameState.diceObtained || 0) + 1;
        gameState.gameMessage += ` You get a new die for your victory!`;
      }

      // Reset boss state
      gameState.currentBoss = null;
      gameState.currentBossHP = null;
      gameState.currentBossMaxHP = null;
      gameState.currentDiceThrows = [];
      // Advance to next stage
      gameState.playerStage++;
      if (gameState.playerStage > Object.keys(STAGE_CONFIGS).length) {
        gameState.isGameOver = true;
        gameState.showSummaryModal = true;
        gameState.gamePhase = "game_won";
        if (user) {
          user = updateUserStatsOnGameEnd(user, gameState);
        }
      } else {
        // Setup next stage
        gameState = setupStage(gameState);
      }
      console.log(
        `[BOSS ENCOUNTER] Boss defeated. Advancing to stage ${gameState.playerStage}.`
      );
      return { updatedState: gameState, updatedUser: user, movementPath };
    }
    // Check for failure (no dice left)
    if (gameState.reservedDice.length === 0 && gameState.currentBossHP > 0) {
      gameState.gameMessage = `You ran out of dice and failed to defeat the boss!`;
      gameState.isGameOver = true;
      gameState.showSummaryModal = true;
      gameState.gamePhase = "game_lost";
      if (user) {
        user = updateUserStatsOnGameEnd(user, gameState);
      }
      // Reset boss state
      gameState.currentBoss = null;
      gameState.currentBossHP = null;
      gameState.currentBossMaxHP = null;
      gameState.currentDiceThrows = [];
      console.log(`[BOSS ENCOUNTER] Boss failed. Game over.`);
      return { updatedState: gameState, updatedUser: user, movementPath };
    }
     // El jefe sigue vivo y todavía tienes dados → continúa el combate
    gameState.gameMessage =
      skillMessage +
      `You hit the boss for ${damage}! HP left: ${gameState.currentBossHP}.`;
    
      return { updatedState: gameState, updatedUser: user, movementPath };
  }

  if (gameState.gamePhase === "minion_encounter") {
        const minionSquare = gameState.boardSquares.find(
      (sq) => sq.id === gameState.playerPosition
    );
    if (
      !minionSquare ||
      !minionSquare.effectDetails ||
      minionSquare.currentEffectType !== "minion_encounter"
    ) {
      // Should not happen, but as a fallback, just end the phase
      gameState.gamePhase = "rolling";
      return { updatedState: gameState, updatedUser: user, movementPath };
    }

    let damage = Math.abs(steps);
    const penalty = minionSquare.effectDetails.penalty;

    // Apply Knight skill
    let minionSkillMessage = "";
    if (
      gameState.playerCharacter === "knight" &&
      gameState.skillState.isActive
    ) {
      damage *= 2;
      gameState.skillState.isActive = false;
      gameState.skillState.isUsedInEncounter = true;
      minionSkillMessage = "Knight's skill: Double damage! ";
    }

    // Apply damage to minion's HP
    minionSquare.effectDetails.hp -= damage;

    if (minionSquare.effectDetails.hp <= 0) {
      // Minion is defeated
      gameState.gameMessage =
        minionSkillMessage + `Minion defeated! (Damage: ${damage})`;
      // Reset skill for all characters after a minion is defeated
      gameState.skillState.isUsedInEncounter = false;
      gameState.gameMessage += " (Skill recharges!)";

      // Clean up the square and game state
      minionSquare.isTempBad = false;
      minionSquare.currentEffectType = "none";
      minionSquare.effectDetails = null;
      gameState.gamePhase = "rolling";

      if (gameState.reservedDice.length < gameState.maxDiceInBag) {
        gameState.reservedDice.push({ type: "Random" });
        gameState.gameMessage += " (New die added!)";
      }
    } else {
      // Minion survived, penalize player and continue encounter
      const hitPenalty = Math.floor(penalty / 2); // Less punishing than fleeing
      gameState.playerMoney -= hitPenalty;
      gameState.gameMessage =
        minionSkillMessage +
        `You hit the minion for ${damage}, but it survives! It hits you back, you lose $${hitPenalty}. (HP left: ${minionSquare.effectDetails.hp})`;
      // The game phase remains "minion_encounter", forcing another player action
    }

    // Garantiza un Random para el próximo tiro,
   // aunque sigamos en minion_encounter
   const hasRandom = gameState.reservedDice.some(d => d.type === "Random");
   if (!hasRandom) {
     if (gameState.reservedDice.length < gameState.maxDiceInBag) {
       gameState.reservedDice.push({ type: "Random" });
     } else {
       gameState.reservedDice[gameState.reservedDice.length - 1] = { type: "Random" };
     }
   }
    return { updatedState: gameState, updatedUser: user, movementPath };
  }

  /* =========================================================
     2)  MOVIMIENTO NORMAL
     ========================================================= */
  const totalBoardSquares = calculateTotalBoardSquares(config);

  /* Ruta de animación (si procede) */
  if (gameState.animationSpeedMultiplier !== 0 && steps !== 0) {
    const dir = steps >= 0 ? 1 : -1;
    let pos = gameState.playerPosition;
    for (let i = 0; i < Math.abs(steps); i++) {
      pos = (pos + dir + totalBoardSquares) % totalBoardSquares;
      movementPath.push(pos);
      if (pos === 0) break;   // parar en la salida si se completa la vuelta
    }
  }

  /* --- mover jugador --- */
  gameState.lastPlayerPositionBeforeThisMove = gameState.playerPosition;

  let newPosition;
  if (gameState.playerPosition === 0 && steps < 0) {
    newPosition = 0;                                // reversa desde la salida
  } else if (steps >= 0) {
    const distToLapEnd = totalBoardSquares - gameState.playerPosition;
    newPosition = steps >= distToLapEnd ? 0
                : gameState.playerPosition + steps;
  } else {
    newPosition = (gameState.playerPosition + steps + totalBoardSquares) %
                  totalBoardSquares;
  }
  gameState.playerPosition = newPosition;

  /* -------- efectos al aterrizar --------- */
const landedSquare = gameState.boardSquares.find(
  (sq) => sq.id === gameState.playerPosition
);

if (landedSquare) {
  let landedOnChoiceSquare = false;

  switch (landedSquare.currentEffectType) {
    /* --- DINERO --- */
    case "huge_money": {
      const amt =
        landedSquare.effectDetails?.amount ||
        calculateCurrentHugeMoneyValue(gameState.playerStage);
      gameState.playerMoney += amt;
      landedSquare.currentEffectType = "none";
      gameState.gameMessage = `You found a stash! +$${amt}`;
      break;
    }
    case "normal_money": {
      const amt = landedSquare.effectDetails?.amount || 1;
      gameState.playerMoney += amt;
      landedSquare.currentEffectType = "none";
      gameState.gameMessage = `Money! +$${amt}`;
      break;
    }

    /* --- CASILLAS DE ELECCIÓN --- */
    case "choice_dice_money": {
      landedOnChoiceSquare = true;
      gameState.gamePhase = "awaiting_choice";

      const dieOption = getRandomChoiceDiceOption();
      gameState.choiceDetails = {
        type: "dice_vs_money",
        message: "Choose your reward:",
        options: [
          {
            text: `Get $${10 * gameState.playerStage}`,
            action: "get_money_bonus",
            value: 10 * gameState.playerStage,
            visual: { type: "money" },
          },
          {
            text: `Get a ${dieOption.type}${
              dieOption.value ? ` (${dieOption.value})` : ""
            } die`,
            action: "get_chosen_die",
            value: dieOption,
            visual: { type: "die", dieData: dieOption },
          },
        ],
      };

      gameState.gameMessage = "Choose your reward!";
      break;
    }

    case "choice_pick_die": {
      landedOnChoiceSquare = true;
      gameState.gamePhase = "awaiting_choice";

      const dieOptions = getRandomPickDieOptions();
      gameState.choiceDetails = {
        type: "pick_die",
        message: "Choose a die to add to your pouch:",
        options: dieOptions.map((die) => ({
          text: `${die.type}${die.value ? ` (${die.value})` : ""} die`,
          action: "get_chosen_die",
          value: die,
          visual: { type: "die", dieData: die },
        })),
      };

      gameState.gameMessage = "Choose a die for your pouch!";
      break;
    }

    /* --- ENFRENTAMIENTO CON MINION --- */
    case "minion_encounter": {
      landedOnChoiceSquare = true;          // evita que se añada dado gratis

      /* repón el Random mientras seguimos en 'rolling' */
      ensureRandomDie(gameState);                 // ← ahora SÍ funciona

      gameState.gamePhase = "minion_encounter";   // después cambia la fase
      const hp = landedSquare.effectDetails?.hp ?? 1;
      gameState.gameMessage = `A minion appears! Defeat it! (HP: ${hp})`;
      break;
    }

    /* --- CASILLA VACÍA --- */
    default:
      gameState.gameMessage = "";            // nada que decir
      break;
  }

  /* Regla general: si NO es elección/combate, regala un dado extra */
  if (
    !landedOnChoiceSquare &&
    gameState.reservedDice.length < gameState.maxDiceInBag
  ) {
    gameState.reservedDice.push({ type: "Random" });
    gameState.gameMessage += gameState.gameMessage
      ? " (New die added to pouch!)"
      : "Landed on a safe square. New die added to pouch!";
  }
}

  /* --- comprobar fin de vuelta / jefe --- */
  const justCompletedLap =
    gameState.playerPosition === 0 &&
    gameState.lastPlayerPositionBeforeThisMove !== 0;

  if (justCompletedLap) {
    gameState.playerLap++;
    gameState.gameMessage =
      `Lap ${gameState.playerLap} of ${config.lapsToComplete} completed!`;
    if (gameState.playerLap > config.lapsToComplete) {
      return { updatedState: startBossEncounter(gameState), updatedUser: user };
    }
    setupLapEffects(gameState);
  }

  ensureRandomDie(gameState); // Asegurar al menos 1 Random die
  return { updatedState: gameState, updatedUser: user, movementPath };
}


function handlePlayerChoice(gameState, chosenOption) {
  if (gameState.gamePhase !== "awaiting_choice") {
    throw new Error("Not in a state to make a choice.");
  }

  switch (chosenOption.action) {
    case "get_money_bonus": {
      gameState.playerMoney += chosenOption.value;
      gameState.gameMessage = `You got $${chosenOption.value}!`;
      break;
    }
    case "get_chosen_die": {
      if (gameState.reservedDice.length < gameState.maxDiceInBag) {
        gameState.reservedDice.push(chosenOption.value);
        gameState.diceObtained = (gameState.diceObtained || 0) + 1;
        gameState.gameMessage = "New die added to your pouch!";
      } else {
        gameState.gameMessage = "Your dice pouch is full.";
      }
      break;
    }
    default:
      throw new Error("Unknown choice action.");
  }

  /* limpiar efecto de la casilla */
  const square = gameState.boardSquares.find(
    (sq) => sq.id === gameState.playerPosition
  );
  if (square) square.currentEffectType = "none";

  /* volver a la fase normal */
  gameState.choiceDetails = null;
  gameState.gamePhase = "rolling";

  ensureRandomDie(gameState);
  return gameState;         // el router muta `session` directamente
}

/* --- helper para garantizar 1 Random cuando estamos en fase rolling --- */
function ensureRandomDie(gameState) {
  if (gameState.gamePhase !== "rolling") return;           // nunca en boss/minion

  const hasRandom = gameState.reservedDice.some(d => d.type === "Random");
  if (hasRandom) return;

  if (gameState.reservedDice.length < gameState.maxDiceInBag) {
    gameState.reservedDice.push({ type: "Random" });
  } else {
    // bolsa llena y sin Random → sustituimos el último dado
    gameState.reservedDice[gameState.reservedDice.length - 1] = { type: "Random" };
  }
}

function handlePlayerBribe(gameState, user) {
  if (gameState.gamePhase !== "boss_encounter" || !gameState.currentBoss) {
    return { error: "Not in a boss encounter." };
  }

  const bribeCost = gameState.currentBoss.bribeCost || 9999;

  if (gameState.playerMoney < bribeCost) {
    return { error: "Not enough money to bribe the boss." };
  }

  // Deduct money and update stats
  gameState.playerMoney -= bribeCost;
  gameState.bribesBosses = (gameState.bribesBosses || 0) + 1;
  gameState.gameMessage = `You bribed ${gameState.currentBoss.name} for $${bribeCost}!`;

  // --- LIVE USER STAT UPDATE ---
  if (user) {
    user.stats.totalBribedBosses = (user.stats.totalBribedBosses || 0) + 1;
    user = checkAndUnlockAchievements(user, gameState);
  }

  // --- REWARD: Add a die for bypassing the boss ---
  if (gameState.reservedDice.length < gameState.maxDiceInBag) {
    gameState.reservedDice.push({ type: "Random" });
    gameState.diceObtained = (gameState.diceObtained || 0) + 1;
    gameState.gameMessage += ` You get a new die to continue your journey.`;
  }

  // Defeat the boss and advance to the next stage
  gameState.bossesDefeated = (gameState.bossesDefeated || 0) + 1; // Count as a defeat
  gameState.playerStage++;

  if (gameState.playerStage > Object.keys(STAGE_CONFIGS).length) {
    gameState.isGameOver = true;
    gameState.showSummaryModal = true;
    gameState.gamePhase = "game_won";
    if (user) {
      user = updateUserStatsOnGameEnd(user, gameState);
    }
  } else {
    gameState = setupStage(gameState); // Setup the next stage
  }

  // Clear boss state
  gameState.currentBoss = null;
  gameState.currentBossHP = null;
  gameState.currentBossMaxHP = null;
  gameState.currentDiceThrows = [];

  return { updatedState: gameState, updatedUser: user };
}

function handleThiefSkill(gameState) {
  if (
    (gameState.gamePhase !== "boss_encounter" &&
      gameState.gamePhase !== "minion_encounter") ||
    gameState.skillState.isUsedInEncounter
  ) {
    return { error: "Cannot use skill now." };
  }

  if (gameState.gamePhase === "minion_encounter") {
    const minionSquare = gameState.boardSquares.find(
      (sq) => sq.id === gameState.playerPosition
    );
    if (!minionSquare || !minionSquare.effectDetails) {
      return { error: "No minion to steal from." };
    }
    // Steal a smaller amount, don't end the fight
    const moneyStolen = Math.floor(
      (minionSquare.effectDetails.penalty * getRandomInt(25, 50)) / 100
    );
    gameState.playerMoney += moneyStolen;
    gameState.gameMessage = `Thief skill: Stole $${moneyStolen} from the minion!`;
    gameState.skillState.isUsedInEncounter = true; // Mark as used
    return { updatedState: gameState };
  }

  // Boss logic (existing)
  const bossName = gameState.currentBoss.name;
  const bribeCost = gameState.currentBoss.bribeCost || 100;
  let reward;

  const getMoneyReward = () =>
    Math.floor((bribeCost * getRandomInt(37, 75)) / 100);
  const getDiceReward = (pool) => {
    shuffleArray(pool);
    return pool[0];
  };

  const dicePools = {
    common: [
      { type: "Reverse Fixed", value: 6 },
      { type: "Fixed", value: 6 },
      { type: "Reverse Fixed", value: 5 },
      { type: "Fixed", value: 5 },
      { type: "20" },
    ],
    dragon: [
      { type: "Reverse Fixed", value: 6 },
      { type: "Fixed", value: 6 },
      { type: "20" },
    ],
  };

  switch (bossName) {
    case "Tax Collector":
      reward = { type: "money", value: getMoneyReward() };
      break;
    case "Greedy Goblin":
      reward =
        Math.random() < 0.5
          ? { type: "money", value: getMoneyReward() }
          : { type: "dice", value: getDiceReward(dicePools.common) };
      break;
    case "Orc Commander":
      reward = { type: "dice", value: getDiceReward(dicePools.common) };
      break;
    case "Treasurer Dragon":
    case "Dark Godcat":
      reward =
        Math.random() < 0.5
          ? { type: "money", value: getMoneyReward() }
          : { type: "dice", value: getDiceReward(dicePools.dragon) };
      break;
    default:
      return { error: "Unknown boss for skill." };
  }

  if (reward.type === "money") {
    gameState.playerMoney += reward.value;
    gameState.gameMessage = `Thief skill: Stole $${reward.value}!`;
  } else if (reward.type === "dice") {
    if (gameState.reservedDice.length < gameState.maxDiceInBag) {
      gameState.reservedDice.push(reward.value);
      gameState.gameMessage = `Thief skill: Stole a ${reward.value.type} die!`;
    } else {
      gameState.gameMessage =
        "Thief skill: Tried to steal a die, but pouch is full!";
    }
  }

  gameState.skillState.isUsedInEncounter = true;
  return { updatedState: gameState };
}

function handleWizardSkill(gameState, dieIndex) {
  if (
    !gameState.skillState.isActive || // Use skill only when active
    gameState.reservedDice.length >= gameState.maxDiceInBag ||
    dieIndex === undefined ||
    !gameState.reservedDice[dieIndex]
  ) {
    return { error: "Cannot use skill now or pouch is full." };
  }

  const dieToDuplicate = gameState.reservedDice[dieIndex];
  gameState.reservedDice.push({ ...dieToDuplicate }); // Add a copy

  gameState.gameMessage = `Wizard skill: Duplicated a ${dieToDuplicate.type} die!`;
  gameState.skillState.isActive = false; // Turn off toggle
  gameState.skillState.isUsedInEncounter = true; // Mark as used

  return { updatedState: gameState };
}

function handleFleeMinion(gameState) {
  if (gameState.gamePhase !== "minion_encounter") {
    return { error: "Not in a minion encounter." };
  }

  const minionSquare = gameState.boardSquares.find(
    (sq) => sq.id === gameState.playerPosition
  );

  if (!minionSquare || !minionSquare.effectDetails) {
    // Fallback in case something is wrong
    gameState.gamePhase = "rolling";
    return { updatedState: gameState };
  }

  const penalty = minionSquare.effectDetails.penalty;
  gameState.playerMoney -= penalty; // Can go negative

  // Clean up the square and game state
  minionSquare.isTempBad = false;
  minionSquare.currentEffectType = "none";
  minionSquare.effectDetails = null;
  gameState.gamePhase = "rolling";

  gameState.gameMessage = `You fled from the minion, losing $${penalty}.`;

  // Add a die to the pouch since the turn is over
  if (gameState.reservedDice.length < gameState.maxDiceInBag) {
    gameState.reservedDice.push({ type: "Random" });
    gameState.gameMessage += " (New die added!)";
  }

  return { updatedState: gameState };
}

function updateUserStatsOnGameEnd(user, finalGameState) {
  if (!user || !finalGameState) return user;

  const sessionStats = finalGameState;

  // Initialize if not present
  user.stats = user.stats || {};
  const diceStatsMap = new Map(Object.entries(user.stats.diceStats || {}));

  // Simple stats
  user.stats.totalDiceRolled =
    (user.stats.totalDiceRolled || 0) + sessionStats.totalRolls;
  user.stats.maxMoneyInRun = Math.max(
    user.stats.maxMoneyInRun || 0,
    sessionStats.playerMoney
  );

  // Conditional stats
  if (finalGameState.gamePhase === "game_won") {
    user.stats.totalWins = (user.stats.totalWins || 0) + 1;
  }

  // Merge dice stats
  if (sessionStats.stats && sessionStats.stats.mostUsedDie) {
    for (const [dieType, count] of Object.entries(
      sessionStats.stats.mostUsedDie
    )) {
      diceStatsMap.set(dieType, (diceStatsMap.get(dieType) || 0) + count);
    }
  }
  user.stats.diceStats = Object.fromEntries(diceStatsMap);

  // After all stats are updated, check for achievements
  user = checkAndUnlockAchievements(user, finalGameState);

  return user;
}

function checkAndUnlockAchievements(user, finalGameState) {
  if (!user || !finalGameState) return user;

  const userAchs = user.achievements || {};

  const unlock = (achId) => {
    // Unlock only if it's not already unlocked
    if (!userAchs[achId]?.unlocked) {
      userAchs[achId] = { unlocked: true, date: new Date() };
      console.log(
        `[Achievements] Unlocked: ${achId} for user ${user.username}`
      );
    }
  };

  const totalStages = Object.keys(STAGE_CONFIGS).length;

  // --- Check Individual Achievements ---

  // 1. "I shall pass!": Defeat your first boss (in this run or any).
  if (user.stats.totalBossesDefeated > 0) {
    unlock("first_boss");
  }

  // 2. "The Temptation": Bribe your first boss.
  if (user.stats.totalBribedBosses > 0) {
    unlock("first_bribe");
  }

  // 3. "Roller!": Roll 100+ dice in total.
  if (user.stats.totalDiceRolled >= 100) {
    unlock("roll_100");
  }

  // 4. "Kilos on Your Pockets": Have $500+ in a single run.
  if (finalGameState.playerMoney >= 500) {
    unlock("money_500");
  }

  // --- Run-Ending Achievements ---
  if (finalGameState.isGameOver) {
    // 5. "Area Cleared!": Win a run defeating all bosses (no bribes).
    if (
      finalGameState.gamePhase === "game_won" &&
      finalGameState.bribesBosses === 0 &&
      finalGameState.bossesDefeated === totalStages
    ) {
      unlock("clear_run");
    }

    // 6. "Glorious Victory!": Win a run defeating all bosses perfectly.
    if (
      finalGameState.gamePhase === "game_won" &&
      finalGameState.bribesBosses === 0 &&
      finalGameState.bossesDefeated === totalStages &&
      finalGameState.perfectBossDefeats === totalStages
    ) {
      unlock("perfect_run");
    }

    // 7. "Master of Persuasion": Win a run bribing all bosses.
    if (
      finalGameState.gamePhase === "game_won" &&
      finalGameState.bossesDefeated === 0 &&
      finalGameState.bribesBosses === totalStages
    ) {
      unlock("bribe_all");
    }
  }

  user.achievements = userAchs;
  return user;
}

// Export the functions we need to use in our routes
module.exports = {
  initializeNewGame,
  handlePlayerTurn,
  handlePlayerChoice,
  handlePlayerBribe,
  handleThiefSkill,
  handleWizardSkill,
  handleFleeMinion,
  startBossEncounter,
  STAGE_CONFIGS,
  // Export other functions you'll need later, like:
  // performPlayerTurn,
  // handleSquareLanding,
  // etc.
};
