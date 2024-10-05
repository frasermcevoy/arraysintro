// Step 1 Declaring Arrays

let team =["Raptors","Knicks","Pistons","Clippers","Spurs"];

console.log(team, " - this is the original team array");

// Step 2 Accessing Arrays

console.log(team[0], "team 1");
console.log(team[2], "team 3, middle");
console.log(team[4], "team 5");

// Step 3 Array Properties - determine number of elements in my array

console.log(team.length, " - number of teams")

// Step 4 Array Methods; * note review mutating array vs const at start
//

//push()
team.push("Hornets");
console.log(team, "PUSH adds team");

console.log(team.length, " - shows new number of teams")


//pop()
let lastTeam = team.pop();
console.log(lastTeam, " - 'POPs out' last team");

console.log(team.length, " - shows new number of teams, back to 5")

//shift()
firstTeam = team.shift();
console.log(firstTeam, "- SHIFT highlights and removes first element from array, array length changed, again");

console.log(team, " - new array list")

console.log(team.length, " - shows new number of teams, down to 4")

// Step 5 Iterating Through Arrays


//for...of Loop

for (const teams of team) {
    console.log(teams);
}

// Step 6 Array Destructuring // need to review this section

let teams = ["Bulls", "Pelicans", "Mavericks"];
let [firstTeams, secondTeams] = teams;

console.log(firstTeams, " - First team Bulls"); 
console.log(secondTeams, " - Second team Pelicans"); 