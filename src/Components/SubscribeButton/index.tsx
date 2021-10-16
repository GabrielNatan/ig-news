import Style from "./style.module.scss"

interface SubscribeButton {
    priceId: string;
}

export function SubscribeButton({priceId}:SubscribeButton) {
   return(
       <button type="button" className={Style.subscribeButton}>
           Subscribe now
       </button>
   )
}