import Image from "next/image";
import Horizontaline from "./Horizontaline";
function About(){
    return(
      <div>
        <Horizontaline>
          <h1 className="mx-2 tenali-ramakrishna-regular text-2xl text-center text-red-600">About Me</h1>
        </Horizontaline>
    <div className=" mt-14 flex flex-col gap-10 items-center justify-center mx-4 sm:flex-row ">
        <div className="justify-center p-5 sm:p-3 h-full max-w-[600px] mx-auto">
          <Image className="rounded-full w-3/4 md:rounded-lg lg:w-1/2 lg:h-1/2 mx-auto"src="/AboutPhoto.jpg" alt="profile Photo" width={700} height={700} />
        </div>
        <div className="flex justify-center items-center max-w-[700px] mx-auto p-5">
          <p className="text-wrap source-serif-4 text-lg text-white md:text-lg">I&apos;m a Computer science student with a deep enthusiasm for technology and hands-on experience in front-end development. I enjoy bringing creative designs to life on the web and exploring data to uncover insights. With a background in robotics and experience with Arduino, I’m always eager to learn new technologies and take on challenges that push my boundaries.</p>
        </div>
      </div>
    </div>
  );
}
export default About;