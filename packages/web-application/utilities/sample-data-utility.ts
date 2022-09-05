export type SampleDataElementType = {
  id: string;
  date: string;
  operatorNumber: string;
  itemNumber: string;
  targetPartsPerHour: string;
};

export const sampleData: SampleDataElementType[] = [
  {
    id: "1",
    date: "01-01-2020",
    operatorNumber: "1111",
    itemNumber: "1111",
    targetPartsPerHour: "10.00",
  },
  {
    id: "2",
    date: "01-02-2020",
    operatorNumber: "2222",
    itemNumber: "2222",
    targetPartsPerHour: "10.00",
  },
  {
    id: "3",
    date: "01-03-2020",
    operatorNumber: "3333",
    itemNumber: "3333",
    targetPartsPerHour: "10.00",
  },
];

export const getSampleData = () => {
  const sampleData: SampleDataElementType[] = [
    {
      id: "0",
      date: "01-01-2020",
      operatorNumber: "111111",
      itemNumber: "111111",
      targetPartsPerHour: "10.00",
    },
  ];

  return sampleData;
};
