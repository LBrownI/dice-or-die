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
    minBadSquares: 1,
    maxBadSquares: 2,
    minChoiceDiceMoneySquares: 2,
    maxChoiceDiceMoneySquares: 4,
    minChoicePickDieSquares: 2,
    maxChoicePickDieSquares: 4,
    bossName: "Recaudador de Impuestos",
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
    minBadSquares: 2,
    maxBadSquares: 4,
    minChoiceDiceMoneySquares: 4,
    maxChoiceDiceMoneySquares: 8,
    minChoicePickDieSquares: 4,
    maxChoicePickDieSquares: 8,
    bossName: "Goblin Codicioso",
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
    minBadSquares: 2,
    maxBadSquares: 4,
    minChoiceDiceMoneySquares: 4,
    maxChoiceDiceMoneySquares: 8,
    minChoicePickDieSquares: 4,
    maxChoicePickDieSquares: 8,
    bossName: "Comandante Orco",
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
    minBadSquares: 4,
    maxBadSquares: 8,
    minChoiceDiceMoneySquares: 8,
    maxChoiceDiceMoneySquares: 16,
    minChoicePickDieSquares: 8,
    maxChoicePickDieSquares: 16,
    bossName: "Dragón Tesorero",
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
    minBadSquares: 4,
    maxBadSquares: 8,
    minChoiceDiceMoneySquares: 8,
    maxChoiceDiceMoneySquares: 16,
    minChoicePickDieSquares: 8,
    maxChoicePickDieSquares: 16,
    bossName: "Gato Dios Oscuro",
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

  // Add bad squares
  const numBadSquares = getRandomInt(
    config.minBadSquares,
    config.maxBadSquares
  );
  for (let i = 0; i < numBadSquares; i++) {
    if (availableCandidateIds.length === 0) break;
    const badId = availableCandidateIds.pop();
    const square = gameState.boardSquares[squareIdToIndexMap.get(badId)];
    if (square) {
      square.isTempBad = true;
      square.currentEffectType = "temp_bad_lap";
      square.effectDetails = {
        penalty: getRandomInt(5, 15) * gameState.playerStage,
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

// --- Main Initialization Function ---
function initializeNewGame() {
  let newGame = {
    // Player State
    playerPosition: 0,
    playerMoney: 0,
    playerLap: 1,
    playerStage: 1,
    lastDiceRoll: null,
    reservedDice: [],
    maxDiceInBag: MAX_RESERVED_DICE,
    isGameOver: false,
    gamePhase: "rolling",
    choiceDetails: null,
    playerCharacter: "knight", // valor por defecto
    playerSkin: "blue",        // valor por defecto


    // Board State
    boardRows: 0,
    boardCols: 0,
    boardSquares: [],

    // Animation State
    animationSpeedMultiplier: 1,
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
  };

  // Now use our logic to generate the dynamic parts
  newGame = setupStage(newGame);
  return newGame;
}

// --- ADD THIS NEW CORE FUNCTION ---
function handlePlayerTurn(gameState, reservedDieIndex = -1) {
  // 1. Determine the dice roll
  let steps;
  let dieToRoll;
  const config = STAGE_CONFIGS[gameState.playerStage];

  if (reservedDieIndex >= 0 && gameState.reservedDice[reservedDieIndex]) {
    // Use the reserved die and remove it from the array
    dieToRoll = gameState.reservedDice[reservedDieIndex];
    gameState.reservedDice.splice(reservedDieIndex, 1);
  } else {
    dieToRoll = { type: "Random" };
  }

  // Calculate steps based on die type
  switch (dieToRoll.type) {
    case "Fixed":
      steps = dieToRoll.value || 1;
      break;
    case "20":
      steps = getRandomInt(1, 20);
      break;
    case "Reverse Fixed":
      steps = -(dieToRoll.value || 1);
      break;
    case "Reverse Random":
      steps = -getRandomInt(1, 6);
      break;
    default: // Random
      steps = getRandomInt(1, 6);
  }

  gameState.lastDiceRoll = { value: steps, type: dieToRoll.type };

  // 2. Move the player
  const totalBoardSquares = calculateTotalBoardSquares(config);
  gameState.lastPlayerPositionBeforeThisMove = gameState.playerPosition;
  gameState.playerPosition =
    (gameState.playerPosition + steps + totalBoardSquares) % totalBoardSquares;

  // 3. Handle landing effects
  const landedSquare = gameState.boardSquares.find(
    (sq) => sq.id === gameState.playerPosition
  );
  if (landedSquare) {
    switch (landedSquare.currentEffectType) {
      case "huge_money":
        gameState.playerMoney +=
          landedSquare.effectDetails?.amount ||
          calculateCurrentHugeMoneyValue(gameState.playerStage);
        landedSquare.currentEffectType = "none"; // Consume the effect
        gameState.gameMessage = `¡Encontraste dinero! +$${
          landedSquare.effectDetails?.amount ||
          calculateCurrentHugeMoneyValue(gameState.playerStage)
        }`;
        break;
      case "normal_money":
        gameState.playerMoney += landedSquare.effectDetails?.amount || 1;
        landedSquare.currentEffectType = "none"; // Consume the effect
        gameState.gameMessage = `¡Dinero! +$${
          landedSquare.effectDetails?.amount || 1
        }`;
        break;
      case "choice_dice_money":
        gameState.gamePhase = "awaiting_choice";
        // The backend now generates the choice details for the frontend
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
              text: "Get a Fixed 4 Die",
              action: "get_chosen_die",
              value: { type: "Fixed", value: 4 },
              visual: { type: "die", dieData: { type: "Fixed", value: 4 } },
            },
          ],
        };
        gameState.gameMessage = "¡Elige tu recompensa!";
        break;
      case "choice_pick_die":
        gameState.gamePhase = "awaiting_choice";
        gameState.choiceDetails = {
          type: "pick_die",
          message: "Choose a die to add to your collection:",
          options: [
            {
              text: "Fixed 6 Die",
              action: "get_chosen_die",
              value: { type: "Fixed", value: 6 },
              visual: { type: "die", dieData: { type: "Fixed", value: 6 } },
            },
            {
              text: "D20 Die",
              action: "get_chosen_die",
              value: { type: "20" },
              visual: { type: "die", dieData: { type: "20" } },
            },
            {
              text: "Reverse Fixed 3 Die",
              action: "get_chosen_die",
              value: { type: "Reverse Fixed", value: 3 },
              visual: {
                type: "die",
                dieData: { type: "Reverse Fixed", value: 3 },
              },
            },
          ],
        };
        gameState.gameMessage = "¡Elige un dado para tu colección!";
        break;
      case "temp_bad_lap":
        const penalty = landedSquare.effectDetails?.penalty || 10;
        gameState.playerMoney = Math.max(0, gameState.playerMoney - penalty);
        landedSquare.isTempBad = false;
        landedSquare.currentEffectType = "none";
        gameState.gameMessage = `¡Trampa! Perdiste $${penalty}`;
        break;
    }
  }

  // 4. Check for lap completion
  if (
    gameState.playerPosition === 0 &&
    gameState.lastPlayerPositionBeforeThisMove > 0
  ) {
    gameState.playerLap++;
    if (gameState.playerLap > config.lapsToComplete) {
      // Stage completed, move to next stage or boss
      gameState.playerStage++;
      if (gameState.playerStage > Object.keys(STAGE_CONFIGS).length) {
        gameState.isGameOver = true;
        gameState.gamePhase = "game_won";
        gameState.gameMessage =
          "¡Felicidades! ¡Has completado todos los niveles!";
      } else {
        // Setup next stage
        gameState = setupStage(gameState);
        gameState.gameMessage = `¡Nivel ${gameState.playerStage} completado! Comenzando nuevo nivel...`;
      }
    } else {
      // New lap, regenerate effects
      setupLapEffects(gameState);
      gameState.gameMessage = `¡Vuelta ${gameState.playerLap} completada!`;
    }
  }

  // 5. Update stats
  gameState.totalRolls += 1;

  // 6. Return the fully updated game state
  return gameState;
}

