import { linkument_c_ } from '@btakita/ui--server--linkument/linkument'
import { blog__main_fragment_ } from '@rappstack/ui--server--blog/main'
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
			h1_text: 'Links',
			class: 'briantakita_links__main_fragment',
		}, section_(
			linkument_c_))
	)
}
