import { FaWhatsapp, FaInstagram, FaFacebook  } from "react-icons/fa";

export default function SocialIcons() {
    return (
        <div className='flex gap-5 mt-8 pb-[2rem]'>
          <a target='_blank' href="https://wa.me/11962492213?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido"><FaWhatsapp className='texthover w-8 h-8'/></a>
          <a href='https://www.instagram.com/creative_art_brindes/' target='_blank'><FaInstagram className='texthover w-8 h-8'/></a>
          <a href='https://www.facebook.com/profile.php?id=61573583851355' target='_blank'><FaFacebook className='texthover w-8 h-8'/></a>
        </div>
    )
}