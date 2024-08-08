import "./Profile.css";
import apiAxios from "../../api/axios";
import { useState, useEffect } from "react";

const Profile = () => {
	const [profile, setProfile] = useState(null);
	useEffect(() => {
		apiAxios("/auth/profile").then((response) => setProfile(response.data));
	}, []);
	console.log(profile);

	return (
		<div className="box">
			{profile && (
				<>
					<div className="img-block">
						<img src={profile.avatar} alt="avatar" width={90} height={90} />
					</div>
					<div className="content-block">
						<h1 className="profile__title">{profile.name}</h1>
						<p className="profile__text">{profile.role}</p>
						<p className="profile__text">{profile.email}</p>
					</div>
				</>
			)}
		</div>
	);
};

export default Profile;
