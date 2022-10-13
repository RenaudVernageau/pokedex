import Pokemon from "./Pokemon";

export default function Specs({ spe = []}) {
    if(spe.lenght === 0){
        return "Pas de spécification pour ce pokémon"
    }
    return (
        <ul>{spe.map((s,index) => {
            <Pokemon
                key={"item"+index}
                xp={s.base_experience}
                // img={s.}
                // stat={s.}
                // type={s.}
            />
        })}

        </ul>
    )
}