import { useTheme } from "@mui/material/styles";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { dadosGrafico } from "../data/dadosGrafico";

const BarChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveBar

            data={dadosGrafico}
            keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
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
                }
            }}
            indexBy="country"
            groupMode="grouped"
            labelSkipWidth={12}
            labelSkipHeight={12}
            colors={{ scheme: 'yellow_green_blue' }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    translateX: 120,
                    itemsSpacing: 3,
                    itemWidth: 100,
                    itemHeight: 16
                }
            ]}
            axisBottom={{ legend: isDashboard ? undefined : 'Pais', legendOffset: 32 }}
            axisLeft={{ legend: isDashboard ? undefined : 'Comida', legendOffset: -40 }}
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        />
    )

}

export default BarChart;

