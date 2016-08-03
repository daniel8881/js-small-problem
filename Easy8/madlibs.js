function madlibs(noun, verb, adj, adv) {
    var msg1 = "Do you " + verb + " your " + adj + " " + noun + " " + adv + "? That's hilarious!",
        msg2 = "I " + verb + " " + adj + " " + noun + " " + adv + ". Do you?",
        msg3 = "It is funny that the " + adj + " " + noun + " " + verb + "s " + adv + ".",
        msgs = [msg1, msg2, msg3],
        random_idx = Math.floor(Math.random() * msgs.length);
    return msgs[random_idx];
}

console.log(madlibs("dog", "walk", "blue", "quickly"));
console.log(madlibs("water", "enjoy", "sparkling", "naturally"));