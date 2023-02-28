// 「度」是一个顶点连接了几条边
// https://leetcode.cn/problems/find-center-of-star-graph/solution/fu-xue-ming-zhu-xue-hui-ti-mu-bei-hou-de-5b52/

var findCenter = function(edges) {
    const len = edges.length; // 共几条边, （度）
    // const Arr = new Array(len + 1).fill(0); // 共(边+1)个节点，用于存放每个节点的度
    const obj = {} // 存放点的度（点关联了几条边），共有边+1个点
    for (let edg of edges) {
        const p1 = edg[0]; // 点1
        const p2 = edg[1]; // 点2
        obj[p1] ? obj[p1] += 1 : obj[p1] = 1
        obj[p2] ? obj[p2] += 1 : obj[p2] = 1
    }

    // 点的度
    for (let d in obj) {
        if (obj[d] === len) {
            return d;
        }
    }
};

console.log('有边：[1,2],[5,1],[1,3],[1,4]');
console.log('中心节点为：', findCenter([[1,2],[5,1],[1,3],[1,4]]));