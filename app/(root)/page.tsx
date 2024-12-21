import Hello from "../components/Hello";


export default function Home() {
  console.log("What am I doing here? -- SERVER.");
  return (
    <>
      <h1 className="text-3xl">welcome to nextJs</h1>
      <Hello/>
    </>
  );
}
