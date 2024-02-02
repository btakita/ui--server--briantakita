import { blog__main_fragment_ } from '@btakita/ui--server--blog/main'
import { linkument_c_ } from '@btakita/ui--server--linkument/linkument'
import { type fragment_T, type relement_env_T } from 'relementjs'
import { section_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
export function briantakita_links__main_fragment_<env_T extends relement_env_T>({
	ctx
}:{
	ctx:request_ctx_T
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
