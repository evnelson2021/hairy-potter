let okayToSellArray = []

export const toSellOrNotToSell = (pottery) => {
    if (pottery.cracked === false && pottery.weight >= 6){
        pottery.price = 40
        okayToSellArray.push(pottery)
    } else if (pottery.cracked === false && pottery.weight < 6){
        pottery.price = 20
        okayToSellArray.push(pottery)
    }
    return pottery
}

export const usePottery = () =>{
    return okayToSellArray.map((pottery) => ({...pottery}))
}
// const arrCopy = originalArr.map( origItem => ({...origItem}) )

