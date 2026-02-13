import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, LinearScale, BarElement } from 'chart.js'

ChartJS.register(LinearScale, BarElement)

// const arrVendasMensais = [
//     {
//         _id: "698f290933975ff15ef4fec0",
//         mes: 5,
//         valorVendido: 200
//     },
//     {
//         _id: "698f29b5212bd7b1e279656b",
//         mes: 2,
//         valorVendido: 1200
//     }
// ]




const BarChart = () => {
    const [arrVendasMensais, setArrVendasMensais] = useState([]);
    useEffect(() => {
        const pegarInfosAPI = async () => {

            try {
                const respostaFetch = await fetch('https://chartjs-salesgraph.onrender.com');
                const jsonRespostaFetch = await respostaFetch.json();
                setArrVendasMensais(jsonRespostaFetch);

            } catch (error) {
                console.error('Deu erro', error);
            }
        }
        pegarInfosAPI();
    }, [])

    const data = {
        datasets: [
            {
                label: "Vendas Mensais",
                data: arrVendasMensais,
                backgroundColor: "rgba(75, 192, 192, .6)",
                parsing: {
                    xAxisKey: "mes",
                    yAxisKey: "valorVendido",
                },
            },
        ],
    };

    const chartOptions = {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                ticks: {
                    stepSize: 1
                }
            },
            y: {
                beginAtZero: true
            }
        }
    }
    return (
        <Bar data={data} options={chartOptions} />
    )
}

export default BarChart