export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="flex flex-col justify-between text-center text-gray-400 p-10">
      <div className="divider px-24"></div>
      <p>Made with 🧠 by Silisteanu Darian © {date}</p>
    </footer>
  );
}
