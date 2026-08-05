import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    href?: string;
    type?: "button" | "submit";
    variant?: "primary" | "secondary";
    onClick?: () => void;
};

export default function Button({
    children,
    href,
    type = "button",
    variant = "primary",
    onClick,
}: ButtonProps) {
    const styles = {
        primary:
            "bg-slate-900 text-white hover:bg-slate-700",
        secondary:
            "border border-slate-900 text-slate-900 hover:bg-slate-100",
    };

    const className = `
        inline-flex
        items-center
        justify-center
        rounded-lg
        px-6
        py-3
        font-medium
        transition
        duration-200
        ${styles[variant]}
    `;

    if (href) {
        return (
            <Link
                href={href}
                className={className}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
        >
            {children}
        </button>
    );
}