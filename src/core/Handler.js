import { cartBox } from "./selector"

export const cartBtnHandler =()=>{
    cartBox.classList.toggle("translate-x-full")
    !cartBox.classList.contains("duration-300") && cartBox.classList.add("duration-300")
}