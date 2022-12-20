import { setToken } from '@/http/token'
import { login } from '@/services/auth'
import type { Credentials } from '@/typings/auth'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { LoginForm, ProFormText } from '@ant-design/pro-components'
import { notification, Tabs } from 'antd'
import { useState } from 'react'

type LoginType = 'account' | 'phone'
const handleFinsih = async (value: Credentials) =>
	login(value)
		.then(response => {
			const token = response?.data.token
			const previousUrl = sessionStorage.getItem('previous_url')
			if (token) {
				setToken(token)
				window.location.replace('/')
			}
			if (previousUrl) {
				window.location.replace(previousUrl)
				localStorage.removeItem('previous_url')
			}
		})
		.catch(() => {
			notification.error({
				message: '用户名或密码错误'
			})
		})
export default () => {
	const [loginType, setLoginType] = useState<LoginType>('account')
	return (
		<div style={{ background: '#fff', minHeight: '100vh' }}>
			<LoginForm
				logo='/logo.png'
				title='Horus'
				subTitle='网关控制台'
				onFinish={handleFinsih}
			>
				<Tabs
					activeKey={loginType}
					onChange={activeKey => setLoginType(activeKey as LoginType)}
					centered
					items={[
						{
							key: 'account',
							label: '账号密码登录'
						}
					]}
				/>
				{loginType === 'account' && (
					<>
						<ProFormText
							name='username'
							fieldProps={{
								size: 'large',
								prefix: <UserOutlined className='prefixIcon' />
							}}
							placeholder='用户名'
							rules={[
								{
									required: true,
									message: '请输入用户名!'
								}
							]}
						/>
						<ProFormText.Password
							name='password'
							fieldProps={{
								size: 'large',
								prefix: <LockOutlined className='prefixIcon' />
							}}
							placeholder='密码'
							rules={[
								{
									required: true,
									message: '请输入密码！'
								}
							]}
						/>
					</>
				)}
			</LoginForm>
		</div>
	)
}
