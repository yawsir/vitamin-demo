/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { MenuRoute } from '@/config/routes'
import { routes } from '@/config/routes'
import LoadingOrError from 'components/LoadingOrError'
import Layout from 'layouts'
import type { ReactElement } from 'react'
import { Suspense } from 'react'
import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'

function generateRouteConfig(menuRoutes: MenuRoute[]): RouteObject[] {
	const result: RouteObject[] = []
	for (const menuRouteItem of menuRoutes) {
		const routeObjectItem: RouteObject = {}
		routeObjectItem.path = menuRouteItem.path
		const Element = menuRouteItem.component
		routeObjectItem.element = (
			<Suspense fallback={<LoadingOrError />}>
				<Element />
			</Suspense>
		)
		if (menuRouteItem.routes) {
			routeObjectItem.children = generateRouteConfig(menuRouteItem.routes)
		}
		result.push(routeObjectItem)
	}
	return result
}

export default function App(): ReactElement {
	const configs = generateRouteConfig(routes)
	const element = useRoutes(configs)
	return <Layout>{element}</Layout>
}
