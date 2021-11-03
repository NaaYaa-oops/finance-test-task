export function calculateChangedWorth(price, change, percent) {
    return (((percent / change * 100) / 100) * price).toString()
        .slice(0, 5)
        .concat('$')
}