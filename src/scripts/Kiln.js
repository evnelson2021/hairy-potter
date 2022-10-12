import {makePottery} from "./PotteryWheel.js"

let pot = makePottery()

export const firePottery = (pottery, temp) =>{
        pottery.fired = true
        if (temp > 2200){
            pottery.cracked = true
        }else {
            pottery.cracked = false
        } 
    return pottery
}

// firePottery is exported to main.js to add .cracked and .fired properties to each piece of pottery and determine if each is cracked based on temp