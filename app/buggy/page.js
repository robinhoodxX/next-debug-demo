// app/buggy/page.js
import Counter from "../../components/Counter";
import ApiData from "../../components/ApiData";

export default function BuggyPage() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Buggy Examples</h1>
      <Counter />
      <ApiData />
    </main>
  );
}
