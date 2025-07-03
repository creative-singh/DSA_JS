class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1) // coz its undirected
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) 
            &&
            this.adjacencyList[vertex2].has(vertex1) 
        )
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            return
        }
        for(let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex];
    }

    display() {
        for(let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]].join(', '))
        }
    }

    depthFirstRecursive(start) {
        let result = []
        let visitedPath = {}
        let adjacencyList = this.adjacencyList

        function dfs(vertex) {
            if(!vertex) return null
            visitedPath[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach((neighbor) => {
                if(!visitedPath[neighbor]) { // if not visited
                    return dfs(neighbor)
                } 
            })
        }
        
        dfs(start)
        return result
    }

    depthFirstIterative(start) {
        let result = []
        let visitedPath = {}
        let stack = [start]

        visitedPath[start] = true
        while(stack.length) {
            let vertex = stack.pop()
            result.push(vertex)

            this.adjacencyList[vertex].forEach((neighbor) => {
                if(!visitedPath[neighbor]) {
                    visitedPath[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        
        return result
    }

    breadthFirst(start) {
        let queue = [start]
        let result = []
        let visitedPath = {}
        let currVertex

        visitedPath[start] = true
        while(queue.length) {
            currVertex = queue.shift()
            result.push(currVertex)

            this.adjacencyList[currVertex].forEach((neighbor) => {
                if(!visitedPath[neighbor]) {
                    visitedPath[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return result
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")

graph.display()

// console.log(graph.depthFirstRecursive("A"))
// console.log(graph.depthFirstRecursive("B"))
console.log(graph.depthFirstRecursive("D"))

// console.log(graph.depthFirstIterative("D"))

console.log(graph.breadthFirst("A"))
