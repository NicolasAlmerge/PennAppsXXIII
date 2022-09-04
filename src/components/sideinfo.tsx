import { List, Text } from "@mantine/core";
import { StatsCard } from './stats';
import { ButtonCopy } from './button';

interface InfoTuple {
	locationName: string;
	shortTermValues: string[];
	longTermValues: string[];
}

export function ListIcon() {
	return <img src="arrow.png" width="20px" alt="" />;
}

export default function SideInfo({
	locationName,
	shortTermValues,
	longTermValues,
}: InfoTuple) {
	const shorts = shortTermValues
		? shortTermValues.map(value => (
				<List.Item key={value}>{value}</List.Item>
		  ))
		: [];
	const longs = longTermValues
		? longTermValues.map(value => (
				<List.Item key={value}>{value}</List.Item>
		  ))
		: [];

	return (
		<div className="sideinfo">
			< StatsCard />
			<List icon={<ListIcon />} children={shorts} />
			<br />

			< ButtonCopy />
			< StatsCard />

			<List icon={<ListIcon />} children={shorts} />
			<br />

			< ButtonCopy />
			<List icon={<ListIcon />} children={longs} />
		</div>
	);
}
