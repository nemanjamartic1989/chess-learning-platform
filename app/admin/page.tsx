
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import Container from "@/components/Container";
import { auth } from "@/lib/auth";

export default async function AdminPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
    redirect("/admin/login");
}

    if (session.user.role !== "admin") {
        redirect("/");
    }

    return (
        <Container>
            <section className="mx-auto max-w-4xl py-20">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-500">
                            Administration
                        </p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                            CMS Dashboard
                        </h1>
                        <p className="mt-2 text-slate-600">
                            Welcome, {session.user.name}.
                        </p>
                    </div>

                    <Link
                        href="/admin/posts"
                        className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-700"
                    >
                        Manage Blog Posts
                    </Link>
                </div>

                <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
                    <h2 className="text-lg font-semibold text-slate-900">
                        Blog Content
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                        Create articles, edit existing posts, save drafts, and
                        publish content from the CMS.
                    </p>
                </div>
            </section>
        </Container>
    );
}
