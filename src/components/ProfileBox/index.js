import ProfileRelationsBoxWrapper from '../../styledComponents/ProfileRelations';

const ProfileBox = ({ title, items }) =>{
    return (
        <ProfileRelationsBoxWrapper>
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