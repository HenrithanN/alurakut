import ProfileRelationsBoxWrapper from '../../styledComponents/ProfileRelations';
import { useContext } from 'react';
import { CommonContext } from '../../context/CommonContext';

const ProfileBox = ({ title, items }) =>{
    const { selectedTheme } = useContext(CommonContext)

    return (
        <ProfileRelationsBoxWrapper theme={selectedTheme}>
            <h2 className="smallTitle">
                {title} ({items.length})
            </h2>
            <ul>
                {items.map((item) => 
                (
                    <li key={item?.id}>
                    <a href={`/users/${item?.login}`}>
                        <img src={item?.avatar_url} />
                        <span>{ item.login }</span>
                    </a>
                    </li>
                )
                )}
            </ul>
        </ProfileRelationsBoxWrapper>
      )
}
export default ProfileBox