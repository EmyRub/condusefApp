import { Outlet } from "react-router-dom";
import ParticlesBackground from "../components/particles/ParticlesBackground";

export default function BgLogin() {
    return (
        <main className="bg-[url('/bg1.jpg')] h-screen w-full flex justify-center items-center p-4 relative overflow-hidden">

            <div className="bg-teal-800 opacity-65 absolute w-full h-full">
                <ParticlesBackground />
                <ParticlesBackground />
                <ParticlesBackground />
                <ParticlesBackground />
                <ParticlesBackground />
                <ParticlesBackground />
                <ParticlesBackground />
                <ParticlesBackground />
                <ParticlesBackground />
                <ParticlesBackground />
            </div>

            <Outlet />

        </main>
    )
}
