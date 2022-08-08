const createList = value => {
    return createNode(value)
}
const appendList = (list, value) => {
    //debugger
    const node = createNode(value)
    // 记住第一个节点(list 下的第一个节点)
    let x = list
    // 如果存在下一个节点
    while (x.next) {
        // 下一个节点变成 x, x(下一个节点) 在放入循环条件判断是否还有下一个节点,一直循环到最后一个节点
        x = x.next
    }
    // 循环到最后一个节点，依次根据 x 的变化，把传入的 data 依次挂起来 list(10) ==> （20 ==> 30 ==> 40）
    x.next = node
    return node
}
const removeFromList = (list, node) => {
    //debugger
    // 记下第一个节点(也就是 list)
    let x = list
    // p 是传入的 data (要删除的节点) 
    let p = node
    // 判断条件是否相等 不相等进去向下执行 相等跳出循环向下执行
    while (x !== node && x !== null) {
        // 条件成立，记住 x 变化前的 node 为 p
        p = x
        // x 为下一个节点 传入循环继续判断
        x = x.next
    }
    // 要删的节点不存在 直接返回 false
    if (x === null) {
        return false
        // 要删的节点是第一个节点的情况
    } else if (x === p) {
        // list 的第一个节点变成 p(头部节点)
        p = x.next
        return p
    } else {
        // 如果删除的不是第一个节点 
        // 把要删除节点的下一个节点变成上一个节点的下一个节点(x 是要删除的节点 p 是记下的上一个节点)
        p.next = x.next
        return list
    }
}
const createNode = value => {
    return {
        data: value,
        next: null
    }
}
//  traveList() 接受一个 list 一个函数 fn
const travelList = (list, fn) => {
    let x = list
    // 这里判断如果下一个节点存在(x.next)
    // 因为最后一个节点的下一个节点不存在 到最后一个节点会跳出循环 
    // 这样最后一个节点就进不来
    // 所以要判断 x !== null 才执行下边 
    // x === null 就推出循环
    while (x.next) { // (x.next) 错 (x !== null) 对
        // 循环对 fn 操作 直到等于 null 不操作
        fn(x)
        // x 等于下一个节点 一直循环
        x = x.next
    }
}

// 要创建的节点
const list = createList(10)
const node2 = appendList(list, 20)
const node3 = appendList(list, 30)
const node4 = appendList(list, 40)

// 删除第一个节点
const node = list
const newList = removeFromList(list, node)

//删除 3、4节点
//removeFromList(list, node3)
//removeFromList(list, node4)

//console.log(list)
console.log(newList) // 注意：必须用 newList 获取返回值才能拿到删除了第一个节点的新 list 

travelList(list, node => { console.log(node.data) })