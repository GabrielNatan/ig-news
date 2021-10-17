import Style from "./style.module.scss"
import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"
import { signIn, useSession } from "next-auth/client"

export function SignInButton() {
    const [session ] = useSession()
   
    return session ? (
        <button type="button" className={Style.signInButton}>
            <FaGithub color="04d361" />
            Jarvas maneiro
            <FiX color="737388"  className={Style.closeIcon}/>
        </button>
    ) : (

        <button 
            type="button" 
            className={Style.signInButton}
            onClick={()=> signIn()}
            >
            <FaGithub color="eba417" />
            Sign in with Github
        </button>

    )
}