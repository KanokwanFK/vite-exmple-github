import styles from "./TourismHome.module.css"

function TourismHome () {
    return(
        <div className={styles.body}>
            <div className="font-sans text-gray-800">
            {/* Header */}
           
            <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <h1 className="text-xl font-bold text-green-700">เที่ยวไทย</h1>
                <nav className={styles.img}>
                    <a href="#home" className="hover:text-green-600">หน้าแรก</a>
                    <a href="#attractions" className="hover:text-green-600">สถานที่ท่องเที่ยว</a>
                    <a href="#map" className="hover:text-green-600">แผนที่</a>
                    <a href="#contact" className="hover:text-green-600">ติดต่อเรา</a>
                </nav>
                </div>
            </header>
            
            {/* Hero Section */}
            <section
                id="home"
                className="bg-[url('https://i.pinimg.com/736x/81/e3/79/81e3790214583b8a0015f0bc1a625a7f.jpg')] bg-cover bg-center h-[70vh] flex items-center justify-center text-white"
            >
                <div className="bg-black bg-opacity-50 p-6 rounded-xl">
                <h2 className="text-4xl font-bold mb-4">สัมผัสธรรมชาติและวัฒนธรรมท้องถิ่น</h2>
                <p className="text-lg">เที่ยวสนุก สบายใจ ในแบบไทย ๆ</p>
                </div>
            </section>

            {/* Attractions */}
            <section id="attractions" className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-2xl font-semibold mb-6 text-green-800">สถานที่ท่องเที่ยวยอดนิยม</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {["อุทยานแห่งชาติ", "หมู่บ้านวัฒนธรรม", "ตลาดน้ำ"].map((name, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                        <img
                        src={`https://i.pinimg.com/736x/12/fe/0f/12fe0f8ef99ac642ad7522b56a747724.jpg`}
                        alt={name}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h4 className="font-semibold text-lg">{name}</h4>
                        <p className="text-sm text-gray-600 mt-2">สถานที่น่าสนใจ เหมาะกับทุกวัย</p>
                    </div>
                    ))}
                </div>
                </div>
            </section>

            {/* Map */}
            <section id="map" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-2xl font-semibold mb-4 text-green-800">แผนที่การเดินทาง</h3>
                <div className="w-full h-96 border rounded-xl overflow-hidden">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18..."
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title="map"
                    />
                </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-16 bg-gray-100">
                <div className="max-w-xl mx-auto text-center">
                <h3 className="text-2xl font-semibold mb-4 text-green-800">ติดต่อสอบถาม</h3>
                <form className="space-y-4">
                    <input type="text" placeholder="ชื่อของคุณ" className="w-full p-3 border rounded" />
                    <input type="email" placeholder="อีเมล" className="w-full p-3 border rounded" />
                    <textarea placeholder="ข้อความ" className="w-full p-3 border rounded h-32" />
                    <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">ส่งข้อความ</button>
                </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-green-800 text-white py-6 text-center">
                © 2025 เที่ยวไทย | จัดทำเพื่อส่งเสริมการท่องเที่ยวชุมชน
            </footer>
            </div>
        </div>
    )
}

export default TourismHome