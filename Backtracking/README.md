# Backtracking Algorithms

> Try all possibilities recursively, and undo choices that didn't work (i.e., Backtrack)

Backtracking is like the ninja version of recursion[^1].

**Definition**: Backtracking is a problem-solving technique that involves exploring all possible solutions recursively and undoing choices that lead to dead ends.

Backtracking is often used to solve problems that require searching through all possible combinations or permutations of a solution space.

---

## Key Characteristics of Backtracking
1. **Recursive Exploration**: Backtracking uses recursion to explore all possible solutions.
2. **Undo Choices**: If a choice leads to a dead end, it is undone, and the algorithm backtracks to try other possibilities.
3. **Pruning**: Backtracking often includes constraints to prune unnecessary branches and reduce the search space.

---

## Common Applications of Backtracking
1. **Permutations and Combinations**: Generate all permutations or combinations of a set.
2. **N-Queens Problem**: Place N queens on an N×N chessboard such that no two queens threaten each other.
3. **Sudoku Solver**: Solve a Sudoku puzzle by filling in numbers while respecting constraints.
4. **Subset Sum Problem**: Find subsets of numbers that sum to a target value.
5. **Word Search**: Search for words in a 2D grid of characters.
6. **Maze Solving**: Find a path through a maze.

---

