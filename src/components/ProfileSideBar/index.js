import { AlurakutProfileSidebarMenuDefault } from '../../libs/aluraKutCommons'
import Box from '../../styledComponents/Box'
import { useContext }  from 'react'
import { CommonContext }  from '../../context/CommonContext'

const ProfileSideBar = ({ githubUser }) =>{
    const { selectedTheme } = useContext(CommonContext)

    return (
        <Box theme={selectedTheme}>
        <img src={`https://github.com/${githubUser}.png`} alt="Foto de Perfil" style={{ borderRadius: "8px" }}/>
        <hr />
        <p>
          <a className="boxLink" href={`https://github.com/${githubUser}`}>
            @{githubUser}
          </a>
        </p>
        <hr />
        <AlurakutProfileSidebarMenuDefault />
      </Box>
    )
}
export default ProfileSideBar