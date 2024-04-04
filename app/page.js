import SearchingBar from "./(components)/SearchingBar";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col  p-24'>
      <div className='text-4xl text-left'>Flights + Stay</div>
      <SearchingBar />
    </main>
  );
}
