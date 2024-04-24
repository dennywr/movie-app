import Header from "../components/Header/Header";
import Movies from "../components/Movies/Movies";

export default function Home() {
  return (
    <div className="container mx-auto h-screen px-20">
      <Header />
      <Movies />
    </div>
  );
}
