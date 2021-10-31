import Image from "next/image"
import logoImg from "@public/logo.png"

const Logo = () => {
    return (
        <Image src={logoImg} layout="intrinsic"/>
    )
}

export default Logo
