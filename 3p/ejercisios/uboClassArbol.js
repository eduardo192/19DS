class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class uobTree {
    constructor() {
        this.root = null;
    }

    insertar(data) {
        let nuevoNodo = new Node(data);
        if (this.root === null) {
            this.root = nuevoNodo;
        }
        let nodoRaiz = this.root;
        while (true) {
            if (data === nodoRaiz.data) return;
            if (data < nodoRaiz.data) {
                if (nodoRaiz.left === null) {
                    nodoRaiz.left = nuevoNodo;
                }
                nodoRaiz = nodoRaiz.left;
            } else {
                if (nodoRaiz.right === null) {
                    nodoRaiz.right = nuevoNodo;
                }
                nodoRaiz = nodoRaiz.right;
            }
        }
    }

    borrarNodo(key) {
        return !(this.auxiliarBorrarNodo(this.root, key) === false);
    }

    auxiliarBorrarNodo(root, key) {
        if (root === null) {
            // arbol vacio regresa falso;
        }
        if (key < root.data) {
            root.left = this.auxiliarBorrarNodo(root.left, key);
            return root;
        } else if (key > root.data) {
            root.right = this.auxiliarBorrarNodo(root.right, key);
            return root;
        } else {
            // sin hijos 
            //case 1 - a leaf node
            if (root.left === null && root.right === null) {
                root = null;
                return root;
            }
            // Single Child cases
            if (root.left === null) return root.right;
            if (root.right === null) return root.left;

            // Both children, so need to find successor
            let nodoSig = root.right;
            while (nodoSig.left !== null) {
                nodoSig = nodoSig.left;
            }
            root.data = nodoSig.data;

            // Delete the value from right subtree.
            root.right = this.auxiliarBorrarNodo(root.right, nodoSig.data);
            return root;
        }
    }
    preOrder(node = this.root) {
        if (node.data !== null) {
            console.log(node.data);
        }
        if (node.left !== null) {
            this.preOrder(node.left);
        }
        if (node.right !== null) {
            this.preOrder(node.right);
        }
    }

    bfs(){
        let nodo = this.root;
        const cola = [nodo];
        const finalData = [ ]
    
        while(cola.length){
          nodo= cola.shift()
          if(nodo.left) cola.push(nodo.left)
          if(nodo.right) cola.push(nodo.right)
          finalData.push(nodo.data)
        }
        return finalData;
     }

}

let arbol = new uobTree();
arbol.insertar(8);
arbol.insertar(12);
arbol.insertar(52);
arbol.insertar(54);
arbol.insertar(27);
arbol.insertar(5);
arbol.insertar(6);
arbol.insertar(78);
arbol.insertar(15);
arbol.insertar(19);
arbol.insertar(20);

//console.log(tree.inOrder()); //9,12,14,17,19,23,50,54,67,72,76
console.log(arbol.preOrder());
console.log(arbol.bfs());
arbol.borrarNodo(12);
console.log(arbol);