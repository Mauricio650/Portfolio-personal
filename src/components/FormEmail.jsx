export default function ContactFormEmail() {
    return (
      <section className="w-full flex justify-center items-center p-6">
        <form
          action="https://formsubmit.co/mauricioibanez650@gmail.com"
          method="POST"
          className="bg-black text-green-400 border-4 border-pink-500 p-6 w-full max-w-md rounded-lg shadow-[4px_4px_0px_#ff00ff]"
        >
          <h2 className="text-2xl mb-4 pixelify-sans-3 text-pink-400 text-center tracking-widest">
            ✉️ Email
          </h2>
  
          <label className="block mb-3 orbitron-1 text-sm">Nombre</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 mb-4 bg-black border-2 border-green-400 text-green-300 font-mono focus:outline-none focus:border-pink-500"
          />
  
          <label className="block mb-3 orbitron-1 text-sm">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 mb-4 bg-black border-2 border-green-400 text-green-300 font-mono focus:outline-none focus:border-pink-500"
          />
  
          <label className="block mb-3 orbitron-1 text-sm">Mensaje</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full p-2 mb-4 bg-black border-2 border-green-400 text-green-300 font-mono focus:outline-none focus:border-pink-500"
          ></textarea>
  
          <button
            type="submit"
            className="w-full bg-pink-500 text-black orbitron-1 font-bold py-2 border-4 border-green-400 shadow-[3px_3px_0px_#39ff14] hover:bg-green-400 hover:text-black transition-all"
          >
            Enviar
          </button>
        </form>
      </section>
    );
  }
  