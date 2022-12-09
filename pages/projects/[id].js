import { useRouter } from "next/router";
import Header from "../../components/Header";

export default function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query.id);

  return (
    <div>
      <Header />
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}
