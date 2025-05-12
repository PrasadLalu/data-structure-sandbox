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


---
---
---

content = """# 🛠️ System Design Roadmap for JavaScript/Node.js Developers (4 Weeks)

## 🧭 Week 1: Fundamentals of System Design
### ✅ Topics to Learn:
- What is System Design?
- Client-server architecture
- Types of system design: High-level vs. Low-level
- Basics of APIs, HTTP, REST, and WebSockets

### 🔧 Practice:
- Build a basic API with Express.js (CRUD operations)
- Diagram a simple system: URL Shortener or Notes App

### 📚 Resources:
- [System Design Primer](https://github.com/donnemartin/system-design-primer)
- [Roadmap.sh - System Design](https://roadmap.sh/system-design)
- [CS50 Lecture on HTTP](https://cs50.harvard.edu/web/2020/lectures/1/)

---

## 🧭 Week 2: Designing Scalable Systems
### ✅ Topics to Learn:
- Load Balancers
- Horizontal vs. Vertical Scaling
- Caching (Redis, CDN)
- Databases: SQL vs NoSQL

### 🔧 Practice:
- Add Redis caching to a Node.js API
- Draw a system for a scalable image hosting service

### 📚 Resources:
- [High Scalability Blog](http://highscalability.com/)
- [Designing Data-Intensive Applications (Book)](https://dataintensive.net/)
- [Redis with Node.js](https://www.digitalocean.com/community/tutorials/how-to-use-redis-with-node-js)

---

## 🧭 Week 3: Distributed Systems & Databases
### ✅ Topics to Learn:
- CAP Theorem
- Partitioning, Sharding
- Consistency and Availability
- Message Queues (RabbitMQ, Kafka)
- Replication

### 🔧 Practice:
- Design a messaging queue system
- Add RabbitMQ or BullMQ to a Node.js service

### 📚 Resources:
- [Kafka in a Nutshell – YouTube](https://www.youtube.com/watch?v=Gz8IKqX2oTM)
- [CAP Theorem explained simply](https://towardsdatascience.com/cap-theorem-and-distributed-database-management-systems-5c2be977950e)

---

## 🧭 Week 4: Real-world System Design Examples
### ✅ Topics to Learn:
- Designing YouTube, Uber, Twitter, WhatsApp
- Monitoring, Logging, and Alerting
- Microservices vs Monolith
- API Gateway, Service Discovery

### 🔧 Practice:
- Diagram a real-world app (e.g., ride-sharing or chat system)
- Use tools like Postman, K6, or Grafana with your Node.js apps

### 📚 Resources:
- [Grokking the System Design Interview (Educative.io)](https://www.educative.io/courses/grokking-the-system-design-interview)
- [Awesome System Design Repo](https://github.com/madd86/awesome-system-design)
- [Node.js Microservices](https://www.freecodecamp.org/news/nodejs-microservices/)

---

## 💡 Bonus Tools & Tips:
- Learn to draw diagrams: [draw.io](https://app.diagrams.net/), [Whimsical](https://whimsical.com/)
- Prepare real-world design case studies for interviews
- Document trade-offs and justify design choices
"""

Path("System_Design_Roadmap_JS.md").write_text(content)
print("Markdown file created: System_Design_Roadmap_JS.md")

