import styles from "./index.module.css";

// コンポーネントにはpropsとして値を渡すことができる
type Props = {
    href: string;
    children: React.ReactNode; // 子要素を受け取る
};

// hrefプロパティと中の記述を受け取る
export default function ButtonLink({ href, children }: Props) {
    return (
        <a href={href} className={styles.button}>
            {children}
        </a>
    );
}
