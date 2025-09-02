import { useId } from "react";
import { useState } from "react";

export default function ContactFormWhatsApp() {
  const messageWID = useId()
  const [message, setMessage] = useState("");

  const sendWhatsApp = () => {
    const phone = "3246674862"; // 👉 tu número con código país
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="w-full flex justify-center items-center p-6">
      <div className="bg-black text-green-400 border-4 border-yellow-400 p-6 w-full max-w-md rounded-lg shadow-[4px_4px_0px_#ffcc00]">
        <h2 className="text-2xl mb-4 pixelify-sans-3 text-yellow-400 text-center tracking-widest">
          📟 WhatsApp
        </h2>

        <label htmlFor={messageWID} className="block mb-3 orbitron-1 text-sm">Mensaje</label>
        <textarea
          id={messageWID}
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 mb-4 bg-black border-2 border-yellow-400 text-yellow-200 font-mono focus:outline-none focus:border-pink-500"
        ></textarea>

        <button
          onClick={sendWhatsApp}
          className="orbitron-1 w-full font-bold bg-yellow-400 text-black  py-2 border-4 border-pink-500 shadow-[3px_3px_0px_#ff00ff] hover:bg-pink-500 hover:text-black transition-all"
        >
          Enviar
        </button>
      </div>
    </section>
  );
}
