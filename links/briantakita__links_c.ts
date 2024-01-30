import { type root_ctx_T } from '@btakita/domain--any--blog'
import { blog__main_fragment_ } from '@btakita/ui--server--blog/main'
import { linkument_c_ } from 'lib/ui--server--linkument/index.ts'
import { type fragment_T, type relement_env_T } from 'relementjs'
import { section_ } from 'relementjs/html'
export function briantakita__links_c_<env_T extends relement_env_T>({
	ctx
}:{
	ctx:root_ctx_T
}):fragment_T {
	return (
		blog__main_fragment_<env_T>({
			ctx,
			title: 'Links',
			class: 'briantakita__links_c',
		}, section_(
			linkument_c_))
	)
}
