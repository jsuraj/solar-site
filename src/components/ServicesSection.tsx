import Image from "next/image";

export default function ServicesSection() {
    return (
        <section className="py-16 px-4 md:px-16 lg:px-24 xl:px-32">
            <h1 className="text-3xl font-semibold text-center mx-auto">Our Services</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">Everything you need to harness solar energy, efficiently and sustainably.</p>

            <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <Image className="rounded-xl" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-1.png" alt="" width={320} height={200} />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Solar Panel Installation</h3>
                    <p className="text-sm text-slate-600 mt-1">Professional installation of high-efficiency solar panels for your home or business.</p>
                </div>
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <Image className="rounded-xl" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-2.png" alt="" width={320} height={200} />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Maintenance Services</h3>
                    <p className="text-sm text-slate-600 mt-1">Regular maintenance and cleaning to ensure optimal performance of your solar system.</p>
                </div>
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <Image className="rounded-xl" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-3.png" alt="" width={320} height={200} />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Energy Consulting</h3>
                    <p className="text-sm text-slate-600 mt-1">Expert advice on energy efficiency and solar solutions tailored to your needs.</p>
                </div>
            </div>
        </section>
    );
};