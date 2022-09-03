import { List, Text } from "@mantine/core";

interface FuckYouJS {
	locationName: string;
	shortTermValues: string[];
	longTermValues: string[];
}

export default function SideInfo(fword: FuckYouJS) {
	const shorts = fword.shortTermValues
		? fword.shortTermValues.map(value => <List.Item>{value}</List.Item>)
		: [];
	const longs = fword.longTermValues
		? fword.longTermValues.map(value => <List.Item>{value}</List.Item>)
		: [];

	return (
		<>
			<Text>{fword.locationName}</Text>
			<Text>Short Term</Text>
			<List withPadding children={shorts} />
			<Text>Long Term</Text>
			<List withPadding children={longs} />
		</>
	);
}
