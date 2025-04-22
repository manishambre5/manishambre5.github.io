function Footer() {
    return (
        <footer className="h-20 w-full flex flex-col gap-4 justify-center items-center px-4 md:px-2 snap-end scroll-mt-20 mb-20 -z-10">
            <p className="font-bold">&copy; {new Date().getFullYear()} Manish Ambre. All rights reserved.</p>
        </footer>
    )
}

export default Footer;