import type { Role, UserInfo } from './user'

export interface LoginDetails {
	info: UserInfo
	token: string
}

export interface Credentials {
	username: string
	password: string
}

export interface PermissionValue {
	allowed: Role[]
	name: string
}

export type Permission = Record<string, PermissionValue>
