import { blog__main_c_ } from '@btakita/ui--server--blog'
import { linkument_c_ } from '@btakita/ui--server--linkument'
import { type Ctx } from 'ctx-core/object'
import { type relement_env_T } from 'relementjs'
import { section_ } from 'relementjs/html'
export function briantakita__links_c_<env_T extends relement_env_T>({ ctx }:{
	ctx:Ctx
}) {
	return (
		blog__main_c_<env_T>({
			ctx,
			title: 'Links',
			class: 'briantakita__links_c',
		}, section_(
			linkument_c_))
	)
}
