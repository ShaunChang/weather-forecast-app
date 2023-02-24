import Today from "../components/Forecast/Today/Today";
import Week from "../components/Forecast/Week/Week";
import Root from "../layouts"

const routes = [
    {
        path: '/',
        element: <Root />,
        children: [
            {index: true, element: <Today/>},
            {path:'/week', element: <Week/>},
            {path:'*', element: <Today/>}
        ]
    }
]

export default routes;