// 🟢 What are arrow functions, and how are they different from regular functions?
//  🟢 Explain the concept of “this” in JavaScript.
//  🟢 What are higher-order functions? Give an example.
//  🟢 What is the purpose of the bind(), call(), and apply() methods?
//  🟢 What is the difference between undefined and null?
// ⚛️ React Interview Questions
// 🔵 What is the difference between useEffect and useLayoutEffect?
//  🔵 How do keys help in rendering lists in React?
//  🔵 What are portals in React and when should you use them?
//  🔵 What are error boundaries in React?
//  🔵 Explain lazy loading and code splitting in React apps.
// 👨‍💻 Coding Challenges
// 🧠 Check if a string is a palindrome (without using reverse method).
//  🧠 Create a search filter component in React to filter a list based on user input.

const person = { name: "Alice" };

function greet() {
  console.log(`Hello, ${this.name}`);
}

const greetAlice = greet.bind(person);
greetAlice(); // Output: Hello, Alice




1. Reverse a String 
2. Check if a String is a Palindrome 
3. Remove Duplicates from a String 
4. Find the First Non-Repeating Character 
5. Count the Occurrences of Each Character 
6. Reverse Words in a Sentence 
7. Check if Two Strings are Anagrams 
8. Find the Longest Substring Without Repeating Characters 
9. Convert a String to an Integer (atoi Implementation) 
10. Compress a String (Run-Length Encoding) 
11. Find the Most Frequent Character 
12. Find All Substrings of a Given String 
13. Check if a String is a Rotation of Another String 
14. Remove All White Spaces from a String 
15. Check if a String is a Valid Shuffle of Two Strings 
16. Convert a String to Title Case 
17. Find the Longest Common Prefix 
18. Convert a String to a Character Array 
19. Replace Spaces with %20 (URL Encoding) 
20. Convert a Sentence into an Acronym 
21. Check if a String Contains Only Digits 
22. Find the Number of Words in a String 
23. Remove a Given Character from a String 
24. Find the Shortest Word in a String 
25. Find the Longest Palindromic Substring