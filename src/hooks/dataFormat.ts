
interface dataFormatProps {
    numberFormat: (digit: number | string) => string
}
export const dataFormatted = (): dataFormatProps => {

    function numberFormat(digit: number | string) {

        const phone = (digit).toString()
        const formatted = phone.match(/.{1,3}/g)?.join('-') || '';

        return formatted
    }

    return {
        numberFormat
    }

}