 
export default function DashboardLayout({ children }) {
  return (
    <section className="m-5">
      <nav></nav>
      {/* <h1 className="text-2xl font-bold text-black dark:text-white">
        Dashboard Layout Header
      </h1> */}
      {children}
      {/* <h1 className="text-2xl font-bold text-black dark:text-white">
        Dashboard Layout Footer
      </h1> */}
    </section>
  );
}
