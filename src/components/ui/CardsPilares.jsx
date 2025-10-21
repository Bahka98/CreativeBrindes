import { HiOutlineLightBulb } from 'react-icons/hi'
import { FiSmile } from 'react-icons/fi'
import { TbLeaf } from 'react-icons/tb'
import { MdDesignServices } from 'react-icons/md'
import { AiOutlineConsoleSql } from 'react-icons/ai'

export default function CardsPilares() {
    const iconStyle = "w-10 h-10"
    const cardsData = [
        {
            title: "Experiência do cliente em primeiro lugar",
            description: "Da navegação à entrega, pensamos em cada detalhe para que sua jornada seja leve, rápida e surpreendente.",
            icon: <FiSmile className={iconStyle} />
        },
        {
            title: "Inovação que funciona",
            description: "Estamos sempre testando novas ideias, ferramentas e tecnologias para oferecer o melhor em design, produção e entrega.",
            icon: <HiOutlineLightBulb className={iconStyle} />
        },
        {
            title: "Personalização de verdade",
            description: "Cada marca é única. Por isso, oferecemos soluções sob medida, com personalização criativa e alto padrão de qualidade.",
            icon: <MdDesignServices  className={iconStyle} />
        }
    ]
    return (
        <>
            <div className="cards grid grid-cols-1 md:grid-cols-3 mt-16">
                <div className="card border p-10 flex flex-col gap-4">
                    <div className="card_icon flex justify-center">{cardsData[0].icon}</div>
                    <div className="card_info">
                        <div className="card_title flex flex-col gap-2">
                            <h3 className='font-medium text-[clamp(1rem,4vw,1.3rem)] text-center'>{cardsData[0].title}</h3>
                            <p className='text-center'>{cardsData[0].description}</p>
                        </div>
                    </div>
                </div>
                <div className="card border p-10 flex flex-col gap-4">
                    <div className="card_icon flex justify-center">{cardsData[1].icon}</div>
                    <div className="card_info">
                        <div className="card_title flex flex-col gap-2">
                            <h3 className='font-medium text-[clamp(1rem,4vw,1.3rem)] text-center'>{cardsData[1].title}</h3>
                            <p className='text-center'>{cardsData[1].description}</p>
                        </div>
                    </div>
                </div>
                <div className="card border p-10 flex flex-col gap-4">
                    <div className="card_icon flex justify-center">{cardsData[2].icon}</div>
                    <div className="card_info">
                        <div className="card_title flex flex-col gap-2">
                            <h3 className='font-medium text-[clamp(1rem,4vw,1.3rem)] text-center'>{cardsData[2].title}</h3>
                            <p className='text-center'>{cardsData[2].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}