class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class ubbTree {
    constructor(data) {
        this.root = new Node(data);
    }
    insertar(data) {
        let cola = [];
        cola.push(this.root);
        while (true) {
            let node = cola.pop();
            if (node.left === null) {
                node.left = new Node(data);
                return;
            } else {
                cola.unshift(node.left);
            }
            if (node.right === null) {
                node.right = new Node(data);
                return;
            } else {
                cola.unshift(node.right);
            }
        }
    }


    inOrder(node = this.root) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }

    bfs() {
        let node = this.root;
        const cola = [node];
        const finalData = []

        while (cola.length) {
            node = cola.shift()
            if (node.left) cola.push(node.left)
            if (node.right) cola.push(node.right)
            finalData.push(node.data)
        }
        return finalData;
    }

}

let tree = new ubbTree(1)
tree.insertar(2)
tree.insertar(3)
tree.insertar(4)
tree.insertar(5)
console.log(tree);
console.log(tree.bfs()); //[1,2,3,4,5]
console.log(tree.inOrder()); //4,2,5,1,3