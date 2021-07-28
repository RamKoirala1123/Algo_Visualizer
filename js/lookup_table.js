const HTML[
"<h1>Algo Visualizer</h1>" +
    "<hr>" +
    "<p><strong>Bubble Sort:</strong><br>Bubble sort is often referred to as sinking sort.<br>" +
        "It is the simplest sorting algorithm that works by repeatedly swapping adjacent elements if they are<br>" +
        "in the wrong order.The pass through the list is repeated until the list is sorted.Bubble sort <br>" +
        "has a worst-case and average complexity of О(n2), where n is the number of items being sorted.<br>" +
        "Most practical sorting algorithms have substantially better worst-case or average complexity.<br>" +
        "So, bubble sort is not a practical sorting algorithm but is fairly used for educational purposes.<br>" +

        
        "<ul><strong> Time Complexity:</strong><br><br>" +
        "<li>Worst Case: O(n^2)</li>" +
        "<li>General Case: O(n^2)</li>" +
        
        "<li>Best Case: O(n^2)</li><br>" +
        
        "<strong> Space Complexity: </strong>O(n)<br> </ul>" +
    "</p>" ,
    "<p><strong>Quick Sort:</strong><br>It is a divide-and-conquer algorithm.<br>" +
        "It works by selecting a 'pivot' element from the array and partitioning the other elements<br>" +
        "into two sub-arrays, according to whether they are less than or greater than the pivot.<br> " +
        "The sub-arrays are then sorted recursively. The key process in quicksort is partition ().<br> " +
        "Target of partitions is, given an array and an element x of array as pivot, put x at its<br> " +
        "correct position in sorted array and put all smaller elements (smaller than x) before x, and<br> " +
        "put all greater elements (greater than x) after x. All this should be done in linear time.<br>" +

        
        "<ul><strong> Time Complexity:</strong><br><br>" +
        "<li>Worst Case: T(n-1) + (n)</li>" +
        "<li>General Case: T(k) + T(n-k-1) + (n)</li>" +
        
        "<li>Best Case: O(n log n)</li><br> " +
        
        "<strong> Space Complexity: </strong>O (log n)<br> </ul> " +
    "</p>" ,
    "<p><strong>Heap Sort:</strong><br>A heap is a tree-based data structure that allows access to the <br>" +
        "minimum and maximum element in the tree in constant time.The constant time taken is Big O(1). <br>" +
        "This is regardless of the data stored in the heap.There are two types of heaps:<br>" +
        "Min Heap and Max Heap.<br>" +
        "<ul>" +
        "<li><strong>Min Heap:</strong> In a min-heap, the parent or root node is usually lesser in value than the children nodes. <br></li>" +
        "<li><strong>Max Heap:</strong> In a max-heap, the parent or root node is usually greater than the children’s nodes.<br></li>" +
        "</ul>" +
        "Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is <br>" +
        "similar to selection sort where we first find the minimum element and place the minimum element<br>" +
        "at the beginning. We repeat the same process for the remaining elements.<br>" +
        
        "<ul><strong> Time Complexity:</strong> O(1)<br></ul>" +

    "</p>" ,
    "<p><strong>Merge Sort:</strong><br>Merge sort is a divide and conquer algorithm. It divides the input <br>" +
        "array into two halves, calls itself for the two halves, and then merges the two sorted halves. <br>" +
        "The merge () function is used for merging two halves.<br>" +

        
        "<ul><strong> Time Complexity:</strong>O(n log n)<br>" +
        
        "<strong> Space Complexity: </strong>O (n)<br> </ul>" +
    "</p>" ,
    "<p><strong>Binary Search Tree:</strong><br>" +
        "<ul><li>Complete Binary tree: A Binary Tree is a Complete Binary Tree if all the levels are <br>" +
        "completely filled except possibly the last level and the last level has all keys as left<br>" +
        "as possible.</li>" +

        "<li>Almost Complete Binary tree: An almost complete binary tree is a special kind of binary tree <br>" +
        "where insertion takes place level by level and from left to right order at each level and the<br>" +
        "last level is not filled fully always.</li>" +

        "<li>Array representation of binary tree: In array representation of a binary tree, we use <br>" +
        "one-dimensional array (1-D Array) to represent a binary tree.</li></ul>" +

    "</p>" ,
    "<p><strong>A* (A-star) algorithm:</strong><br>" +
        "It is a graph traversal and path search algorithm which is often <br>" +
        "used in many fields of computer science due to its completeness, optimality and optimal <br>" +
        "efficiency. The algorithm efficiently plots a walkable path between multiple nodes, or <br>" +
        "points, on the graph. It does this by maintaining a tree of paths originating at the <br>" +
        "start node and extending those paths one edge at a time until its termination criterion <br>" +
        "is satisfied.<br>" +
         "At each iteration of its main loop, A* needs to determine which of its<br> " +
        "paths to extend. It does so based on the cost of the path and an estimate of the cost <br>" +
        "required to extend the path all the way to the goal. Specifically, A* selects the path <br>" +
        "that minimizes f(n)=g(n)+h(n)<br>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;where n is the last node on the path, g(n) is the cost of the path from the start node <br>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;to n, and h(n) is a heuristic function that estimates the cost of the cheapest path <br>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;from n to the goal.<br> A* terminates when the path it chooses to extend is a path from <br>" +
        "start to goal or if there are no paths eligible to be extended. The heuristic function<br>" +
        "is problem-specific. <br>If the heuristic function is admissible, meaning that it never <br>" +
        "overestimates the actual cost to get to the goal, A* is guaranteed to return a <br>" +
        "least-cost path from start to goal.<br>" +
    "</p>" +
    "<p><strong>Manhattan Distance:</strong><br>" +
        "It is the distance between two points measured along axes at right angles.<br>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;<strong> Manhattan Distance </strong>= (x_index+ y_index)<br>" +
    "</p>" +
    "<p><strong>Breadth First Search(BFS):</strong><br>" +
        "Breadth-first search is an algorithm for searching a tree data structure for a node that <br>" +
        "satisfies a given property. It starts at the tree root and explores all nodes at the present<br>" +
        "depth prior to moving on to the nodes at the next depth level.<br>" +

        
        "<ul><strong> Time Complexity:</strong>: O(|E|) = O(b^d)<br>" +
        
        "<strong> Space Complexity: </strong>O(|V|) = O(b^d)<br> </ul>" +
    "</p>" +
    "<p><strong>Euclidean Distance:</strong><br>" +
        "Euclidean distance between two points in euclidean space is the length of line segment<br>" +
        "between two points. It can be calculated from the Cartesian coordinates of the points <br>" +
        "using the Pythagorean theorem, therefore occasionally being called the Pythagorean distance.<br>" +
	    "&nbsp;&nbsp;&nbsp;&nbsp;<strong>Euclidean Distance:</strong> (x^2 + y^2)<br>" +

        
        "<ul><strong> Time Complexity:</strong>: O(log(min(a, b)).<br>" +
        
        "<strong> Space Complexity: </strong>O(|V|) = O(b^d)<br> </ul> " +
    "</p>" ,
    "<p><strong>Linked List:</strong><br>" +
        "A linked list is a linear data structure that includes a series of connected nodes. <br>" +
        "Here, each node store the data and the address of the next node. <br>" +
        "You have to start somewhere, so we give the address of the first node a special name <br>" +
        "called HEAD. Also, the last node in the linked list can be identified because its next<br>" +
        "portion points to NULL.<br>" +
        "Linked lists can be of multiple types: singly, doubly, and circular linked list. <br>" +

        
        "<ul><strong> Time Complexity:</strong><br><br>" +
        "<li>Search: O(n)</li>" +
        "<li>Insertion: O(1)</li>" +
        
        "<li>Deletion: O(1)</li><br>" +
        
        "<strong> Space Complexity: </strong>O(n)<br> </ul>" +
    "</p>",
];
export{HTML}
