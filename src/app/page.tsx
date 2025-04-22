import ProjectCard from '@/components/ProjectCard';
import { ArrowDown } from 'lucide-react'

export default function Home() {
  return (
    <>
      <video autoPlay muted loop id="bg-video">
        <source src="/animated_gradient_low.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div id="contet" className="mx-20">

        <header className="flex justify-between items-center p-4">
          <img src="/logo.svg" className="h-10" alt="" />
          <ul className="flex justify-between items-center gap-5">
            <li className="cursor-pointer">CV</li>
            <li className="cursor-pointer">PROJECTS</li>
          </ul>
        </header>
        <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
          <div className="text-right">
            <h1 className="text-[80px]/[1] font-bold -tracking-wider text-purple-200">
              TRANSFORMING IDEAS <br /> INTO REALITY
            </h1>
            <p className="text-sm mt-10 text-purple-200">I’M <span className="text-purple-500">DANISH</span>, A 22 YEAR OLD <span className="text-purple-500">FULL STACK DEVELOPER</span>,<br /> PASSIONATE ABOUT BUILDING SEAMLESS,
              EFFICIENT <br /> AND IMPACTFUL WEB APPLICATIONS. FROM CRAFTING <br /> CLEAN
              RESPONSIVE FRONTENDS TO ARCHITECTING <br /> ROBUST AND SCALABLE BACKENDS.</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-34 h-34 rounded-full bg-white/10 flex items-center justify-center">
            <ArrowDown className="text-purple-200" size={40} />
          </div>
        </div>
        <ProjectCard />
      </div>
    </>
  );
}
