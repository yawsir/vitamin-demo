export const errors: Record<string, number | string> = {
	// BAD_REQUEST: 400,
	ORG_ALREADY_EXIST: 10_003,
	GROUP_ALREADY_EXIST: 10_005,
	DELETE_GROUP_ERROR: 10_029,
	BEHAVIORENUM_NOT_FOUND: 10_030,
	ROLE_ALREADY_EXISTS: 1003,
	ROLE_ALREADY_USED: 1005,
	LABEL_CLASSIFICATION_IS_EXIST: 10_031,
	LABEL_CLASSIFICATION_IS_NOT_EXIST: 10_032,
	LABEL_CLASSIFICATION_CAN_NOT_DELETE: 10_033,
	CONTROL_NOT_FOUND: 10_034,
	LABEL_TYPE_NOT_FOUND: 10_035,
	PERSON_NOT_FOUND: 10_036,
	LABEL_IS_EXIST: 10_026,
	INVALID_CONFIGURATION: 9
}

const errorCode: Record<number | string, string> = {
	// [errors.BAD_REQUEST]: '错误请求',
	[errors.ORG_ALREADY_EXIST]: '学校已存在',
	[errors.GROUP_ALREADY_EXIST]: '用户组已存在',
	[errors.DELETE_GROUP_ERROR]: '该用户组无法删除',
	[errors.BEHAVIORENUM_NOT_FOUND]: '找不到违规行为',
	[errors.ROLE_ALREADY_EXISTS]: '角色已存在',
	[errors.ROLE_ALREADY_USED]: '角色正在使用，无法删除',
	[errors.LABEL_CLASSIFICATION_IS_EXIST]: '标签分类已存在',
	[errors.LABEL_CLASSIFICATION_IS_NOT_EXIST]: '标签分类不存在',
	[errors.LABEL_CLASSIFICATION_CAN_NOT_DELETE]:
		'操作失败，无法删除有标签的分类',
	[errors.CONTROL_NOT_FOUND]: '未找到管控记录',
	[errors.LABEL_TYPE_NOT_FOUND]: '未找到标签类型',
	[errors.PERSON_NOT_FOUND]: '未找到用户',
	[errors.LABEL_IS_EXIST]: '标签已存在',
	[errors.INVALID_CONFIGURATION]: '无效的配置'
}

const getErrorMessage = (code?: number | string, defaultMessage?: string) => {
	if (code && errorCode[code]) {
		return errorCode[code]
	}
	return defaultMessage
}
export default getErrorMessage
