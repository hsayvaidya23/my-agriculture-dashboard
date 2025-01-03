export interface CropData {
    year: number;
    crop: string;
    production: number;
    yield: number;
}

export interface TableRow {
    year: number;
    maxCrop: string;
    minCrop: string;
}

export interface ChartData {
    crop: string;
    avgYield: number;
}

export const aggregateData = (data: CropData[]) => {
    // Handle missing values by replacing them with 0
    const sanitizedData = data.map((item) => ({
        ...item,
        production: item.production ?? 0,
        yield: item.yield ?? 0,
    }));

    // Group data by year
    const years = Array.from(new Set(sanitizedData.map((item) => item.year)));
    const crops = Array.from(new Set(sanitizedData.map((item) => item.crop)));

    // Table data: Crop with max and min production for each year
    const tableData: TableRow[] = years.map((year) => {
        const cropsInYear = sanitizedData.filter((item) => item.year === year);
        const maxCrop = cropsInYear.reduce((max, crop) =>
            crop.production > max.production ? crop : max
        );
        const minCrop = cropsInYear.reduce((min, crop) =>
            crop.production < min.production ? crop : min
        );
        return {
            year,
            maxCrop: maxCrop.crop,
            minCrop: minCrop.crop,
        };
    });

    // Chart data: Average yield of each crop
    const chartData: ChartData[] = crops.map((crop) => {
        const cropsData = sanitizedData.filter((item) => item.crop === crop);
        const totalYield = cropsData.reduce((sum, item) => sum + item.yield, 0);
        const avgYield = totalYield / cropsData.length || 0;
        return {
            crop,
            avgYield: parseFloat(avgYield.toFixed(2)), // Round to 2 decimal places
        };
    });

    return { tableData, chartData };
};
