const prompt = require("prompt-sync")({ sigint: true });

// // Find Member Of Mafia
// console.log("Find Member Of Mafia");
// console.log("----------------------------------------------------------------");

let name = prompt("What Your Name: ");
let age = Number(prompt("How Old are you?: "));
let place_to_live = prompt("Where Are You place to live: ");
let savings_in_dollars = Number(
  prompt("How Much Money Do You Have in Dollar?: ")
);

if (
  (age > 40 &&
    savings_in_dollars >= 10000000 &&
    place_to_live === "New York") ||
  place_to_live === "Havana" ||
  place_to_live === "Nevada"
) {
  console.log(`${name} is likely a mafia member with Don`);
} else if (
  (age > 25 && place_to_live === "New Jersey") ||
  place_to_live === "Nevada" ||
  (place_to_live === "Manhattan" &&
    savings_in_dollars >= 1000000 &&
    savings_in_dollars <= 2000000)
) {
  console.log(`${name} is likely a mafia member with Underboss`);
} else if (
  (age > 18 && place_to_live === "California") ||
  place_to_live === "Detroit" ||
  (place_to_live === "Boston" &&
    savings_in_dollars >= 0 &&
    savings_in_dollars <= 1000000)
) {
  console.log(`${name} is likely a mafia member with Capo`);
} else {
  console.log(`${name} is not suspicious`);
}

// Detective investigating of death of a young businessman
console.log("----------------------------------------------------------------");
console.log("Detective investigating of death of a young businessman");
console.log("----------------------------------------------------------------");

let point = 0;
let powder_in_victim_stomach_in_mg = Number(
  prompt("Powder in victim stomach in mg: ")
);
let cctv_show_clearly_someone_putting_something =
  prompt("CCTV show clearly someone putting something Y/n (default: y): ") ===
  "n"
    ? false
    : true;

let cctv_show_blurredly_someone_putting_something =
  cctv_show_clearly_someone_putting_something
    ? false
    : prompt(
        "CCTV show blurred someone putting something Y/n (default: y): "
      ) === "n"
    ? false
    : true;
let there_are_two_or_more_fingerprints_in_the_glass =
  prompt(
    "There are two or more fingerprints in the glass? Y/n (default: y): "
  ) === "n"
    ? false
    : true;
let there_are_suspicius_movements =
  prompt("There ara suspicius movements Y/n (default: y)") === "n"
    ? false
    : true;
let there_was_cyanide_powder_in_the_perpetrator_pocket =
  prompt("There was a cyanide in the perpetratorpocket Y/n (default: n)") ===
  "n"
    ? false
    : true;

if (powder_in_victim_stomach_in_mg > 50) {
  point += 500;
} else if (powder_in_victim_stomach_in_mg >= 0) {
  point += 50;
}

if (cctv_show_clearly_someone_putting_something) {
  point += 250;
} else if (cctv_show_blurredly_someone_putting_something) {
  point += 150;
}

if (there_are_two_or_more_fingerprints_in_the_glass) {
  point += 50;
}

if (there_are_suspicius_movements) {
  point += 100;
}

if (there_was_cyanide_powder_in_the_perpetrator_pocket) {
  point += 750;
}

if (
  cctv_show_clearly_someone_putting_something &&
  there_are_two_or_more_fingerprints_in_the_glass
) {
  console.log("there was a murder of a businessman");
} else {
  if ((point) => 1300) {
    console.log("there was a murder of a businessman");
  } else {
    console.log("there was no murder of a businessman");
  }
}

// find out the player's position status from the jersey number he wears
console.log("----------------------------------------------------------------");
console.log(
  "find out the player's position status from the jersey number he wears"
);
console.log("----------------------------------------------------------------");

let jersey_number = Number(prompt("Input Number Jersey: "));

if (jersey_number % 3 === 0 && jersey_number % 5 === 0) {
  console.log(`Jersey Number with ${jersey_number} is a Keeper`);
} else if (
  jersey_number % 2 === 0 &&
  jersey_number >= 50 &&
  jersey_number <= 100
) {
  console.log(`Jersey Number with ${jersey_number} is a Team captain`);
} else if (jersey_number % 2 === 0) {
  console.log(`Jersey Number with ${jersey_number} is a Target attacker`);
} else if (jersey_number % 2 === 1 && jersey_number >= 90) {
  console.log(`Jersey Number with ${jersey_number} is a Playmaker`);
} else if (jersey_number % 2 === 1) {
  console.log(`Jersey Number with ${jersey_number} is a Defender`);
}

// program to display a prime number output after a certain number
console.log("----------------------------------------------------------------");
console.log("program to display a prime number output after a certain number");
console.log("----------------------------------------------------------------");

let prime_number = Number(prompt("input prime number: "));
let next_prime_number = prime_number + 1;
let factor = 0;
let next_prime_not_found = true;
for (let i = 1; i <= prime_number; i++) {
  if (prime_number % i === 0) {
    factor++;
  }
}

if (factor === 2) {
  while (next_prime_not_found) {
    let factor = 0;
    for (let i = 1; i <= next_prime_number; i++) {
      if (next_prime_number % i === 0) {
        factor++;
      }
    }
    if (factor === 2) {
      next_prime_not_found = false;
      console.log(
        `The next prime number after ${prime_number} is ${next_prime_number}`
      );
    } else {
      next_prime_number++;
    }
  }
} else {
  console.log("Not a prime number");
}

// program to count the number of prime numbers in the range of initial input to final
console.log("----------------------------------------------------------------");
console.log(
  "program to count the number of prime numbers in the range of initial input to final"
);
console.log("----------------------------------------------------------------");

let initial_input = Number(prompt("Enter the initial input: "));
let final_input = Number(prompt("Enter the final input: "));
let count_prime_number = 0;
let prime_number_sum = "";

for (let i = initial_input; i <= final_input; i++) {
  let factor = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      factor++;
    }
  }
  if (factor === 2) {
    count_prime_number += i;
    if (prime_number_sum === "") {
      prime_number_sum = i;
    } else {
      prime_number_sum += " + " + i;
    }
  }
}

console.log(
  `The number of prime numbers between ${initial_input} and ${final_input} is ${count_prime_number}`
);
console.log(`${prime_number_sum} = ${count_prime_number}`);
