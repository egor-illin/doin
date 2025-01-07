let pendents = [];

// Adding elements to the array
pendents.push("Task 1");
pendents.push("Task 2");
pendents.push("Task 3");

console.log(pendents); // Output: ["Task 1", "Task 2", "Task 3"]

// Accessing elements in the array
console.log(pendents[0]); // Output: "Task 1"
console.log(pendents[1]); // Output: "Task 2"

// Modifying elements in the array
pendents[2] = "Updated Task";
console.log(pendents); // Output: ["Task 1", "Task 2", "Updated Task"]

// Removing elements from the array
pendents.pop();
console.log(pendents); // Output: ["Task 1", "Task 2"]
