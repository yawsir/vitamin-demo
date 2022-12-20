import callApi from '@/http/callApi'
import type { Credentials, LoginDetails, Permission } from '@/typings/auth'
import type { UserDetails } from '@/typings/user'

export const login = (parameters: Credentials) =>
	callApi<LoginDetails>({
		url: '/api/v1/login',
		method: 'post',
		withAuthorization: false,
		data: parameters
	})

export const me = () =>
	callApi<UserDetails>({
		url: '/api/v1/me',
		method: 'get'
	})

export const getPermissionList = () =>
	callApi<Permission>({
		url: '/permission.json'
	})
