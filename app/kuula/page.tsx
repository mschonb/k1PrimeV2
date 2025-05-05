'use client';

import KuulaEmbed from "../components/kuulaTour";


export default function KuulaPage() {
return (
<main className="pl-8">
    <div>360° Virtual Tour</div>
    <div className="w-full h-full">
        <KuulaEmbed />
    </div>
</main>
);
}
