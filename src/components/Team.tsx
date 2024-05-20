import React from "react";
import { StyleSheet, css } from "aphrodite";
// @ts-ignore
import PatrickImage from "../img/headshot.jpeg";
// @ts-ignore
import KirkImage from "../img/kirk.jpeg";
// @ts-ignore
import JefImage from "../img/jef.jpeg";

const members = [
	{
		name: "Patrick Sullivan",
		role: "Software Developer",
		image: PatrickImage,
	},
	{
		name: "Kirk Sullivan",
		role: "System Operations",
		image: KirkImage,
	},
	{
		name: "José Emilio Figueroa",
		role: "Artistic Director, Games Division",
		image: JefImage,
	},
];

export default function Team() {
	const generateTeamTsx = () => {
		return members.map((member, i) => {
			return (
				<div key={`member-${i}`} className={css(styles.memberWrap)}>
					<div className={css(styles.photo)}>
						<img
							className={css(styles.photo)}
							src={member.image}
							alt="member image"
						/>
					</div>
					<div className={css(styles.name)}> {member.name} </div>
					<div className={css(styles.name)}> {member.role} </div>
				</div>
			);
		});
	};
	const team = generateTeamTsx();
	return (
		<div className={css(styles.container)}>
			<div className={css(styles.header)}> Team </div>
			<div className={css(styles.teamWrapper)}>{team}</div>
		</div>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column" as any,
		padding: "50px",
		"@media (max-width: 940px)": {
			padding: 0,
		},
	},
	teamWrapper: {
		display: "flex",
		width: "80%",
		margin: "0 auto",
		justifyContent: "space-between",
		"@media (max-width: 940px)": {
			margin: 0,
			width: "100%",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
		},
	},
	header: {
		textAlign: "center" as any,
		width: "100%",
		fontFamily: "coral",
		marginBottom: 20,
	},
	memberWrap: {
		display: "flex",
		flexDirection: "column" as any,
		padding: 20,
	},
	photo: {
		height: "200px",
		width: "200px",
		borderRadius: "100px",
		backgroundColor: "black",
	},
	name: {
		textAlign: "center" as any,
		marginTop: 30,
	},
});
