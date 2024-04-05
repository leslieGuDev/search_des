import SearchingBar from "./(components)/SearchingBar";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col p-24 max-w-screen-2xl m-auto'>
      <div className='text-4xl text-left'>Flights + Stay</div>
      <SearchingBar />
    </main>
  );
}
