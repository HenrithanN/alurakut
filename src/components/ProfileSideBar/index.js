import { AlurakutProfileSidebarMenuDefault } from '../../libs/aluraKutCommons'
import Box from '../../styledComponents/Box'

const ProfileSideBar = ({ githubUser }) =>{
    return (
        <Box>
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