import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../theme";
import { useTheme } from '@mui/material';
import { mockLineData as data } from "../data/mockData";


const LineChart = ({ isDashboard = false }) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <ResponsiveLine
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.grey[100]
                        }
                    },
                    legend: {
                        text: {
                            fill: colors.grey[100]
                        }
                    },
                    ticks: {
                        line: {
                            stroke: colors.grey[100],
                            strokeWidth: 1
                        },
                        text: {
                            fill: colors.grey[100]
                        }
                    }
                },
                legends: {
                    text: {
                        fill: colors.grey[100]
                    }
                },
                tooltip: {
                    container: {
                        color: colors.primary[500],
                    }
                }
            }}

            margin={{ top: 50, right: 155, bottom: 50, left: 60 }}
            yScale={{

                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false,
            }}
            curve="natural"
            axisBottom={{

                legend: isDashboard ? undefined : 'Mês',
                legendOffset: 36,
                legendPosition: 'middle',
                tickPadding: 5,
                tickRotation: 0,
            }}
            axisLeft={{

                legend: isDashboard ? undefined : 'Quantidade de vendas',
                legendOffset: -50,
                legendPosition: 'middle',
            }}
            enableGridX={false}
            colors={{ scheme: 'dark2' }}
            enablePoints={false}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'seriesColor', modifiers: [] }}
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
                {
                    tickValues: 5,
                    anchor: 'bottom-right',
                    direction: 'column',
                    translateX: 100,
                    itemWidth: 80,
                    itemHeight: 22,
                    symbolShape: 'circle'
                }
            ]}
        />
    )
}

export default LineChart;