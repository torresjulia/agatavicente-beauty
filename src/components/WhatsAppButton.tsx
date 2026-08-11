const WA_NUMBER = '5511999999999'
const WA_MESSAGE = 'Olá! Vim pelo site e gostaria de agendar um horário!'

export default function WhatsAppButton() {
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      style={{ backgroundColor: '#25D366' }}
    >
      {/* WhatsApp SVG inline */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16.003 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.617 4.56 1.693 6.48L2.667 29.333l6.987-1.667A13.27 13.27 0 0016.003 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.003 2.667zm0 2.4c5.96 0 10.8 4.84 10.8 10.8s-4.84 10.8-10.8 10.8a10.77 10.77 0 01-5.493-1.507l-.387-.24-4.147.987.987-4.027-.267-.4A10.77 10.77 0 015.203 16c0-5.96 4.84-10.933 10.8-10.933zm-3.04 5.493c-.24 0-.627.093-.96.453-.32.36-1.227 1.2-1.227 2.933s1.253 3.4 1.427 3.64c.173.24 2.427 3.867 5.973 5.28 2.96 1.187 3.547.96 4.187.907.64-.053 2.08-.853 2.373-1.68.293-.827.293-1.533.2-1.68-.093-.147-.333-.24-.693-.427s-2.16-1.067-2.493-1.187c-.333-.12-.573-.187-.813.187-.24.373-.92 1.187-1.133 1.427-.213.24-.427.267-.787.093-.36-.173-1.52-.56-2.893-1.787-1.067-.96-1.787-2.147-2-2.507-.213-.36-.023-.56.16-.747.16-.16.36-.427.547-.64.187-.213.24-.36.36-.6.12-.24.053-.453-.027-.64-.08-.187-.8-1.987-1.107-2.72-.293-.72-.6-.613-.813-.627-.213-.013-.453-.013-.693-.013z" />
      </svg>
    </a>
  )
}
