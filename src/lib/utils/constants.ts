export enum COMMANDS {
	EMPTY = '',
	WHOAMI = 'whoami',
	ACADEMICS = 'academics',
	WORK = 'work',
	OSS = 'oss',
	PROJECTS = 'projects',
	SOCIAL = 'social',
	CONTACT = 'contact',
	HELP = 'help',
	ROOT = '~'
}

export const valuesOfCommands: string[] = Object.values(COMMANDS)
