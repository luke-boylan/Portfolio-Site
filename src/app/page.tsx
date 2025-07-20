"use client"
import ProjectBox  from "./Components/ProjectBox/ProjectBox";

export default function Home() {

/*
export default function HTMLContent() {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, 100, { duration: 5 })
        return () => controls.stop()
    }, [])

    return <motion.pre style={text}>{rounded}</motion.pre>
}
*/
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="statusBlock absolute rounded-3xl p-8 absolute top-8 left-8">
          <div className= "bottom-4">
          <span className="font-bold">
            Dev status:
          </span>
          </div>
          <span>
            Hello 👋👷, I&apos;m currently building this website!!!
          </span>
        </div>

        <div className="grid">
            <h1 className="text-6xl">
              Luke Boylan
            </h1>
            <h3>
              4th year ICS student @ Trinity College Dublin
            </h3>
          </div>
          <div className="border rounded bg-sky-200/25 p-4">
            <span className="underline text-2xl font-bold">
              Projects
            </span>
            <span className=""> The good stuff...</span>
            <ProjectBox title="Genesys Student chatbot Timetable app" image="/GenesysProject.png" description ="A student timetable app with built in chatbot created for my Software Engineering Project. A collaboration with Genesys cloud." link="https://github.com/luke-boylan/Genesys-assistant-app"/>
            <ProjectBox title="Proxy Web Server" image="/WebProxy.png" description ="A Multithreaded HTTP/HTTPS web Proxy server built in C to handle client requests between a web browser and the requested origin server for my Advanced Computer Networks class." link="https://github.com/luke-boylan/proxy-web-server"/>
            <ProjectBox title="Munich Re Life Insurance platform" image="/MunichProject.png" description ="A Life Insurance Risk assessment Platform to evaluate risk factors for life insurance underwriters for my Software Engineering Project. A collaboration with Munich Re." link="https://github.com/luke-boylan/SwEngGroup30"/>
            <ProjectBox title="Morse Code Microcontroller Game" image="/MorseCode.png" description ="An interactive educational Morse Code game playable on the RP2040 microcontroller written in Arm Assembly and C for my Microprocessor Systems class." link="https://github.com/luke-boylan/Morse-Code-Microcontroller-Game"/>
            <ProjectBox title="StarGazer: see the stars" image="/StarGazer.png" description ="A website for viewing a map of the stars and the current Moon Phase based on the users inputted location and date/time." link="https://github.com/luke-boylan/StarGazer"/>
            <ProjectBox title="Secure Cloud Computing drive" image="/SecureComputing.png" description ="A Command Line Interface tool that lets the user create and add encrypted files to a cloud drive using the AES and RSA cryptographic methods along with an X.509 certificate for verification" link="https://github.com/luke-boylan/secure-cloud-storage"/>
          </div>
    </div>
  );
}
