function minilang(command) {
  var commands = command.split(" "),
      register = 0
      stack = [];

  commands.forEach(function(command, idx) {
    if (/\d/.test(command)) {
      register = +command;
    } else if (command === "PUSH") {
      stack.push(+register);
    } else if (command === "ADD") {
      register += stack.pop();
    } else if (command === "SUB") {
      register -= stack.pop();
    } else if (command === "MULT") {
      register = register * stack.pop();
    } else if (command === "DIV") {
      register = Math.floor(register / stack.pop());
    } else if (command === "MOD") {
      register = register % stack.pop();
    } else if (command === "POP") {
      register = stack.pop();
    } else if (command === "PRINT") {
      console.log(register);
    }
  });
}

minilang('PRINT');
// 0
minilang('5 PUSH 3 MULT PRINT');
// 15
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8
minilang('5 PUSH POP PRINT');
// 5
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7
minilang('3 PUSH PUSH 7 DIV MULT PRINT ');
// 6
minilang('4 PUSH PUSH 7 MOD MULT PRINT ');
// 12
minilang('-3 PUSH 5 SUB PRINT');
// 8
minilang('6 PUSH');
