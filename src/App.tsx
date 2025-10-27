import "./App.css";

function App() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <section className="w-full flex flex-col items-center justify-center py-20">
        <img
          src="/founder.jpeg"
          alt="Founder - Imran Ahmad"
          className="w-64 h-64 object-cover rounded-2xl border border-gray-600 shadow-xl mb-6"
        />
        <h1 className="text-4xl font-bold">MindVibe Works</h1>
        <p className="text-blue-400 mt-1">Founder & Creative Director</p>
        <p className="text-gray-300 mt-4 text-center max-w-xl">
          AI tools that make creators profitable — Urdu & English support.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="https://wa.me/923081725317"
            className="bg-green-500 px-5 py-3 rounded-lg text-black font-bold hover:bg-green-600"
          >
            WhatsApp Us Now!
          </a>

          <a
            href="#"
            className="bg-blue-600 px-5 py-3 rounded-lg text-white font-semibold hover:bg-blue-700"
          >
            Launch App (Soon)
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
