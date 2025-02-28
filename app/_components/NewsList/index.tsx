import Image from "next/image";
import Link from "next/link";

import { News } from "@/app/_libs/microcms";
import Category from "../Category";
import Date from "../Date";
import styles from "./index.module.css";

type Props = {
    news: News[];
};

export default function NewsList({ news }: Props) {
    if (news.length === 0) {
        return <p>記事がありません</p>;
    }
    return (
        <ul>
            {news.map((article) => (
                <li key={article.id} className={styles.list}>
                    <Link href={`/news/${article.id}`} className={styles.link}>
                        {article.thumbnail ? (
                            <Image
                                className={styles.image}
                                src={article.thumbnail.url}
                                alt=""
                                width={article.thumbnail.width}
                                height={article.thumbnail.height}
                            />
                        ) : (
                            <Image
                                className={styles.image}
                                src="/no-image.png"
                                alt="No Image"
                                width={1200}
                                height={630}
                            />
                        )}
                        <dl className={styles.content}>
                            <dt className={styles.title}>{article.title}</dt>
                            <dd className={styles.meta}>
                                <Category category={article.category} />
                                <Date
                                    date={
                                        // 左がなけりゃ右を返す
                                        article.publishedAt ?? article.createdAt
                                    }
                                />
                            </dd>
                        </dl>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
