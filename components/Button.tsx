import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    href?: string;
    type?: "button" | "submit";
    variant?: "primary" | "secondary";
    onClick?: () => void;
    disabled?: boolean;
};

export default function Button({
    children,
    href,
    type = "button",
    variant = "primary",
    onClick,
    disabled = false,
}: ButtonProps) {
    const baseClasses =
        "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
        primary:
            "border border-slate-900 bg-white text-slate-900 hover:bg-slate-100",
        secondary:
            "border border-slate-300 bg-white text-slate-600 hover:bg-slate-50",
    };

    const className = `${baseClasses} ${variants[variant]}`;

    if (href) {
        return (
            <Link href={href} className={className}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={className}
        >
            {children}
        </button>
    );
}