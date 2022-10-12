// Imports go first
import {makePottery} from "./PotteryWheel.js"
import {firePottery} from "./Kiln.js"
import {toSellOrNotToSell} from "./PotteryCatalog.js"
import {PotteryList} from "./PotteryList.js"
import {usePottery} from "./PotteryCatalog.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug",5,5)
let cup = makePottery("cup",.25,6)
let bowl = makePottery("bowl",.5,8)
let plate = makePottery("plate",1,10)
let planter = makePottery("planter",15,20)

// console.log(mug, cup, bowl, plate, planter)

// Fire each piece of pottery in the kiln
const mugFired = firePottery(mug, 1200)
const cupFired = firePottery(cup, 2500)
const bowlFired = firePottery(bowl, 3300)
const plateFired = firePottery(plate, 2000)
const planterFired = firePottery(planter, 2200)

// console.log(mugFired, cupFired, bowlFired, plateFired, planterFired)

// Determine which ones should be sold, and their price
const sellMug = toSellOrNotToSell(mugFired)
const sellCup = toSellOrNotToSell(cupFired)
const sellBowl = toSellOrNotToSell(bowlFired)
const sellPlate = toSellOrNotToSell(plateFired)
const sellPlanter = toSellOrNotToSell(planterFired)

// console.log(sellMug, sellCup, sellBowl, sellPlate, sellPlanter)


// Invoke the component function that renders the HTML list
let forSale = usePottery()

const parentHTMLElement = document.querySelector(".potteryList");
parentHTMLElement.innerHTML = PotteryList(forSale);


console.log(PotteryList(forSale))

