function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function TreeNode(tree, value) {
    var node = tree,
        key;
    while (node.value !== value) {
         key = value < node.value ? 'left' : 'right';
         if (!node[key]) {
             node[key] = new Node(value);
             break;
         }
         node = node[key];
    }
    return tree;
}

const array = [4,2,9,5,1,8,9],
 tree = array.reduce((t, v) => t ? TreeNode(t, v) : new Node(v), null);

console.log(tree);


