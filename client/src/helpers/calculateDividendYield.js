export function calculateDividendYield(price, dividend) {
    return ((dividend / price) * 100).toString().slice(0, 4).concat('%')
}