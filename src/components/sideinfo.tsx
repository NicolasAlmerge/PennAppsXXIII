import { List, Text } from "@mantine/core";

interface InfoTuple {
	locationName: string;
	shortTermValues: string[];
	longTermValues: string[];
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
		<>
			<Text>{locationName}</Text>
			<Text>Short Term</Text>
			<List withPadding children={shorts} />
			<Text>Long Term</Text>
			<List withPadding children={longs} />
		</>
	);
}
