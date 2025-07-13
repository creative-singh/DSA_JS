function constructAdjList(v, e) {
    let adjList = new Map()

    for (let i = 0; i < v; i++) {
        adjList.set(i, []);
    }

    for (let [fromV, toV] of e) {
        adjList.get(fromV).push(toV);
    }
    return adjList
}

function dfs(key, val, visited, stack, adjList) {
    visited[key] = 1
    
    for(let i of val) {
        if(!visited[i]) {
            dfs(i, adjList.get(i), visited, stack, adjList)
        }
    }
    stack.push(key)
}

function topoSort(v, e) {
    let visited = new Array(v).fill(0)
    let stack = []

    let adjList = constructAdjList(v, e);

    for(let [key, val] of adjList) {
        if(!visited[key]) {
            dfs(key, val, visited, stack, adjList)
        }
    }

    let result = []
    while(stack.length) {
        result.push(stack.pop())
    }
    return result
}

const vertices = 6;
const edges = [[2, 3], [3, 1], [4, 0], [4, 1], [5, 0], [5, 2]];
console.log(topoSort(vertices, edges));
