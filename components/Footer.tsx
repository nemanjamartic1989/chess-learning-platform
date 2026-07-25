export default function Footer() {
    return (
        <footer className="border-t mt-16">
            <div className="container mx-auto px-6 py-8 text-center text-sm text-slate-500">
                © {new Date().getFullYear()} Chess Learning Platform.
                All rights reserved.
            </div>
        </footer>
    );
}