import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Licenses",
    description:
        "Third-party assets and open-source resources used on this website.",
};

type Asset = {
    name: string;
    creator: string;
    source: string;
    sourceUrl: string;
    license: string;
    licenseUrl: string;
    modified?: boolean;
};

const assets: Asset[] = [
    {
        name: "Stars Pack",
        creator: "Dasha Dzisko",
        source: "Figma Community",
        sourceUrl:
            "https://www.figma.com/community/file/1020701317322253884/stars-pack",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
        modified: false,
    },
];

const LicensesPage = () => {
    return (
        <main className="min-h-screen">
            <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 lg:py-28">
                {/* Header */}
                <header className="max-w-2xl">
                    <p className="mb-3 text-sm font-medium tracking-wide text-neutral-500">
                        LEGAL
                    </p>

                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        Licenses
                    </h1>

                    <p className="mt-5 text-base leading-7 text-neutral-500">
                        This website uses third-party assets and resources from various
                        creators and open-source projects. Their respective licenses and
                        attribution requirements are listed below.
                    </p>
                </header>

                {/* Divider */}
                <div className="my-12 h-px bg-neutral-200" />

                {/* Assets */}
                <section aria-labelledby="third-party-assets">
                    <div className="mb-6">
                        <h2
                            id="third-party-assets"
                            className="text-lg font-semibold tracking-tight"
                        >
                            Third-party assets
                        </h2>

                        <p className="mt-1 text-sm text-neutral-500">
                            Attribution and licensing information for assets used on this
                            website.
                        </p>
                    </div>

                    <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200">
                        {assets.map((asset) => (
                            <article
                                key={`${asset.name}-${asset.creator}`}
                                className="p-6 sm:p-7"
                            >
                                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                                    {/* Asset information */}
                                    <div>
                                        <h3 className="font-medium tracking-tight">
                                            {asset.name}
                                        </h3>

                                        <p className="mt-1 text-sm text-neutral-500">
                                            by {asset.creator}
                                        </p>
                                    </div>

                                    {/* License badge */}
                                    <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium">
                                        {asset.license}
                                    </span>
                                </div>

                                {/* Metadata */}
                                <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                                    <div>
                                        <dt className="text-neutral-500">
                                            Source
                                        </dt>

                                        <dd className="mt-1">
                                            <a
                                                href={asset.sourceUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-medium underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-900"
                                            >
                                                {asset.source}
                                            </a>
                                        </dd>
                                    </div>

                                    <div>
                                        <dt className="text-neutral-500">
                                            License
                                        </dt>

                                        <dd className="mt-1">
                                            <a
                                                href={asset.licenseUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-medium underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-900"
                                            >
                                                {asset.license}
                                            </a>
                                        </dd>
                                    </div>
                                </dl>

                                {/* Modification notice */}
                                {asset.modified && (
                                    <p className="mt-5 rounded-xl bg-neutral-50 py-3 text-xs leading-5 text-neutral-500">
                                        This asset has been modified from the original.
                                    </p>
                                )}
                            </article>
                        ))}
                    </div>
                </section>

                {/* Attribution note */}
                <section className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-7">
                    <h2 className="text-sm font-semibold">
                        About third-party licenses
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                        Third-party assets remain subject to their respective licenses.
                        Please refer to the original source and license information for
                        the applicable terms.
                    </p>
                </section>
            </div>
            <Footer />
        </main>
    );
}

export default LicensesPage;