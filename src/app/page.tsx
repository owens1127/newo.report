import Tab from "./Tab";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-8">
      <header className="py-6 lg:mb-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">
            Welcome to <span className="text-blue-400">newo.report</span>
          </h1>
        </div>
      </header>
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-between gap-2 font-mono text-sm lg:gap-3">
        <Tab
          title="RaidHub"
          url="https://alpha.raidhub.app/newo"
          icon="raidhub"
          color="orange"
        />
        <Tab
          title="Twitter"
          url="https://twitter.com/kneewoah"
          icon="twitter"
          color="#26a7de"
        />
        <Tab
          title="Twitch"
          url="https://twitch.tv/newox"
          icon="twitch"
          color="#7302c9"
        />
        <Tab
          title="YouTube"
          url="https://youtube.com/@Newo1"
          icon="youtube"
          color="red"
        />
        <Tab
          title="Discord"
          url="https://discord.gg/aXuN3qwDRK"
          icon="discord"
          color="#5865F2"
        />
        <Tab
          title="Dungeon Report"
          url="https://dungeon.report/pc/4611686018488107374"
          icon="raidreport"
          color="#03a9f4"
        />
        <Tab
          title="Raid Report"
          url="https://raid.report/pc/4611686018488107374"
          icon="raidreport"
          color="#4db6ac"
        />
      </div>
    </main>
  );
}
