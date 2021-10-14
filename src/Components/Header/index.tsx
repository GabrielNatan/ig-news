import { SignInButton } from "../SignInButton"
import Style from "./style.module.scss"
export function Header() {
    return (
        <header className={Style.headerContainer}>
            <div className={Style.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav >
                    <a className={Style.active}>Home</a>
                    <a>Posts</a>
                </nav>
                <SignInButton/>
            </div>
        </header>
    )
}