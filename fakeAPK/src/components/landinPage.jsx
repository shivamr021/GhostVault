import CyberBackground from "./backgroundLines";


export default function LandingPage() {
    return (
        <>
            <nav className="m-10 mb-5 flex">
                <div className="font-orbitron text-white text-3xl font-extrabold">GhostVault</div>
                <div className="ml-auto text-white"><button className="font-bold p-3 rounded-2xl border-2 border-cyan-400 shadow-[0_0_1px_#06b6d4,0_0_10px_#06b6d4,inset_0_0_8px_#06b6d4] hover:shadow-[0_0_5px_#06b6d4,0_0_15px_#06b6d4,inset_0_0_8px_#06b6d4]">Learn More</button></div>
            </nav>
            <div className="m-5 mt-0 relative flex">
                <div>
                    <div>
                        <CyberBackground />
                        <h1 className="text-white text-7xl font-bold m-20 mb-5 font-poppins tracking-widest [text-shadow:0_0_6px_rgba(255,255,255,0.4)]">
                            BANKING  APK  <br /> DETECTION
                        </h1>
                        <p className="text-white font-inter m-20 mt-0 mb-0 text-xl tracking-wider">Detect malicious banking apk's <br /> and protect <span className="text-cyan-400 [text-shadow:0_0_6px_rgba(255,255,255,0.4)]">yourself</span></p>
                    </div>
                    <div className="m-20 mt-10">
                        <div className="mb-10">
                            <button className="relative p-3 w-[220px] text-white font-bold tracking-wide border-2 border-cyan-400 rounded-2xl 
                            shadow-[0_0_8px_#06b6d4,0_0_10px_#06b6d4,inset_0_0_15px_#06b6d4] 
                            hover:shadow-[0_0_12px_#22d3ee,0_0_25px_#22d3ee,inset_0_0_12px_#22d3ee] 
                            transition duration-300">
                                DETECT NOW
                            </button>
                        </div>
                        <div>
                            <button className="p-3 w-[220px] text-white font-bold tracking-wide rounded-2xl 
                            border-2 border-[#1b689b] bg-black 
                            hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.6)] 
                            transition duration-300">
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-20 w-[500px] animate-pulse">
                    <img src="/landingImage.png" alt="img" /></div>
            </div>
        </>
    )
}