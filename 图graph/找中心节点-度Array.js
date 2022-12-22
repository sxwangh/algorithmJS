// 「度」是一个顶点连接了几条边
// https://leetcode.cn/problems/find-center-of-star-graph/solution/fu-xue-ming-zhu-xue-hui-ti-mu-bei-hou-de-5b52/

const findCenter = (edges) => {
    const n = edges.length + 1;
    console.log(`共有${n}条边， 中心节点的度 = ${n -1}`);
    const degrees = new Array(n + 1).fill(0);
    console.log('创建长度为（边+1）的数组 degrees = ', degrees);
    for (const edge of edges) {
        degrees[edge[0]]++;
        degrees[edge[1]]++;
        console.log('遍历edges, edge=', edge);
        console.log('degrees = ', degrees);
    }
    for (let i = 1; ; i++) {
        if (degrees[i] === n - 1) {
            return i;
        }
    }
};

console.log('中心节点为：', findCenter([[1,2],[5,1],[1,3],[1,4]]));