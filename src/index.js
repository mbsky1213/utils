/**
 * 动态加载js
 * @param {string} src 资源地址
 * @returns {promise}
 */
export function loadApi(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = "async";
        document.head.appendChild(script);

        script.onload = () => resolve();
        script.onerror = () => reject();
    });
}

/**
 * 动态加载css
 * @param {string} src 资源地址
 * @returns {promise}
 */
export function loadCss(src) {
    return new Promise((resolve, reject) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = src;
        document.head.appendChild(link);

        link.onload = () => resolve();
        link.onerror = () => reject();
    });
}

/**
 * 使用reduce实现数组的flat方A法
 * @param {array} arr 数组
 * @param {number} num 深度层级
 * @returns {array} 新的数组
 */
export const flat = (() => {
    let index = 0;
    return (arr, num = 1) => {
        if (!Array.isArray(arr)) throw new Error("arr is not a Array");
        if (typeof num !== "number") throw new Error("num is not a Number");
        if (Number.isFinite(num) && !Number.isInteger(num)) throw new Error("num is must be a Integer");
        if (num < 0) throw new Error("num must Greater than zero");
        return arr.reduce((total, current) => {
            // 如果不是数组
            if (!Array.isArray(current)) return [...total, current];
            // 如果如果到达扁平层级
            if (index === num) {
                index = 0;
                return [...total, current];
            }
            if (Number.isFinite(num)) index++; //扁平层级+1
            return [...total, ...flat(current, num)]; //递归调用
        }, []);
    };
})();

export default {
    loadApi,
    loadCss,
    flat,
};
