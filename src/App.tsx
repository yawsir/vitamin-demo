import LoadingOrError from 'components/LoadingOrError'
import Layout from 'layouts'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const DemoPage = lazy(async () => import('pages/demo'))
const LoginPage = lazy(async () => import('pages/login'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Layout>
					<Routes>
						<Route path='/' element={<DemoPage />} />
						<Route path='/welcome' element={<div>welcome</div>} />
						<Route path='/login' element={<LoginPage />} />
					</Routes>
				</Layout>
				{/* <Routes>
				</Routes> */}
			</Suspense>
		</BrowserRouter>
	)
}
