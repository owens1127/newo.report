import Tab from "./Tab";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-8 lg:p-24">
      <header className="py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">
            Welcome to <span className="text-blue-400">newo.report</span>
          </h1>
          <p className="mt-2 text-xl text-white">Explore the Newo universe!</p>
        </div>
      </header>
      {/* <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-between font-mono text-sm lg:gap-3">
        <Tab title="RaidHub" url="https://alpha.raidhub.app/newo" />
        <Tab title="Twitch" url="https://twitch.tv/newox" />
      </div> */}
    </main>
  );
}
