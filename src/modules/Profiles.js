const Profile = ({ user, height }) => {    
    return (
        <div className='profile' style={{height: height + 'vh'}}>
            <h3>{user.id}</h3>
            <br/>
            <h3>Name: <span style={{color: 'darkgreen'}}>{user.name}</span></h3>
            <br/>
            <h3>City: <span style={{color: 'firebrick'}}>{user.address.city}</span></h3>
            <br/>
            <h3>Website: <a href={user.website}>{user.website}</a></h3>
        </div>
    )
}

export default Profile;