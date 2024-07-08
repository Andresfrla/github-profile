import SearchBar from "./components/_SearchBar/page";

export default function Home() {
  return (
    <main className="flex justify-center h-[240px] bg-[url('../../public/images/hero-image-github-profile.png')] bg-cover bg-center sm:bg-[150%] sm:bg-center">
      <SearchBar />
    </main>
  );
}
