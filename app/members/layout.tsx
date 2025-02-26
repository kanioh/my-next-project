import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    {
        /* childrenの中にmembersのコードがまるっと入っている */
    }
    return (
        <>
            <Hero title="Members" sub="メンバー" />
            <Sheet>{children}</Sheet>;
        </>
    );
}