// --- ADD A FUNCTION FOR HANDLING CHOICES ---
function handlePlayerChoice(gameState, chosenOption) {
  if (gameState.gamePhase !== "awaiting_choice") {
    throw new Error("Not in a state to make a choice.");
  }

  switch (chosenOption.action) {
    case "get_money_bonus":
      gameState.playerMoney += chosenOption.value;
      gameState.gameMessage = `¡Obtuviste $${chosenOption.value}!`;
      break;
    case "get_chosen_die":
      if (gameState.reservedDice.length < gameState.maxDiceInBag) {
        gameState.reservedDice.push(chosenOption.value);
        gameState.diceObtained += 1;
        gameState.gameMessage = `¡Nuevo dado añadido a tu colección!`;
      } else {
        gameState.gameMessage = "Tu bolsa de dados está llena.";
      }
      break;
  }

  // Clear the choice and return to rolling phase
  gameState.choiceDetails = null;
  gameState.gamePhase = "rolling";

  // Also clear the effect from the square they landed on
  const landedSquare = gameState.boardSquares.find(
    (sq) => sq.id === gameState.playerPosition
  );
  if (landedSquare) {
    landedSquare.currentEffectType = "none";
  }

  return gameState;
}

// Export the functions we need to use in our routes
module.exports = {
  initializeNewGame,
  handlePlayerTurn,
  handlePlayerChoice,
  STAGE_CONFIGS,
  // Export other functions you'll need later, like:
  // performPlayerTurn,
  // handleSquareLanding,
  // etc.
};
