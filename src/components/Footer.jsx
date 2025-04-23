function Footer() {
    return (
        <footer className="shrink-0 w-full flex flex-col gap-4 justify-center items-center px-4 md:px-2 pb-20">
            <p className="font-bold text-sm">&copy; {new Date().getFullYear()} Manish Ambre. All rights reserved.</p>
        </footer>
    )
}

export default Footer;