function calculate(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      whoWin: null,
      logMessageArray: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        //draw
        this.whoWin = "draw";
      } else if (value <= 0) {
        //Player lose
        this.whoWin = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        //draw
        this.whoWin = "draw";
      } else if (value <= 0) {
        //Monster lose
        this.whoWin = "player";
      }
    },
  },
  computed: {
    monsterBar() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBar() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    toDisableButton() {
      return this.currentRound % 3 === 0;
    },
  },
  methods: {
    surrender() {
      this.whoWin = "monster";
    },
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.whoWin = null;
      currentRound = 0;
      this.logMessageArray = [];
    },
    attackMonster() {
      this.currentRound++;
      const damage = calculate(5, 12);
      this.monsterHealth -= damage;
      this.showLogMessages("player", "attack", damage);
      this.attackPlayer();
    },
    attackPlayer() {
      const damage = calculate(15, 8);
      this.playerHealth -= damage;
      this.showLogMessages("monster", "attack", damage);
    },
    specialAttack() {
      this.currentRound++;
      const damage = calculate(10, 25);
      this.monsterHealth -= damage;
      this.showLogMessages("player", "special-attack", damage);
      this.attackPlayer();
    },
    healPlayer() {
      const healPoints = calculate(9, 20);
      if (this.playerHealth + healPoints > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healPoints;
      }
      this.showLogMessages("player", "heal", healPoints);
      this.attackMonster();
    },
    showLogMessages(who, action, value) {
      this.logMessageArray.unshift({
        actionBy: who,
        currAction: action,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
