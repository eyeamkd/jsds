class GraphNode {
    public children: Array<GraphNode>;
    public data: any;
  }
  
  interface HashTable<T> {
    [key: string]: T;
  }
  
  class Graph {
    private root: GraphNode;
  
    private nodes: HashTable<GraphNode>;
  
    constructor(data) {
      this.root = new GraphNode();
      this.root.data = data; 
      this.nodes = {};
      this.nodes[this.root.data].children=[]
    }
  
    private isValidNode(node: GraphNode) {
      return !!this.nodes[node.data];
    }
  
    public formEdge(fromNode: GraphNode, toNode: GraphNode) {
      this.nodes[fromNode.data].children.push(toNode);
    }
  
    public isEdge(fromNode: GraphNode, toNode: GraphNode) {
      if (this.isValidNode(fromNode)) {
        return this.nodes[fromNode.data].children.includes(toNode);
      }
    }
  }
  