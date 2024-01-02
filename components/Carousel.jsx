import Card from "@/components/Card";

export default function Carousel() {
  return (
    <section className="flex flex-col justify-center min-w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
        <path
          fill="#3498db"
          fillOpacity="1"
          d="M0,160L60,160C120,160,240,160,360,149.3C480,139,600,117,720,133.3C840,149,960,203,1080,224C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="flex flex-wrap justify-center gap-8 background_blue min-h-min py-10">
        <Card
          key="card1"
          name="OLIVIA BENNETT"
          profession="Environmental Scientist"
          description="The quizzes here are not just informative but also entertaining. Learning has never been this enjoyable!"
          img="https://qph.cf2.quoracdn.net/main-qimg-f1f534fd992d4bbbd1b5c2bfb0b640a5-lq"
        />
        <Card
          key="card2"
          name="LUCAS RAMIREZ"
          profession="Software Developer"
          description="I've become addicted to the quizzes. It's the perfect way to unwind and learn something new simultaneously."
          img="https://bazawiedzy.upwr.edu.pl/docstore/download/UPWrdfeec2e322134532a5240e3d746b31c3/kazak---photo_optimized.jpg"
        />
        <Card
          key="card3"
          name="MAYA PATEL"
          profession="Graphic Designer"
          description="The intuitive design makes navigating through quizzes a breeze. Plus, the instant feedback keeps me motivated to improve."
          img="https://acsjournals.onlinelibrary.wiley.com/cms/asset/eb558050-1e4c-4b14-a41b-da0d4a6fd8f5/cncr34536-fig-0001-m.jpg"
        />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#3498db"
          fillOpacity="1"
          d="M0,96L60,112C120,128,240,160,360,160C480,160,600,128,720,128C840,128,960,160,1080,165.3C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
}
