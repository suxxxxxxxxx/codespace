#企业级开发

-代码的健壮性
    校验一下参数
    进程的安全性
    单线程 简单 + event loop 太脆了
    throw + try catach()

-cache 自由便利 key 设置
    1+ 12 11+ 2 '1,12' '11,2'
    -arguments 伪数组 兼容性不太好
    [...arguments].join('')
    Array.from(arguments)
    Object.prototype.toString
    Array.prototype.join.call(arguments)借
    [1,2,3].join(',')//this指向数组
-finbonacci 爬楼梯
    -递归的通用问题，不停的入栈
        自顶而下 CEO 递归的不停的入栈
    -记忆函数 备忘录
    -自底向上
        f(1) = 1 f(2) = 2 f(3) = f(1) + f(2)
        f(n) = f(n-1) + f(n-2)

-使用递归，快速的，基于自顶向下的思想来解决问题
    -程序栈的问题
-可以先使用memoize备忘录模式。优化
    空间{} key：val
-都可以自底向上解决，每一步都有一个公式f(n) = f(n-1) + f(n-2)
动态规划dp
    for循环(自底向上) 88%
-99.9%
    空间再优化