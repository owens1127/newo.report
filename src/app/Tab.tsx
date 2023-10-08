export default function Tab({ title, url }: { title: string; url: string }) {
  return (
    <a
      href={url}
      className="flex w-full content-center justify-center border-b border-t border-neutral-800  bg-zinc-800/30 bg-gradient-to-b from-inherit pb-6 pt-8 backdrop-blur-2xl lg:static  lg:w-1/2 lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
    >
      <div className="h-10 w-1 flex-1 border-r border-white">{""}</div>
      <span className="flex-1">{title}</span>
    </a>
  );
}
