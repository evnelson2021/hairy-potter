let primaryKey = 1

export const makePottery = (shape, weight, height) =>{
    let pottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: primaryKey
    }
    primaryKey++
    return pottery
}

// makePottery exported to main.js to make the 5 items, and to Kiln to use firing the pottery
