import  { useEffect, useState } from 'react';
import { Table } from '@mantine/core';
import IndiaAgroDataset from '../data/IndiaAgroDataset.json';

interface CropStats {
  cropName: string;
  totalYield: number;
  totalArea: number;
  count: number;
}

const calculateAverageCropData = () => {
  const cropMap: { [key: string]: CropStats } = {};

  IndiaAgroDataset.forEach((entry: any) => {
    const cropName = entry["Crop Name"];
    const yieldValue = entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || 0;
    const areaValue = entry["Area Under Cultivation (UOM:Ha(Hectares))"] || 0;

    if (!cropMap[cropName]) {
      cropMap[cropName] = {
        cropName,
        totalYield: yieldValue,
        totalArea: areaValue,
        count: 1,
      };
    } else {
      cropMap[cropName].totalYield += yieldValue;
      cropMap[cropName].totalArea += areaValue;
      cropMap[cropName].count += 1;
    }
  });

  return Object.values(cropMap).map((crop) => ({
    cropName: crop.cropName,
    avgYield: (crop.totalYield / crop.count).toFixed(3),
    avgArea: (crop.totalArea / crop.count).toFixed(3),
  }));
};

export const CropAverageTable = () => {
  const [data, setData] = useState<{ cropName: string; avgYield: string; avgArea: string }[]>([]);

  useEffect(() => {
    setData(calculateAverageCropData());
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <h2>Crop Average Yield and Cultivation Area (1950-2020)</h2>
      <Table style={{
          borderCollapse: 'collapse',
          width: '80%',
        }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' , textAlign: 'center' }}>Crop Name</th>
            <th style={{ border: '1px solid black', padding: '8px' , textAlign: 'center' }}>Average Yield (Kg/Ha)</th>
            <th style={{ border: '1px solid black', padding: '8px' , textAlign: 'center' }}>Average Cultivation Area (Ha)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.cropName}>
              <td style={{ border: '1px solid black', padding: '8px' , textAlign: 'center' }}>{item.cropName}</td>
              <td style={{ border: '1px solid black', padding: '8px' , textAlign: 'center' }}>{item.avgYield}</td>
              <td style={{ border: '1px solid black', padding: '8px' , textAlign: 'center' }}>{item.avgArea}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};