import { StatsCard } from "./stats";
import { ButtonCopy } from "./button";

export default function SideInfo() {
	return (
		<div className="sideinfo">
			<StatsCard />
			<br />
			<ButtonCopy />
		</div>
	);
}
