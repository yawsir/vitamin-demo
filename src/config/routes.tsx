import { CrownFilled, SmileFilled } from '@ant-design/icons'
import type { ProLayoutProps } from '@ant-design/pro-components'
import { lazy } from 'react'

export interface MenuRoute {
	path: string
	name: string
	icon?: React.ReactNode | string
	component: React.LazyExoticComponent<React.FC>
	hideInMenu?: boolean
	routes?: MenuRoute[]
}

export const routes: MenuRoute[] = [
	{
		path: '/dashboard',
		name: '仪表盘',
		icon: <SmileFilled />,
		component: lazy(() => import('@/pages/dashboard'))
	},
	{
		path: '/admin',
		name: '管理页',
		icon: <CrownFilled />,
		component: lazy(() => import('@/pages/admin')),
		routes: [
			{
				path: '/admin/sub-page1',
				name: '一级页面',
				icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
				component: lazy(() => import('@/pages/admin/sub-page1'))
			},
			{
				path: '/admin/sub-page2',
				name: '二级页面',
				icon: <CrownFilled />,
				component: lazy(() => import('@/pages/admin/sub-page2'))
			}
		]
	},
	{
		path: '/login',
		name: '登录',
		hideInMenu: true,
		component: lazy(() => import('@/pages/login'))
	}
]

const menuConfig: ProLayoutProps['route'] = {
	route: {
		path: '/',
		routes: [
			{
				path: '/dashboard',
				name: '仪表盘',
				icon: <SmileFilled />,
				component: '@/pages/dashboard'
			},
			{
				path: '/admin',
				name: '管理页',
				icon: <CrownFilled />,
				component: './Admin',
				routes: [
					{
						path: '/admin/sub-page1',
						name: '一级页面',
						icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
						component: '@/pages/admin/sub-page1'
					},
					{
						path: '/admin/sub-page2',
						name: '二级页面',
						icon: <CrownFilled />,
						component: '@/pages/admin/sub-page1'
					}
				]
			}
		]
	}
}

export default menuConfig
