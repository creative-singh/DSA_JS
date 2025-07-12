# Topological Sort

![Topological Sort Visualization](../GraphAssets/Topological%20Sort.png)

## 📚 Quick Revision Notes

### What is Topological Sort?
A linear ordering of vertices in a **directed acyclic graph (DAG)** where for every directed edge (u, v), vertex u comes before vertex v in the ordering.
- **Purpose**: Used to determine the order of tasks that depend on each other.
- **Key Property**: Only works on DAGs (no cycles allowed).

### When to Use?
- **Course Prerequisites**: Determine course order based on prerequisites
- **Build Systems**: Compile dependencies in correct order
- **Task Scheduling**: Execute tasks with dependencies
- **Package Management**: Install packages with dependencies

### Algorithm Steps:
1. **Calculate In-Degree**: Count incoming edges for each vertex
2. **Queue Initialization**: Add all vertices with in-degree 0 to queue
3. **Process Queue**: Remove vertex, reduce in-degree of neighbors
4. **Add to Result**: Add processed vertex to result
5. **Repeat**: Continue until queue is empty

### Time & Space Complexity:
- **Time**: O(V + E) 
  - where, V = vertices, E = edges
- **Space**: O(V) for storing result and queue

---

## 🚀 JavaScript Implementation

### Method 1: Kahn's Algorithm (BFS-based)

```javascript
/**
 * Topological Sort using Kahn's Algorithm
 * @param {number} numCourses - Total number of courses/vertices
 * @param {number[][]} prerequisites - Array of [course, prerequisite] pairs
 * @returns {number[]} - Topological order or empty array if cycle exists
 */
function topologicalSort(numCourses, prerequisites) {
    // Step 1: Build adjacency list and calculate in-degrees
    const graph = new Array(numCourses).fill().map(() => []);
    const inDegree = new Array(numCourses).fill(0);
    
    for (const [course, prerequisite] of prerequisites) {
        graph[prerequisite].push(course);
        inDegree[course]++;
    }
    
    // Step 2: Initialize queue with vertices having in-degree 0
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    // Step 3: Process queue and build result
    const result = [];
    let processedCount = 0;
    
    while (queue.length > 0) {
        const current = queue.shift();
        result.push(current);
        processedCount++;
        
        // Reduce in-degree of neighbors
        for (const neighbor of graph[current]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    // Check if all vertices were processed (no cycles)
    return processedCount === numCourses ? result : [];
}

// Example Usage
const numCourses = 6;
const prerequisites = [
    [1, 0],  // Course 1 depends on Course 0
    [2, 0],  // Course 2 depends on Course 0
    [3, 1],  // Course 3 depends on Course 1
    [4, 1],  // Course 4 depends on Course 1
    [5, 2],  // Course 5 depends on Course 2
    [5, 3]   // Course 5 depends on Course 3
];

console.log("Topological Order:", topologicalSort(numCourses, prerequisites));
// Output: [0, 1, 2, 3, 4, 5] or [0, 2, 1, 3, 4, 5]
```

### Method 2: DFS-based (Recursive)

```javascript
/**
 * Topological Sort using DFS
 * @param {number} numCourses - Total number of courses/vertices
 * @param {number[][]} prerequisites - Array of [course, prerequisite] pairs
 * @returns {number[]} - Topological order or empty array if cycle exists
 */
function topologicalSortDFS(numCourses, prerequisites) {
    // Build adjacency list
    const graph = new Array(numCourses).fill().map(() => []);
    for (const [course, prerequisite] of prerequisites) {
        graph[prerequisite].push(course);
    }
    
    const visited = new Array(numCourses).fill(false);
    const recStack = new Array(numCourses).fill(false);
    const result = [];
    
    // DFS function to detect cycles and build result
    function dfs(node) {
        if (recStack[node]) return false; // Cycle detected
        if (visited[node]) return true;   // Already processed
        
        visited[node] = true;
        recStack[node] = true;
        
        for (const neighbor of graph[node]) {
            if (!dfs(neighbor)) return false;
        }
        
        recStack[node] = false;
        result.unshift(node); // Add to beginning (reverse order)
        return true;
    }
    
    // Process all nodes
    for (let i = 0; i < numCourses; i++) {
        if (!visited[i]) {
            if (!dfs(i)) return []; // Cycle found
        }
    }
    
    return result;
}
```
---

## 🎯 Key Points to Remember

### ✅ What Works:
- **DAGs only**: No cycles allowed
- **Directed edges**: One-way relationships
- **Linear ordering**: Each vertex appears exactly once
- **Dependency resolution**: All prerequisites come before dependent items

### ❌ What Doesn't Work:
- **Cyclic graphs**: Impossible to order
- **Undirected graphs**: No direction to follow
- **Disconnected components**: May have multiple valid orders

### 🔍 Detection:
- **Cycle detection**: If result length ≠ total vertices
- **Multiple solutions**: Different valid orderings possible
- **No solution**: When graph has cycles

### 💡 Tips:
1. **Start with in-degree 0**: These have no dependencies
2. **Process level by level**: Use BFS for level-wise processing
3. **Track processed count**: Ensure all vertices are visited
4. **Handle cycles**: Return empty array or throw error
5. **Multiple valid orders**: Any valid ordering is acceptable
