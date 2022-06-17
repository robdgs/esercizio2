const me = {
  name: "Roberta",
  surname: "Dag",
  position: "laying in bed",
  status: "half asleep",
  needs: "caffeine",
  equipment: "pajamas",
  weapon: "mortal yawning",
  tryingToStandUp: function () {
    return "OOOPS,I fell";
  },
  tryingToSleep: function () {
    return "I am so awak...Zzzzz.";
  },

  getFullName: function () {
    return this.name + " " + this.surname;
  },

  whatsInMyCoffee: ["chlorine", "peppermint", "cyanide"],
};

console.log(
  "Hello, my name is",
  me.getFullName(),
  "I am",
  me.position,
  me.status,
  "and I need",
  me.needs,
  "to start my day.",
  "I swear",
  me.tryingToSleep(),
  "MHH, I will try to stand up...",
  me.tryingToStandUp(),
  "rip.",
  "It's time to get a coffee. Uhm, this coffee smells weird... It seems there is some",
  me.whatsInMyCoffee[2],
  "in there! :) If I'll ever find who did that, I will use my",
  me.weapon,
  "against him."
);
