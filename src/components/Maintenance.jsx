export default function Maintenance() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0b0618] px-6 text-center text-[#e8e6f5]">
      <p className="mb-4 font-mono text-sm tracking-[0.3em] text-[#2ec4f1]">SYSTEM_UPGRADE</p>
      <h1 className="text-4xl font-bold tracking-wide md:text-5xl">Under maintenance</h1>
      <p className="mt-4 max-w-md text-[#9b95b8]">
        My portfolio is getting a new look. Back very soon!
      </p>
      <div className="mt-8 flex gap-6 text-sm">
        <a href="mailto:wissaloa1@gmail.com" className="underline hover:text-[#2ec4f1]">Email me</a>
        <a
          href="https://www.linkedin.com/in/wissalouboujemaa"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#2ec4f1]"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/wiissal"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#2ec4f1]"
        >
          GitHub
        </a>
      </div>
    </main>
  );
}