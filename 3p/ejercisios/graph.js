
class Graph {
    constructor() {
        this.indice = {};
        this.vertices = [];
        this.numeroIndices = 0;
        this.numeroVertices = 0;
        this.multigrafo=false;
        this.conjuntos=new Array();
    }

    addVertex(vertice) {
        this.vertices.push(vertice);
        this.indice[vertice] = [];
        this.numeroVertices++;
    }

    addEdge(v1, v2) {
        this.indice[v1].push({
            vertice: v2
        });
        this.indice[v2].push({
            vertice: v1
        });
        //extra  
        if(!this.conjuntos[this.numeroIndices]){this.conjuntos[this.numeroIndices]=[];
            this.conjuntos[this.numeroIndices][0]=v1;
            this.conjuntos[this.numeroIndices][1]=v2;}
        this.numeroIndices++;
        if(v1===v2){
            this.multigrafo=true;
        }

    }


    printGraph() {
        let graph = "";
        this.vertices.forEach(vertice => {
            graph += vertice + " -> " + this.indice[vertice].map(n => n.vertice).join("-") + "\n";
        });
        console.log(graph);
    }

    isComplete() {
        let result = false;
        let aux = (this.numeroVertices * (this.numeroVertices - 1)) / 2;
        if (this.numeroIndices === aux) {
            result = true;
        } else result = false

        return result;

    }

    isMultigraph() {

        return this.multigrafo;

    }

    nombres(g){
        let result=false;
        for(let i=0;i<this.vertices.length;i++){
            if(this.vertices[i]==g.vertices[i]){
                result=true;
            }else {result=false;}
        }

        return result;
    }

    pares(g){
        let result=false;
        for(let i=0;i<this.numeroIndices;i++){
            for(let k=0;k<2;k++){
            if(this.conjuntos[i][k]===g.conjuntos[i][k]){
                result=true;
            }else {result=false;
}
            }}
        
                return result;

    }
    isSubgraph(graph) {
        let result=false;
        if(this.pares(graph)===this.nombres(graph)){
            result=true
        }
        return result;
    }

}

//test


var grafo = new Graph(6);
var vertices = ['1', '2', '3', '4', '5', '6'];
for (var i = 0; i < vertices.length; i++) {
    grafo.addVertex(vertices[i]);
}

grafo.addEdge('1', '2');
grafo.addEdge('2', '3');
grafo.addEdge('3', '4');
grafo.addEdge('4', '1');
grafo.addEdge('1', '3');
grafo.addEdge('4', '2');
grafo.addEdge('3', '6');
grafo.addEdge('5', '6');

grafo.printGraph();
console.log(grafo.isComplete());
console.log(grafo.isMultigraph());
/*
Resultado:
1 -> 2-4-3
2 -> 1-3-4
3 -> 2-4-1-6
4 -> 3-1-2
5 -> 6
6 -> 3-5
false
false
*/

var grafo2 = new Graph(3);
var vertices2 = ['1', '2', '3', '4'];
for (var i = 0; i < vertices2.length; i++) {
    grafo2.addVertex(vertices2[i]);
}
grafo2.addEdge('1', '2');
grafo2.addEdge('2', '3');
grafo2.addEdge('3', '4');
grafo2.addEdge('4', '1');
grafo2.addEdge('1', '3');
grafo2.addEdge('4', '2');

grafo2.printGraph();
console.log(grafo2.isComplete());
console.log(grafo2.isMultigraph());
console.log(grafo2.isSubgraph(grafo));
/*
Resultado:
1 -> 2-4-3
2 -> 1-3-4
3 -> 2-4-1
4 -> 3-1-2
true
false
true
*/


var grafo3 = new Graph(2);
var vertices3 = ['1', '2'];
for (var i = 0; i < vertices3.length; i++) {
    grafo3.addVertex(vertices3[i]);
}
grafo3.addEdge('1', '1');
grafo3.addEdge('1', '2');

grafo3.printGraph();
console.log(grafo3.isComplete());
console.log(grafo3.isMultigraph());
console.log(grafo3.isSubgraph(grafo));
/*
1 -> 1-1-2
2 -> 1
false
true
false
*/











