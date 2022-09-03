import { List, Text } from "@mantine/core";

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
			<Text
				style={{
					fontSize: "28px",
				}}
			>
				{locationName}
			</Text>
			<hr />
			<Text
				style={{
					fontSize: "20px",
				}}
			>
				Short Term Actions
			</Text>
			<List icon={<ListIcon />} children={shorts} />
			<br />
			<Text
				style={{
					fontSize: "20px",
				}}
			>
				Long Term Actions
			</Text>
			<List icon={<ListIcon />} children={longs} />
		</div>
	);
}
