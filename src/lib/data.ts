export const getCustomers = async () => {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 4 * 2000))

  const data = [
    {
      name: 'Page A',
      uv: 4000 * Math.random(),
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000 * Math.random(),
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000 * Math.random(),
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780 * Math.random(),
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890 * Math.random(),
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390 * Math.random(),
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 1890 * Math.random(),
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page H',
      uv: 2390 * Math.random(),
      pv: 3800,
      amt: 2500,
    },
  ]

  return data
}
