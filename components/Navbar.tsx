import Link from "next/link";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/coaching", label: "Coaching" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    return (
        <header className="border-b bg-white">
            <div className="container mx-auto flex h-16 items-center justify-between px-6">
                <Link
                    href="/"
                    className="text-xl font-bold text-slate-900"
                >
                    Chess Learning Platform
                </Link>

                <nav>
                    <ul className="flex items-center gap-6">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-slate-600 transition hover:text-slate-900"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}