import menu from '@/config/routes'
import { PoweroffOutlined } from '@ant-design/icons'
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components'
import { Avatar, Dropdown, Space } from 'antd'
import type React from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LayoutProperties {
	children?: React.ReactNode
}

const blankPagePath = new Set(['/login'])

export const Layout: React.FC<LayoutProperties> = ({ children }) => {
	const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1')
	const location = useLocation()
	if (blankPagePath.has(location.pathname)) {
		return (
			<div
				id='test-pro-layout'
				style={{
					height: '100vh'
				}}
			>
				{children}
			</div>
		)
	}
	return (
		<div
			id='test-pro-layout'
			style={{
				height: '100vh'
			}}
		>
			<ProLayout
				siderWidth={216}
				layout='mix'
				{...menu}
				fixSiderbar
				location={{
					pathname
				}}
				actionsRender={properties => {
					if (properties.isMobile) return []
					return [
						<Dropdown
							key='avatar'
							menu={{
								items: [
									{
										label: '退出登录',
										onClick: () => {},
										key: 'logout',
										icon: <PoweroffOutlined />
									}
								]
							}}
						>
							<Space>
								<Avatar
									src='https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg'
									size='small'
								/>
								<span>username</span>
							</Space>
						</Dropdown>
					]
				}}
				menuItemRender={(item, dom) => (
					<Link
						to={item.path ?? '/'}
						onClick={() => {
							setPathname(item.path ?? '/welcome')
						}}
					>
						{dom}
					</Link>
				)}
				{...menu}
			>
				<PageContainer>
					<ProCard
						style={{
							height: '100vh',
							minHeight: 800
						}}
					>
						{children}
					</ProCard>
				</PageContainer>
			</ProLayout>
		</div>
	)
}

Layout.defaultProps = {
	children: undefined
}

export default Layout
