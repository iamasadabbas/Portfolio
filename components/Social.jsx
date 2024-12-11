import { FaGithub, FaLinkedin, FaInstagram, FaFacebook} from "react-icons/fa"
import Link from 'next/link'

const socials=[
    {icon:<FaGithub/>,  path:"https://github.com/iamasadabbas"},
    {icon:<FaLinkedin/>, path:"https://www.linkedin.com/in/iamasadabbas/"},
    {icon:<FaInstagram/>, path:"https://www.instagram.com/i_am_asadabbas/?hl=en"},
    {icon:<FaFacebook/>, path:"https://www.facebook.com/profile.php?id=100078949852219"}
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return(
                <Link key={index} href={item.path} target="_blank" className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
      
    </div>
  )
}

export default Social
