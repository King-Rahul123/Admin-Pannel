export default function Header({ setIsOpen }) {
    return (
        <header className="h-16 bg-white shadow-md px-6 flex items-center justify-between">
            
            <div className="md:hidden flex items-center justify-between">
                <button onClick={() => setIsOpen(true)}>
                    <i className="fas fa-bars text-xl"></i>
                </button>
            </div>

            <h1 className="text-xl font-semibold text-gray-700">Dashboard</h1>

            <div className="flex items-center gap-4">
                <button className="transition-all duration-200 text-xl">
                    <i className="fas fa-bell text-gray-500 hover:text-black"></i>
                </button>
                <button className="transition-all duration-200 text-2xl bg-gray-200 rounded-full p-1">
                    <i className="fas fa-user-tie"></i>
                </button>
                <div className="md:block hidden text-center">
                    <p className="text-black font-bold">Rahul Kumar Adak</p>
                    <p className="text-gray-500">adakrahul123@gmail.com</p>
                </div>
            </div>
        </header>
    );
}