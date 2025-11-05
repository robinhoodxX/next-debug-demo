// app/fixed/page.js
import Counter from "../../components/Counter";
import ApiData from "../../components/ApiData";

export default function FixedPage() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Fixed Examples</h1>
      <Counter />
      <ApiData />
    </main>
  );
}
