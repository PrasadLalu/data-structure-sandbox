# Data Structure Sandbox

# Save this as create_study_plan.py and run it with Python

from pathlib import Path

content = """# 📚 Data Structures in JavaScript – 4-Week Study Plan

## 🧭 Week 1: Basics & Arrays
### ✅ Topics to Learn:
- What are Data Structures?
- Time & Space Complexity (Big O Notation)
- Arrays (static vs dynamic), common operations

### 🔧 Practice:
- Implement basic array methods (push, pop, shift, unshift, splice)
- Rotate an array, reverse it, find max/min

### 📚 Resources:
- [freeCodeCamp Data Structures (JS)](https://www.freecodecamp.org/learn)
- [JavaScript.info Arrays](https://javascript.info/array)

---

## 🧭 Week 2: Stacks, Queues, and Linked Lists
### ✅ Topics to Learn:
- Stack (LIFO), Queue (FIFO) – with use cases
- Singly Linked List
- Doubly Linked List (optional at this stage)

### 🔧 Practice:
- Build your own Stack and Queue using JavaScript classes
- Implement a Linked List from scratch (with insert, delete, search)

### 📚 Resources:
- [Visual Algo – Stacks & Queues](https://visualgo.net/en/list)
- [Stack vs Queue - YouTube (JavaScript)](https://www.youtube.com/watch?v=wjI1WNcIntg)

---

## 🧭 Week 3: Trees & Hash Tables
### ✅ Topics to Learn:
- Binary Trees
- Binary Search Trees (BST)
- Tree Traversals: Inorder, Preorder, Postorder
- Hash Tables / Hash Maps

### 🔧 Practice:
- Build a basic BST with insert/search/delete
- Use objects to simulate a hash table

### 📚 Resources:
- [The Coding Train: Trees in JavaScript](https://www.youtube.com/watch?v=oSWTXtMglKE)
- [GeeksForGeeks Trees (JS Examples)](https://www.geeksforgeeks.org/binary-tree-data-structure/)

---

## 🧭 Week 4: Graphs & Recap with Algorithms
### ✅ Topics to Learn:
- Graph Basics (Adjacency List/Matrix)
- Breadth-First Search (BFS)
- Depth-First Search (DFS)
- Review all previous structures

### 🔧 Practice:
- Build a graph class
- Implement BFS and DFS in JS
- Combine multiple structures in a project (e.g., maze solver)

### 📚 Resources:
- [William Fiset’s Graph Series (Java, but logic is universal)](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsD06x59fxczdWLhYYN9bHn_)
- [Graph Traversals Visualized](https://visualgo.net/en/dfsbfs)

---

## 💡 Bonus Tips:
- Use **Node.js REPL** or an online playground like [JSFiddle](https://jsfiddle.net/) or [Replit](https://replit.com/) for quick testing.
- Use **LeetCode (filter by JavaScript)**: https://leetcode.com/problemset/all/?language=JavaScript
- Keep a **notebook or digital notes**—write down your implementations and time complexities.
"""

Path("Data_Structures_JS_Study_Plan.md").write_text(content)
print("Markdown file created: Data_Structures_JS_Study_Plan.md")
