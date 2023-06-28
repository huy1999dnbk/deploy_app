"use client"
import { useState } from "react"
import Link from "next/link"
import Button from "@/components/UI/button"
import Modal from "@/components/UI/modal"
const Header = () => {
    const [showAuthModal, setShowAuthModal] = useState<boolean>(false)
    const [authUserSelect, setAuthUserSelect] = useState<string>('')

    const handleShowAuthModal = (auth: string) => {
        setShowAuthModal(true)
        setAuthUserSelect(auth)
    }

    const onCloseModal = () => {
        setShowAuthModal(false)
    }

    const titleAuthModal = authUserSelect === 'sign-in' ? 'Sign In' : authUserSelect === 'sign-up' ? 'Sign Up' : ''

    return <header className="w-full py-3">
        <div className="max-w-screen-xl m-auto flex items-center justify-between">
            <div>
                <Link href="/">Blog App</Link>
            </div>
            <div>
                <Button onClick={() => handleShowAuthModal('sign-in')} >Sign In</Button>
                <Button className="ml-3" onClick={() => handleShowAuthModal('sign-up')} >Sign Up</Button>
            </div>
            <Modal isOpenModal={showAuthModal} onClose={onCloseModal} title={titleAuthModal}>
                form here
            </Modal>
        </div>
    </header>
}

export default Header

