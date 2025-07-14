function constructAdjList(v, e) {
    let adjList = new Map();

    for(let i = 0; i < v; i++) {
        adjList.set(i, [])
    }

    for(let [fromV, toV] of e) {
        adjList.get(fromV).push(toV)
    }
    return adjList
}

function topoSort(v, e) {
    let queue = [] // FIFO - push <-> shift

    let adjList = constructAdjList(v, e);

    // Indegree: No. of incoming edges to a node
    let indegree = new Array(6).fill(0);
    for(let [key, val] of adjList) {
        for(let i of val) {
            indegree[i] = indegree[i] + 1
        }
    }

    // Fill queue with zero indegree
    for(let i = 0; i < indegree.length; i++) {
        if(indegree[i] === 0) {
            queue.push(i)
        }
    }

    let result = []
    while(queue.length) {
        let elem = queue.shift()
        result.push(elem)
        let vertices = adjList.get(elem)
        for(let i of vertices) {
            indegree[i] = indegree[i] - 1
            if(indegree[i] === 0) {
                queue.push(i)
            }
        }
    }

    return result;
}

const vertices = 6;
const edges = [[2, 3], [3, 1], [4, 0], [4, 1], [5, 0], [5, 2]];
console.log(topoSort(vertices, edges));
