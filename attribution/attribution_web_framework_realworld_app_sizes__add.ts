import { type root_ctx_T } from '@btakita/domain--any--blog'
import { tb_a_ } from '@btakita/ui--server--blog/anchor'
import { attribution__sup_ } from '@btakita/ui--server--blog/attribution'
import { type relement_env_T } from 'relementjs'
export function attribution_web_framework_realworld_app_sizes__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:root_ctx_T }
) {
	return (
		attribution__sup_<env_T>({
			ctx,
			footnote_id: '/assets/images/web-framework-realworld-app-sizes.png'
		}, [
			tb_a_({
				href: 'https://levelup.gitconnected.com/a-solid-realworld-demo-comparison-8c3363448fd8#255b'
			}, '© Ryan Carniato')
		]))
}
