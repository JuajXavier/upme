import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

export default function Home() {
  return (
    <div className="container">
      <ExperienceBar />
      <section>
        <div>
          <Profile />
        </div>
        <div>

        </div>
      </section>
    </div>
  ) 
}


// obs:
// colocar a barra no final da tag sem conteúdo por ser jsx