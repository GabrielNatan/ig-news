import { useSession,signIn } from "next-auth/client"
import Style from "./style.module.scss"

interface SubscribeButton {
    priceId: string;
}

export function SubscribeButton({priceId}:SubscribeButton) {
    const [session] = useSession()

    function handleSubscribe(){
        if(!session){
            signIn('github')
            return;
        }
    }
   return(
       <button 
            type="button" 
            className={Style.subscribeButton}
            onClick={handleSubscribe}
            >
           Subscribe now
       </button>
   )
}