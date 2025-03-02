"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import styles from "./index.module.css";

function SearchFieldComponent() {
    const router = useRouter();
    const searchparams = useSearchParams();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // submitイベントの動作をキャンセル（指定URLへフォーム送信しない、ただのページ遷移なので）
        e.preventDefault();
        // name="q"の要素を取得
        const q = e.currentTarget.elements.namedItem("q");
        if (q instanceof HTMLInputElement) {
            const params = new URLSearchParams();
            params.set("q", q.value.trim());
            router.push(`/news/search?${params.toString()}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.search}>
                <Image src="/search.svg" alt="検索" width={16} height={16} loading="eager" />
                <input
                    type="text"
                    name="q"
                    defaultValue={searchparams.get("q") ?? undefined}
                    placeholder="キーワードを入力"
                    className={styles.searchInput}
                />
            </label>
        </form>
    );
}

export default function SearchField() {
    return (
        <Suspense>
            <SearchFieldComponent />
        </Suspense>
    );
}
