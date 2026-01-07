import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-16 px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                <Image className="max-w-md w-full object-cover rounded-2xl"
                    src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
                    alt="Solar energy team" width={451} height={451} />
            </div>
            <div className="text-sm text-slate-600 max-w-lg">
                <h1 className="text-xl uppercase font-semibold text-slate-700">About Us</h1>
                <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
                <p className="mt-8">We are dedicated to providing sustainable solar energy solutions that power a greener future.</p>
                <p className="mt-4">From residential installations to commercial projects, our expert team delivers high-quality solar panels and systems tailored to your needs.</p>
                <p className="mt-4">Embrace clean energy with our comprehensive services, from consultation to maintenance, ensuring optimal performance and long-term savings.</p>
            </div>
        </section>
    );
};