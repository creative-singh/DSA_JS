# Topological Sort

![Topological Sort Visualization](../GraphAssets/Topological%20Sort.png)

## Quick Revision Notes

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

## Types of JavaScript Implementation

### Method 1: Kahn's Algorithm (BFS-based)
### Method 2: DFS-based (Recursive)

---

## Key Points to Remember

### What Works:
- **DAGs only**: No cycles allowed
- **Directed edges**: One-way relationships
- **Linear ordering**: Each vertex appears exactly once
- **Dependency resolution**: All prerequisites come before dependent items

### What Doesn't Work:
- **Cyclic graphs**: Impossible to order
- **Undirected graphs**: No direction to follow
- **Disconnected components**: May have multiple valid orders

### Detection:
- **Cycle detection**: If result length ≠ total vertices
- **Multiple solutions**: Different valid orderings possible
- **No solution**: When graph has cycles

### Tips:
1. **Start with in-degree 0**: These have no dependencies
2. **Process level by level**: Use BFS for level-wise processing
3. **Track processed count**: Ensure all vertices are visited
4. **Handle cycles**: Return empty array or throw error
5. **Multiple valid orders**: Any valid ordering is acceptable
