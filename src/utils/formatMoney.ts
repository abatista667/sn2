
const formatMoney = (value: number| string, precision: number = 2): string => {
    const newValue = typeof(value) === 'number'?  value : parseInt(value)

    return `$${Intl.NumberFormat('em-US', {
        minimumFractionDigits: precision,
        maximumFractionDigits: precision
    }).format(newValue)}`
}

export default formatMoney;