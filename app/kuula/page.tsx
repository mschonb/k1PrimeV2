'use client';

import KuulaEmbed from "../components/kuulaTour";


export default function KuulaPage() {
return (
<main className="pl-8">
    <div>360° Virtual Tour</div>
    <div className="w-full h-full">
        <KuulaEmbed tourUrl="https://kuula.co/share/collection/71mp3?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1&inst=es" />
    </div>
</main>
);
}
