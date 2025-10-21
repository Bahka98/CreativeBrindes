import { useEffect } from "react";
import { gsap } from "gsap";
import SplitTextJS from "split-text-js";

export default function HomeLettering() {
    useEffect(() => {
        const titles = gsap.utils.toArray(".letterAnimation");
        const tl = gsap.timeline({
            repeat: -1,
        });

        titles.forEach((title) => {
            const splitTitle = new SplitTextJS(title);

            tl.from(splitTitle.chars, {
                opacity: 0,
                duration: 1,
                y: 50,
                rotateX: -90
            }, "<");

            tl.to(splitTitle.chars, {
                opacity: 0,
                duration: 1,
                y: -50,
                rotateX: 90
            }, "<3");
        });
    }, []);

    return (
        <section className="py-24" style={{ backgroundColor: '#ebebeb' }}>
            <div className="letter-container">
                <div className="wrapper">
                    <p className="letterAnimation">Encante, surpreenda e fidelize com estilo</p>
                    <p className="letterAnimation">A sua marca na mente — e no coração.</p>
                    <p className="letterAnimation">Ideias que viram brindes. Brindes que viram impacto</p>
                    <p className="letterAnimation">Cada brinde, um toque de cuidado.</p>
                    <p className="letterAnimation">Seu próximo brinde de sucesso começa aqui.</p>
                </div>
            </div>
        </section>
    );
}
