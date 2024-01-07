import Card from "@/components/Card";

export default function Carousel() {
  return (
    <section className="flex flex-col justify-center min-w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310">
        <path
          fill="rgb(252 165 165)"
          fillOpacity="1"
          d="M0,224L1440,192L1440,320L0,320Z"
        ></path>
      </svg>
      <div className="flex flex-wrap justify-center gap-8 bg-red-300 min-h-min">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
        <path
          fill="rgb(252 165 165)"
          fillOpacity="1"
          d="M0,192L1440,96L1440,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
}
