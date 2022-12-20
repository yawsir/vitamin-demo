export interface OrganizationBase {
	id: string
	code: string
	name: string
	creationTime: string
}
export type Role = 'ADMIN' | 'CUSTOMER_SERVICE' | 'MANAGER' | 'NETWORK'

export interface UserCredentials {
	username: string
	password: string
}

// export interface User {}

export interface UserInfo {
	id: number
	username: string
	system: boolean
	roles: Role[]
}

export interface UserDetails {
	id: number
	username: string
	system: boolean
	roles: RoleDetails[]
	authorities: OrganizationBase[]
}

export interface UserRegistration {
	username: string
	password: string
}

export interface RoleDetails {
	id: number
	name: Role
	description: string
}

export interface RoleAssignment {
	userId: number
	roleId: number
}

export interface Privilege {
	id: number
	targetId: string
	targetType: string
	permission: string
}

export interface PrivilegeRegistration {
	userId: number
	targetId: string
	targetType: string
	permission: string
}

export const UserRoleKey = 'user-roles'

export interface AuthorityGrant {
	username: string
	authorities: string[]
}

export interface AuthorityRevoke {
	username: string
	authority: Role
}

export const UserAuthorityKey = 'user-authorities'

export type PermissionRoutes = Record<
	string,
	{
		allowed: Role[]
	}
>
