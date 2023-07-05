// 무방향 그래프
// 예외를 고려하지 않은, 오류 처리를 하지 않은 상황의 코드

class Graph() {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertext1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertext2].filter(v => v !== vertex1);
    }
    removeVertext(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
}